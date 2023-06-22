/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/InputFields/PasswordField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Friday, March 31st 2023, 12:51:18 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Visibility, VisibilityOff} from "@mui/icons-material";
import {InputAdornment, TextField,} from "@mui/material";
import React from "react";

const PasswordField = ({
  password,
  setPassword,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  isSignup,
  handlePassword,
}) => {
  return (
    <>
      <TextField
        fullWidth
        label="Password"
        variant="filled"
        type={showPassword ? "text" : "password"}
        id="filled-adornment-password"
        value={password}
        required={true}
        autoComplete="off"
        onChange={(e) =>
          isSignup
            ? handlePassword(e.target.value)
            : setPassword(e.target.value)
        }
        inputProps={{ minLength: 6 }}
        sx={{ backgroundColor: "#FFFFFF" }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ cursor: "pointer" }}
              position="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
      />
      {/* <FormControl
        variant="filled"
        fullWidth
        sx={{ backgroundColor: "#FFFFFF" }}>
        <InputLabel>Password</InputLabel>
        <FilledInput
          type={showPassword ? "text" : "password"}
          id="filled-adornment-password"
          value={password}
          required={true}
          autoComplete="off"
          onChange={(e) =>
            isSignup
              ? handlePassword(e.target.value)
              : setPassword(e.target.value)
          }
          inputProps={{ minLength: 6 }}
          endAdornment={
            <InputAdornment
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ cursor: "pointer" }}
              position="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          }
        />
      </FormControl> */}
    </>
  );
};

export default PasswordField;
