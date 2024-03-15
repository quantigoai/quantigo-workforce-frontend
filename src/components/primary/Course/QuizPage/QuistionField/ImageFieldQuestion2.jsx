import { Box, Button, FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import IconImage from "../../../../../assets/images/Icon.png";
import { PdTextField } from "../../../../shared/CustomField/PDTextFIeld";
const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const ImageFieldQuestion2 = ({
  coverImageFile,
  // coverImage,
  removeImage,
  // handleImage,
  handleChangeInput,
  inputField,
  handleUpdate,
  update,
  defaultImage,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const [videoLink, setVideoLink] = useState("");
  const [videoId, setVideoId] = useState("");
  const [checked, setChecked] = React.useState(false);

  const baseUploadBoxStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "20px",
    marginTop: "6px",
    borderWidth: 2,
    borderRadius: 8,
    height: "255px",
    // width: "12px",
    borderColor: "rgba(70, 70, 70, 0.2)",
    borderStyle: "dashed",
    // backgroundColor: isLightTheme ? "primary.B200" : "neutral.N400",
    backgroundColor: isLightTheme ? "#FAFBFC" : "#000",
    color: "#fff",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const screenSize = window.innerWidth;
  const [coverImage, setCoverImage] = useState(null);

  // const maxSize = 1024000;
  const maxSize = 1024000 * 10;
  const [isHovered, setIsHovered] = useState(false);

  const handleImage = (e) => {
    // console.log("🚀 ~ handleImage ~ e:", e.target.value);
    // setVideoLink(e.target.value);
    setCoverImage(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      if (checked) {
        setVideoLink(e.target.value);
        const regex = /(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[\?&]|$)/;

        // Extracting video ID using match function
        const match = e.target.value.match(regex);

        // Extracted video ID
        const videoId = match ? match[1] : null;
        setVideoId(videoId);

        handleUpdate(e.target.value, "questionImage", inputField);
      } else {
        const file = e[0];
        if (file) {
          const url = URL.createObjectURL(file);
          setCoverImage(url);
        }
        handleUpdate(e[0], "questionImage", inputField);
      }

      // const file = e[0];
      // if (file) {
      //   const url = URL.createObjectURL(file);
      //   setCoverImage(url);
      // }
      // handleUpdate(e[0], 'questionImage', inputField);
    } else {
      // handleChangeInput(inputField.uniqueId, e[0], "questionImage");
      // handleChangeInput(inputField.uniqueId, e.target.value, "questionImage");

      if (checked) {
        setVideoLink(e.target.value);
        const regex = /(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[\?&]|$)/;

        // Extracting video ID using match function
        const match = e.target.value.match(regex);

        // Extracted video ID
        const videoId = match ? match[1] : null;
        setVideoId(videoId);

        handleChangeInput(inputField.uniqueId, e.target.value, "questionImage");
      } else {
        handleChangeInput(inputField.uniqueId, e[0], "questionImage");
      }

      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage(url);
      }
    }
  };
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "audio/*": [],
      "video/mp4": [],
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
    // const maxSize = 512000;
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
    width = (25.7 * screenSize) / 100;
  } else if (screenSize >= 1440) {
    // Large screens
    width = (25.4 * screenSize) / 100;
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
    switch (true) {
      case value?.endsWith(".png"):
      case value?.endsWith(".jpeg"):
      case value?.endsWith(".jpg"):
        return <img height={"250"} src={value} alt='' style={{ width, borderRadius: "8px" }} />;
      case value?.endsWith(".mp3"):
      case value?.endsWith(".mpeg"):
        return (
          <audio style={{ height: "250px", width: "240px" }} controls>
            <source src={value} type='audio/mpeg' />
          </audio>
        );
      case value?.endsWith(".mp4"):
        return (
          <video height={"250px"} width={width} controls>
            <source src={value} />
          </video>
        );
      default:
        return <p>Unsupported file </p>;
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Box>
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label='Link' />
      </Box>
      {checked ? (
        <>
          <Box>
            <PdTextField
              fullWidth
              sx={{ border: "1px solid red" }}
              // onChange={(e) => setVideoLink(e.target.value)}
              onChange={handleImage}
            />
            {/* <video src={videoLink}></video> */}
            {/* <video height={'250px'} width={width} controls>
              <source src={videoLink} />
            </video> */}
            <figure class='media'>
              <div data-oembed-url={videoLink}>
                {/* <div data-oembed-url="https://www.youtube.com/watch?v=PEWP9nbqG9Q&list=RDPEWP9nbqG9Q&start_radio=1"> */}
                {/* <div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"> */}
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  // style={{position: absolute; width: 100%; height: 100%; top: 0; left: 0;}}
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen=''
                  width='100%'
                  height='240'
                ></iframe>
                {/* </div> */}
              </div>
            </figure>
            {/* <iframe
              width='100%'
              height='240'
              src={videoLink}
              // src='https://www.youtube.com/embed/Lq1uQD4Orls?si=A_cbqxbmdDQxpxF5'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe> */}
          </Box>
        </>
      ) : (
        <>
          <Grid container>
            <Grid xs={12}>
              <Typography variant='wpf_p3_medium_2'>Upload image</Typography>
            </Grid>
            <Box {...getRootProps({ width, style })}>
              {acceptedFiles.length ? (
                <>
                  {/* <Box
                sx={{
                  position: 'relative',
                  borderRadius: '8px',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {acceptedFiles[0].type === 'image/png' ||
                acceptedFiles[0].type === 'image/jpg' ||
                acceptedFiles[0].type === 'image/jpeg' ? (
                  <img height={250} src={coverImage} alt="" style={{ width, borderRadius: '8px' }} />
                ) : (
                  <iframe height={250} src={coverImage} alt="" style={{ width, borderRadius: '8px' }}></iframe>
                )}
                {isHovered && (
                  <Box sx={{ color: 'red', cursor: 'pointer', position: 'absolute', top: '40%', left: '30%' }}>
                    <Button
                      onClick={removeImage}
                      sx={{
                        width: '100px',
                        textTransform: 'none',
                        backgroundColor: '#FFFFFF',
                        color: '#2E58FF',
                        borderRadius: '20px',

                        '&:hover': {
                          backgroundColor: '#FFFFFF',
                          color: '#2E58FF',
                        },
                      }}
                    >
                      Replace
                    </Button>
                  </Box>
                )}
              </Box> */}
                  {acceptedFiles[0].size > maxSize ? (
                    <Box sx={{ width: "70%" }}>
                      <br />
                      <br />
                      <br />
                      <Typography variant='wpf_p4_medium' sx={{ color: "#ff1744" }}>
                        File : {files.length > 20 ? files.slice(0, 4) : files}
                      </Typography>
                      <Typography variant='wpf_p4_medium' sx={{ color: "#ff1744", textDecoration: "justify" }}>
                        The selected file is too large. Please choose a file less than 1Mb.
                      </Typography>
                      <Typography
                        variant='wpf_p4_medium'
                        sx={{ color: "#ff1744", textDecoration: "justify" }}
                      ></Typography>
                    </Box>
                  ) : (
                    <>
                      {" "}
                      {/* <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '8px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img height={250} src={coverImage} alt="" style={{ width, borderRadius: '8px' }} />

                    {isHovered && (
                      <Box sx={{ color: 'red', cursor: 'pointer', position: 'absolute', top: '40%', left: '30%' }}>
                        <Button
                          onClick={removeImage}
                          sx={{
                            width: '100px',
                            textTransform: 'none',
                            backgroundColor: '#FFFFFF',
                            color: '#2E58FF',
                            borderRadius: '20px',

                            '&:hover': {
                              backgroundColor: '#FFFFFF',
                              color: '#2E58FF',
                            },
                          }}
                        >
                          Replace
                        </Button>
                      </Box>
                    )}
                  </Box> */}
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
                          <img height={250} src={coverImage} alt='' style={{ width, borderRadius: "8px" }} />
                        ) : (
                          <iframe height={250} src={coverImage} alt='' style={{ width, borderRadius: "8px" }}></iframe>
                        )}

                        {isHovered && (
                          <Box
                            sx={{
                              color: "red",
                              cursor: "pointer",
                              position: "absolute",
                              top: "40%",
                              left: "30%",
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
              ) : update && !inputField.newQuiz ? (
                <>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "8px",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {handleSwitchContent(inputField.question?.questionImage)}

                    {isHovered && (
                      <Box
                        sx={{
                          color: "red",
                          cursor: "pointer",
                          position: "absolute",
                          top: "40%",
                          left: "30%",
                        }}
                      >
                        <Button
                          onClick={removeImage}
                          sx={{
                            zIndex: 10,
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <input name='questionImage' {...getInputProps()} />

                    <br />
                    <img src={IconImage} />
                    <Typography variant='wpf_p4_medium' sx={{ paddingTop: "5%" }}>
                      Upload media
                    </Typography>
                    <Typography variant='wpf_p4_medium' sx={{ paddingBottom: "2%" }}>
                      Maximum file size: 512KB.
                    </Typography>
                    {/* <img src={ctaImage} /> */}
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

export default ImageFieldQuestion2;
