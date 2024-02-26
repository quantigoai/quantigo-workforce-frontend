import { Box } from '@mui/material';
import React from 'react';
import QuestionName from '../QuistionField/QuestionName';
import ImageOptionField from '../QuistionField/ImageOptionField/ImageOptionField';
import EnableUserInputField from '../QuistionField/ImageOptionField/EnableUserInputField';
import { useSelector } from 'react-redux';

const ImageInOptionIndex = ({ handleChangeInput, inputField, inputFields, update, handleUpdate }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: isLightTheme ? '#F8FAFC' : '', px: 1, py: '6px' }}>
        <EnableUserInputField
          handleChangeInput={handleChangeInput}
          inputField={inputField}
          inputFields={inputFields}
          update={update}
          handleUpdate={handleUpdate}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Box>
          <QuestionName
            handleChangeInput={handleChangeInput}
            inputField={inputField}
            inputFields={inputFields}
            handleUpdate={handleUpdate}
            update={update}
          />
        </Box>
        <Box>
          <ImageOptionField
            handleChangeInput={handleChangeInput}
            inputField={inputField}
            inputFields={inputFields}
            handleUpdate={handleUpdate}
            update={update}
          />
        </Box>
      </Box>
    </>
  );
};

export default ImageInOptionIndex;
