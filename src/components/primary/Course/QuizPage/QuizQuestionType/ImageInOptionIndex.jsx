import { Box } from "@mui/material";
import React from "react";
import QuestionName from "../QuistionField/QuestionName";
import BasicOptionField from "../QuistionField/BasicOptionField";
import ImageOptionField from "../QuistionField/ImageOptionField/ImageOptionField";

const ImageInOptionIndex = () => {
  return (
    <>
      <Box>
        <QuestionName />
      </Box>
          <Box>
              
        <ImageOptionField />
      </Box>
    </>
  );
};

export default ImageInOptionIndex;
