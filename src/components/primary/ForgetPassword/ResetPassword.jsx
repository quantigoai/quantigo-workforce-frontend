import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import { setNewPassword } from "../../../features/slice/userSlice";
import HeaderNav from "../HomePage/HeaderNav";

const ForgetPasswordBox = styled(Box)({
  display: "flex",
  color: "#fffff",
  width: "520px",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(8px)",
  borderRadius: "36px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});
const ButtonStyle = styled(Button)({
  backgroundColor: "#2D58FF",
  height: "40px",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const ResetPassword = () => {
  const { isLoading } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [password, setPassword] = useState("");
  const [congirmPasswordpassword, setCongirmPassword] = useState("");
  const [isFieldValid, setIsFieldValid] = useState(false);
  const [isConfirmFieldValid, setIsConfirmFieldValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id, token } = params;

  const toast = useToaster();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (password.length > 5) {
      setIsFieldValid(true);
    } else {
      setIsFieldValid(false);
    }
  }, [password]);

  useEffect(() => {
    if (congirmPasswordpassword === password) {
      setIsConfirmFieldValid(true);
    } else {
      setIsConfirmFieldValid(false);
    }
  }, [congirmPasswordpassword]);

  const handlePassword = (e) => {
    setPassword(e);
  };
  const handleConfirmPassword = (e) => {
    setCongirmPassword(e);
  };
  const onSubmit = (data) => {
    data.password = password;
    const resetdata = {
      id,
      token,
      data,
    };

    dispatch(setNewPassword(resetdata)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger(" Password Reset Successfully", "success");
        navigate("/login");
      } else {
        toast.trigger("Password not change", "error");
      }
    });
  };

  const paperstyle = {
    padding: "40px 90px",
    width: 500,
    height: 400,
    margin: "20px auto",
  };
  return (
    <>
      <Box className="container">
        <HeaderNav />
        <Grid container>
          <Grid container style={{ justifyItems: "center" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingTop: "7%", paddingLeft: "31%" }}>
              <ForgetPasswordBox>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container sx={{ padding: "10%" }}>
                    <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
                      <Typography
                        style={{
                          color: "#FFFFFF",
                          fontSize: "40px",
                        }}
                      >
                        Password Change
                      </Typography>
                    </Grid>

                    <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
                      <Typography
                        variant="body1"
                        style={{
                          color: "#FFFFFF",
                        }}
                      >
                        Change your password now.
                      </Typography>
                    </Grid>
                    <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
                      <TextField
                        fullWidth
                        label="Password"
                        variant="filled"
                        type={showPassword ? "text" : "password"}
                        id="filled-adornment-password"
                        value={password}
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
                              position="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </InputAdornment>
                          ),
                        }}
                      />
                      {!isFieldValid && (
                        <FormHelperText sx={{ color: "#FF0000" }}>
                          Password must be at least 6 characters
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid container item xs={12} sx={{ paddingBottom: "4%" }}>
                      <FormControl variant="filled" fullWidth sx={{ backgroundColor: "#FFFFFF" }}>
                        <InputLabel>Confirm Password</InputLabel>
                        <FilledInput
                          type={showConfirmPassword ? "text" : "password"}
                          id="filled-adornment-password"
                          onChange={(e) => handleConfirmPassword(e.target.value)}
                          endAdornment={
                            <InputAdornment
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                              sx={{ cursor: "pointer" }}
                              position="end"
                            >
                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      {!isConfirmFieldValid && (
                        <FormHelperText sx={{ color: "#FF0000" }}>
                          Password and Confirm Password does not match
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid container item xs={12}>
                      <ButtonStyle disabled={isLoading} fullWidth type="submit">
                        {" "}
                        Change password
                      </ButtonStyle>
                    </Grid>
                  </Grid>
                </form>
              </ForgetPasswordBox>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ResetPassword;
