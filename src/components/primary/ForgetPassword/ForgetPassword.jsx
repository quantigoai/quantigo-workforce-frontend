import {Box, Button, FilledInput, FormControl, Grid, InputLabel, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import {forgetPasswordSlice} from "../../../features/slice/userSlice";
import {LoadingButtonStyle} from "../Auth/Login/Login";
import HeaderNav from "../HomePage/HeaderNav";

const ButtonStyle = styled(Button)({
  backgroundColor: "#2D58FF",
  height: "40px",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const ForgetPasswordBox = styled(Box)({
  display: "flex",
  color: "neutral.980",
  width: "520px",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(8px)",
  borderRadius: "36px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});
const ForgetPassword = () => {
  const { isLoading } = useSelector((state) => state.user);
  const [varificationMessage, setVarificationMessage] = useState("notset");

  const toast = useToaster();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(forgetPasswordSlice(data)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        setVarificationMessage("set");
        toast.trigger("Link sent to email", "success");
      }
    });
  };

  return (
    <>
      <Box className="container2">
        <Box sx={{ height: "10%" }}>
          <HeaderNav isForgetPassword={true} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            pb: "10%",
            height: "90%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ForgetPasswordBox>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container sx={{ padding: "10%" }}>
                  <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
                    <Typography
                      style={{
                        color: "#FFFFFF",
                        fontSize: "40px",
                      }}
                    >
                      Enter Your Email
                    </Typography>
                  </Grid>
                  {varificationMessage === "set" ? (
                    <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
                      <Typography
                        variant="body1"
                        style={{
                          color: "#FFFFFF",
                        }}
                      >
                        A verification link has been sent to your email address. Please check your email.
                      </Typography>
                    </Grid>
                  ) : (
                    <></>
                  )}
                  <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
                    <FormControl
                      variant="filled"
                      fullWidth
                      sx={{
                        backgroundColor: "#fff",
                      }}
                    >
                      <InputLabel sx={{ color: "#000" }}>Email</InputLabel>
                      <FilledInput
                        sx={{
                          backgroundColor: "#FFFFFF",
                          color: "#000",
                        }}
                        {...register("email", {
                          required: true,
                          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                      />
                    </FormControl>
                  </Grid>
                  {/* <Grid container item xs={12}>
                        <ButtonStyle disabled={isLoading} fullWidth type="submit">
                          {" "}
                          Send
                        </ButtonStyle>
                        {isLoading && (
                          <CircularProgress
                            size={30}
                            sx={{
                              position: "absolute",
                              color: "#FF9A45",
                              top: "75%",
                              left: "50%",
                              marginTop: "-12px",
                              marginLeft: "-12px",
                            }}
                          />
                        )}
                      </Grid> */}
                  <LoadingButtonStyle
                    fullWidth
                    color="inherit"
                    size="large"
                    disabled={isLoading}
                    type="submit"
                    variant="contained"
                    loading={isLoading}
                    sx={{ textTransform: "none" }}
                  >
                    Send
                  </LoadingButtonStyle>
                </Grid>
              </form>
            </ForgetPasswordBox>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ForgetPassword;
