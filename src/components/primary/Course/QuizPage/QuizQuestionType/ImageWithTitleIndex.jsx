import { Box, Grid } from '@mui/material';
import React from 'react';
import BasicOptionField from '../QuistionField/BasicOptionField';
import QuestionWithImage from '../QuistionField/QuestionWithImage';
import EnableUserInputField from '../QuistionField/ImageOptionField/EnableUserInputField';
import ImageFieldQuestion2 from '../QuistionField/ImageFieldQuestion2';
import { useSelector } from 'react-redux';

const ImageWithTitleIndex = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
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
        <Grid container gap={'20px'}>
          <Grid xs={5.8}>
            <Grid container>
              <QuestionWithImage
                handleChangeInput={handleChangeInput}
                inputField={inputField}
                inputFields={inputFields}
                handleUpdate={handleUpdate}
                update={update}
              />
            </Grid>
            <Grid container>
              <BasicOptionField
                handleChangeInput={handleChangeInput}
                inputField={inputField}
                handleUpdate={handleUpdate}
                update={update}
              />
            </Grid>
          </Grid>

          <Grid xs={5.8}>
            <ImageFieldQuestion2
              handleChangeInput={handleChangeInput}
              inputField={inputField}
              // inputFields={inputFields}
              handleUpdate={handleUpdate}
              update={update}
            />
          </Grid>
        </Grid>
      </Box>
      {/* <Box>
        <QuestionWithImage
          handleChangeInput={handleChangeInput}
          inputField={inputField}
          inputFields={inputFields}
          handleUpdate={handleUpdate}
          update={update}
        />
      </Box>
      <Box>
        <BasicOptionField
          handleChangeInput={handleChangeInput}
          inputField={inputField}
          handleUpdate={handleUpdate}
          update={update}
        />
      </Box> */}
    </>
  );
};

export default ImageWithTitleIndex;
