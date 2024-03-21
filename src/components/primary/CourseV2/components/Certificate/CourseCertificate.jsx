/*
 * File           : CourseCertificate.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 01:33:36
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import certificate from "../../../../../assets/images/courses/image 36.png";
import medal from "../../../../../assets/images/courses/medal.png";

const CourseCertificate = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const imgBoxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: isLightTheme ? "#F8FAFC" : "#101828",
    paddingX: "24px",
    borderRadius: "8px",
  };
  const handleDownloadCertificate = () => {};
  return (
    <Box
      sx={{
        ...imgBoxStyle,
      }}
    >
      {/* <a
        href={certificatePdf}
        download='Nda_File.pdf'
        onClick={() => handleDownloadCertificate()}
        style={{ textDecoration: "none", color: "#266AED" }}
      > */}
      <img src={medal} alt="" />
      <img src={certificate} alt="" />
      {/* <a
        href={certificatePdf}
        download='Nda_File.pdf'
        onClick={() => handleDownloadCertificate()}
        style={{ textDecoration: "none", color: "#266AED" }}
      >
      </a> */}
      <Box sx={{ textAlign: "center", paddingBottom: "48px", mt: "32px" }}>
        <Typography variant="wpf_h5_Bold" color={"neutral.995"}>
          Earn a career certificate
        </Typography>
        <br />
        <Typography color="neutral.996" variant="wpf_p3_regular">
          Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in your performance
          review
        </Typography>
      </Box>
      {/* </a> */}
    </Box>
  );
};

export default CourseCertificate;
