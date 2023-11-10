import { Visibility } from "@mui/icons-material";
import { FormControl, Grid, InputAdornment, styled, TextField, Typography } from "@mui/material";
import React from "react";
import PasswordIcon from "../../../../assets/images/dashboardIcon/PasswordIcon.svg";

const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
    fontFamily: "Inter",
    // backgroundColor: "#F2F6FC",
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
    // backgroundColor: editAble ? "" : "#F2F6FC",
  },
}));
const ConfirmPassword = ({ setConfirmPassword, confirmPassword, handlePassword, helperText }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid item xs={12} sx={{ mb: 1 }}>
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
            Confirm New Password
          </Typography>
          <MyTextField
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            id="filled-adornment-password"
            value={confirmPassword}
            required={true}
            autoComplete="off"
            onChange={(e) => handlePassword(e.target.value)}
            // inputProps={{ minLength: 6 }}
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
            helperText={
              <Typography sx={{ fontSize: "12px" }} color="red">
                {helperText}
              </Typography>
            }
          />
        </FormControl>
      </Grid>
      {/* <TextField
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
      /> */}
    </>
  );
};

export default ConfirmPassword;
