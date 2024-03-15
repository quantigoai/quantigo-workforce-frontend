import { Box, Checkbox, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BpCheckedIcon, BpIcon, RadioOption, TextFieldOption } from "./basicOptionDesign";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import radioIcon from "../../../../../assets/images/courses/Switch.svg";
import SwitchCheck from "../../../../../assets/images/courses/SwitchCheck.svg";

const BasicOptionField = ({ handleChangeInput, inputField, update, handleUpdate }) => {
  const [checkValue, setCheckValue] = useState(inputField?.correctAnswerIndex);
  const [isUserInputEnabled, setIsUserInputEnabled] = useState(false);
  const [alignment, setAlignment] = React.useState(inputField?.correctAnswerIndex);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);

    if (update) {
      // setCheckValue(index);
      if (newAlignment === 0 || newAlignment === 1 || newAlignment === 2 || newAlignment === 3) {
        handleUpdate(newAlignment, "correctAnswerIndex", inputField);
      } else {
        handleUpdate(-1, "correctAnswerIndex", inputField);
      }

      // handleUpdate(newAlignment, "correctAnswerIndex", inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.correctAnswerIndex = newAlignment), event);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }
    setCheckValue(newAlignment);
  };

  const triggerCheckBox = (e) => {
    setIsUserInputEnabled(e.target.checked);
  };

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
  const handleEnableInput = (e) => {
    console.log("🚀 ~ handleEnableInput ~ e:", e.target.checked);
    if (update) {
      setCheckValue(index);
      handleUpdate(index, "isTextFieldEnabled", inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.isTextFieldEnabled = e.target.checked), e);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Checkbox defaultChecked />
          <Typography
            variant='wpf_h7_medium'
            sx={{
              mb: 0,
              color: "neutral.N300",
            }}
          >
            List of Options
          </Typography>
        </Box>
      </Box>
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

      {/* change radio button  */}
      <>
        <ToggleButtonGroup
          orientation='vertical'
          value={alignment}
          exclusive
          onChange={handleAlignment}
          // aria-label='text alignment'
        >
          <Grid container sx={{}} gap={1}>
            <Grid item xs={12} sx={{ width: "100%" }}>
              {/* <TextField fullWidth /> */}
              <TextFieldOption
                sx={{
                  border: checkValue === 0 ? "1px solid #2E58FF" : "1px solid #E6ECF5 ",
                  backgroundColor: checkValue === 0 ? "primary.B008" : "primary.B008",
                  // backgroundColor: checkValue === 0 ? "#F4F7FE" : "#F9FAFB",
                }}
                name='possibleAnswer1'
                fullWidth
                placeholder='Write an option'
                defaultValue={
                  inputField.newQuiz
                    ? inputField.possibleAnswers[0]
                    : inputField.questionType === "imageInOptions"
                    ? ""
                    : optionField0
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <ToggleButton
                        // style={{ color: alignment === "0" ? "blue" : "black" }}
                        value={0}
                        aria-label='left aligned'
                        style={{
                          border: "none",
                          padding: 0,
                          backgroundColor: "transparent",
                        }}
                      >
                        <img src={alignment === 0 ? SwitchCheck : radioIcon} />
                      </ToggleButton>

                      {/* <RadioOption
                       checked={update ? checkValue === 0 : inputField?.correctAnswerIndex === 0}
                        onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                        checkedIcon={<BpCheckedIcon />}
                        icon={<BpIcon />}
                      /> */}
                    </InputAdornment>
                  ),
                }}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position='start'>
                //       <RadioOption
                //         checked={update ? checkValue === 0 : inputField?.correctAnswerIndex === 0}
                //         onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                //         checkedIcon={<BpCheckedIcon />}
                //         icon={<BpIcon />}
                //       />
                //     </InputAdornment>
                //   ),
                // }}
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
                sx={{
                  border: checkValue === 1 ? "1px solid #2E58FF" : "1px solid #E6ECF5 ",
                  // backgroundColor: checkValue === 1 ? "#F4F7FE" : "#F9FAFB",
                  backgroundColor: checkValue === 0 ? "primary.B008" : "primary.B008",
                }}
                name='possibleAnswer1'
                fullWidth
                placeholder='Write an option'
                defaultValue={
                  inputField.newQuiz
                    ? inputField.possibleAnswers[1]
                    : inputField.questionType === "imageInOptions"
                    ? ""
                    : optionField1
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <ToggleButton
                        value={1}
                        aria-label='centered'
                        style={{
                          border: "none",
                          padding: 0,
                          backgroundColor: "transparent",
                        }}
                      >
                        {/* <FormatAlignCenterIcon /> */}
                        <img src={alignment === 1 ? SwitchCheck : radioIcon} />
                      </ToggleButton>
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  setOptionField1(event.target.value);
                  if (update) {
                    handleUpdate(event.target.value, "possibleAnswers_1", inputField);
                  } else {
                    handleChangeInput((inputField.possibleAnswers[1] = event.target.value), event);
                  }
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextFieldOption
                sx={{
                  border: checkValue === 2 ? "1px solid #2E58FF" : "1px solid #E6ECF5",
                  // backgroundColor: checkValue === 2 ? "#F4F7FE" : "#F9FAFB",
                  backgroundColor: checkValue === 0 ? "primary.B008" : "primary.B008",
                }}
                name='possibleAnswer1'
                defaultValue={
                  inputField.newQuiz
                    ? inputField.possibleAnswers[2]
                    : inputField.questionType === "imageInOptions"
                    ? ""
                    : optionField2
                }
                fullWidth
                placeholder='Write an option'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <ToggleButton
                        value={2}
                        aria-label='right aligned'
                        style={{
                          border: "none",
                          padding: 0,
                          backgroundColor: "transparent",
                        }}
                      >
                        {/* <FormatAlignRightIcon /> */}
                        <img src={alignment === 2 ? SwitchCheck : radioIcon} />
                      </ToggleButton>
                    </InputAdornment>
                  ),
                }}
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
                sx={{
                  border: checkValue === 3 ? "1px solid #2E58FF" : "1px solid #E6ECF5",
                  // backgroundColor: checkValue === 3 ? "#F4F7FE" : "#F9FAFB",
                  backgroundColor: checkValue === 0 ? "primary.B008" : "primary.B008",
                }}
                name='possibleAnswer1'
                fullWidth
                placeholder='Write an option'
                defaultValue={
                  inputField.newQuiz
                    ? inputField.possibleAnswers[3]
                    : inputField.questionType === "imageInOptions"
                    ? ""
                    : optionField3
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <ToggleButton
                        style={{
                          border: "none",
                          padding: 0,
                          backgroundColor: "transparent",
                        }}
                        value={3}
                        aria-label='justified'
                      >
                        {/* <FormatAlignJustifyIcon /> */}
                        <img src={alignment === 3 ? SwitchCheck : radioIcon} />
                      </ToggleButton>
                    </InputAdornment>
                  ),
                }}
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
          </Grid>
        </ToggleButtonGroup>
      </>
    </>
  );
};

export default BasicOptionField;
