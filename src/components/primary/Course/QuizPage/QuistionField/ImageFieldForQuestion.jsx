/*
 * File           : ImageFieldForQuestion.js
 * Project        : wmpfrontv2
 * Created Date   : We 13 Dec 2023 12:26:49
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Dec 13 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 10,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 10,
});

const ImageFieldForQuestion = ({
  inputField,
  handleUpdate,
  handleChangeInput,
  update,
  handleImageFn,
}) => {
  const handleImage = (e, id) => {
    console.log('🚀 ~ file: QuestionWithImage.jsx:56 ~ handleImage ~ id:', id);
    // setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      // setCoverImage(url);
    }
    if (update) {
      console.log(
        '🚀 ~ file: QuestionWithImage.jsx:68 ~ handleImage ~ inputField:',
        inputField,
      );
      handleUpdate(e.target.files[0], 'questionImage', inputField);
    } else {
      handleChangeInput(inputField.uniqueId, e);
    }
  };

  return (
    <>
      <Grid item xs={6}>
        <Typography
          variant="wpf_h7_medium"
          sx={{
            mb: 0,
            color: 'neutral.N300',
          }}
        >
          Upload Image
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container>
            <Box sx={{ width: '70%' }}>
              <TextField
                sx={{
                  height: '35px',
                  fontSize: '14px',
                  border: '2px solid #E6ECF5 !important',
                  borderRadius: '8px 0px 0px 8px',
                }}
                size="small"
                type={'text'}
                id="outlined-basic"
                // placeholder="Choose "
                // {...field}
                fullWidth
                variant="outlined"
                // required={label === "Benchmark" ? false : true}
              />
            </Box>

            <Box sx={{ width: '30%' }}>
              <input
                style={{ display: 'none' }}
                id="upload-photo"
                name="questionImage"
                type="file"
                accept="image/png,  image/jpeg, image/jpg"
                // onChange={(e) => handleImage(e, inputField._id)}
                onChange={(e) => handleImageFn(e, inputField._id)}
                // onchange="handleImageChange"
              />
              {/* <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                // onSubmit={(e) => e.preventDefault()}
                >
                Upload file
                <VisuallyHiddenInput
                  type="file"
                  accept="image/png,  image/jpeg, image/jpg"
                  onChange={(e) => handleImageFn(e, inputField._id)}
                />
              </Button> */}
              <label htmlFor="upload-photo">
                <Button
                  sx={{
                    height: '35px',
                    width: '100%',
                    fontSize: '14px',
                    border: '2px solid #E6ECF5 !important',

                    borderRadius: '0px 8px 8px 0px',
                    zIndex: 2,
                  }}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <i className="ri-upload-2-line"></i>
                  <Typography
                    variant="wpf_h7_medium"
                    sx={{
                      pl: 1,
                      textTransform: 'none',
                      color: '#2E58FF',
                    }}
                  >
                    Upload
                  </Typography>
                </Button>
              </label>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ImageFieldForQuestion;
