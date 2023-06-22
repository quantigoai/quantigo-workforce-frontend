/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/QuizField.jsx/PossibleAnswersField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 12:32:43 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Grid, TextField} from "@mui/material";
import React from "react";

const PossibleAnswersField = ({
  isUpdate,
  inputField,
  handleUpdate,
  handleChangeInput,
  tempData,
}) => {
  return (
    <>
      <Grid
        item
        xs={3}
        sx={{
          paddingLeft: "2%",
          paddingRight: "1%",
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

      <Grid
        item
        xs={3}
        sx={{
          paddingLeft: "1%",
          paddingRight: "1%",
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

      <Grid
        item
        xs={3}
        sx={{
          paddingLeft: "1%",
          paddingRight: "1%",
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

      <Grid
        item
        xs={3}
        sx={{
          paddingLeft: "1%",
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
    </>
  );
};

export default PossibleAnswersField;
