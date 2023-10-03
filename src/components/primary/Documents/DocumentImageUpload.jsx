import { Box, Button, Grid } from "@mui/material";
import React, { useMemo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
// import dragiconplus from "../../../../assets/images/dragiconplus.svg";
import { useDropzone } from "react-dropzone";
import ctaImage from "../../../assets/images/CTA.png";
import IconImage from "../../../assets/images/Icon.png";
import { useTheme } from "@mui/material/styles"; 
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // padding: "20px",
  // borderWidth: 2,
  borderRadius: 2,
  height: "180px",
  borderColor: "rgba(70, 70, 70, 0.2)",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#1D1D1D",
  // outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const DocumentImageUpload = ({ coverImageFile, coverImage, removeImage, handleImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [], "image/jpg": [] },
    onDrop: handleImage,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const files = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {(file.size * 1e-6).toFixed(3)} Mb
    </span>
  ));
  // const onDrop = test((acceptedFiles) => {
  //   // Do something with the files
  // }, []);

  return (
    <>
      <Grid container>
        <Box {...getRootProps({ style })}>
          {acceptedFiles.length ? (
            <Box  sx={{
              position: "relative",
              "& img": {
                width: "100%", // Set the width of the image
                [theme.breakpoints.up("sm")]: {
                  width: "100%", // Adjust for larger screens
                },
                [theme.breakpoints.up("md")]: {
                  width: "90%", // Adjust for even larger screens
                },
              },
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img
                height={175}
                src={coverImage}
                alt=""
                width={630}
              />
              {/* <p>File : {files}</p> */}
              {isHovered && (
                <Box sx={{ color: "red", cursor: "pointer", position: "absolute", top: "45%", right: "43%" }}>
                  <Button
                    onClick={removeImage}
                    sx={{
                      width: "100px",
                      textTransform: "none",
                      backgroundColor: "#FFFFFF",
                      color: "#2E58FF",
                      borderRadius: "20px",

                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                        color: "#2E58FF",
                        // border: "1px solid #2E58FF",
                      },
                    }}>
                    Replace
                  </Button>
                  {/* <DeleteIcon onClick={removeImage} sx={{ color: "red" }} /> */}
                </Box>
              )}
            </Box>
          ) : (
            <>
              <input {...getInputProps()} />
              <img src={IconImage} />
              <p>Drag and Drop a file here or Browse” (JPG/ JPEG / PNG)</p>
              <img src={ctaImage} />
            </>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default DocumentImageUpload;
