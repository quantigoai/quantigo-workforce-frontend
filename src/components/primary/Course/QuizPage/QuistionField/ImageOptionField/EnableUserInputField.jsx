import { Box, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";

const EnableUserInputField = ({ handleChangeInput, inputField, update, handleUpdate }) => {
  const [isTextFieldEnabled, setIsTextFieldEnabled] = useState(inputField.isTextFieldEnabled);
  const handleEnableInput = (e) => {
    setIsTextFieldEnabled(e.target.checked);
    if (update) {
      //   setCheckValue(index);

      // handleUpdate(index, 'isTextFieldEnabled', inputField);
      handleUpdate(e.target.checked, "isTextFieldEnabled", inputField);

      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.isTextFieldEnabled = e.target.checked), e);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }
  };
  return (
    <>
      <Box>
        {update ? (
          <>
            {" "}
            <Checkbox color='success' checked={isTextFieldEnabled} onChange={(e) => handleEnableInput(e)} />
          </>
        ) : (
          <>
            {" "}
            <Checkbox color='success' onChange={(e) => handleEnableInput(e)} />
          </>
        )}

        <Typography
          variant='wpf_h7_medium'
          sx={{
            mb: 0,
            color: "neutral.995",
          }}
        >
          Enable Input for annotator answer
        </Typography>
      </Box>
    </>
  );
};

export default EnableUserInputField;
