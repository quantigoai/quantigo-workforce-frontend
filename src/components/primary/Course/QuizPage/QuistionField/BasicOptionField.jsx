import { Box, Checkbox, Grid, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import {
  BpCheckedIcon,
  BpIcon,
  RadioOption,
  TextFieldOption,
} from './basicOptionDesign';

const BasicOptionField = ({
  handleChangeInput,
  inputField,
  update,
  handleUpdate,
}) => {
  const [checkValue, setCheckValue] = useState(inputField?.correctAnswerIndex);
  const [isUserInputEnabled, setIsUserInputEnabled] = useState(false);

  const triggerCheckBox = (e) => {
    setIsUserInputEnabled(e.target.checked);
  };

  const [optionField0, setOptionField0] = useState(
    inputField.possibleAnswers[0],
  );

  const [optionField1, setOptionField1] = useState(
    inputField.possibleAnswers[1],
  );
  const [optionField2, setOptionField2] = useState(
    inputField.possibleAnswers[2],
  );
  const [optionField3, setOptionField3] = useState(
    inputField.possibleAnswers[3],
  );

  // TO change the correct answer Index
  const handleCorrectAnswerChange = (event, index, value) => {
    if (update) {
      setCheckValue(index);
      handleUpdate(index, 'correctAnswerIndex', inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.correctAnswerIndex = index), event);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }
  };
  const handleEnableInput = (e) => {
    console.log('🚀 ~ handleEnableInput ~ e:', e.target.checked);
    if (update) {
      setCheckValue(index);
      handleUpdate(index, 'isTextFieldEnabled', inputField);
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
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Checkbox defaultChecked />
          <Typography
            variant="wpf_h7_medium"
            sx={{
              mb: 0,
              color: 'neutral.N300',
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
      <Grid container gap={1}>
        {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group"> */}
        <Grid item xs={12}>
          <TextFieldOption
            sx={{
              border:
                checkValue === 0 ? '1px solid #2E58FF' : '1px solid #E6ECF5 ',
              backgroundColor: checkValue === 0 ? '#F4F7FE' : '#F9FAFB',
            }}
            name="possibleAnswer1"
            fullWidth
            placeholder="Write an option"
            defaultValue={
              inputField.newQuiz
                ? inputField.possibleAnswers[0]
                : inputField.questionType === 'imageInOptions'
                ? ''
                : optionField0
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={
                      update
                        ? checkValue === 0
                        : inputField?.correctAnswerIndex === 0
                    }
                    onChange={(event) =>
                      handleCorrectAnswerChange(
                        event,
                        0,
                        inputField.possibleAnswers[0],
                      )
                    }
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              setOptionField0(event.target.value);
              if (update) {
                handleUpdate(
                  event.target.value,
                  'possibleAnswers_0',
                  inputField,
                );
              } else {
                handleChangeInput(
                  (inputField.possibleAnswers[0] = event.target.value),
                  event,
                );
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            sx={{
              border:
                checkValue === 1 ? '1px solid #2E58FF' : '1px solid #E6ECF5 ',
              backgroundColor: checkValue === 1 ? '#F4F7FE' : '#F9FAFB',
            }}
            name="possibleAnswer1"
            fullWidth
            placeholder="Write an option"
            defaultValue={
              inputField.newQuiz
                ? inputField.possibleAnswers[1]
                : inputField.questionType === 'imageInOptions'
                ? ''
                : optionField1
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={
                      update
                        ? checkValue === 1
                        : inputField?.correctAnswerIndex === 1
                    }
                    // checked={inputField?.correctAnswerIndex === 1}
                    onChange={(event) =>
                      handleCorrectAnswerChange(
                        event,
                        1,
                        inputField.possibleAnswers[1],
                      )
                    }
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              setOptionField1(event.target.value);
              if (update) {
                handleUpdate(
                  event.target.value,
                  'possibleAnswers_1',
                  inputField,
                );
              } else {
                handleChangeInput(
                  (inputField.possibleAnswers[1] = event.target.value),
                  event,
                );
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            sx={{
              border:
                checkValue === 2 ? '1px solid #2E58FF' : '1px solid #E6ECF5',
              backgroundColor: checkValue === 2 ? '#F4F7FE' : '#F9FAFB',
            }}
            name="possibleAnswer1"
            defaultValue={
              inputField.newQuiz
                ? inputField.possibleAnswers[2]
                : inputField.questionType === 'imageInOptions'
                ? ''
                : optionField2
            }
            fullWidth
            placeholder="Write an option"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={
                      update
                        ? checkValue === 2
                        : inputField?.correctAnswerIndex === 2
                    }
                    onChange={(event) =>
                      handleCorrectAnswerChange(
                        event,
                        2,
                        inputField.possibleAnswers[2],
                      )
                    }
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              setOptionField2(event.target.value);
              if (update) {
                handleUpdate(
                  event.target.value,
                  'possibleAnswers_2',
                  inputField,
                );
              } else {
                handleChangeInput(
                  (inputField.possibleAnswers[2] = event.target.value),
                  event,
                );
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption
            sx={{
              border:
                checkValue === 3 ? '1px solid #2E58FF' : '1px solid #E6ECF5',
              backgroundColor: checkValue === 3 ? '#F4F7FE' : '#F9FAFB',
            }}
            name="possibleAnswer1"
            fullWidth
            placeholder="Write an option"
            defaultValue={
              inputField.newQuiz
                ? inputField.possibleAnswers[3]
                : inputField.questionType === 'imageInOptions'
                ? ''
                : optionField3
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RadioOption
                    checked={
                      update
                        ? checkValue === 3
                        : inputField?.correctAnswerIndex === 3
                    }
                    // checked={inputField?.correctAnswerIndex === 3}
                    onChange={(event) =>
                      handleCorrectAnswerChange(
                        event,
                        3,
                        inputField.possibleAnswers[3],
                      )
                    }
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              setOptionField3(event.target.value);
              if (update) {
                handleUpdate(
                  event.target.value,
                  'possibleAnswers_3',
                  inputField,
                );
              } else {
                handleChangeInput(
                  (inputField.possibleAnswers[3] = event.target.value),
                  event,
                );
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
