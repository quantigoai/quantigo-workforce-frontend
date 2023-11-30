import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";
import ImageOptionField from "../QuistionField/ImageOptionField/ImageOptionField";

const ImageInOptionIndex = ({handleChangeInput, inputField, inputFields ,update, handleUpdate}) => {
  return (
    <>
      <Box>
        <QuestionName handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields}  handleUpdate={handleUpdate} update={update} />
      </Box>
          <Box>
              
        <ImageOptionField handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields}  handleUpdate={handleUpdate}  update={update} />
      </Box>
    </>
  );
};

export default ImageInOptionIndex;
