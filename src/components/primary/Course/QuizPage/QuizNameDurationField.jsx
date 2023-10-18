import React from "react";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { Box } from "@mui/material";
import CustomTextField from "../../../shared/CustomField/CustomTextField";
import PrimaryButton from "../../Auth/Register/PrimaryButton";

const QuizNameDurationField = ({ methods, onSubmit, handleSubmit }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }} gap={2}>
      <Box sx={{ width: "100%", height: "120px" }}>
        <CustomTextField
          name="quiz_name"
          label="Quiz Name"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "110px",
        }}
      >
        <CustomTextField
          name="duration"
          label="duration"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>
    </Box>
  );
};

export default QuizNameDurationField;
