/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTextField/CustomSelectField.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Sunday, August 13th 2023, 3:00:13 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {MenuItem, Select, styled, Typography} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {useSelector} from "react-redux";
import {MyFormControl} from "./CustomDatePicker";

CustomSelectField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "0px 0px 0px 0px",
  // backgroundColor: "white",
  height: "40px",
  borderRadius: "8px",
}));
export default function CustomSelectField({ name, helperText, options, label, setValue, defaultValue, ...other }) {
  const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <MyFormControl fullWidth>
            <Typography sx={{ mb: 2, color: "#3c4d6b" }} variant="wpf_p4_medium">
              {label}
            </Typography>
            <MySelect
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                fontSize: "14px",
              }}
              size="small"
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
