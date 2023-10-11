import { FormControl, Grid, MenuItem, Select, Typography, styled } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
export const MySelect = styled(Select)(() => ({
  border: "1px solid #E6ECF5",
  borderRadius: "8px",
  padding: "5px 0px 0px 0px",
  background: "none",
  height: "42px",
}));
const options = [
  { value: "(A+)", label: "A+" },
  { value: "(A-)", label: "A-" },
  { value: "(B+)", label: "B+" },
  { value: "(B-)", label: "B-" },
  { value: "(O+)", label: "O+" },
  { value: "(O-)", label: "O-" },
  { value: "(AB+)", label: "AB+" },
  { value: "(AB-)", label: "AB-" },
];
function CommonSelectField({ name, label, defaultValue, disableItem, control, rules, errors, setValue, editAble }) {
  return (
    <Grid item xs={12} sx={{ mb: 1 }}>
      {/* <label>{name}</label> */}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <FormControl fullWidth>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "neutral.N300",
                  fontWeight: "500",
                  mb: 1,
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
                sx={{
                  height: "42px",
                  backgroundColor: editAble ? "" : "neutral.N400",
                }}
                disabled={disableItem ? true : !editAble}
                defaultValue={defaultValue}
                //   error={!!error}
                //   helperText={error ? error?.message : helperText}
                //   {...other}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option.value}
                    fullWidth
                    value={(() => setValue(field.name, field.value), option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </MySelect>
              {/* <MyTextField
                sx={{ backgroundColor: editAble ? "" : "#F2F6FC",}}
                  variant="outlined"
                  disabled={disableItem ? true : !editAble}
                  defaultValue={defaultValue}
                  {...field}
                  value={
                    typeof field.value === "number" && field.value === 0
                      ? ""
                      : field.value
                  }
                /> */}
            </FormControl>
          );
        }}
      />
      {/* {errors[name] && <p>{errors[name].message}</p>} */}
    </Grid>
  );
}

export default CommonSelectField;
