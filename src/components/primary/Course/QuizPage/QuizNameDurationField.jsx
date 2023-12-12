import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomTextField from "../../../shared/CustomField/CustomTextField";

const QuizNameDurationField = ({ methods, onSubmit, handleSubmit }) => {
  const { quiz } = useSelector((state) => state.quiz);
  console.log("🚀 ~ file: QuizNameDurationField.jsx:8 ~ QuizNameDurationField ~ quiz:", quiz);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom: "2%" }} gap={2}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <CustomTextField
          name="quiz_name"
          label="Quiz Name"
          defaultValue={quiz.name}
          InputProps={
            {
              //disableUnderline: true,
            }
          }
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CustomTextField
          name="duration"
          label="duration"
          defaultValue={quiz.duration}
          InputProps={
            {
              //disableUnderline: true,
            }
          }
        />
      </Box>
    </Box>
  );
};

export default QuizNameDurationField;
