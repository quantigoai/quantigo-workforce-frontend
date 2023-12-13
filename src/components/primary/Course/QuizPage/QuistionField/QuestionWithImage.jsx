import { Box, Grid, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import ImageFieldForQuestion from './ImageFieldForQuestion';
export const TextFieldQuestion = styled(TextField)(() => ({
  borderRadius: '5px',

  '& .MuiOutlinedInput-root': {
    height: '35px',
    fontSize: '14px',
    border: '2px solid #E6ECF5 !important',
    borderRadius: '8px',

    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 8px',
  },
  '& .MuiOutlinedInput-notchedOutline ': {},
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#56627a',
  },
  '& .MuiFormHelperText-root': {
    color: '#12B76A',
    '&.Mui-error': {
      color: '#F04438',
    },
  },
}));
const QuestionWithImage = ({
  handleChangeInput,
  inputField,
  inputFields,
  handleUpdate,
  update,

}) => {
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6} sx={{ paddingRight: '1%' }}>
            {' '}
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: 'neutral.N300',
              }}
            >
              Question Name
            </Typography>
            <Box sx={{ width: '100%' }}>
              <TextFieldQuestion
                size="small"
                type={'text'}
                id="outlined-basic"
                // {...field}
                fullWidth
                variant="outlined"
                name="questionText"
                defaultValue={inputField.question.questionText}
                // required={label === "Benchmark" ? false : true}
                // onChange={(event) => handleChangeInput(inputField.uniqueId, event)}
                onChange={(event) =>
                  update
                    ? handleUpdate(
                        event.target.value,
                        'questionText',
                        inputField,
                      )
                    : handleChangeInput(inputField.uniqueId, event)
                }
                sx={{
                  backgroundColor: 'neutral.N000',
                }}
              />
            </Box>
          </Grid>
          <ImageFieldForQuestion
            inputField={inputField}
            // handleImage={handleImage}
            handleUpdate={handleUpdate}
            handleChangeInput={handleChangeInput}
        
            update={update}
          />
        </Grid>
      </Box>
    </>
  );
};

export default QuestionWithImage;
