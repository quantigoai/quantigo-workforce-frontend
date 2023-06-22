/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/QuestionAnswer.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 10:46:22 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import React from "react";
import CorrectAnswerField from "./QuizField.jsx/CorrectAnswerField";
import PossibleAnswersField from "./QuizField.jsx/PossibleAnswersField";

const QuestionAnswer = ({
  isUpdate = false,
  handleQA,
  handleChangeInput,
  inputField,
  inputFields,
  handleRemoveQA,
  handleUpdate,
  tempData
}) => {
  return (
    <>
      <Paper elevation={0} sx={{ width: "100%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              paddingTop: "2%",
              paddingLeft: "2%",
              paddingRight: "2%",
              paddingBottom: "1%",
            }}
          >
            <TextField
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#F8F8F8",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
              }}
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

          <PossibleAnswersField
            isUpdate={isUpdate}
            inputField={inputField}
            handleChangeInput={handleChangeInput}
            handleUpdate={handleUpdate}
          />

          <CorrectAnswerField
            inputFields={inputFields}
            isUpdate={isUpdate}
            inputField={inputField}
            handleChangeInput={handleChangeInput}
            handleUpdate={handleUpdate}
            tempData={tempData}
          />
          <Grid
            item
            sx={{
              paddingLeft: "2%",
              paddingRight: "2%",
              paddingBottom: "1%",
            }}
          >
            <Button sx={{ color: "green" }} onClick={handleQA}>
              <AddCircleIcon sx={{ cursor: "pointer", textAlign: "right" }} />
              <Typography>Add More Question</Typography>
            </Button>

            <Button
              sx={{ color: "red" }}
              disabled={inputFields.length === 1}
              onClick={() =>
                handleRemoveQA(isUpdate ? inputField._id : inputField.uniqueId)
              }
            >
              <RemoveCircleIcon
                sx={{ cursor: "pointer", textAlign: "right" }}
              />
              <Typography>Remove Question</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default QuestionAnswer;
