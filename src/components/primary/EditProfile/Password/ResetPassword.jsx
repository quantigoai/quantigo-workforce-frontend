import {Visibility, VisibilityOff} from "@mui/icons-material";
import {InputAdornment, TextField,} from "@mui/material";
import React from "react";

const ResetPassword = ({ setResetPassword, resetPassword }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePassword = (e) => {
    setResetPassword(e);
  };
  return (
    <>
      <TextField
        fullWidth
        label="New Password"
        variant="filled"
        type={showPassword ? "text" : "password"}
        id="filled-adornment-password"
        value={resetPassword}
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

export default ResetPassword;
