import {
  FormControl,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "42px", fontSize: "14px" },
}));
function CommonFieldTest({
  name,
  label,
  defaultValue,
  disableItem,
  control,
  rules,
  errors,
  editAble,
}) {
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
                  color: "#3C4D6B",
                  fontWeight: "500",
                  mb: 1,
                }}>
                {label}
              </Typography>
              <MyTextField
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
