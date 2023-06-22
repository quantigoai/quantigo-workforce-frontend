import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../../../assets/images/LoginBG.png";
import HeaderNav from "../../HomePage/HeaderNav";

const BgBox = styled(Box)({
  backgroundImage: `url(${bgimg})`,
  width: "100vw",
  height: "120vh",
  backgroundRepeat: "no-repeat",
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
  justifyContent: "center",
});
const TypographyBody = styled(Typography)({
  display: "flex",
  color: "#FFFFFF",
  justifyContent: "initial",
  fontSize: "body1",
  fontFamily: "Roboto",
});
const EmailVerification = () => {
  const navigate = useNavigate();

  const Keyframes = styled("div")({
    height: "100vh",
    width: "100%",
  });

  return (
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
            style={{
              paddingTop: "15%",
              paddingLeft: "35%",
              justifyContent: "center",
            }}>
            <ForgetPasswordBox>
              <Grid container spacing={4}>
                <Grid
                  container
                  xs={12}
                  sx={{ paddingTop: "10%", justifyContent: "center" }}>
                  <Typography
                    style={{
                      color: "#FFFFFF",
                      fontSize: "40px",
                      fontFamily: "Roboto",
                    }}>
                    Email Verification
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    xs={12}
                    sx={{
                      paddingBottom: "3%",
                      paddingLeft: "7%",
                      paddingRight: "2%",
                    }}>
                    <TypographyBody>
                      A verification link has been sent to your email address.
                      Please check your email.
                    </TypographyBody>
                  </Grid>
                </Grid>
                {/* <Grid item xs={12}>
                     <Button onClick={()=>{ navigate("/login")}}>Back to Login </Button>
                 </Grid> */}
              </Grid>
            </ForgetPasswordBox>
          </Grid>
        </Grid>
      </Keyframes>
    </>
  );
};

export default EmailVerification;
