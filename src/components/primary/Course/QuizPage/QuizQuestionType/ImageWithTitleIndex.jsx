import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";
import QuestionWithImage from "../QuistionField/QuestionWithImage";

const ImageWithTitleIndex = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
  console.log("🚀 ~ file: ImageWithTitleIndex.jsx:8 ~ ImageWithTitleIndex ~ inputField:", inputField)
  return (
    <>
      <Box>
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
      </Box>
    </>
  );
};

export default ImageWithTitleIndex;
