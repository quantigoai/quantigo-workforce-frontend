/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Login/LoginForm.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 11:47:40 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import emailIcon from "../../../../assets/images/IconEmail.png";
import { login } from "../../../../features/slice/userSlice";
import CustomTextField from "../../../shared/CustomField/CustomTextField";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { LoadingButtonStyle } from "./Login";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [showPassword, setShowPassword] = useState(false);
  const { error, isLoading } = useSelector((state) => state.user);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "tanzim.ahmed1@g.bracu.ac.bd",
    password: "ta12345",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(login(data)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("Login Successful", { type: "success" });
        navigate("/dashboard");
      } else {
        alert.show(error, { type: "error" });
      }
    });
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
        <Typography
          variant="h3"
          style={{
            color: "#FFFFFF",
            fontSize: "40px",
          }}
        >
          {"Login"}
        </Typography>
      </Grid>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ width: "100%" }}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <CustomTextField
            name="email"
            label="Email address"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <img src={emailIcon} />
                </InputAdornment>
              ),
            }}
          />

          <CustomTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid container sx={{ display: "flex", paddingBottom: "5%" }}>
            <Grid item xs={6}>
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
            <Grid
              item
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
        </Stack>

        <LoadingButtonStyle
          fullWidth
          color="inherit"
          size="large"
          disabled={Object.keys(errors).length || false}
          type="submit"
          variant="contained"
          loading={isLoading}
        >
          Login
        </LoadingButtonStyle>
      </FormProvider>
    </Box>
  );
};

export default LoginForm;
