import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordIcon from "../../../../assets/images/dashboardIcon/PasswordIcon.svg";
import {
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
    // backgroundColor: "#F2F6FC",
  },
  "& .MuiInputBase-root": {
    height: "42px",
    fontSize: "14px",
  },
}));
const CurrentPasswordfield = ({ setCurrentPassword, CurrentPassword }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  // const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePassword = (e) => {
    setCurrentPassword(e);
  };

  return (
    <>
      <Grid item xs={12} sx={{ mb: 1 }}>
        <FormControl fullWidth>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#3C4D6B",
              fontWeight: "500",
              mb: 1,
            }}>
            Current Password
          </Typography>
          <MyTextField
            // type={isNumber || isNumberPdr ? "number" : "text"}

            //   id="outlined-basic"
            variant="outlined"
            // {...field}
            fullWidth
            type={showPassword ? "text" : "password"}
            id="filled-adornment-password"
            value={CurrentPassword}
            required={true}
            // autoComplete="off"
            onChange={(e) => handlePassword(e.target.value)}
            // inputProps={{ minLength: 6 }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{ cursor: "pointer" }}
                  position="end">
                  {!showPassword ? <img src={PasswordIcon} /> : <Visibility />}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      {/* <TextField
        fullWidth
        label="Current Password"
        variant="filled"
        type={showPassword ? "text" : "password"}
        id="filled-adornment-password"
        value={CurrentPassword}
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
              {showPassword ? <img src={PasswordIcon}/> :<img src={PasswordIcon}/>}
            </InputAdornment>
          ),
        }}
      /> */}
    </>
  );
};

export default CurrentPasswordfield;
