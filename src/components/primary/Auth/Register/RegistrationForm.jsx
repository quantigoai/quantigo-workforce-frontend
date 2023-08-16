/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Login/RegistrationForm.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 11:47:40 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { yupResolver } from "@hookform/resolvers/yup";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import emailIcon from "../../../../assets/images/IconEmail.png";
import phoneicon from "../../../../assets/images/IconPhone.png";
import { checkUserByUserName } from "../../../../features/slice/userSlice";
import CustomDatePicker from "../../../shared/CustomField/CustomDatePicker";
import CustomSelectField from "../../../shared/CustomField/CustomSelectField";
import CustomTextField from "../../../shared/CustomField/CustomTextField";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { LoadingButtonStyle } from "../Login/Login";
import FooterInstruction from "./FooterInstruction";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [showPassword, setShowPassword] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [generatedHubId, setGeneratedHubId] = useState("");
  const [helperMessage, setHelperMessage] = useState("");
  const { error, isLoading } = useSelector((state) => state.user);

  const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
    currentUserStatus: Yup.string(),
    // qaiUserName: Yup.string().required("QAI Id is required"),
    qaiUserName: Yup.string(),
    hub: Yup.string(),
    gender: Yup.string(),
    dob: Yup.string(),
    billingAccountNo: Yup.string().required("Nagad Number is required"),
    contactNo: Yup.string().required("Contact Number is required"),
  });

  const methods = useForm({
    resolver: yupResolver(RegistrationSchema),
  });
  const {
    reset,
    setError,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  const userStatusOptions = [
    { value: "newUser", label: "New User" },
    { value: "oldUser", label: "Old User" },
  ];
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const hubOptions = [
    { value: "DK", label: "Dhaka" },
    { value: "KH", label: "Khulna" },
    { value: "SG", label: "Sirajganj" },
    { value: "MS", label: "Mymensingh" },
    { value: "CD", label: "Chuadanga" },
  ];
  const onSubmitRegData = async (data) => {
    console.log(data);
  };

  const handleChangeUserType = (e) => {
    console.log(e.target.value);
    if (e.target.value === "newUser") {
      setIsNewUser(true);
    } else {
      setIsNewUser(false);
      setGeneratedHubId("");
    }
  };
  const url = import.meta.env.VITE_APP_SERVER_URL;

  const handleChangeHub = (e) => {
    const hub = e.target.value;
    axios.get(`${url}/qaiusers/hubs/${hub}`).then((res) => {
      setGeneratedHubId(res.data);
      setValue("qaiUserName", res.data);
    });
  };

  const handleCheckQaiUserName = (e) => {
    dispatch(checkUserByUserName(e.target.value)).then((res) => {
      if (res?.error?.message) {
        setError(res.error.message);
        setHelperMessage("");
      } else {
        setError("");
        setHelperMessage(res.payload.data.message);
      }
    });
  };
  const handleChangeGender = (e) => {
    setValue(e.target.name, e.target.value);
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
          {showOtherField ? "Setup Profile" : "Create New Account"}
        </Typography>
      </Grid>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitRegData)}>
        <Box sx={{ paddingBottom: "5%" }}>
          <Stack spacing={3} sx={{ width: "100%" }}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            {!showOtherField && (
              <>
                <Stack direction="row" spacing={2}>
                  <CustomTextField name="firstName" label="First Name" />
                  <CustomTextField name="lastName" label="Last Name" />
                </Stack>

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
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FooterInstruction navigate={navigate}></FooterInstruction>
              </>
            )}
            {showOtherField && (
              <>
                <Stack direction="row" spacing={2}>
                  <CustomSelectField
                    name="currentUserStatus"
                    helperText="Select an option"
                    options={userStatusOptions}
                    defaultValue={
                      isNewUser
                        ? userStatusOptions[0].value
                        : userStatusOptions[1].value
                    }
                    label={"User Status"}
                    onChange={handleChangeUserType}
                  />
                  {isNewUser ? (
                    <CustomSelectField
                      name="hub"
                      helperText="Select a hub"
                      options={hubOptions}
                      label={"User Hub"}
                      onChange={handleChangeHub}
                      // handleChange={handleChangeHub}
                      setValue={setValue}
                    />
                  ) : (
                    <CustomTextField
                      name="qaiUserName"
                      helperText={error ? error : helperMessage}
                      label="Quantigo Username"
                      onBlur={handleCheckQaiUserName}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <>
                              {helperMessage && (
                                <CheckIcon
                                  sx={{ color: "green", fontWeight: 700 }}
                                />
                              )}
                              {error && (
                                <CancelIcon
                                  sx={{ color: "red", fontWeight: 700 }}
                                />
                              )}
                            </>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Stack>
                {isNewUser && (
                  <CustomTextField
                    disabled
                    name="qaiUserName"
                    label="Quantigo Username"
                    value={generatedHubId}
                  />
                )}
                <Stack direction="row" spacing={2}>
                  <CustomSelectField
                    name="gender"
                    helperText="Select an option"
                    options={genderOptions}
                    label={"Gender"}
                    setValue={setValue}
                  />

                  <CustomDatePicker setError={setError} setValue={setValue} name="dob" />
                </Stack>
                <CustomTextField
                  name="billingAccountNo"
                  label="Nagad Account No"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={phoneicon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomTextField
                  name="contactNo"
                  label="Phone Number"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={phoneicon} />
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            )}
          </Stack>
        </Box>

        {showOtherField ? (
          <>
            <Stack direction="row" spacing={2}>
              <LoadingButtonStyle
                fullWidth
                color="inherit"
                size="large"
                variant="contained"
                loading={isLoading}
                onClick={() => setShowOtherField(false)}
              >
                Back
              </LoadingButtonStyle>
              <LoadingButtonStyle
                type="submit"
                fullWidth
                color="inherit"
                size="large"
                variant="contained"
                loading={isLoading}
              >
                Finish
              </LoadingButtonStyle>
            </Stack>
          </>
        ) : (
          <LoadingButtonStyle
            fullWidth
            color="inherit"
            size="large"
            variant="contained"
            loading={isLoading}
            onClick={() => setShowOtherField(true)}
          >
            Create New Account
          </LoadingButtonStyle>
        )}
      </FormProvider>
    </Box>
  );
};

export default RegistrationForm;
