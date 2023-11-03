import styled from "@emotion/styled";
import { Visibility } from "@mui/icons-material";
import { FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import PasswordIcon from "../../../../assets/images/dashboardIcon/PasswordIcon.svg";

const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
    fontSize: "10px",
  },
  "& .MuiInputBase-root": {
    height: "42px",
    fontSize: "12px",
    fontFamily: "Inter",
    "@media(max-width:1439px)": {
      fontSize: "10px",
    },
    "@media(min-width: 1920px)": {
      fontSize: "14px",
    },
  },
}));
const CurrentPasswordfield = ({ setCurrentPassword, CurrentPassword, handlePassword }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  // const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <Typography
            sx={{
              fontSize: { lg: "10px", xl: "12px", xxl: "12px" },
              color: "neutral.N300",
              fontWeight: "500",
              mb: 1,
              fontFamily: "Inter",
            }}
          >
            Current Password
          </Typography>
          <MyTextField
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            id="filled-adornment-password"
            value={CurrentPassword}
            required={true}
            onChange={(e) => handlePassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{ cursor: "pointer" }}
                  position="end"
                >
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
