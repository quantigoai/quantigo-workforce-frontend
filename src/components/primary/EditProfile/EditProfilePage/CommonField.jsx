import {FormControl, Grid, styled, TextField, Typography,} from "@mui/material";
import React from "react";

const CommonField = ({
  label,
  editAble,
  disableItem,
  registerName,
  register,
  type,
  // inputProps,
  defaultValue,
}) => {
  const MyTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #E6ECF5 !important",
      borderRadius: "8px",
      // backgroundColor: "#F2F6FC",
    },
    "& .MuiInputBase-root": {
      height: "42px",
      fontSize: "14px",
      backgroundColor: editAble ? "" : "#F2F6FC",
    },
  }));
  return (
    <>
      <Grid item xs={12} sx={{ mb: 1 }}>
        <FormControl fullWidth>
          <Typography sx={{ fontSize: "14px", fontWeight: "500", mb: 1 }}>
            {label}
          </Typography>
          <MyTextField
            // type={isNumber || isNumberPdr ? "number" : "text"}

            //   id="outlined-basic"
            variant="outlined"
            // {...field}
            fullWidth
            disabled={disableItem ? true : !editAble}
            InputProps={{ disableUnderline: true }}
            // inputProps={InputProps}
            defaultValue={defaultValue}
            // {...register("name")}
            // value={
            //   typeof field.value === "number" && field.value === 0
            //     ? ""
            //     : field.value
            // }
            // error={!!error}
            // helperText={error ? error?.message : helperText}
            //   {...other}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default CommonField;
