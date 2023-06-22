/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/QuizField.jsx/CorrectAnswerField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 12:26:47 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CorrectAnswerField = ({
  inputField,
  inputFields,
  handleChangeInput,
  isUpdate,
  handleUpdate,
  tempData,
}) => {
  const [isOpen, SetIsOpen] = useState(false);
  const [newPossibleAnswers, setNewPossibleAnswers] = useState([]);

  // This effect will change every time after changing the possible answers
  useEffect(() => {
    if (tempData?.quizId) {
      const questionId = tempData.questionAndAnswer[inputField._id];
      if (questionId) {
        const indexes = Object.keys(questionId.pa);
        const answers = [...inputField.possibleAnswers];
        indexes.forEach((index) => {
          answers[index] = questionId.pa[index];
        });
        setNewPossibleAnswers(answers);
      }
    }
  }, [tempData]);

  const handleToggleControl = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      {/* {inputField.possibleAnswers.length > 0 && ( */}
        <Grid
          item
          xs={12}
          sx={{
            paddingLeft: "2%",
            paddingRight: "2%",
            paddingBottom: "1%",
          }}>
          <FormControl fullWidth variant="filled">
            <InputLabel id="demo-simple-select-label">
              Correct Answer
            </InputLabel>
            <Select
              IconComponent={() =>
                isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
              }
              onOpen={handleToggleControl}
              onClose={handleToggleControl}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="correctAnswer"
              defaultValue={inputField.correctAnswer || ""}
              onChange={(event) => {
                handleChangeInput(
                  isUpdate
                    ? handleUpdate(event.target.value, 5, inputField)
                    : inputField.uniqueId,
                  event
                );
              }}>
              {newPossibleAnswers.length > 0
                ? newPossibleAnswers.map(
                    (answer, index) =>
                      index < 4 && (
                        <MenuItem key={index} value={answer}>
                          {answer}
                        </MenuItem>
                      )
                  )
                : inputField.possibleAnswers.map((answer, index) => (
                    <MenuItem key={index} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>

          {/* <TextField
          variant="filled"
          fullWidth
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
          name="correctAnswer"
          label="Correct Answer"
          defaultValue={inputField.correctAnswer}
          onChange={(event) =>
            handleChangeInput(
              isUpdate
                ? handleUpdate(event.target.value, 5, inputField)
                : inputField.uniqueId,
              event
            )
          }
        ></TextField> */}
        </Grid>
       {/* )} */}
    </>
  );
};

export default CorrectAnswerField;
