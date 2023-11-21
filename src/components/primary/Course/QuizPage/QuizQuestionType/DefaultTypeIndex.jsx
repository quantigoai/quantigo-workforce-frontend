import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";

const DefaultTypeIndex = () => {
  return (
    <>
      <Box>
        <QuestionName />
      </Box>
      <Box>
        <BasicOptionField />
      </Box>
    </>
  );
};

export default DefaultTypeIndex;
