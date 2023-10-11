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
  "& .MuiOutlinedInput-root": {
    color: "#000",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
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
            {/* //!! For this special case use color like hex code, this is not standard */}
            <Typography variant="wpf_p4_medium" color="#3c4d6b">
              {label}
            </Typography>

            <MyTextField
              size="small"
              id="outlined-basic"
              {...field}
              fullWidth
              // InputProps={{ disableUnderline: true }}
              variant="outlined"
              placeholder={label === "Email" ? "email#123@gmail.com" : "example#123"}
              sx={{
                // backgroundColor: isLightTheme ? "#FFFFFF" : "#1D1D1D",
                // backgroundColor: "#FFFFFF",
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
