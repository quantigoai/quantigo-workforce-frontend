/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTextField/CustomTextField.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 1:26:48 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { TextField, styled } from "@mui/material";
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
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #F2F6FC !important",
    borderRadius: "8px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    height: "100%",
    backgroundColor: "transparent",
  },
  "& .MuiFilledInput-root": {
    height: "100%",
    backgroundColor: "transparent",
  },
}));

export default function CustomTextField({ name, helperText, ...other }) {
  const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <MyTextField
              id="input-with-icon-textfield"
              {...field}
              fullWidth
              InputProps={{ disableUnderline: true }}
              variant="outlined"
              sx={{
                backgroundColor: isLightTheme ? "#FFFFFF" : "#1D1D1D",
              }}
              value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            />
          </>
        );
      }}
    />
  );
}
