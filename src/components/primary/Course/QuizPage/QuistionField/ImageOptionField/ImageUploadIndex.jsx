import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import IconImage from "../../../../../../assets/images/uploadImageIcon.svg";
import { youtubeLinkEmbed } from "../../../../../../helper/youtubeLinkEmbed";

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
const baseUploadBoxStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // padding: "20px",

  borderWidth: 2,
  borderRadius: 8,
  height: "162px",
  // width: "12px",
  borderColor: "rgba(70, 70, 70, 0.2)",
  borderStyle: "dashed",
  // backgroundColor: isLightTheme ? "primary.B200" : "neutral.N400",
  backgroundColor: "#FAFBFC",
  color: "#fff",
  outline: "none",
  transition: "border .24s ease-in-out",
};
const ImageUploadIndex = ({
  coverImageFile,
  coverImage,
  removeImage,
  handleImage,
  update,
  defaultImage,
  inputField,
}) => {
  const screenSize = window.innerWidth;
  const { isLightTheme } = useSelector((state) => state.theme);
  const baseUploadBoxStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "20px",

    borderWidth: 2,
    borderRadius: 8,
    height: "162px",
    // width: "12px",
    borderColor: "rgba(70, 70, 70, 0.2)",
    borderStyle: "dashed",
    // backgroundColor: isLightTheme ? "primary.B200" : "neutral.N400",
    backgroundColor: isLightTheme ? "#FAFBFC" : "#000",
    color: "#fff",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  // const maxSize = 1024000;

  const maxSize = 1024000 * 10;
  const [isHovered, setIsHovered] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "audio/*": [],
      "video/*": [],
    },
    onDrop: handleImage,
  });
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const style = useMemo(() => {
    const fileSize = acceptedFiles ? acceptedFiles[0]?.size : null;

    // const maxSize = 1024000; // 1MB in bytes
    // 1570024
    // const maxSize = 1024000 * 10;
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
        ...(isDragReject ? rejectStyle : {}),
      };
    }
  }, [isFocused, isDragAccept, isDragReject, acceptedFiles, isLightTheme]);

  const files = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {(file.size * 1e-6).toFixed(3)} Mb
    </span>
  ));
  // const onDrop = test((acceptedFiles) => {
  //   // Do something with the files
  // }, []);

  let width = "90%"; // Default width for large screens

  if (screenSize >= 1500) {
    // Extra-large screens
    width = (12.56 * screenSize) / 100;
  } else if (screenSize >= 1440) {
    // Large screens
    width = (12.5 * screenSize) / 100;
  } else if (screenSize >= 1366) {
    // Large screens
    width = (10 * screenSize) / 100;
  } else if (screenSize >= 1280) {
    // Large screens
    width = (10 * screenSize) / 100;
  } else if (screenSize >= 1024) {
    // Large screens
    width = (12 * screenSize) / 100;
  }
  const handleSwitchContent = (value) => {
    console.log("🚀 ~ handleSwitchContent ~ value:", value);
    switch (true) {
      case value?.endsWith(".png"):
      case value?.endsWith(".jpeg"):
      case value?.endsWith(".jpg"):
        return <img height={"155"} src={value} alt='' style={{ width, borderRadius: "8px" }} />;
      case value?.endsWith(".mp3"):
      case value?.endsWith(".mpeg"):
        return (
          <audio style={{ height: "140px", width: "160px" }} controls>
            <source src={value} type='audio/mpeg' />
          </audio>
        );
      case value?.endsWith(".mp4"):
        return (
          <video height={"150px"} width={"100%"} controls>
            <source src={value} />
          </video>
        );
      case value?.includes("youtube.com/watch"):
        // Extracting the video ID from the YouTube URL
        // const videoId = value.split("v=")[1];
        const videoId = youtubeLinkEmbed(value);

        return (
          // <figure class='media'>
          <div data-oembed-url={value}>
            {/* <div data-oembed-url="https://www.youtube.com/watch?v=PEWP9nbqG9Q&list=RDPEWP9nbqG9Q&start_radio=1"> */}
            {/* <div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"> */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameborder='0'
              // allow='autoplay; encrypted-media'
              // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              // allowfullscreen
            
              width='100%'
              height='160px'
            ></iframe>
            {/* </div> */}
          </div>
          // </figure>
        );

      default:
        return <p>Unsupported file </p>;
    }
  };
  return (
    <>
      <Grid container>
        <Box {...getRootProps({ width, style })}>
          {acceptedFiles.length ? (
            <>
              {acceptedFiles[0].size > maxSize ? (
                <Box sx={{ width: "70%" }}>
                  <br />
                  <Typography variant='wpf_p4_medium' sx={{ color: "#ff1744" }}>
                    File : {files.length > 20 ? files.slice(0, 4) : files}
                  </Typography>
                  <Typography variant='wpf_p4_medium' sx={{ color: "#ff1744", textDecoration: "justify" }}>
                    The selected file is too large. Please choose a file less than 1Mb.
                  </Typography>
                  <Typography variant='wpf_p4_medium' sx={{ color: "#ff1744", textDecoration: "justify" }}></Typography>
                </Box>
              ) : (
                <>
                  {" "}
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "8px",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {acceptedFiles[0].type === "image/png" ||
                    acceptedFiles[0].type === "image/jpg" ||
                    acceptedFiles[0].type === "image/jpeg" ? (
                      <img height={160} src={coverImage} alt='' style={{ width, borderRadius: "8px" }} />
                    ) : (
                      <iframe height={155} src={coverImage} alt='' style={{ width, borderRadius: "8px" }}></iframe>
                    )}

                    {isHovered && (
                      <Box
                        sx={{
                          color: "red",
                          cursor: "pointer",
                          position: "absolute",
                          top: "40%",
                          left: { xxl: "30%", xl: "25%", lg: "25%" },
                        }}
                      >
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
                            },
                          }}
                        >
                          Replace
                        </Button>
                      </Box>
                    )}
                  </Box>
                </>
              )}
            </>
          ) : update && inputField.questionType === "imageInOptions" && !inputField.newQuiz ? (
            <>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "8px",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* {defaultImage.endsWith('.png') ? (
                  <img height={250} src={defaultImage} alt="" style={{ width, borderRadius: '8px' }} />
                ) : (
                  <audio controls>
                    <source src={defaultImage} type="audio/mpeg" />
                  </audio>
                )} */}
                {handleSwitchContent(defaultImage)}
                {/* <img height={160} src={defaultImage} alt="Course Image" style={{ width, borderRadius: '8px' }} /> */}
                {isHovered && (
                  <Box
                    sx={{
                      color: "red",
                      cursor: "pointer",
                      position: "absolute",
                      top: { xxl: "40%", xl: "35%", lg: "30%" },
                      left: { xxl: "30%", xl: "25%", lg: "25%" },
                    }}
                  >
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
                      }}
                    >
                      Replace
                    </Button>
                    {/* <DeleteIcon onClick={removeImage} sx={{ color: "red" }} /> */}
                  </Box>
                )}
              </Box>
            </>
          ) : (
            <>
              <input {...getInputProps()} />
              <br />
              <img src={IconImage} />
              <Typography variant='wpf_p4_medium' sx={{ paddingTop: "5%" }}>
                Upload media
              </Typography>
              <Typography variant='wpf_p4_medium' sx={{ paddingBottom: "2%" }}>
                Maximum file size: 512KB.
              </Typography>
              {/* <img src={ctaImage} /> */}
            </>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default ImageUploadIndex;
