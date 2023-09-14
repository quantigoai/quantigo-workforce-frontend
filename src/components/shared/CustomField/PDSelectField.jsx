import { MenuItem, Select, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MyFormControl } from "./CustomDatePicker";

PDSelectField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MySelect = styled(Select)(() => ({
  border: "1px solid #E0E0E0",
  padding: "5px 0px 0px 0px",
  background: "none",
}));

export default function PDSelectField({ name, helperText, options, label, setValue, defaultValue, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <MyFormControl fullWidth>
            <Typography sx={{ fontSize: "14px", fontWeight: "500", mb: 1 }}>{label}</Typography>

            <MySelect
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              {...field}
              variant="outlined"
              placeholder="Select"
              sx={{ height: "50%", backgroundColor: "none" }}
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
