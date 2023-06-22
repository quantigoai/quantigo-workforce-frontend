/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/Register/Register.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:42:28 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  checkUserByUserName,
  createAgUser,
  createQaiUser,
  login,
  signup,
} from "../../../../features/slice/userSlice";
import InputFields from "../InputFields/InputFields";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";

const BgBox = styled(Box)({
  display: "flex",
  color: "#fffff",
  width: "70.11%",
  backgroundColor: "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(8px)",
  borderRadius: "36px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hub, setHub] = useState("");
  const [dob, setDob] = useState("");
  const [isFieldValid, setIsFieldValid] = useState(false);
  const [isPhoneNumberCheck, setsPhoneNumberCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [qaiUserName, setQaiUserName] = useState("");
  const [qaiErrorMessage, setQaiErrorMessage] = useState("");
  const [qaiErrorMessageCheck, setQaiErrorMessageCheck] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const handleNextPage = () => {
    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) {
      setIsRegister(true);
    }
  };

  useEffect(() => {
    if (
      isValidEmail &&
      email.length > 6 &&
      password.length > 5 &&
      name.length > 0
    ) {
      setIsFieldValid(true);
    } else {
      setIsFieldValid(false);
    }
  }, [name, email, password]);
  useEffect(() => {
    if (
      (phone.length === 11 && phone[0] === "0" && phone[1] === "1") ||
      phone.length === 0
    ) {
      setsPhoneNumberCheck(true);
    } else {
      setsPhoneNumberCheck(false);
    }
  }, [phone]);

  useEffect(() => {
    if (qaiUserName.length === 0) {
      setQaiErrorMessageCheck(true);
    } else {
      setQaiErrorMessageCheck(false);
    }
  }, [qaiUserName]);

  const handleName = (e) => {
    setName(capitalizeFirstLetter(e));
  };
  const handleQaiUserName = (e) => {
    setQaiUserName(e);
    dispatch(checkUserByUserName(e)).then((action) => {
      if (action.payload.status === 200) {
        setQaiErrorMessage(action.payload.data.message);
      }
    });
  };

  const handleEmail = (e) => {
    setEmail(e);
  };

  const handlePassword = (e) => {
    setPassword(e);
  };
  const handlePhoneNumber = (e) => {
    setPhone(e);
  };

  const onSubmit = (data) => {
    data.email = email;
    data.password = password;
    data.name = name;
    data.qaiUserName = qaiUserName;
    const qaiCreateData = {
      loginName: data.qaiUserName,
      password: password,
      name: name,
      email: email,
    };
    data.phone = phone;
    data.dob = dob;
    if (hub.length) {
      data.hub = hub;
    }

    const filterdData = data;
  
    isSignup && hub
      ? dispatch(createQaiUser(qaiCreateData)).then((res) => {
          dispatch(createAgUser(qaiCreateData)).then((res) => {
            dispatch(signup(data)).then((action) => {
              if (action.error) {
                alert.show("User can not Register", { type: "error" });
              } else if (action.payload.status === 204) {
                alert.show("This email address already exists", {
                  type: "error",
                });
              } else if (action.payload.status === 200 || 201) {
                alert.show("User Register Successfully", { type: "success" });
                navigate("/emailVerification");
              }
            });
          });
        })
      : dispatch(signup(data)).then((action) => {
          if (action.error) {
            alert.show("User can not Register", { type: "error" });
          } else if (action.payload?.status === 200 || 201) {
            alert.show("User Register Successfully", { type: "success" });
            navigate("/emailVerification");
          }
        });
  };

  return (
    <>
      <>
        <BgBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputFields
              register={register}
              name={name}
              setName={setName}
              setDob={setDob}
              isSignup={true}
              setHub={setHub}
              email={email}
              setEmail={setEmail}
              handleName={handleName}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              password={password}
              setPassword={setPassword}
              isFieldValid={isFieldValid}
              setIsFieldValid={setIsFieldValid}
              isPhoneNumberCheck={isPhoneNumberCheck}
              setsPhoneNumberCheck={setsPhoneNumberCheck}
              errors={errors}
              handleNextPage={handleNextPage}
              isRegister={isRegister}
              setIsRegister={setIsRegister}
              handlePhoneNumber={handlePhoneNumber}
              phone={phone}
              handleQaiUserName={handleQaiUserName}
              qaiErrorMessage={qaiErrorMessage}
              qaiErrorMessageCheck={qaiErrorMessageCheck}
              setQaiUserName={setQaiUserName}
            />
          </form>
        </BgBox>
      </>
    </>
  );
};

export default Register;
