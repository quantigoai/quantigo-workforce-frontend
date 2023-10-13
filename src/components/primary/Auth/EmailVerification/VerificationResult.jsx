/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/EmailVerification/VerificationResult.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Friday, August 18th 2023, 2:25:17 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {LoadingButton} from "@mui/lab";
import {Box, Grid, styled, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

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

const ButtonStyle = styled(LoadingButton)({
  backgroundColor: "#2D58FF",
  height: "40px",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const VerificationResult = ({ verificationTimeOver, message }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <>
      <ForgetPasswordBox>
        <Grid container>
          <Grid
            container
            xs={12}
            sx={{ paddingTop: "13%", justifyContent: "center" }}
          >
            {verificationTimeOver ? (
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "40px",
                }}
                variant="h4"
              >
                Your Account is Verified
              </Typography>
            ) : (
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "40px",
                }}
                variant="h4"
              >
                Verification Failed
              </Typography>
            )}
          </Grid>

          <Grid container sx={{ justifyContent: "center" }}>
            <Typography
              variant="body1"
              style={{
                color: "#FFFFFF",

                fontFamily: "Roboto",
              }}
            >
              {message}
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
                Back to Login
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
    </>
  );
};

export default VerificationResult;
