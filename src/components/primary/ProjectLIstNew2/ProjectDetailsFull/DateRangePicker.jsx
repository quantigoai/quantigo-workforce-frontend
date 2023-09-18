/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectDetailsFull/DateRangePicker.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Monday, September 18th 2023, 11:10:41 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const DateRangePicker = () => {
  return (
    <>
      <Box sx={{ mr: 2, display: "flex", justifyContent: "flex-end" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "55%",
              backgroundColor: "#F2F6FC",
              border: "1px solid #E6ECF5",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            <DatePicker />
            -
            <DatePicker />
          </Box>
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default DateRangePicker;
