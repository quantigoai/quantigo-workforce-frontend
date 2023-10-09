/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTextField/CustomTextField.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 1:26:48 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, TextField, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

CustomTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
export const MyTextField = styled(TextField)(() => ({
  borderRadius: "5px",
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-notchedOutline ": {
    border: "1.2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },

  // ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
  //   border: "2px solid blue ",
  // },
}));

export default function CustomTextField({ name, label, helperText, ...other }) {
  const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Box>
            <Typography variant="wpf_p4_medium">{label}</Typography>
            <MyTextField
              id="outlined-basic"
              {...field}
              fullWidth
              // InputProps={{ disableUnderline: true }}
              variant="outlined"
              placeholder={label === "Email" ? "email#123@gmail.com" : "example#123"}
              sx={{
                backgroundColor: isLightTheme ? "#FFFFFF" : "#1D1D1D",
                mt: 1.5,
              }}
              value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            />
          </Box>
        );
      }}
    />
  );
}
