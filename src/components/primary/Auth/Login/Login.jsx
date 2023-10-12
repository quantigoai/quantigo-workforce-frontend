/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/Login/Login.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:42:38 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {LoadingButton} from "@mui/lab";
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import {React} from "react";
import LoginForm from "./LoginForm";

export const BgBox = styled(Box)({
  display: "flex",

  width: "75.11%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
});

export const LoadingButtonStyle = styled(LoadingButton)({
  backgroundColor: "#2E58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#244EF5",
    color: "#fff",
  },
  "&:disabled": {
    backgroundColor: "#7c91df",
    color: "#FFFFFF",
  },
});

const Login = () => {
  return (
    <>
      <BgBox>
        <Grid container>
          <LoginForm />
        </Grid>
      </BgBox>
    </>
  );
};

export default Login;
