import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const ConfirmPassword = ({ setConfirmPassword, confirmPassword }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePassword = (e) => {
    setConfirmPassword(e);
  };
  return (
    <>
      <TextField
        fullWidth
        label="Confirm Password"
        variant="filled"
        type={showPassword ? "text" : "password"}
        id="filled-adornment-password"
        value={confirmPassword}
        required={true}
        autoComplete="off"
        onChange={(e) => handlePassword(e.target.value)}
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
    </>
  );
};

export default ConfirmPassword;
