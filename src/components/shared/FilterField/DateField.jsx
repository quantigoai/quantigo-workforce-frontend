/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/DateField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 20th 2023, 12:22:53 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { FormControl, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { convertDate } from "../../../helper/customData";

const DateField = () => {
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
    setProjectIdFilter,
    projectIdFilter,
  ] = useOutletContext();
  const [dob, setDob] = useState("");

  const handleDate = (newValue) => {
    setDateValue(newValue);
    const x = convertDate(newValue);
    setDob(dateValue);
    setDate(x);
  };

  return (
    <>
      <FormControl fullWidth sx={{ backgroundColor: "#FFFFFF" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Created Date"
            defaultValue={dateValue}
            onChange={(newValue) => {
              handleDate(newValue);
            }}
            renderInput={(params) => <TextField label="filled" {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
    </>
  );
};

export default DateField;
