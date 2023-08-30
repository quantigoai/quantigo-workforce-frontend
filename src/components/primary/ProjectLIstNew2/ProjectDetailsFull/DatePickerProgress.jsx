import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

const DatePickerProgress = () => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{
            // border: "2px solid black",

            fontSize: "14px",
            border: "1px solid #E6ECF5",
            mr: 2,
            height: "45px",
            background: "#F2F6FC",
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerProgress;
