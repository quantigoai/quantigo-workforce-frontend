import {
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
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
const BasicOptionField = ({ handleChangeInput, inputField }) => {
  console.log("🚀 ~ file: BasicOptionField.jsx:46 ~ BasicOptionField ~ inputField:", inputField)
  const handleCorrectAnswerChange = (event, index, value) => {
    console.log("🚀 ~ file: BasicOptionField.jsx:38 ~ handleCorrectAnswerChange ~ value:", value);
    console.log("🚀 ~ file: BasicOptionField.jsx:38 ~ handleCorrectAnswerChange ~ index:", index);
    console.log("🚀 ~ file: BasicOptionField.jsx:38 ~ handleCorrectAnswerChange ~ event:", event);
    handleChangeInput((inputField.correctAnswerIndex = index), event);
    handleChangeInput((inputField.correctAnswer = value), event);
  };
  return (
    <>
      <Typography
        variant="wpf_h7_medium"
        sx={{
          mb: 0,
          color: "neutral.N300",
        }}>
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
            name="possibleAnswer1"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={inputField?.correctAnswerIndex === 0}
                    onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            name="possibleAnswer1"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={inputField?.correctAnswerIndex === 1}
                    onChange={(event) => handleCorrectAnswerChange(event, 1, inputField.possibleAnswers[1])}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => handleChangeInput((inputField.possibleAnswers[1] = event.target.value), event)}
          />

          {/* <TextFieldOption
              name="possibleAnswer2"
              fullWidth
              onChange={(event) => handleChangeInput((inputField.possibleAnswers[1] = event.target.value), event)}
            /> */}
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            name="possibleAnswer1"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={inputField?.correctAnswerIndex === 2}
                    onChange={(event) => handleCorrectAnswerChange(event, 2, inputField.possibleAnswers[2])}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => handleChangeInput((inputField.possibleAnswers[2] = event.target.value), event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            name="possibleAnswer1"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={inputField?.correctAnswerIndex === 3}
                    onChange={(event) => handleCorrectAnswerChange(event, 3, inputField.possibleAnswers[3])}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => handleChangeInput((inputField.possibleAnswers[3] = event.target.value), event)}
          />
        </Grid>
        {/* </RadioGroup> */}
      </Grid>
    </>
  );
};

export default BasicOptionField;
