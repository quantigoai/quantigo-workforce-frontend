import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileCompletion from "../../../../../assets/images/HowItWork/ProfileCompletion.jpg";
import NdaUploadImage from "../../../../../assets/images/HowItWork/NDAUpload.jpg";
import congratulationImage from "../../../../../assets/images/HowItWork/congratulation.jpg";
import ImageModal from "../ImageModal";

const ThirdPageProfileSetup = () => {
  return (
    <>
      <Box sx={{ paddingBottom: "7%", }}>
          <Typography variant="wpf_h3_semiBold" sx={{ color: "#282F3D" ,  ml:3,}}>
            Profile Setup
          </Typography>
        </Box>
      <Box
        sx={{
          position: "absolute",
          // paddingLeft: "3%",
          paddingRight: "5%",
          ml:3,
          height: "75vh",
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
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            You will be sent to your <Typography variant="wpf_p3_semiBold">Dashboard</Typography> after clicking the
            email verification link, where you will find that 80% of your profile has been automatically set up. To
            complete the remaining 20% of your profile, you will need to upload necessary documents and NDA.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            Two steps are required to finish the process :
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            (1) NDA Upload and
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            (2) Document Upload
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "3%", paddingBottom: "3%" }}>
          <ImageModal Img={ProfileCompletion} />
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
            NDA Upload
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            To complete the <Typography variant="wpf_p3_semiBold">"NDA Upload" </Typography>step of the process, you
            will need to download the NDA form, sign it, and then upload the signed document.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            To upload your NDA form, simply click on the{" "}
            <Typography variant="wpf_p3_semiBold">"NDA Upload" </Typography> button and follow the instructions
            provided. Once you have completed the necessary steps, you can then upload your file and click on the
            <Typography variant="wpf_p3_semiBold">"Submit"</Typography> button to complete the process.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            Once you have completed the entire process, you will be able to view that 90% of your profile is complete.
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "3%", paddingBottom: "3%" }}>
          <ImageModal Img={NdaUploadImage} />
        </Box>

        <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
            Document Upload
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            To upload your document, click on the <Typography variant="wpf_p3_semiBold"> "Upload Document" </Typography>{" "}
            button which will open a pop-up window with three fields to fill out{" "}
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            Firstly, click on the camera icon to upload an image of your{" "}
            <Typography variant="wpf_p3_semiBold">NID or Passport </Typography> . Next, select the appropriate{" "}
            <Typography variant="wpf_p3_semiBold"> Document Type </Typography> from the available options. Lastly,
            provide the Document Number which corresponds to the uploaded document. If you have uploaded your NID, then
            you need to provide the NID number, and if you have uploaded your passport, then you need to provide the
            passport number.{" "}
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            After filling out the required fields, click on the{" "}
            <Typography variant="wpf_p3_semiBold">"Submit" </Typography> button to upload your document.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            Once you have uploaded all the required documents, you will need to wait for the{" "}
            <Typography variant="wpf_p3_semiBold">admin approval </Typography>. An{" "}
            <Typography variant="wpf_p3_semiBold">Email </Typography> will be sent to the email address provided by you
            once your documents have been approved by the admin.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            Once the admin approves your uploaded documents, you will automatically find a{" "}
            <Typography variant="wpf_p3_semiBold">"Get Started" </Typography> button on your dashboard.
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
