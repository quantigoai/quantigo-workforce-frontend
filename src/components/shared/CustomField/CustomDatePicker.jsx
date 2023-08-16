/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomField/CustomDatePicker.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Monday, August 14th 2023, 12:46:39 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { FormControl, InputLabel, TextField, styled } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

CustomDatePicker.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MyDatePicker = styled(DatePicker)(() => ({
  border: "0px solid #E0E0E0",
  padding: "5px 0px 0px 0px",
}));

export const MyInputLabel = styled(InputLabel)(() => ({
  padding: "20px 0px 0px 0px",
}));

export const MyFormControl = styled(FormControl)(() => ({
  borderRadius: "5px",
  padding: "2px 0px 0px 0px",
  "& .css-1u3r4u7-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
    {
      border: "0px",
      borderColor: "#2D58FF",
    },
  "& .css-1u3r4u7-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
      border: "0px",
      borderColor: "#2D58FF",
    },
}));
export default function CustomDatePicker({
  name,
  helperText,
  options,
  label,
  defaultValue,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <MyFormControl fullWidth sx={{ backgroundColor: "#FFFFFF" }}>
          <MyInputLabel htmlFor="date-picker" shrink>
            Date of Birth
          </MyInputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MyDatePicker>
              <TextField
                sx={{ padding: "5px" }}
                id="date-picker"
                placeholder=""
              />
            </MyDatePicker>
          </LocalizationProvider>
        </MyFormControl>
      )}
    />
  );
}
