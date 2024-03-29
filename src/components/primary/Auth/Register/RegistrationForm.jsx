/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Login/RegistrationForm.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 11:47:40 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { yupResolver } from '@hookform/resolvers/yup';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, CircularProgress, Grid, IconButton, InputAdornment, Link, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useToaster from '../../../../customHooks/useToaster';
import { signup } from '../../../../features/slice/userSlice';
import CustomDatePicker from '../../../shared/CustomField/CustomDatePicker';
import CustomSelectField from '../../../shared/CustomField/CustomSelectField';
import CustomTextField from '../../../shared/CustomField/CustomTextField';
import FormProvider from '../../../shared/FormProvider/FormProvider';
import FinalButton from './FinalButton';
import PrimaryButton from './PrimaryButton';
import { genderOptions, hubOptions, RegistrationSchema, userStatusOptions } from './RegistrationFormHelper';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toast = useToaster();

  const [showPassword, setShowPassword] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const [disableFirstButton, setDisableFirstButton] = useState(true);

  const [generatedHubId, setGeneratedHubId] = useState('');
  const [isHubLoading, setIsHubLoading] = useState(false);
  const [helperMessage, setHelperMessage] = useState('');
  const { isLoading } = useSelector((state) => state.user);

  const methods = useForm({
    resolver: yupResolver(RegistrationSchema),
    mode: 'all',
  });
  const {
    watch,
    reset,
    setError,
    clearErrors,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { firstName, lastName, email, password, qaiUserName, contactNo, billingAccountNo, gender, dob } = watch();

  const isFieldsNotEmptyFirstPage = !!firstName && !!lastName && !!email && !!password;

  const isFieldsNotEmptyFinalPage = !!qaiUserName && !!contactNo && !!billingAccountNo && !!gender && !!dob;

  const disableButtonCheck = !!errors.firstName || !!errors.lastName || !!errors.email || !!errors.password;

  const disableFinishButtonCheck =
    !!errors.qaiUserName || !!errors.contactNo || !!errors.billingAccountNo || !!errors.dob || !!errors.gender;

  useEffect(() => {
    if (isFieldsNotEmptyFirstPage) {
      setDisableFirstButton(disableButtonCheck);
    } else {
      setDisableFirstButton(true);
    }
  }, [disableButtonCheck, isFieldsNotEmptyFirstPage]);

  const onSubmitRegData = async (data) => {
    data.isNewUser = isNewUser;
    const { hub, ...rest } = data;
    
    dispatch(signup(data)).then((action) => {
      if (action.error) {
        if (action.error.message === 'This QAI User Name is already taken') {
          setValue('hub', null);
          setHelperMessage('');
          setGeneratedHubId('');
          setValue('qaiUserName', null);
          if (!data.isNewUser) {
            setError('qaiUserName', {
              type: 'custom',
              message: 'This QAI User Name is already taken',
            });
          }
        }
        toast.trigger(action.error.message, 'error');
      } else if (action.payload?.status === 200 || action.payload?.status === 201) {
        toast.trigger('User Registered Successfully', 'success');
        navigate('/emailVerification');
      }
    });
  };

  const handleChangeUserType = (e) => {
    setValue('qaiUserName', null);
    setValue('hub', null);
    clearErrors('qaiUserName');
    setHelperMessage('');
    if (e.target.value === 'newUser') {
      setIsNewUser(true);
    } else {
      setIsNewUser(false);
      setGeneratedHubId('');
    }
  };
  const url = import.meta.env.VITE_APP_SERVER_URL;

  const handleChangeHub = (e) => {
    setGeneratedHubId('');
    setIsHubLoading(true);
    const hub = e.target.value;
    setValue('hub', hub);
    axios
      .get(`${url}/qaiusers/hubs/${hub}`)
      .then((res) => {
        setIsHubLoading(false);
        setGeneratedHubId(res.data);
        setValue('qaiUserName', res.data);
      })
      .catch(() => {
        setIsHubLoading(false);
        setGeneratedHubId('');
        setValue('qaiUserName', null);
      });
  };

  const handleCheckQaiUserName = async (e) => {
    await axios
      .get(`${url}/qaiusers/checkuser/${e.target.value}`)
      .then((res) => {
        setHelperMessage(res.data?.message);
        clearErrors('qaiUserName');
      })
      .catch((err) => {
        setHelperMessage('');
        setError('qaiUserName', {
          type: 'custom',
          message: err.response.data.message,
        });
      });
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Grid container item xs={12}>
        <Box>
          <Typography variant="wpf_h2_semiBold" color="neutral.900">
            {'Create Account'}
          </Typography>
          <br />
          <Typography sx={{ mt: 1 }} variant="wpf_p3_regular" color="neutral.920">
            Please fill-up all the credentials
          </Typography>
        </Box>
      </Grid>

      <br />

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitRegData)}>
        {!showOtherField && (
          <>
            <Box
              sx={{
                height: {
                  lg: '90px',
                  xl: '90px',
                  xxl: '100px',
                },
              }}
            >
              {/* First Name */}
              <CustomTextField isRequired={true} name="firstName" label="First Name" />
            </Box>

            {/* Last Name */}
            <Box
              sx={{
                height: {
                  lg: '90px',
                  xl: '90px',
                  xxl: '100px',
                },
              }}
            >
              <CustomTextField isRequired={true} name="lastName" label="Last Name" />
            </Box>
            {/* Email */}

            <Box
              sx={{
                height: {
                  lg: '90px',
                  xl: '90px',
                  xxl: '100px',
                },
              }}
            >
              <CustomTextField
                name="email"
                label="Email"
                isRequired={true}
                InputProps={{
                  // disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: '#7D89A3' }}>
                      {/* <EmailIcon /> */}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {/* Password */}
            <Box
              sx={{
                height: {
                  lg: '120px',
                  xl: '120px',
                  xxl: '100px',
                },
              }}
            >
              <CustomTextField
                name="password"
                label="Password"
                isRequired={true}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  // disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: '#7D89A3' }}>
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </>
        )}
        {showOtherField && (
          <>
            <Stack direction="row" spacing={2}>
              {/* User Type */}
              <Box
                sx={{
                  width: '50%',
                  height: {
                    lg: '90px',
                    xl: '90px',
                    xxl: '100px',
                  },
                }}
              >
                <CustomSelectField
                  name="currentUserStatus"
                  helperText="Select an option"
                  options={userStatusOptions}
                  defaultValue={isNewUser ? userStatusOptions[0].value : userStatusOptions[1].value}
                  label={'User Status'}
                  onChange={handleChangeUserType}
                />
              </Box>

              {isNewUser ? (
                // Hub Field
                <Box
                  sx={{
                    width: '50%',
                    height: {
                      lg: '90px',
                      xl: '90px',
                      xxl: '100px',
                    },
                  }}
                >
                  <CustomSelectField
                    name="hub"
                    isRequired={true}
                    helperText="Select a hub"
                    options={hubOptions}
                    label={'User Hub'}
                    onChange={handleChangeHub}
                    setValue={setValue}
                  />
                </Box>
              ) : (
                // QAI Username Field
                <Box
                  sx={{
                    width: '50%',
                    height: {
                      lg: '90px',
                      xl: '90px',
                      xxl: '100px',
                    },
                  }}
                >
                  <CustomTextField
                    name="qaiUserName"
                    label="Quantigo Username"
                    onBlur={handleCheckQaiUserName}
                    isRequired={true}
                    helperText={helperMessage}
                    placeholder="QAI_XXXXXX"
                    InputProps={{
                      // disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          {helperMessage && <CheckIcon sx={{ color: '#12B76A', fontWeight: 700 }} />}
                          {errors.qaiUserName && <CancelIcon sx={{ color: 'red', fontWeight: 700 }} />}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              )}
            </Stack>
            {isNewUser && (
              // Generated QAI Username Field
              <Box
                sx={{
                  height: {
                    lg: '90px',
                    xl: '90px',
                    xxl: '100px',
                  },
                }}
              >
                <CustomTextField
                  disabled
                  name="qaiUserName"
                  label="Quantigo Username"
                  value={generatedHubId}
                  InputProps={{
                    // disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        {isHubLoading && <CircularProgress size="20px" value={100} thickness={5} />}
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            )}
            <Stack direction="row" spacing={2}>
              {/* Gender field */}
              <Box
                sx={{
                  width: '50%',
                  height: {
                    lg: '90px',
                    xl: '90px',
                    xxl: '100px',
                  },
                }}
              >
                <CustomSelectField
                  name="gender"
                  // defaultValue={genderOptions[0].value}
                  isRequired={true}
                  defaultValue={''}
                  helperText="Select an option"
                  options={genderOptions}
                  label={'Gender'}
                  setValue={setValue}
                />
              </Box>

              {/* DOB Field */}
              <Box
                sx={{
                  width: '50%',
                  height: {
                    lg: '90px',
                    xl: '90px',
                    xxl: '100px',
                  },
                }}
              >
                <CustomDatePicker
                  isRequired={true}
                  setError={setError}
                  setValue={setValue}
                  name="dob"
                  clearErrors={clearErrors}
                />
              </Box>
            </Stack>

            <Stack
              sx={{
                display: isNewUser && 'flex',
                flexDirection: isNewUser && 'row',
              }}
              gap={isNewUser && 2}
            >
              {/* Nagad Number  */}
              <Box
                sx={{
                  width: isNewUser ? '50%' : '100%',
                  height: {
                    lg: isNewUser ? '120px' : '90px',
                    xl: isNewUser ? '120px' : '90px',
                    xxl: '100px',
                  },
                }}
              >
                <CustomTextField
                  name="billingAccountNo"
                  label="Nagad Account No"
                  placeholder="01XXXXXXXXX"
                  isRequired={true}
                  InputProps={{
                    // disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: '#7D89A3' }}>
                        {/* <LocalPhoneIcon /> */}
                        {/* <img src={phoneicon} /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Contact Number */}
              <Box
                sx={{
                  width: isNewUser ? '50%' : '100%',
                  height: {
                    lg: '120px',
                    xl: '120px',
                    xxl: '100px',
                  },
                }}
              >
                <CustomTextField
                  // sx={{ mr: isNewUser &&  }}
                  name="contactNo"
                  label="Phone Number"
                  placeholder="01XXXXXXXXX"
                  InputProps={{
                    // disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: '#7D89A3' }}>
                        {/* <LocalPhoneIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
          </>
        )}

        {showOtherField ? (
          <FinalButton
            setShowOtherField={setShowOtherField}
            isLoading={isLoading}
            isFieldsNotEmptyFinalPage={isFieldsNotEmptyFinalPage}
            disableFinishButtonCheck={disableFinishButtonCheck}
          />
        ) : (
          <PrimaryButton
            setShowOtherField={setShowOtherField}
            disableFirstButton={disableFirstButton}
            isLoading={isLoading}
          />
        )}
      </FormProvider>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <Typography variant="wpf_p3_regular" color="neutral.850">
          Already have an account ?
        </Typography>

        <Link
          onClick={() => {
            navigate('/login');
          }}
          underline="hover"
          sx={{
            cursor: 'pointer',
            color: '#FFFFFF',
          }}
        >
          <Typography variant="wpf_p3_medium" color={'primary.B009'} sx={{ textAlign: 'center', ml: 1 }}>
            Log In
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
