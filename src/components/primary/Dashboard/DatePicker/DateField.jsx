/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/DatePicker/DatePicker.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 29th 2022, 12:28:37 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";

const DateField = ({ dateValue, setDateValue }) => {
  // const [value, setValue] = React.useState(dayjs("2022-12-01"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date"
        value={dateValue}
        sx={{ backgroundColor: "#F8F8F8" }}
        onChange={(newValue) => {
          setDateValue(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateField;
