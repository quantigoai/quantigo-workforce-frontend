import { MenuItem, Select, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MyFormControl } from "./CustomDatePicker";
import { useSelector } from "react-redux";

PDSelectField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  borderRadius: "8px",
  background: "none",
  fontSize: "14px",
}));

export default function PDSelectField({ name, helperText, options, label, setValue, defaultValue, ...other }) {
  const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <MyFormControl fullWidth>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                mb: 1,
                color: isLightTheme ? "#091E42" : "#FFFFFF",
              }}
            >
              {label}
            </Typography>

            <MySelect
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              {...field}
              variant="outlined"
              placeholder="Select"
              sx={{ height: "51%", backgroundColor: "none" }}
              defaultValue={defaultValue}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            >
              {options.map((option) => (
                <MenuItem
                  sx={{ fontSize: "14px" }}
                  key={option.value}
                  fullWidth
                  value={(() => setValue(field.name, field.value), option.value)}
                >
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
