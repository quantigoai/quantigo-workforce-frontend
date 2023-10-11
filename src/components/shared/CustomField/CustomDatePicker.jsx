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
import { useSelector } from "react-redux";
import { convertDate } from "../../../helper/customData";

CustomDatePicker.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MyDatePicker = styled(DatePicker)(() => ({
  border: "0px solid #E0E0E0",
  "& .MuiOutlinedInput-input": {
    padding: "12px",
    height: "100%",
    color :"#000"
  },
  "& .MuiIconButton-root": {
    color: "#7D89A3",
  },
}));

export const MyInputLabel = styled(InputLabel)(() => ({
  // padding: "20px 0px 0px 0px",
}));

export const MyFormControl = styled(FormControl)(() => ({
  borderRadius: "5px",
  padding: "2px 0px 0px 0px",
  "& MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "0px",
    borderColor: "#2D58FF",
    color: "#000",
  },
  "& MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
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
  const { isLightTheme } = useSelector((state) => state.theme);

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
          <Typography variant="wpf_p4_medium" color="#3c4d6b">
            Date of Birth
          </Typography>
          <MyFormControl
            fullWidth
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#3c4d6b",
              border: "2px solid #E6ECF5",
              mt: "10px",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MyDatePicker
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  height: "40px",
                  padding: "0px",
                  color: "#000000",
                }}
                inputFormat="DD-MM-YYYY"
                minDate={minDob}
                maxDate={maxDob}
                onChange={(newValue) => {
                  handleDate(newValue);
                }}
              >
                <TextField
                  size="small"
                  sx={{
                    mt: 0,
                    padding: "0px",
                    height: "40px",
                    color: "#000000",
                  }}
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
