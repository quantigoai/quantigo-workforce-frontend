/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/EmailVerification/VerificationResult.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Friday, August 18th 2023, 2:25:17 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {LoadingButton} from "@mui/lab";
import {Box, styled, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoadingButtonStyle} from "../Login/Login";

const ForgetPasswordBox = styled(Box)({
  // display: "flex",
  color: "#fffff",
  width: "520px",
  // height: "300px",
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
  const { isLoading } = useSelector((state) => state.user);

  return (
    <>
      <ForgetPasswordBox>
        <Box>
          <Box
            sx={{
              paddingTop: "13%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              pb: 2,
            }}
          >
            {verificationTimeOver ? (
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "40px",
                  fontFamily: "Inter",
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
                  fontFamily: "Inter",
                }}
                variant="h4"
              >
                Verification Failed
              </Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", width: "100%", pt: 1 }}>
            <Typography
              variant="p"
              sx={{
                color: "#FFFFFF",

                fontFamily: "Inter",
              }}
            >
              {message}
            </Typography>
          </Box>

          {!isLoggedIn ? (
            <Box sx={{ width: "35%", mx: "auto", pb: 2, pt: 3 }}>
              <LoadingButtonStyle
                fullWidth
                color="inherit"
                size="large"
                disabled={isLoading}
                // type="submit"
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
          ) : (
            <Box sx={{ width: "35%", mx: "auto", pb: 2, pt: 3 }}>
              <LoadingButtonStyle
                fullWidth
                color="inherit"
                size="large"
                disabled={isLoading}
                // type="submit"
                variant="contained"
                loading={isLoading}
                sx={{ textTransform: "none", borderRadius: "10px" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Dashboard
              </LoadingButtonStyle>
            </Box>
          )}
        </Box>
      </ForgetPasswordBox>
    </>
  );
};

export default VerificationResult;
