import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";
import QuestionWithImage from "../QuistionField/QuestionWithImage";

const ImageWithTitleIndex = ({handleChangeInput, inputField, inputFields }) => {
  return (
    <>
      <Box>
        <QuestionWithImage handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields} />
      </Box>
      <Box>
        <BasicOptionField handleChangeInput={handleChangeInput} inputField={inputField}  />
      </Box>
    </>
  );
};

export default ImageWithTitleIndex;
