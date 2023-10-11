import { Box, Button, CircularProgress, FilledInput, FormControl, Grid, InputLabel, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { forgetPasswordSlice } from "../../../features/slice/userSlice";
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
  color: "#fffff",
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
      if (action.payload.status === 200) {
        setVarificationMessage("set");
        toast.trigger("Link sent to email", "success");
      } else {
        toast.trigger("Not send email", "error");
      }
    });
  };

  return (
    <>
      <Box className="container">
        <HeaderNav />

        <>
          <Grid container>
            <Grid container style={{ justifyItems: "center" }}>
              <Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingTop: "10%", paddingLeft: "35%" }}>
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
                        <FormControl variant="filled" fullWidth sx={{ backgroundColor: "#FFFFFF" }}>
                          <InputLabel>Email</InputLabel>
                          <FilledInput
                            {...register("email", {
                              required: true,
                              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                            })}
                          />
                        </FormControl>
                      </Grid>
                      <Grid container item xs={12}>
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
                      </Grid>
                    </Grid>
                  </form>
                </ForgetPasswordBox>
              </Grid>
            </Grid>
          </Grid>
        </>
        {/* <Login /> */}
      </Box>
    </>
  );
};

export default ForgetPassword;
