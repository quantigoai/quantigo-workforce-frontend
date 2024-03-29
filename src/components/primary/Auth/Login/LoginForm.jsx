/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Login/LoginForm.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 11:47:40 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { yupResolver } from '@hookform/resolvers/yup';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useToaster from '../../../../customHooks/useToaster';
import { login } from '../../../../features/slice/userSlice';
import CustomTextField from '../../../shared/CustomField/CustomTextField';
import FormProvider from '../../../shared/FormProvider/FormProvider';
import { LoadingButtonStyle } from './Login';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toast = useToaster();

  const [showPassword, setShowPassword] = useState(false);
  const { error, isLoading } = useSelector((state) => state.user);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'all',
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    dispatch(login(data)).then((action) => {
      if (action.error) {
        toast.trigger(action.error?.message, 'error');
      } else {
        toast.trigger('Login Successful', 'success');
        navigate('/dashboard');
      }
    });
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Grid container item xs={12}>
        <Box>
          <Typography variant="wpf_h2_semiBold" color="neutral.900">
            {'Welcome Back'}
          </Typography>
          <br />
          <Typography sx={{ mt: 1 }} variant="wpf_p3_regular" color="neutral.920">
            Please fill-up all the credentials
          </Typography>
        </Box>
      </Grid>

      <br />

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ height: '90px' }}>
          <CustomTextField
            name="email"
            label="Email"
            isRequired={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{/* <EmailIcon sx={{ color: "neutral.500" }} /> */}</InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            height: '90px',
          }}
        >
          <CustomTextField
            name="password"
            label="Password"
            isRequired={true}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: 'neutral.500' }} onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container sx={{ display: 'flex', paddingBottom: '2%', alignItems: 'center' }}>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                sx={{
                  color: '#47536B',
                }}
                control={
                  <Checkbox
                    sx={{ color: '#47536B' }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label="Remember me"
              ></FormControlLabel>
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Link
              onClick={() => navigate('/forgetpassword')}
              underline="hover"
              sx={{
                cursor: 'pointer',
                color: 'black',
              }}
            >
              <Typography variant="wpf_p3_regular" color="neutral.850">
                Forgot password?
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <LoadingButtonStyle
          fullWidth
          color="inherit"
          size="large"
          disabled={Object.keys(errors)?.length || false}
          type="submit"
          variant="contained"
          loading={isLoading}
          sx={{ textTransform: 'none' }}
        >
          Sign In
        </LoadingButtonStyle>
      </FormProvider>

      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', mt: 2 }}>
        <Typography variant="wpf_p3_regular" color="neutral.850">
          Don&apos;t have an account ?
        </Typography>
        <Link
          onClick={() => {
            navigate('/register');
          }}
          underline="hover"
          sx={{
            cursor: 'pointer',
            color: '#FFFFFF',
          }}
        >
          <Typography variant="wpf_p3_medium" color={'primary.B009'} sx={{ textAlign: 'center', ml: 1 }}>
            Sign Up
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;
