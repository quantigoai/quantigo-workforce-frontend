/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/InputFields/InputFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 2:01:30 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import {
  CircularProgress,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  Link,
  Select,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import phoneicon from "../../../../assets/images/IconPhone.png";
import { convertDate } from "../../../../helper/customData";
import EmailField from "./EmailField";
import { HubField } from "./HubField";
import NameField from "./NameField";
import PasswordField from "./PasswordField";
import { UserNameField } from "./UserNameField";
import PhoneNumberfield from "./PhoneNumberfield";

const ButtonStyle = styled(Button)({
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
  "&:disabled": {
    backgroundColor: "#7c91df",
    color: "#FFFFFF",
  },
});

const InputFields = ({
  name,
  register,
  isSignup = false,
  setDob,
  setHub,
  email,
  setEmail,
  password,
  setPassword,
  setIsFieldValid,
  errors,
  handleNextPage,
  isRegister,
  setIsRegister,
  isFieldValid,
  isPhoneNumberCheck,
  handleName,
  handleEmail,
  handlePassword,
  handlePhoneNumber,
  phone,
  handleQaiUserName,
  qaiErrorMessageCheck,
  qaiErrorMessage,
  setQaiUserName,
}) => {
  const [value, setValue] = React.useState(null);
  // const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const [checked, setChecked] = useState("oldUser");
  const [qaiID, setQaiID] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isError, setIsError] = useState(false);
  const { isLoading } = useSelector((state) => state.user);

  const handleDate = (newValue) => {
    const today = new Date();
    const minAgeDate = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate()
    );
    if (newValue <= minAgeDate) {
      setSelectedDate(newValue);
      setIsError(false);
    } else {
      setIsError(true);
    }
    setValue(newValue);
    const x = convertDate(newValue);
    setDob(x);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleFocusedOut = () => {
    setIsFocused(true);
  };

  return (
    <>
      <Grid container sx={{ padding: "6%" }}>
        <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
          {isRegister ? (
            <Typography
              style={{
                color: "#FFFFFF",
                fontSize: "40px",
              }}
            >
              Setup Profile
            </Typography>
          ) : (
            <Typography
              variant="h3"
              style={{
                color: "#FFFFFF",
                fontSize: "40px",
              }}
            >
              {isSignup ? "Create New Account" : "Login"}
            </Typography>
          )}
        </Grid>

        {isSignup && !isRegister && (
          <Grid item xs={12} sx={{ paddingBottom: "4%" }}>
            <NameField name={name} handleName={handleName} />
          </Grid>
        )}
        {!isRegister && (
          <>
            <Grid item xs={12} sx={{ paddingBottom: "4%" }}>
              <EmailField
                isSignup={isSignup}
                email={email}
                setEmail={setEmail}
                handleEmail={handleEmail}
              />

              {/* {isSignup ? (
                !isFieldValid && (
                  <FormHelperText sx={{ color: "#FF0000" }}>
                    Email field is required
                  </FormHelperText>
                )
              ) : (
                <></>
              )} */}
            </Grid>
            {/* TODO Double Check password */}
            <Grid item xs={12} sx={{ paddingBottom: "3%" }}>
              <PasswordField
                isSignup={isSignup}
                handlePassword={handlePassword}
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
              />
              {isSignup ? (
                !isFieldValid && (
                  <FormHelperText sx={{ color: "#FF0000" }}>
                    Password must be at least 6 characters
                  </FormHelperText>
                )
              ) : (
                <></>
              )}
            </Grid>
          </>
        )}

        {isSignup && !isRegister ? (
          <>
            <Grid container>
              <Grid item xs={8}>
                <Typography sx={{ color: "#FFFFFF" }}>
                  * Required Field{" "}
                </Typography>{" "}
              </Grid>
              <Grid item xs={4}>
                <Link
                  onClick={() => navigate("/login")}
                  underline="hover"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    color: "#FFFFFF",
                  }}
                >
                  Already User? Login
                </Link>
              </Grid>
            </Grid>
          </>
        ) : !isSignup && !isRegister ? (
          <Grid container sx={{ display: "flex" }}>
            <Grid item xs={6} sx={{ paddingBottom: "5%" }}>
              <Link
                onClick={() => {
                  navigate("/register");
                }}
                underline="hover"
                sx={{
                  cursor: "pointer",
                  color: "#FFFFFF",
                }}
              >
                Create New Account
              </Link>
            </Grid>
            <Grid item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link
                onClick={() => navigate("/forgetpassword")}
                underline="hover"
                sx={{
                  cursor: "pointer",
                  color: "#FFFFFF",
                }}
              >
                Forget password?
              </Link>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}

        {isSignup && isRegister && (
          <>
            <Grid container item>
              <Grid
                item
                xs={6}
                sx={{ paddingBottom: "3%", paddingRight: "1%" }}
              >
                <FormControl
                  variant="filled"
                  required={true}
                  fullWidth
                  sx={{ backgroundColor: "#FFFFFF" }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    User Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    defaultValue={"oldUser"}
                    onChange={handleChange}
                  >
                    <MenuItem value={"newUser"}>New User</MenuItem>
                    <MenuItem value={"oldUser"}>Old User</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {checked === "oldUser" ? (
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required={true}
                    sx={{ backgroundColor: "#FFFFFF" }}
                    id="filled-basic"
                    label="Quantigo Username"
                    variant="filled"
                    onBlur={(e) => handleQaiUserName(e.target.value)}
                  />
                  {!qaiErrorMessageCheck && (
                    <FormHelperText
                      sx={{
                        color:
                          qaiErrorMessage === "User Id is available"
                            ? "green"
                            : "red",
                      }}
                    >
                      {qaiErrorMessage}
                    </FormHelperText>
                  )}
                </Grid>
              ) : (
                <HubField
                  setQaiID={setQaiID}
                  setHub={setHub}
                  setQaiUserName={setQaiUserName}
                />
              )}
            </Grid>
            {checked === "oldUser" ? (
              <></>
            ) : (
              <UserNameField register={register} qaiID={qaiID} />
            )}
            <Grid container sx={{ paddingBottom: "2%" }}>
              <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                <FormControl
                  variant="filled"
                  fullWidth
                  required={true}
                  sx={{ backgroundColor: "#FFFFFF" }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    {...register("gender", { required: true })}
                    defaultValue={""}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* TODO Date of birth clear error */}
              <Grid item xs={6}>
                <FormControl
                  required={true}
                  onClick={handleFocused}
                  onBlur={handleFocusedOut}
                  fullWidth
                  sx={{ backgroundColor: "#FFFFFF" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disableFuture
                      yearRange="1901:2012"
                      label={!isFocused ? "Date of Birth" : ""}
                      value={value}
                      selected={selectedDate}
                      onChange={(newValue) => {
                        handleDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
                {isError && (
                  <FormHelperText sx={{ color: "#FF0000" }}>
                    You must be at least 13 years old.
                  </FormHelperText>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <PhoneNumberfield
                  phone={phone}
                  handlePhoneNumber={handlePhoneNumber}
                />
                {!isPhoneNumberCheck && (
                  <FormHelperText sx={{ color: "#FF0000" }}>
                    Invalid phone number
                  </FormHelperText>
                )}
                {/* <TextField
                  fullWidth
                  type="number"
                  sx={{ backgroundColor: "#FFFFFF" }}
                  id="filled-basic"
                  label="Nagad Phone Number"
                  variant="filled"
                  autoComplete="off"
                  {...register("phone", { required: true })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <img src={phoneicon} />
                      </InputAdornment>
                    ),
                    maxLength: 11,
                  }}
                /> */}
                {/* <FormControl
                  variant="filled"
                  fullWidth
                  sx={{ backgroundColor: "#FFFFFF" }}
                >
                  <InputLabel>Nagad Phone Number</InputLabel>
                  <FilledInput
                    {...register("phone", { required: true })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <img src={phoneicon} />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl> */}
              </Grid>
            </Grid>
          </>
        )}
        <Grid item xs={12} sx={{ paddingTop: "4%" }}>
          {isSignup && isRegister ? (
            <>
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                  <ButtonStyle
                    fullWidth
                    onClick={() => {
                      setIsRegister(false);
                    }}
                  >
                    Back
                  </ButtonStyle>
                </Grid>

                <Grid item xs={6}>
                  <ButtonStyle
                    disabled={isLoading || !email || !password}
                    fullWidth
                    type="submit"
                  >
                    Finish
                  </ButtonStyle>
                  {isLoading && (
                    <CircularProgress
                      size={30}
                      sx={{
                        position: "absolute",
                        color: "#FF9A45",
                        top: checked === "oldUser" ? "86%" : "88%",
                        left: "72%",
                        marginTop: "-12px",
                        marginLeft: "-12px",
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            </>
          ) : isSignup && !isRegister ? (
            <ButtonStyle
              fullWidth
              disabled={!isFieldValid}
              onClick={() => {
                setIsRegister(true);
              }}
            >
              Create New Account
            </ButtonStyle>
          ) : (
            <>
              <ButtonStyle disabled={isLoading} fullWidth type="submit">
                Login
              </ButtonStyle>
              {isLoading && (
                <CircularProgress
                  size={30}
                  sx={{
                    position: "absolute",
                    color: "#FF9A45",
                    top: "85%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default InputFields;
