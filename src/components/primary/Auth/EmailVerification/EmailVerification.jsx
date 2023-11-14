import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import bgimg from "../../../../assets/images/LoginBG.png";
import HeaderNav from "../../HomePage/HeaderNav";
import {LoadingButtonStyle} from "../Login/Login";

const BgBox = styled(Box)({
  backgroundImage: `url(${bgimg})`,
  // width: "100vw",
  // height: "100vh",
  // height: "100vh",
  backgroundRepeat: "no-repeat",
});

const ForgetPasswordBox = styled(Box)({
  display: "flex",
  color: "#fffff",
  width: "520px",
  // height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(8px)",
  borderRadius: "36px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  // justifyContent: "center",
});

const TypographyBody = styled(Typography)({
  color: "#FFFFFF",
});
const EmailVerification = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.user);

  return (
    <>
      <Box className="container2">
        <Box sx={{ height: "10%" }}>
          <HeaderNav isEmailVerification={true} />
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
              <Box>
                <Box sx={{ paddingTop: "10%", display: "flex", justifyContent: "center" }}>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: {
                        lg: "30px",
                        xl: "40px",
                        xxl: "40px",
                      },
                      fontFamily: "Inter",
                    }}
                  >
                    Email Verification
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: "0%",
                    }}
                  >
                    <TypographyBody
                      sx={{
                        fontFamily: "Inter",
                        px: 6,
                        pt: 2,
                        pb: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      A verification link has been sent to your email address. Please check your email.
                    </TypographyBody>
                  </Box>
                </Box>
                {/* <Grid item xs={8}>
                <Grid container sx={{ padding: "3%" }}>
                  <LoadingButtonStyle
                    fullWidth
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Back to Login{" "}
                  </LoadingButtonStyle>
                </Grid>
              </Grid> */}
                <Box sx={{ width: "35%", mx: "auto", pb: 2 }}>
                  <LoadingButtonStyle
                    fullWidth
                    color="inherit"
                    size="large"
                    disabled={isLoading}
                    variant="contained"
                    loading={isLoading}
                    sx={{ textTransform: "none", borderRadius: "10px" }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Back to Login
                  </LoadingButtonStyle>
                </Box>
              </Box>
            </ForgetPasswordBox>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EmailVerification;
