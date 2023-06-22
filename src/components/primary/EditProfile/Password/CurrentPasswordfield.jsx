import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";

const CurrentPasswordfield = () => {
  return (
    <>
      <FormControl
        variant="filled"
        fullWidth
        sx={{ backgroundColor: "#FFFFFF" }}>
        <InputLabel> Current Password</InputLabel>
        <FilledInput
          type="password"
          id="filled-adornment-password"
          endAdornment={
            <InputAdornment
              //   onClick={handleClickShowPassword}
              //   onMouseDown={handleMouseDownPassword}
              sx={{ cursor: "pointer" }}
              position="end">
              {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default CurrentPasswordfield;
