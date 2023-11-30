import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";

const DefaultTypeIndex = ({ handleChangeInput, inputField, inputFields,handleUpdate,update }) => {
 return (
    <>
      <Box>
        <QuestionName handleChangeInput={handleChangeInput} inputField={inputField} inputFields={inputFields} update={update} handleUpdate={handleUpdate} />
      </Box>
      <Box>
        <BasicOptionField handleChangeInput={handleChangeInput} inputField={inputField} update={update} handleUpdate={handleUpdate}/>
      </Box>
    </>
  );
};

export default DefaultTypeIndex;
