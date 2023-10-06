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
import { Alert, Box, Grid, IconButton, InputAdornment, Link, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailIcon from "../../../../assets/images/IconEmail.png";
import phoneicon from "../../../../assets/images/IconPhone.png";
import { checkUserByUserName, signup } from "../../../../features/slice/userSlice";
import CustomDatePicker from "../../../shared/CustomField/CustomDatePicker";
import CustomSelectField from "../../../shared/CustomField/CustomSelectField";
import CustomTextField from "../../../shared/CustomField/CustomTextField";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import FinalButton from "./FinalButton";
import FooterInstruction from "./FooterInstruction";
import PrimaryButton from "./PrimaryButton";
import { RegistrationSchema, genderOptions, hubOptions, userStatusOptions } from "./RegistrationFormHelper";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [showPassword, setShowPassword] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const [disableFirstButton, setDisableFirstButton] = useState(true);

  const [generatedHubId, setGeneratedHubId] = useState("");
  const [helperMessage, setHelperMessage] = useState("");
  const { isLoading } = useSelector((state) => state.user);

  const defaultValues = {
    firstName: "Tanzim",
    lastName: "Ahmed",
    email: "tanzim.ahmed1@g.bracu.ac.bd",
    password: "ta12345",
    gender: "male",
  };

  const methods = useForm({
    resolver: yupResolver(RegistrationSchema),
    mode: "all",
    defaultValues,
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

  const { firstName, lastName, email, password, qaiUserName, contactNo, billingAccountNo } = watch();

  const isFieldsNotEmptyFirstPage = !!firstName && !!lastName && !!email && !!password;

  const isFieldsNotEmptyFinalPage = !!qaiUserName && !!contactNo && !!billingAccountNo;

  const disableButtonCheck = !!errors.firstName || !!errors.lastName || !!errors.email || !!errors.password;

  const disableFinishButtonCheck = !!errors.qaiUserName || !!errors.contactNo || !!errors.billingAccountNo;

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
    dispatch(signup(rest)).then((action) => {
      if (action.error) {
        alert.show(action.error.message, { type: "error" });
      } else if (action.payload?.status === 200 || action.payload?.status === 201) {
        alert.show("User Registered Successfully", { type: "success" });
        navigate("/emailVerification");
      }
    });
  };

  const handleChangeUserType = (e) => {
    setValue("qaiUserName", null);
    setValue("hub", null);
    clearErrors("qaiUserName");
    setHelperMessage("");
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
    setValue("hub", hub);
    axios
      .get(`${url}/qaiusers/hubs/${hub}`)
      .then((res) => {
        setGeneratedHubId(res.data);
        setValue("qaiUserName", res.data);
      })
      .catch(() => {
        setGeneratedHubId("");
        setValue("qaiUserName", null);
      });
  };

  const handleCheckQaiUserName = (e) => {
    dispatch(checkUserByUserName(e.target.value)).then((res) => {
      if (res?.error?.message) {
        setError("qaiUserName", { type: "custom", message: res.error.message });
        setHelperMessage("");
      } else {
        setHelperMessage(res.payload.data.message);
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
          {showOtherField ? "Setup Profile" : "Create New Account"}
        </Typography>
      </Grid>
      <Grid container item xs={12} sx={{ paddingBottom: "8%" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="wpf_h1_semiBold" color="neutral.800">
            {"Create Account"}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="wpf_p3_regular" color="neutral.600">
            Please fill-up all the credentials
          </Typography>
        </Box>
      </Grid>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitRegData)}>
        <Box sx={{ paddingBottom: "5%" }}>
          <Stack spacing={3} sx={{ width: "100%" }}>
            {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
            {!showOtherField && (
              <>
                <Stack direction="column" spacing={1}>
                  <CustomTextField name="firstName" label="First Name" />
                  <CustomTextField name="lastName" label="Last Name" />
                </Stack>
                {/* Email */}
                <CustomTextField
                  name="email"
                  label="Email"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={emailIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* Password */}
                <CustomTextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* Footer navigate  */}
                {/* <FooterInstruction navigate={navigate}></FooterInstruction> */}
              </>
            )}
            {showOtherField && (
              <>
                <Stack direction="row" spacing={2}>
                  {/* User Type */}
                  <CustomSelectField
                    name="currentUserStatus"
                    helperText="Select an option"
                    options={userStatusOptions}
                    defaultValue={isNewUser ? userStatusOptions[0].value : userStatusOptions[1].value}
                    label={"User Status"}
                    onChange={handleChangeUserType}
                  />
                  {isNewUser ? (
                    // Hub Field
                    <CustomSelectField
                      name="hub"
                      helperText="Select a hub"
                      options={hubOptions}
                      label={"User Hub"}
                      onChange={handleChangeHub}
                      setValue={setValue}
                    />
                  ) : (
                    // QAI Username Field
                    <CustomTextField
                      name="qaiUserName"
                      label="Quantigo Username"
                      onBlur={handleCheckQaiUserName}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            {helperMessage && <CheckIcon sx={{ color: "green", fontWeight: 700 }} />}
                            {errors.qaiUserName && <CancelIcon sx={{ color: "red", fontWeight: 700 }} />}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Stack>
                {isNewUser && (
                  // Generated QAI Username Field
                  <CustomTextField disabled name="qaiUserName" label="Quantigo Username" value={generatedHubId} />
                )}
                <Stack direction="row" spacing={2}>
                  {/* Gender field */}
                  <CustomSelectField
                    name="gender"
                    defaultValue={genderOptions[0].value}
                    helperText="Select an option"
                    options={genderOptions}
                    label={"Gender"}
                    setValue={setValue}
                  />
                  {/* Date Picker */}
                  <CustomDatePicker setError={setError} setValue={setValue} name="dob" />
                </Stack>
                {/* Nagad Number  */}
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
                {/* Contact Number */}
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
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", mt: 2 }}>
        <Typography variant="wpf_p3_regular" color="neutral.700">
          Already have an account ?
        </Typography>
        <Link
          onClick={() => {
            navigate("/login");
            // console.log("clicked");
          }}
          underline="hover"
          sx={{
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="wpf_p3_medium" color={"primary.main"} sx={{ textAlign: "center", ml: 1 }}>
            Log In
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
