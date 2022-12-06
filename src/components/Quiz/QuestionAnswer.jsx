/*
 * Filename: /home/tanzim/OfficeWorkstation/wmp-front/src/components/Quiz/QuestionAnswer.jsx
 * Path: /home/tanzim/OfficeWorkstation/wmp-front
 * Created Date: Monday, November 21st 2022, 10:36:33 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */


import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {Button, Grid, TextField} from "@mui/material";
import React from "react";

const QuestionAnswer = ({
  isUpdate = false,
  handleQA,
  handleChangeInput,
  inputField,
  inputFields,
  handleRemoveQA,
  handleUpdate,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="question"
          label="Question"
          defaultValue={inputField.question}
          onChange={(event) =>
            handleChangeInput(
              isUpdate
                ? handleUpdate(event.target.value, 4, inputField)
                : inputField.uniqueId,
              event
            )
          }
        ></TextField>
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          fullWidth
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
        ></TextField>
      </Grid>

      <Grid item xs={3}>
        <TextField
          required
          fullWidth
          name="possibleAnswer1"
          label="Possible Answer"
          defaultValue={
            inputField.possibleAnswers[0] && inputField.possibleAnswers[0]
          }
          onChange={(event) =>
            isUpdate
              ? handleUpdate(event.target.value, 0, inputField)
              : handleChangeInput(
                  (inputField.possibleAnswers[0] = event.target.value),
                  event
                )
          }
        ></TextField>
      </Grid>
      <Grid item xs={3}>
        <TextField
          required
          fullWidth
          name="possibleAnswer2"
          label="Possible Answer"
          defaultValue={inputField.possibleAnswers[1]}
          onChange={(event) =>
            isUpdate
              ? handleUpdate(event.target.value, 1, inputField)
              : handleChangeInput(
                  (inputField.possibleAnswers[1] = event.target.value),
                  event
                )
          }
        ></TextField>
      </Grid>
      <Grid item xs={3}>
        <TextField
          required
          fullWidth
          name="possibleAnswer3"
          label="Possible Answer"
          defaultValue={inputField.possibleAnswers[2]}
          onChange={(event) =>
            isUpdate
              ? handleUpdate(event.target.value, 2, inputField)
              : handleChangeInput(
                  (inputField.possibleAnswers[2] = event.target.value),
                  event
                )
          }
        ></TextField>
      </Grid>
      <Grid item xs={3}>
        <TextField
          required
          fullWidth
          name="possibleAnswer4"
          label="Possible Answer"
          defaultValue={inputField.possibleAnswers[3]}
          onChange={(event) =>
            isUpdate
              ? handleUpdate(event.target.value, 3, inputField)
              : handleChangeInput(
                  (inputField.possibleAnswers[3] = event.target.value),
                  event
                )
          }
        ></TextField>
      </Grid>
      <Grid item>
        <Button sx={{ color: "green" }} onClick={handleQA}>
          <AddCircleIcon sx={{ cursor: "pointer", textAlign: "right" }} />
        </Button>

        <Button
          sx={{ color: "red" }}
          disabled={inputFields.length === 1}
          onClick={() =>
            handleRemoveQA(isUpdate ? inputField._id : inputField.uniqueId)
          }
        >
          <RemoveCircleIcon sx={{ cursor: "pointer", textAlign: "right" }} />
        </Button>
      </Grid>
    </>
  );
};

export default QuestionAnswer;
