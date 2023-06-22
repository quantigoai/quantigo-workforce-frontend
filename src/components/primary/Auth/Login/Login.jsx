/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/Login/Login.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:42:38 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
 import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { React, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../features/slice/userSlice";
import InputFields from "../InputFields/InputFields";

const BgBox = styled(Box)({
  display: "flex",
  color: "#fffff",
  width: "70.11%",
  backgroundColor: "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(8px)",
  borderRadius: "36px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = email;
    data.password = password;

    dispatch(login(data)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("Login Successful", { type: "success" });
        navigate("/dashboard");
      } else {
        alert.show("Login Failed", { type: "error" });
      }
    });
  };

  return (
    <>
      <BgBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputFields
            register={register}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </form>
      </BgBox>
    </>
  );
};

export default Login;
