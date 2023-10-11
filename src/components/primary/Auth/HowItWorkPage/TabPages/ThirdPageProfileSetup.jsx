import {Box, Typography} from "@mui/material";
import React from "react";
import ProfileCompletion from "../../../../../assets/images/HowItWork/ProfileCompletion.jpg";
import NdaUploadImage from "../../../../../assets/images/HowItWork/NDAUpload.jpg";
import congratulationImage from "../../../../../assets/images/congratulation.png";
import ImageModal from "../ImageModal";

const ThirdPageProfileSetup = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          paddingLeft: "3%",
          paddingRight: "5%",

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
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="h4" sx={{ color: "#282F3D" }}>
            Profile Setup
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            You will be sent to your <b>Dashboard </b> after clicking the email
            verification link, where you will find that 80% of your profile has
            been automatically set up. To complete the remaining 20% of your
            profile, you will need to upload necessary documents and NDA.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Two steps are required to finish the process :
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            (1) NDA Upload and
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            (2) Document Upload
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "3%", paddingBottom: "3%" }}>
          <ImageModal Img={ProfileCompletion} />
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="h6" sx={{ color: "#47536B" }}>
            NDA Upload
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            To complete the <b>"NDA upload" </b>step of the process, you will
            need to download the NDA form, sign it, and then upload the signed
            document.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            To upload your NDA form, simply click on the <b> "NDA upload" </b>{" "}
            button and follow the instructions provided. Once you have completed
            the necessary steps, you can then upload your file and click on the
            <b> "Submit"</b> button to complete the process.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Once you have completed the entire process, you will be able to view
            that 90% of your profile is complete.
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "3%", paddingBottom: "3%" }}>
          <ImageModal Img={NdaUploadImage} />
        </Box>

        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="h6" sx={{ color: "#47536B" }}>
            Document Upload
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            To upload your document, click on the <b> "Upload Document" </b>{" "}
            button which will open a pop-up window with three fields to fill out{" "}
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Firstly, click on the camera icon to upload an image of your{" "}
            <b> NID or Passport </b>. Next, select the appropriate{" "}
            <b> Document Type </b> from the available options. Lastly, provide
            the Document Number which corresponds to the uploaded document. If
            you have uploaded your NID, then you need to provide the NID number,
            and if you have uploaded your passport, then you need to provide the
            passport number.{" "}
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            After filling out the required fields, click on the{" "}
            <b> "Submit" </b> button to upload your document.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Once you have uploaded all the required documents, you will need to
            wait for the <b>admin approval </b>. An <b>Email </b> will be sent
            to the email address provided by you once your documents have been
            approved by the admin.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Once the admin approves your uploaded documents, you will
            automatically find a <b>"Get Started" </b> button on your dashboard.
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
          <ImageModal Img={congratulationImage} />
        </Box>
      </Box>
    </>
  );
};

export default ThirdPageProfileSetup;
