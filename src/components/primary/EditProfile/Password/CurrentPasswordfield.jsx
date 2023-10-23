import styled from "@emotion/styled";
import {Visibility} from "@mui/icons-material";
import {FormControl, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import React from "react";
import PasswordIcon from "../../../../assets/images/dashboardIcon/PasswordIcon.svg";

const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
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
      <Grid item xs={12} sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <Typography
            sx={{
              fontSize: "12px",
              color: "neutral.N300",
              fontWeight: "500",
              mb: 1,
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
