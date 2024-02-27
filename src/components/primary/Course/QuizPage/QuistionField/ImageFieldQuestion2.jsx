import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ndaUploadStyle from '../../../Nda/ndaUploadStyle';
import IconImage from '../../../../../assets/images/Icon.png';
import ctaImage from '../../../../../assets/images/CTA.png';
import { useSelector } from 'react-redux';
const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
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
  console.log('🚀 ~ inputField:', inputField);
  const { isLightTheme } = useSelector((state) => state.theme);
  const baseUploadBoxStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: "20px",
    marginTop: '6px',
    borderWidth: 2,
    borderRadius: 8,
    height: '255px',
    // width: "12px",
    borderColor: 'rgba(70, 70, 70, 0.2)',
    borderStyle: 'dashed',
    // backgroundColor: isLightTheme ? "primary.B200" : "neutral.N400",
    backgroundColor: isLightTheme ? '#FAFBFC' : '#000',
    color: '#fff',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };
  const screenSize = window.innerWidth;
  const [coverImage, setCoverImage] = useState(null);

  // const maxSize = 1024000;
  const maxSize = 1024000 * 10;
  const [isHovered, setIsHovered] = useState(false);

  const handleImage = (e) => {
    setCoverImage(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage(url);
      }
      handleUpdate(e[0], 'questionImage', inputField);
    } else {
      handleChangeInput(inputField.uniqueId, e[0], 'questionImage');
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage(url);
      }
    }
  };
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [], 'image/jpg': [], 'audio/*': [], 'video/mp4': [] },
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

  let width = '90%'; // Default width for large screens

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
      case value?.endsWith('.png'):
      case value?.endsWith('.jpeg'):
      case value?.endsWith('.jpg'):
        return <img height={'250'} src={value} alt="" style={{ width, borderRadius: '8px' }} />;
      case value?.endsWith('.mp3'):
      case value?.endsWith('.mpeg'):
        return (
          <audio style={{ height: '250px', width: '220px' }} controls>
            <source src={value} type="audio/mpeg" />
          </audio>
        );
      case value?.endsWith('.mp4'):
        return (
          <video height={'250'} width={'100%'} controls>
            <source src={value} />
          </video>
        );
      default:
        return <p>Unsupported file </p>;
    }
  };

  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <Typography variant="wpf_p3_medium_2">Upload image</Typography>
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
                <Box sx={{ width: '70%' }}>
                  <br />
                  <br />
                  <br />
                  <Typography variant="wpf_p4_medium" sx={{ color: '#ff1744' }}>
                    File : {files.length > 20 ? files.slice(0, 4) : files}
                  </Typography>
                  <Typography variant="wpf_p4_medium" sx={{ color: '#ff1744', textDecoration: 'justify' }}>
                    The selected file is too large. Please choose a file less than 1Mb.
                  </Typography>
                  <Typography variant="wpf_p4_medium" sx={{ color: '#ff1744', textDecoration: 'justify' }}></Typography>
                </Box>
              ) : (
                <>
                  {' '}
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
                  </Box>
                </>
              )}
            </>
          ) : update && !inputField.newQuiz ? (
            <>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '8px',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {handleSwitchContent(inputField.question?.questionImage)}

                {isHovered && (
                  <Box sx={{ color: 'red', cursor: 'pointer', position: 'absolute', top: '40%', left: '30%' }}>
                    <Button
                      onClick={removeImage}
                      sx={{
                        zIndex: 10,
                        width: '100px',
                        textTransform: 'none',
                        backgroundColor: '#FFFFFF',
                        color: '#2E58FF',
                        borderRadius: '20px',

                        '&:hover': {
                          backgroundColor: '#FFFFFF',
                          color: '#2E58FF',
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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <input name="questionImage" {...getInputProps()} />

                <br />
                <img src={IconImage} />
                <Typography variant="wpf_p4_medium" sx={{ paddingTop: '5%' }}>
                  Upload image
                </Typography>
                <Typography variant="wpf_p4_medium" sx={{ paddingBottom: '2%' }}>
                  Maximum file size: 512KB.
                </Typography>
                {/* <img src={ctaImage} /> */}
              </Box>
            </Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default ImageFieldQuestion2;
