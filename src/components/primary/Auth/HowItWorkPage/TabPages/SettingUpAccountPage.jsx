import { Box, Link, Typography } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import logImg from "../../../../../assets/images/loginWMP.PNG";
import ImageModal from "../ImageModal";
import CreateAnAccountComponents from "./CreateAnAccountComponents";

const SettingUpAccountPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          paddingLeft: "2%",
          paddingRight: "7%",

          height: "82vh",
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
        <Box sx={{ paddingBottom: "2%" }}>
          <Typography variant="h4" sx={{ color: "#282F3D" }}>
            Setting up QAI Workforce account
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "0%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            To initiate your onboarding process with QAI Workforce, please open
            your preferred web browser and enter the following URL in the
            address bar:
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "0%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            <Link
              href="  https://qaiworkforce.netlify.app/"
              sx={{
                color: "#47536B",
                cursor: "pointer",
              }}>
              https://qaiworkforce.netlify.app/
            </Link>
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "2%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            The homepage of the platform, which acts as the starting point for
            accessing all of its features and functionalities, will be displayed
            after the website has fully loaded. The login page will appear.
          </Typography>
        </Box>
        <Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="h6" sx={{ color: "#47536B" }}>
              Log in
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="subtitle2" sx={{ color: "#" }}>
              If you are a registered user, you can log in the system as
              follows.
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            {/* <FiberManualRecordIcon /> */}
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#47536B" }}>
              Step 1: Entering Your Login Information
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
            <Typography variant="subtitle2" sx={{ color: "" }}>
              You will be able to enter your email address and password to
              access the app.
            </Typography>
            <br />
            <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
              <b> Email :</b> Fill up the Asterisk(*) marked Email area with a
              valid email address.
            </Typography>
            <br />
            <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
              <b>Password :</b> Enter the password you previously set in the
              password area, which is also Asterisk(*) marked. The password will
              be seen in written form when you click on the eye symbol. Now,
              click on <b>“LOGIN”</b>.
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            {/* <FiberManualRecordIcon /> */}
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#47536B" }}>
              Step 2 : Verification
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
            <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
              Your login information will be validated by the system after you
              enter it. Please be patient as this could take a moment. You will
              be taken to your account dashboard if your credentials are valid.
              A pop-up message stating <b> "LOGIN FAILED" </b> will be shown if
              your credentials are wrong. In the event of a login failure,
              re-enter your login credentials to ensure their accuracy and
              attempt to log in again.
            </Typography>
            <br />
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            {/* <FiberManualRecordIcon /> */}
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#47536B" }}>
              Step 3: Forgot Your Password
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
            <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
              If you forget your password, you can click on the{" "}
              <b> “Forgot password” </b> link on the login page. This will
              direct you to a page where you can reset your password which
              requires email confirmation to be successful.
            </Typography>
            <br />
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "2%" }}>
            <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
              By following these steps, you should now be able to successfully
              access your account via our login page.
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
