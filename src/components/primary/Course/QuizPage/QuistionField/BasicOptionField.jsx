import { Grid, TextField, Typography, styled } from "@mui/material";
import React from "react";
export const TextFieldOption = styled(TextField)(() => ({
  borderRadius: "5px",

  "& .MuiOutlinedInput-root": {
    height: "35px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",

    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {},
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const BasicOptionField = () => {
  return (
    <>
      <Typography
        variant="wpf_h7_medium"
        sx={{
          mb: 0,
          color: "neutral.N300",
        }}>
        List of Options
      </Typography>
      <Grid container gap={1}>
        <Grid item xs={12}>
          <TextFieldOption fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextFieldOption fullWidth />
        </Grid>
      </Grid>
    </>
  );
};

export default BasicOptionField;
