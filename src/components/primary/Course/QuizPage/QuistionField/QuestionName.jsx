import {Box, styled, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

export const PdTextField = styled(TextField)(() => ({
  borderRadius: "5px",
  backgroundColor: "#F9FAFB",
  "& .MuiOutlinedInput-root": {
    height: "40px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",

    backgroundColor: "#F9FAFB",
    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {},
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const QuestionName = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
  const [questionNameField, setQuestionNameField] = useState(inputField.question.questionText);

  return (
    <>
      <Box>
        <Typography
          variant="wpf_h7_medium"
          sx={{
            mb: 0,
            color: "neutral.N300",
          }}
        >
          Question Name+{inputField._id}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <PdTextField
            size="small"
            type={"text"}
            id="outlined-basic"
            fullWidth
            name="questionText"
            variant="outlined"
            // defaultValue={inputField.question.questionText && inputField.question.questionText}
            // value={inputField.question.questionText && inputField.question.questionText}
            // value={isCompleted}
            value={inputField.newQuiz ? inputField.question.questionText : questionNameField}
            // required={label === "Benchmark" ? false : true}
            // onChange={(event) => handleChangeInput(inputField.uniqueId, event)}
            onChange={(event) => {
              setQuestionNameField(event.target.value);
              if (update) {
                handleUpdate(event.target.value, "questionText", inputField);
              } else {
                handleChangeInput(inputField.uniqueId, event);
              }
            }}
            sx={{
              backgroundColor: "neutral.N000",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default QuestionName;
