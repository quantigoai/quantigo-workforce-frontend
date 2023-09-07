import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
const ProjectIdField = () => {
  const [statusType, setStatusType, annotator, setAnnotator, reviewer, setReviewer, attemptLeft, setAttemptLeft, date, setDate, handleFilter, handleReset, handleClose, anchorEl, setAnchorEl, isClicked, setIsClicked, dateValue, setDateValue, setProjectIdFilter, projectIdFilter] = useOutletContext();
  return (
    <>
      <FormControl fullWidth variant="filled">
        <TextField id="filled-multiline-flexible" label="Project ID" type="number" value={projectIdFilter || ""} InputProps={{ inputProps: { min: 0 } }} variant="filled" onChange={(e) => setProjectIdFilter(e.target.value)} />
      </FormControl>
    </>
  );
};

export default ProjectIdField;
