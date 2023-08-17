import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { emailVerificationLink } from "../../../../features/slice/userSlice";
const paperstyleResendEmail = {
  backgroundColor: "#FFFFFF",
  padding: "3%",
  width: "100%",
  height: "400px",
  borderRadius: "2px",
  justifyContent: "center",
};
const ButtonStyle = styled(Button)({
  backgroundColor: "#2D58FF",
  width: "20%",
  height: "40px",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const EmailVerificationAfterLogin = () => {
  const params = useParams();
  let [searchParams] = useSearchParams();
  // const { id, token } = params;
  const { id } = params;
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const data = { id, token };

  useEffect(() => {
    // dispatch(emailVerificationLink(params));
    dispatch(emailVerificationLink(data));
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            height: "100%",
            width: "100%",
            paddingLeft: "1%",
          }}
        >
          <Paper elevation={0} style={paperstyleResendEmail}>
            <Grid container sx={{ justifyContent: "center", paddingTop: "7%" }}>
              <Typography variant="h4" sx={{ color: "#090080" }}>
                Your Account is Verified
              </Typography>
            </Grid>
            <Grid container sx={{ justifyContent: "center", paddingTop: "2%" }}>
              <ButtonStyle
                fullWidth
                onClick={() => {
                  navigate("/");
                }}
              >
                Go to Dashboard{" "}
              </ButtonStyle>
            </Grid>
          </Paper>
        </Box>
      </>
    </>
  );
};

export default EmailVerificationAfterLogin;
