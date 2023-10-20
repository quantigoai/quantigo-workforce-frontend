import { Box, MenuItem, Select, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MyFormControl } from "./CustomDatePicker";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomFormControl } from "./CustomSelectField";

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
          <CustomFormControl fullWidth>
            <Box
              sx={{
                height: "100px",
              }}
            >
              <Typography
                variant={"wpf_h7_medium"}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  mb: 0,
                  color: "neutral.N300",
                  // paddingBottom:"1%"
                }}
              >
                {label}
              </Typography>
              <Box sx={{ width: "100%" }}>
                <MySelect
                  sx={{
                    mt: 0.3,
                    height: "45px",
                    width: "100%",
                    backgroundColor: "neutral.N000",
                    // color: "#000",
                    border: "2px solid #E6ECF5",
                    fontSize: "14px",
                    // borderRadius: "5px",
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  {...field}
                  variant="outlined"
                  placeholder="Select"
                  defaultValue={defaultValue}
                  error={!!error}
                  helperText={error ? error?.message : helperText}
                  IconComponent={KeyboardArrowDownIcon}
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
              </Box>
            </Box>
          </CustomFormControl>
        </>
      )}
    />
  );
}
