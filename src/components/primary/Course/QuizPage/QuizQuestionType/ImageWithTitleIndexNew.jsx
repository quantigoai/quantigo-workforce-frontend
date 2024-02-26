import { Grid } from '@mui/material';
import React from 'react';
import QuestionName from '../QuistionField/QuestionName';
import BasicOptionField from '../QuistionField/BasicOptionField';
import ImageFieldQuestion2 from '../QuistionField/ImageFieldQuestion2';

const ImageWithTitleIndexNew = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <Grid container>
            <QuestionName
              handleChangeInput={handleChangeInput}
              inputField={inputField}
              inputFields={inputFields}
              update={update}
              handleUpdate={handleUpdate}
            />
          </Grid>
          <Grid container>
            <BasicOptionField
              inputFields={inputFields}
              handleChangeInput={handleChangeInput}
              inputField={inputField}
              update={update}
              handleUpdate={handleUpdate}
            />
          </Grid>
        </Grid>
        <Grid xs={6}>
          <ImageFieldQuestion2 />
        </Grid>
      </Grid>
    </>
  );
};

export default ImageWithTitleIndexNew;
