import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";

const CategoryField = () => {
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

export default CategoryField;
