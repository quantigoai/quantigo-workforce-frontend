import { Grid, InputAdornment, Radio, TextField, Typography, styled } from "@mui/material";
import React, { useState } from "react";
export const TextFieldOption = styled(TextField)(() => ({
  borderRadius: "5px",

  "& .MuiOutlinedInput-root": {
    height: "35px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",

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
export const RadioOption = styled(Radio)(() => ({
  // ... your existing styles
}));
const BasicOptionField = ({ handleChangeInput, inputField, update, handleUpdate }) => {
  console.log("🚀 ~ file: BasicOptionField.jsx:44 ~ BasicOptionField ~ inputField:", inputField);
  const [checkValue, setCheckValue] = useState(inputField?.correctAnswerIndex);
  const [optionField0, setOptionField0] = useState(inputField.possibleAnswers[0]);

  const [optionField1, setOptionField1] = useState(inputField.possibleAnswers[1]);
  const [optionField2, setOptionField2] = useState(inputField.possibleAnswers[2]);
  const [optionField3, setOptionField3] = useState(inputField.possibleAnswers[3]);

  // TO change the correct answer Index
  const handleCorrectAnswerChange = (event, index, value) => {
    if (update) {
      setCheckValue(index);
      handleUpdate(index, "correctAnswerIndex", inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.correctAnswerIndex = index), event);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }
  };
  return (
    <>
      <Typography
        variant="wpf_h7_medium"
        sx={{
          mb: 0,
          color: "neutral.N300",
        }}
      >
        List of Options
      </Typography>
      {/* <Grid container gap={1}>
        {inputField?.possibleAnswers?.map((possibleAnswer, index) => (
          <Grid item xs={12} key={index}>
            <FormControlLabel
              control={
                <RadioOption
                  checked={inputField.correctAnswer === index}
                  onChange={(event) => handleCorrectAnswerChange(event, index)}
                />
              }
              label={
                <input
                  type="text"
                  value={possibleAnswer}
                  onChange={(event) =>
                    handleChangeInput((inputField.possibleAnswers[index] = event.target.value), event)
                  }
                />
              }
            />
          </Grid>
        ))}
      </Grid> */}
      <Grid container gap={1}>
        {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group"> */}
        <Grid item xs={12}>
          <TextFieldOption
            sx={{ border: checkValue === 0 ? "1px solid #2E58FF" : "1px solid #E6ECF5 " }}
            name="possibleAnswer1"
            // multiline
            // maxRows={2}
            fullWidth
            // value={inputField.questionType === "imageInOptions" ? "" : inputField.possibleAnswers[0]}
            value={
              inputField.newQuiz
                ? inputField.possibleAnswers[0]
                : inputField.questionType === "imageInOptions"
                ? ""
                : optionField0
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={update ? checkValue === 0 : inputField?.correctAnswerIndex === 0}
                    // checked={inputField?.correctAnswerIndex === 0}
                    onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                  />
                </InputAdornment>
              ),
            }}
            // onChange={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}

            onChange={(event) => {
              setOptionField0(event.target.value);
              if (update) {
                handleUpdate(event.target.value, "possibleAnswers_0", inputField);
              } else {
                handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event);
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            sx={{ border: checkValue === 1 ? "1px solid #2E58FF" : "1px solid #E6ECF5 " }}
            name="possibleAnswer1"
            fullWidth
            // value={
            //   inputField.questionType === 'imageInOptions'
            //     ? ''
            //     : inputField.possibleAnswers[1]
            // }
            // value={inputField.possibleAnswers[1]}
            value={
              inputField.newQuiz
                ? inputField.possibleAnswers[1]
                : inputField.questionType === "imageInOptions"
                ? ""
                : optionField1
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={update ? checkValue === 1 : inputField?.correctAnswerIndex === 1}
                    // checked={inputField?.correctAnswerIndex === 1}
                    onChange={(event) => handleCorrectAnswerChange(event, 1, inputField.possibleAnswers[1])}
                  />
                </InputAdornment>
              ),
            }}
            // onChange={(event) => handleChangeInput((inputField.possibleAnswers[1] = event.target.value), event)}
            // onChange={(event) =>
            //   update
            //     ? handleUpdate(event.target.value, "possibleAnswers_1", inputField)
            //     : handleChangeInput((inputField.possibleAnswers[1] = event.target.value), event)
            // }
            onChange={(event) => {
              setOptionField1(event.target.value);
              if (update) {
                handleUpdate(event.target.value, "possibleAnswers_1", inputField);
              } else {
                handleChangeInput((inputField.possibleAnswers[1] = event.target.value), event);
              }
            }}
          />

          {/* <TextFieldOption
              name="possibleAnswer2"
              fullWidth
              onChange={(event) => handleChangeInput((inputField.possibleAnswers[1] = event.target.value), event)}
            /> */}
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            sx={{ border: checkValue === 2 ? "1px solid #2E58FF" : "1px solid #E6ECF5 " }}
            name="possibleAnswer1"
            value={
              inputField.newQuiz
                ? inputField.possibleAnswers[2]
                : inputField.questionType === "imageInOptions"
                ? ""
                : optionField2
            }
            // value={inputField.possibleAnswers[2]}
            // defaultValue={inputField.questionType === "imageInOptions" ? "" : inputField.possibleAnswers[2]}
            // value={optionField2}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={update ? checkValue === 2 : inputField?.correctAnswerIndex === 2}
                    // checked={inputField?.correctAnswerIndex === 2}
                    onChange={(event) => handleCorrectAnswerChange(event, 2, inputField.possibleAnswers[2])}
                  />
                </InputAdornment>
              ),
            }}
            // onChange={(event) => handleChangeInput((inputField.possibleAnswers[2] = event.target.value), event)}
            // onChange={(event) =>
            //   update
            //     ? handleUpdate(event.target.value, "possibleAnswers_2", inputField)
            //     : handleChangeInput((inputField.possibleAnswers[2] = event.target.value), event)
            // }
            onChange={(event) => {
              setOptionField2(event.target.value);
              if (update) {
                handleUpdate(event.target.value, "possibleAnswers_2", inputField);
              } else {
                handleChangeInput((inputField.possibleAnswers[2] = event.target.value), event);
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            sx={{ border: checkValue === 3 ? "1px solid #2E58FF" : "1px solid #E6ECF5 " }}
            name="possibleAnswer1"
            fullWidth
            value={
              inputField.newQuiz
                ? inputField.possibleAnswers[3]
                : inputField.questionType === "imageInOptions"
                ? ""
                : optionField3
            }
            // value={inputField.possibleAnswers[2]}
            // defaultValue={inputField.questionType === "imageInOptions" ? "" : inputField.possibleAnswers[3]}
            // value={optionField3}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={update ? checkValue === 3 : inputField?.correctAnswerIndex === 3}
                    // checked={inputField?.correctAnswerIndex === 3}
                    onChange={(event) => handleCorrectAnswerChange(event, 3, inputField.possibleAnswers[3])}
                  />
                </InputAdornment>
              ),
            }}
            // onChange={(event) => handleChangeInput((inputField.possibleAnswers[3] = event.target.value), event)}
            // onChange={(event) =>
            //   update
            //     ? handleUpdate(event.target.value, "possibleAnswers_3", inputField)
            //     : handleChangeInput((inputField.possibleAnswers[3] = event.target.value), event)
            // }
            onChange={(event) => {
              setOptionField3(event.target.value);
              if (update) {
                handleUpdate(event.target.value, "possibleAnswers_3", inputField);
              } else {
                handleChangeInput((inputField.possibleAnswers[3] = event.target.value), event);
              }
            }}
          />
        </Grid>
        {/* </RadioGroup> */}
      </Grid>
    </>
  );
};

export default BasicOptionField;
