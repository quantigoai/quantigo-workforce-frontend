/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomField/CustomDatePicker.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Monday, August 14th 2023, 12:46:39 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { FormControl, InputLabel, TextField, Typography, styled } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { convertDate } from "../../../helper/customData";

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
  "& .css-1u3r4u7-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "0px",
    borderColor: "#2D58FF",
  },
  "& .css-1u3r4u7-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: "0px",
    borderColor: "#2D58FF",
  },
}));
export default function CustomDatePicker({
  name,
  setValue,
  setError,
  helperText,
  options,
  label,
  defaultValue,
  ...other
}) {
  const { control } = useFormContext();

  const handleDate = (newValue) => {
    const x = convertDate(newValue);
    setValue("dob", x);
  };
  const maxDob = dayjs().subtract(13, "year");
  const minDob = dayjs().subtract(70, "year");
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref, error } }) => (
        <>
          <Typography variant="wpf_p4_medium">Date of Birth</Typography>
          <MyFormControl
            fullWidth
            sx={{ backgroundColor: "#FFFFFF", border: "2px solid #E0E0E0", height: "60px", mt: 1.5 }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MyDatePicker
                inputFormat="DD-MM-YYYY"
                minDate={minDob}
                maxDate={maxDob}
                onChange={(newValue) => {
                  handleDate(newValue);
                }}
              >
                <TextField
                  sx={{ padding: "5px" }}
                  error={!!error}
                  helperText={error && error?.message}
                  id="date-picker"
                />
              </MyDatePicker>
            </LocalizationProvider>
          </MyFormControl>
        </>
      )}
    />
  );
}
