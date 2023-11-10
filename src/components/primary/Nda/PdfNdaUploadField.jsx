/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/CoverImageField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:35:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Box, Grid, Typography} from '@mui/material';
import React, {useMemo} from 'react';
// import dragiconplus from "../../../../assets/images/dragiconplus.svg";
import {useDropzone} from 'react-dropzone';
import {useSelector} from 'react-redux';
import ctaImage from '../../../assets/images/CTA.png';
import IconImage from '../../../assets/images/Icon.png';
import ndaUploadStyle from './ndaUploadStyle';

const focusedStyle = {
  borderColor: '#266AED',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const PdfNdaUploadField = ({ handleImage, selectedFile, removeImage }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { baseUploadBoxStyle } = ndaUploadStyle(isLightTheme);
  const maxSize = 0.5 * 1024 * 1024;
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    onDrop: handleImage,
  });

  const style = useMemo(() => {
    const fileSize = selectedFile ? selectedFile.size : null;
    const maxSize = 0.5 * 1024 * 1024; // 1MB in bytes
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
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
                onClick={selectedFile.size > maxSize && removeImage}
              >
                <Typography
                  variant="wpf_p3_regular"
                  sx={{
                    color:
                      selectedFile?.size > maxSize ? '#ff1744' : 'neutral.N300',
                  }}
                >
                  File : {files}
                </Typography>
                {selectedFile.size > maxSize ? (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="wpf_p3_regular"
                      sx={{ color: '#ff1744', textAlign: 'center' }}
                    >
                      The selected file is too large. Please choose a file less
                      than 512Kb.
                    </Typography>
                    <Typography
                      variant="wpf_p3_regular"
                      sx={{ color: '#ff1744', textDecoration: 'justify' }}
                    >
                      Click here again to change the file.
                    </Typography>
                  </Box>
                ) : (
                  <></>
                )}
              </Box>
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
                <input {...getInputProps()} type="file" name="file" />
                <br />
                <img src={IconImage} />
                <Typography variant="wpf_p2_regular" sx={{ paddingTop: '1%' }}>
                  Drag and Drop a file here or Browse (Pdf)
                </Typography>
                <Typography
                  variant="wpf_p2_regular"
                  sx={{ paddingBottom: '2%' }}
                >
                  Maximum file size: 512Kb.
                </Typography>
                {/* <p> Maximum file size: 1MB.</p> */}
                <img src={ctaImage} />
              </Box>
            )}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default PdfNdaUploadField;
