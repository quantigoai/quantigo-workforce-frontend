import {Box, Button, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {emailVerificationLink} from "../../../../features/slice/userSlice";
import HeaderNav from "../../HomePage/HeaderNav";

const ForgetPasswordBox = styled(Box)({
  display: "flex",
  color: "#fffff",
  width: "520px",
  height: "381px",
  backgroundColor: "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(8px)",
  borderRadius: "36px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});
const EmailVerificationConfarmation = () => {
  const params = useParams();
  const { id, token } = params;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [verificationTimeOver, setVerificationTimeOver] = useState(false);
  useEffect(() => {
    dispatch(emailVerificationLink(params)).then((action) => {
      if (action.payload?.status === 200 || 400) {
        setVerificationTimeOver(true);
      } else {
        setVerificationTimeOver(false);
      }
    });
  }, []);
  const Keyframes = styled("div")({
    height: "100vh",
    width: "100%",
  });

  const ButtonStyle = styled(Button)({
    backgroundColor: "#2D58FF",
    height: "40px",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FF9A45",
      color: "#1D1D1D",
    },
  });
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <>
      <>
        <Box className="container"></Box>
        <Box className="container1"></Box>
        <Box className="container2"></Box>
        <Box className="container3"></Box>
        <Box className="container4"></Box>
        <Keyframes>
          <HeaderNav />
          <Grid container style={{ justifyItems: "center" }}>
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ paddingTop: "10%", paddingLeft: "35%" }}
            >
              <ForgetPasswordBox>
                <Grid container>
                  <Grid
                    container
                    xs={12}
                    sx={{ paddingTop: "13%", justifyContent: "center" }}
                  >
                    <Typography
                      style={{
                        color: "#FFFFFF",
                        fontSize: "40px",
                        fontFamily: "Roboto",
                      }}
                    >
                      {verificationTimeOver
                        ? "Your Account is verified"
                        : "Your Account is not verified"}
                    </Typography>
                  </Grid>

                  <Grid container sx={{ justifyContent: "center" }}>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#FFFFFF",

                        fontFamily: "Roboto",
                      }}
                    >
                      {verificationTimeOver
                        ? " Congratulation Your Account Verified"
                        : "Verification link expired"}
                    </Typography>
                  </Grid>

                  {!isLoggedIn ? (
                    <Grid container sx={{ padding: "3%" }}>
                      <ButtonStyle
                        fullWidth
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        Back to Login{" "}
                      </ButtonStyle>
                    </Grid>
                  ) : (
                    <Grid container sx={{ padding: "3%" }}>
                      <ButtonStyle
                        fullWidth
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Go to Dashboard{" "}
                      </ButtonStyle>
                    </Grid>
                  )}
                </Grid>
              </ForgetPasswordBox>
            </Grid>
          </Grid>
        </Keyframes>
      </>
    </>
  );
};

export default EmailVerificationConfarmation;
