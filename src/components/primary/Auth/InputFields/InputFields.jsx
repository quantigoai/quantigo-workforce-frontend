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
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Link,
  Select,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { convertDate } from '../../../../helper/customData';
import LoginForm from '../Login/LoginForm';
import { HubField } from './HubField';
import LastNameField from './LastNameField';
import NameField from './NameField';
import PhoneNumberfield from './PhoneNumberfield';
import { UserNameField } from './UserNameField';
import UserPhoneNumberField from './UserPhoneNumberField';

const ButtonStyle = styled(Button)({
  backgroundColor: '#2D58FF',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF9A45',
    color: '#1D1D1D',
  },
  '&:disabled': {
    backgroundColor: '#7c91df',
    color: '#FFFFFF',
  },
});

const InputFields = ({
  name,
  register,
  isSignup = false,
  setDob,
  setHub,
  email,
  password,
  isRegister,
  setIsRegister,
  isFieldValid,
  isPhoneNumberCheck,
  handleFirstName,
  handleLastName,
  handlePhoneNumber,
  phone,
  handleQaiUserName,
  qaiErrorMessageCheck,
  qaiErrorMessage,
  setQaiErrorMessage,
  setQaiUserName,
  validUserName,
  setValidUserName,
  qaiUserName,
  handleSerGender,
  gender,
  handleUserPhoneNumber,
  userPhoneNumber,
  isUserPhoneNumberCheck,
  lastName,
}) => {
  const [value, setValue] = React.useState(null);
  // const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const [checked, setChecked] = useState('oldUser');
  const [qaiID, setQaiID] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isError, setIsError] = useState(false);
  const { isLoading } = useSelector((state) => state.user);
  const [hubSelect, setHubSelect] = useState('');
  const [currentUserStatus, setCurrentUserStatus] = useState('oldUser');

  const handleDate = (newValue) => {
    const today = new Date();
    const minAgeDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
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
    setQaiID('');
    setHubSelect('');
    setValidUserName(false);
    setQaiErrorMessage('');
    setChecked(e.target.value);
    setCurrentUserStatus(e.target.value);
  };

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleFocusedOut = () => {
    setIsFocused(true);
  };

  return (
    <>
      <Grid container sx={{ padding: '6%' }}>
        {isSignup && !isRegister && (
          <Grid container sx={{ paddingBottom: '4%' }}>
            <Grid item xs={6} sx={{ paddingRight: '2%' }}>
              <NameField name={name} handleFirstName={handleFirstName} />
            </Grid>
            <Grid item xs={6}>
              <LastNameField lastName={lastName} handleLastName={handleLastName} />
            </Grid>
          </Grid>
        )}
        {!isRegister && (
          <>
            <LoginForm />
          </>
        )}

        {isSignup && !isRegister ? (
          <>
            <Grid container>
              <Grid item xs={8}>
                <Typography sx={{ color: '#FFFFFF' }}>* Required Field </Typography>{' '}
              </Grid>
              <Grid item xs={4}>
                <Link
                  onClick={() => navigate('/login')}
                  underline="hover"
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                  }}
                >
                  <Typography sx={{ color: '#FFFFFF' }}>Already User? Login</Typography>
                </Link>
              </Grid>
            </Grid>
          </>
        ) : !isSignup && !isRegister ? (
          <></>
        ) : (
          <></>
        )}

        {isSignup && isRegister && (
          <>
            <Grid container item>
              <Grid item xs={6} sx={{ paddingBottom: '3%', paddingRight: '1%' }}>
                <FormControl variant="filled" required={true} fullWidth sx={{ backgroundColor: '#FFFFFF' }}>
                  <InputLabel id="demo-simple-select-filled-label">User Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    defaultValue={currentUserStatus}
                    onChange={handleChange}
                  >
                    <MenuItem value={'newUser'}>New User</MenuItem>
                    <MenuItem value={'oldUser'}>Old User</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {checked === 'oldUser' ? (
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required={true}
                    sx={{ backgroundColor: '#FFFFFF' }}
                    id="filled-basic"
                    label="Quantigo Username"
                    variant="filled"
                    defaultValue={qaiUserName}
                    onBlur={(e) => handleQaiUserName(e.target.value)}
                  />
                  {!qaiErrorMessageCheck && (
                    <FormHelperText
                      sx={{
                        color: qaiErrorMessage === 'User Id is available' ? 'green.800' : 'red',
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
                  setValidUserName={setValidUserName}
                  hubSelect={hubSelect}
                  setHubSelect={setHubSelect}
                />
              )}
            </Grid>
            {checked === 'oldUser' ? <></> : <UserNameField register={register} qaiID={qaiID} />}
            <Grid container sx={{ paddingBottom: '2%' }}>
              <Grid item xs={6} sx={{ paddingRight: '1%' }}>
                <FormControl variant="filled" fullWidth required={true} sx={{ backgroundColor: '#FFFFFF' }}>
                  <InputLabel id="demo-simple-select-filled-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={(e) => handleSerGender(e)}
                    // {...register("gender", { required: true })}
                    defaultValue={gender}
                  >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
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
                  sx={{ backgroundColor: '#FFFFFF' }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disableFuture
                      yearRange="1901:2012"
                      label={!isFocused ? 'Date of Birth' : ''}
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
                  <FormHelperText sx={{ color: '#FF0000' }}>You must be at least 13 years old.</FormHelperText>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid item xs={12} sx={{ paddingBottom: '2%' }}>
                <PhoneNumberfield phone={phone} handlePhoneNumber={handlePhoneNumber} />
                {!isPhoneNumberCheck && <FormHelperText sx={{ color: '#FF0000' }}>Invalid phone number</FormHelperText>}
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ paddingBottom: '2%' }}>
              <UserPhoneNumberField handleUserPhoneNumber={handleUserPhoneNumber} userPhoneNumber={userPhoneNumber} />
              {!isUserPhoneNumberCheck && (
                <FormHelperText sx={{ color: '#FF0000' }}>Invalid phone number</FormHelperText>
              )}
            </Grid>
          </>
        )}
        <Grid item xs={12} sx={{ paddingTop: '4%' }}>
          {isSignup && isRegister ? (
            <>
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: '1%' }}>
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
                    disabled={
                      isLoading ||
                      !email ||
                      !password ||
                      !validUserName ||
                      !isPhoneNumberCheck ||
                      !phone ||
                      !gender ||
                      !isUserPhoneNumberCheck ||
                      isError
                    }
                    fullWidth
                    type="submit"
                  >
                    Finish
                  </ButtonStyle>
                  {isLoading && (
                    <CircularProgress
                      size={30}
                      sx={{
                        position: 'absolute',
                        color: '#FF9A45',
                        top: checked === 'oldUser' ? '86%' : '88%',
                        left: '72%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
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
            <></>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default InputFields;
