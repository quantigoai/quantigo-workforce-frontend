import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";
import QuestionWithImage from "../QuistionField/QuestionWithImage";

const ImageWithTitleIndex = () => {
  return (
    <>
      <Box>
        <QuestionWithImage />
      </Box>
      <Box>
        <BasicOptionField />
      </Box>
    </>
  );
};

export default ImageWithTitleIndex;
