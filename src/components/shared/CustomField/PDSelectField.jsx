import { MenuItem, Select, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MyFormControl } from "./CustomDatePicker";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

PDSelectField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  borderRadius: "8px",
  background: "none",
  // backgroundColor:"red",
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
          <MyFormControl fullWidth sx={{}}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                mb: 1,
                color: isLightTheme ? "#091E42" : "#FFFFFF",
                // paddingBottom:"1%"
              }}>
              {label}
            </Typography>

            <MySelect
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              {...field}
              variant="outlined"
              placeholder="Select"
              sx={{ height: "51%" }}
              defaultValue={defaultValue}
              error={!!error}
              helperText={error ? error?.message : helperText}
              IconComponent={KeyboardArrowDownIcon}
              {...other}>
              {options.map((option) => (
                <MenuItem
                  sx={{ fontSize: "14px" }}
                  key={option.value}
                  fullWidth
                  value={(() => setValue(field.name, field.value), option.value)}>
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
