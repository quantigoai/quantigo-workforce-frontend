import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
// import dragiconplus from "../../../../assets/images/dragiconplus.svg";
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import ctaImage from '../../../assets/images/CTA.png';
import IconImage from '../../../assets/images/Icon.png';
import ndaUploadStyle from '../Nda/ndaUploadStyle';

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const DocumentImageUpload = ({
  coverImageFile,
  coverImage,
  removeImage,
  handleImage,
}) => {
  const screenSize = window.innerWidth;
  const { isLightTheme } = useSelector((state) => state.theme);
  const { baseUploadBoxStyle } = ndaUploadStyle(isLightTheme);
  const maxSize = 1024000;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [], 'image/jpg': [] },
    onDrop: handleImage,
  });

  const style = useMemo(() => {
    const fileSize = acceptedFiles ? acceptedFiles[0]?.size : null;
    const maxSize = 1024000; // 1MB in bytes
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
  }, [isFocused, isDragAccept, isDragReject, acceptedFiles]);

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
    width = 630;
  } else if (screenSize === 1440) {
    // Large screens
    width = 470;
  } else if (screenSize >= 992) {
    // Large screens
    width = 510;
  }

  return (
    <>
      <Grid container>
        <Box {...getRootProps({ style })}>
          {acceptedFiles.length && coverImage ? (
            <>
              {acceptedFiles[0].size > maxSize ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                  onClick={removeImage}
                >
                  <Typography
                    variant="wpf_p3_regular"
                    sx={{ color: '#ff1744' }}
                  >
                    File : {files}
                  </Typography>
                  <Typography
                    variant="wpf_p3_regular"
                    sx={{ color: '#ff1744', textDecoration: 'justify' }}
                  >
                    The selected file is too large. Please choose a file less
                    than 1Mb.
                  </Typography>
                  <Typography
                    variant="wpf_p3_regular"
                    sx={{ color: '#ff1744', textDecoration: 'justify' }}
                  >
                    Click here again to change the file.
                  </Typography>
                </Box>
              ) : (
                <>
                  {' '}
                  <Box
                    sx={{
                      position: 'relative',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      height={225}
                      src={coverImage}
                      alt=""
                      style={{ width }}
                    />
                    {/* <p>File : {files}</p> */}
                    {isHovered && (
                      <Box
                        sx={{
                          color: 'red',
                          cursor: 'pointer',
                          position: 'absolute',
                          top: '45%',
                          right: '43%',
                        }}
                      >
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
              )}
            </>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <input {...getInputProps()} />
              <br />
              <img src={IconImage} />
              <Typography variant="wpf_p2_regular" sx={{ paddingTop: '1%' }}>
                Drag and Drop a file here or Browse” (JPG/ JPEG / PNG){' '}
              </Typography>
              <Typography variant="wpf_p2_regular" sx={{ paddingBottom: '2%' }}>
                Maximum file size: 1Mb.
              </Typography>
              <img src={ctaImage} />
            </Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default DocumentImageUpload;
