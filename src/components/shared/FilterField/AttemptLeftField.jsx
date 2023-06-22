/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/AttemptLeftField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 20th 2023, 12:22:39 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {FormControl, TextField} from "@mui/material";
import React from "react";
import {useOutletContext} from "react-router-dom";

const AttemptLeftField = () => {
  const [
    statusType,
    setStatusType,
    annotator,
    setAnnotator,
    reviewer,
    setReviewer,
    attemptLeft,
    setAttemptLeft,
    date,
    setDate,
    handleFilter,
    handleReset,
    handleClose,
    anchorEl,
    setAnchorEl,
    isClicked,
    setIsClicked,
    dateValue,
    setDateValue,
  ] = useOutletContext();
  
  return (
    <>
      <FormControl fullWidth variant="filled">
        <TextField
          id="filled-multiline-flexible"
          label="Attempt Left"
          type="number"
          value={attemptLeft || ""}
          InputProps={{ inputProps: { min: 0, max: 3 } }}
          variant="filled"
          onChange={(e) => setAttemptLeft(e.target.value)}
        />
      </FormControl>
    </>
  );
};

export default AttemptLeftField;
