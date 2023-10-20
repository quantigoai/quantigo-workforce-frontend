/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/CoverImageField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:35:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Box, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
// import dragiconplus from "../../../../assets/images/dragiconplus.svg";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import ctaImage from "../../../assets/images/CTA.png";
import IconImage from "../../../assets/images/Icon.png";
import ndaUploadStyle from "./ndaUploadStyle";

const focusedStyle = {
  borderColor: "#266AED",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const PdfNdaUploadField = ({ handleImage, selectedFile }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { baseUploadBoxStyle } = ndaUploadStyle(isLightTheme);
  const maxSize = .5 * 1024 * 1024;
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    onDrop: handleImage,
  });

  const style = useMemo(() => {
    const fileSize = selectedFile ? selectedFile.size : null;
    const maxSize = .5 * 1024 * 1024; // 1MB in bytes
    if (fileSize && fileSize > maxSize) {
      return {
        ...baseUploadBoxStyle,
        ...rejectStyle,
      };
    } else {
      return {
        ...baseUploadBoxStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
      };
    }
  }, [isFocused, isDragAccept, isDragReject, selectedFile]);
  // const style = useMemo(
  //   () => ({
  //     ...baseUploadBoxStyle,
  //     ...(isFocused ? focusedStyle : {}),
  //     ...(isDragAccept ? acceptStyle : {}),
  //     ...(isDragReject ? rejectStyle : {}),
  //   }),
  //   [isFocused, isDragAccept, isDragReject]
  // );

  const files = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {(file.size * 1e-6).toFixed(3)} Mb
    </span>
  ));
 
  return (
    <>
      <Grid>
        <Box className="">
          <Box {...getRootProps({ style })}>
            {selectedFile?.name ? (
              <>
                <br />
                <br />
                <Typography
                  variant="wpf_p3_regular"
                  sx={{ color: selectedFile?.size > maxSize ? "#ff1744" : "#013220" }}>
                  File : {files}
                </Typography>
                {selectedFile.size > maxSize ? (
                  <Typography variant="wpf_p3_regular" sx={{ color: "#ff1744" ,textAlign:"center"}}>
                    The selected file is too large. Please choose a file that is less than 512Kb in size
                  </Typography>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <input {...getInputProps()} type="file" name="file" />
                <br />
                <img src={IconImage} />
                <Typography variant="wpf_p2_regular" sx={{ paddingTop: "1%" }}>
                  Drag and Drop a file here or Browse” (Pdf)
                </Typography>
                <Typography variant="wpf_p2_regular" sx={{ paddingBottom: "2%" }}>
                  {" "}
                  Maximum file size: 512Kb.
                </Typography>
                {/* <p> Maximum file size: 1MB.</p> */}
                <img src={ctaImage} />
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default PdfNdaUploadField;
