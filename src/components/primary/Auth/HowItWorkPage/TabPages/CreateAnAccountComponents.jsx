import { Box, Typography } from "@mui/material";
import React from "react";
import CreateNewAccount from "../../../../../assets/images/HowItWork/createaccount.jpg";
import newUserPic from "../../../../../assets/images/HowItWork/newUser.jpg";
import oldUserPic from "../../../../../assets/images/HowItWork/oldUser.jpg";
import ImageModal from "../ImageModal";

const CreateAnAccountComponents = () => {
  return (
    <>
      <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p1_semiBold" sx={{ color: "#282F3D" }}>
          Create an account
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          Creating an account on QAI Workforce is a simple process that provides access to a diverse selection of job
          listings and skill development courses. If you have not yet registered for an account, initiate the
          registration process by following the necessary steps.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ fontWeight: "bold", color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold">
            {" "}
            Step 1: Click on “Create New Account” at the top of the left corner of the LOGIN button.
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "4%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_semiBold" sx={{ fontWeight: "bold", color: "#47536B" }}>
          Step 2: Complete the required fields marked with an asterisk (*) including your name, email, and password .You
          can view your password in its written form by clicking on the eye symbol.The minimum length requirement of at
          least 6 characters.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "3%", paddingLeft: "4%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_semiBold" sx={{ fontWeight: "bold", color: "#47536B" }}>
          Step 3: To finish the account registration process, click the “Create New Account” button. It will take you to
          the profile Setup page.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "2%", paddingLeft: "4%" }}>
        <ImageModal Img={CreateNewAccount} />
      </Box>

      <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
          Setup Profile
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          In order to complete the account creation process a few information will be needed.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "0%" }}>
        <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
          New User
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          If you are a new user you have to follow this following process
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold">User Status : </Typography>Click on the dropdown and select{" "}
          <Typography variant="wpf_p3_semiBold"> “New User” </Typography>
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold"> HUB:</Typography> You have to select your preferred HUB from the
          options given.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold"> Quantigo Username : </Typography>Insert user name and select HUB ,
          Quantigo Username will be generated automatically.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold"> Gender: </Typography>Select your gender.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold">Date of Birth: </Typography>Enter your Date of Birth. There is an age
          limit, user age must not be less than 13 years.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "2%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold">Nagad Account Number : </Typography> To make a payment on QAI Workforce,
          you will need to provide a Nagad account number.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          ***Please note that the Nagad account number you are providing cannot be edited or changed once submitted.
          Therefore, you have to be extra careful and accurate while entering the phone number.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          Finally, click on the” Finish” button to complete the entire process.{" "}
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "4%", paddingBottom: "3%" }}>
        <ImageModal Img={newUserPic} />
      </Box>

      {/* old user */}
      <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
          Old User
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          If you are a old user you have to follow this following process
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold">User Status: </Typography> Click on the drop down and select{" "}
          <Typography variant="wpf_p3_semiBold">“Old User”. </Typography>
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold"> Quantigo Username :</Typography> Insert your Quantigo Username.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold">Gender:</Typography> Select your gender.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          <Typography variant="wpf_p3_semiBold"> Date of Birth: </Typography>There is an age limit, user age must not be
          less than 13 years.
        </Typography>
      </Box>

      <Box sx={{ paddingLeft: "3%", paddingBottom: "3%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
        <Typography variant="wpf_p3_semiBold">Nagad Account Number : </Typography>To make a payment on QAI Workforce, you will need to provide a Nagad account
          number.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          ***Please note that the Nagad account number you are providing cannot be edited or changed once submitted.
          Therefore, you have to be extra careful and accurate while entering the phone number.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          Finally, click on the” Finish” button to complete the entire process.{" "}
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        <ImageModal Img={oldUserPic} />
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        {/* <FiberManualRecordIcon /> */}
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          A verification link will be sent to your email address. It will direct you to your Dashboard.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "1%" }}>{/* <img width="500" src={verifiedImage} /> */}</Box>
    </>
  );
};

export default CreateAnAccountComponents;
