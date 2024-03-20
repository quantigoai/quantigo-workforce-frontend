import { Box, Typography } from "@mui/material";
import React from "react";
import certificate from "../../../../assets/images/courses/image 36.png";
import medal from "../../../../assets/images/courses/medal.png";
import { useSelector } from "react-redux";
import certificatePdf from "../../../../assets/ndifile/NDA - Independant Contractor.docx_2.pdf";
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
