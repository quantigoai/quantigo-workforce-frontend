import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";

const DefaultTypeIndex = ({ handleChangeInput, inputField, inputFields }) => {
  return (
    <>
      <Box>
        <QuestionName handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields} />
      </Box>
      <Box>
        <BasicOptionField handleChangeInput={handleChangeInput} inputField={inputField} />
      </Box>
    </>
  );
};

export default DefaultTypeIndex;
