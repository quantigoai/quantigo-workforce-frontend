import { FormControl, Grid, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": {
    height: "40px",
    fontSize: "12px",
    fontFamily: "Inter",
    "@media(max-width:1439px)": {
      height: "30px",
      fontSize: "10px",
    },
    "@media(min-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));
function CommonFieldTest({ name, label, defaultValue, disableItem, control, rules, errors, editAble }) {
  return (
    <Grid item xs={12} sx={{ mb: 2 }}>
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
                  color: "neutral.N300",

                  mb: 1,
                }}
                variant="wpf_p4_medium"
              >
                {label}
              </Typography>
              <MyTextField
                sx={{
                  backgroundColor: editAble ? "" : "neutral.N400",
                  fontSize: "14px",
                  borderRadius: "8px",
                  height: "40px",
                  "@media(max-width:1439px)": {
                    height: "30px",
                    fontSize: "10px",
                  },
                  "@media(min-width: 1920px)": {
                    fontSize: "14px",
                  },
                }}
                variant="outlined"
                disabled={disableItem ? true : !editAble}
                defaultValue={defaultValue}
                {...field}
                value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
              />
            </FormControl>
          );
        }}
      />
      {/* {errors[name] && <p>{errors[name].message}</p>} */}
    </Grid>
  );
}

export default CommonFieldTest;
