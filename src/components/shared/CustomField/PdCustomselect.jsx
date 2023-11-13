/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/CustomField/PdCustomselect.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Saturday, November 4th 2023, 10:01:56 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, FormControl, Select, styled} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {useSelector} from "react-redux";
// import {MyFormControl} from "./CustomDatePicker";

CustomSelectField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const CustomFormControl = styled(FormControl)(() => ({
  height: "100px",
  // backgroundColor: "yellow",
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

export const MySelect = styled(Select)(() => ({
  borderRadius: "8px",
}));
export default function CustomSelectField({
  name,
  helperText,
  options,
  label,
  setValue,
  defaultValue,
  isRequired,
  ...other
}) {
  const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <CustomFormControl fullWidth>
            <Box
            // sx={{
            //   height: "100px",
            // }}
            >
              {/* <Typography sx={{ mb: 0, color: "#3c4d6b" }} variant="wpf_h7_medium">
                {label} <span style={{ color: "#F04438" }}>{isRequired && "*"}</span>
              </Typography>
              <Box sx={{ width: "100%" }}>
                <MySelect
                  sx={{
                    // mt: 0.3,
                    // height: "45px",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    color: "#000",
                    // border: "2px solid #E6ECF5",
                    // fontSize: "14px",
                    // borderRadius: "5px",
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
                      // sx={{ fontSize: "14px" }}
                      key={option.value}
                      fullWidth
                      value={(() => setValue(field.name, field.value), option.value)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </MySelect>
              </Box> */}
            </Box>
          </CustomFormControl>
        </>
      )}
    />
  );
}
