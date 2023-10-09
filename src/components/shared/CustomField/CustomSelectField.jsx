/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTextField/CustomSelectField.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Sunday, August 13th 2023, 3:00:13 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { MenuItem, Select, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MyFormControl, MyInputLabel } from "./CustomDatePicker";

CustomSelectField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MySelect = styled(Select)(() => ({
  border: "1px solid #E0E0E0",
  // padding: "0px 0px 0px 0px",
  backgroundColor: "white",
}));
export default function CustomSelectField({ name, helperText, options, label, setValue, defaultValue, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <MyFormControl fullWidth>
            <Typography sx={{ mb: 2 }} variant="wpf_p4_medium">
              {label}
            </Typography>
            <MySelect
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              {...field}
              label={label}
              defaultValue={defaultValue}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            >
              {options.map((option) => (
                <MenuItem key={option.value} fullWidth value={(() => setValue(field.name, field.value), option.value)}>
                  {option.label}
                </MenuItem>
              ))}
            </MySelect>
          </MyFormControl>
        </>
      )}
    />
  );
}
