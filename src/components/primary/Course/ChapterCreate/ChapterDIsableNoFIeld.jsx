import { Box, TextField, Typography, styled } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const ChapterTextField = styled(TextField)(() => ({
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

const ChapterDIsableNoFIeld = ({
  name,
  helperText,
  isNumber,
  isNumberPdr,
  label,
  defaultValue,
  isRequired,
  ...other
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <Typography
            variant="wpf_h7_medium"
            sx={{
              mb: 0,
              color: "neutral.N300",
            }}
          >
            {label} {<span style={{ color: "#F04438" }}>{isRequired && "*"}</span>}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <ChapterTextField
              size="small"
              type={isNumber || isNumberPdr ? "number" : "text"}
              id="outlined-basic"
              {...field}
              fullWidth
              variant="outlined"
              // required={label === "Benchmark" ? false : true}
              sx={{
                backgroundColor: "neutral.N400",
              }}
              defaultValue={defaultValue}
              disabled
              value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
              error={!!error}
              helperText={error ? error?.message : helperText}
              autoComplete="off"
              {...other}
              InputProps={{
                inputProps: isNumberPdr
                  ? {
                      min: 1,
                      max: 5,
                    }
                  : {
                      min: 1,
                    },
              }}
            />
          </Box>
        </Box>
      )}
    />
  );
};

export default ChapterDIsableNoFIeld;
