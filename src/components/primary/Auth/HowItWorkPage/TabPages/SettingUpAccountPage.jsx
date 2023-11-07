import { Box, Link, Typography } from "@mui/material";
import React from "react";

import logImg from "../../../../../assets/images/loginWMP.png";
import CreateAnAccountComponents from "./CreateAnAccountComponents";
import { useNavigate } from "react-router-dom";
import ImageModal from "../ImageModal";

const SettingUpAccountPage = () => {
  const navigate = useNavigate();
  return (
    <>
       <Box sx={{ paddingBottom: "3%"   }}>
          <Typography variant="wpf_h3_semiBold" sx={{ color: "#282F3D",ml:3}}>
            Setting up QAI Workforce account
          </Typography>
        </Box>
      <Box
        sx={{
          position: "absolute",
          // paddingLeft: "2%",
          paddingRight: "5%",
          ml:3,
          height: "75vh",
          // flexGrow: 2,
          scrollBehavior: "smooth",
          overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.6em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}>
       
        <Box sx={{ paddingBottom: "0%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            To initiate your onboarding process with QAI Workforce, please open your preferred web browser and enter the
            following URL in the address bar:
          </Typography>{"  "}
          <Typography variant="wpf_p3_semiBold" sx={{ color: "#47536B" }}>
            <Link
              underline="none"      
              href="https://quantigoai.com/"
              sx={{
                color: "#47536B",
                cursor: "pointer",
              }}>
              quantigoai.com
            </Link>
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "0%" }}>
          
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            The homepage of the platform, which acts as the starting point for accessing all of its features and
            functionalities, will be displayed after the website has fully loaded. The login page will appear.
          </Typography>
        </Box>
        <Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
              Log in
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#" }}>
              If you are a registered user, you can log in the system as follows.
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            {/* <FiberManualRecordIcon /> */}
            <Typography variant="wpf_p3_medium" sx={{ fontWeight: "bold", color: "#47536B" }}>
              Step 1: Entering Your Login Information
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "" }}>
              You will be able to enter your email address and password to access the app.
            </Typography>
            <br />
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              <Typography variant="wpf_p3_semiBold" sx={{ color: "#47536B" }}>
                {" "}
                Email :
              </Typography>{" "}
              Fill up the Asterisk(*) marked Email area with a valid email address.
            </Typography>
            <br />
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              <Typography variant="wpf_p3_semiBold" sx={{ color: "#47536B" }}>
                {" "}
                Password : 
              </Typography>{" "}
                Enter the password you previously set in the password area, which is also Asterisk(*) marked. The password
              will be seen in written form when you click on the eye symbol. Now, click on{" "}
              <Typography variant="wpf_p3_semiBold" sx={{ color: "#47536B" }}>
                “LOGIN”
              </Typography>
              .
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            {/* <FiberManualRecordIcon /> */}
            <Typography variant="wpf_p3_medium" sx={{ fontWeight: "bold", color: "#47536B" }}>
              Step 2 : Verification
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              Your login information will be validated by the system after you enter it. Please be patient as this could
              take a moment. You will be taken to your account dashboard if your credentials are valid. A pop-up message
              stating{" "}
              <Typography variant="wpf_p3_semiBold" sx={{ color: "#47536B" }}>
                {" "}
                "LOGIN FAILED"
              </Typography>{" "}
              will be shown if your credentials are wrong. In the event of a login failure, re-enter your login
              credentials to ensure their accuracy and attempt to log in again.
            </Typography>
            <br />
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            {/* <FiberManualRecordIcon /> */}
            <Typography variant="wpf_p3_medium" sx={{ fontWeight: "bold", color: "#47536B" }}>
              Step 3: Forgot Your Password
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              If you forget your password, you can click on the{" "}
              <Typography variant="wpf_p3_semiBold"> “Forgot password” </Typography> link on the login page. This will
              direct you to a page where you can reset your password which requires email confirmation to be successful.
            </Typography>
            <br />
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "2%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              By following these steps, you should now be able to successfully access your account via our login page.
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "3%" }}>
            <ImageModal logImg={logImg} />
          </Box>
        </Box>
        <CreateAnAccountComponents />
      </Box>
    </>
  );
};

export default SettingUpAccountPage;
