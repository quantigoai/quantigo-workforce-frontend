import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';

const EnableUserInputField = ({ handleChangeInput, inputField, update, handleUpdate }) => {
  const handleEnableInput = (e) => {
    console.log('🚀 ~ handleEnableInput ~ e:', e.target.checked);
    if (update) {
      //   setCheckValue(index);
      handleUpdate(index, 'isTextFieldEnabled', inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.isTextFieldEnabled = e.target.checked), e);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }
  };
  return (
    <>
      <Box>
        <Checkbox color="success" onChange={(e) => handleEnableInput(e)} />
        <Typography
          variant="wpf_h7_medium"
          sx={{
            mb: 0,
            color: 'neutral.995',
          }}
        >
          Enable Input for annotator answer
        </Typography>
      </Box>
    </>
  );
};

export default EnableUserInputField;