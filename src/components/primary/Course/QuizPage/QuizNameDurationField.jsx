import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomTextField from "../../../shared/CustomField/CustomTextField";

const QuizNameDurationField = ({ methods, onSubmit, handleSubmit, update }) => {
  const { quiz } = useSelector((state) => state.quiz);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom: "2%" }} gap={2}>
      <Box sx={{ width: "100%", height: "100px" }}>
        <CustomTextField
          name={update ? "name" : "quiz_name"}
          label="Quiz Name"
          defaultValue={update ? quiz.name : ""}
          InputProps={
            {
              //disableUnderline: true,
            }
          }
          isRequired={true}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CustomTextField
          placeholder={"Duration between 1 to 20"}
          name="duration"
          label="Duration (Minutes)"
          defaultValue={update ? quiz.duration : ""}
          isNumber={true}
        />
      </Box>
    </Box>
  );
};

export default QuizNameDurationField;
