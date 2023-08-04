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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  checkUserByUserName,
  createAgUser,
  createQaiUser,
  signup,
} from "../../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
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

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hub, setHub] = useState("");
  const [dob, setDob] = useState("");
  const [isFieldValid, setIsFieldValid] = useState(false);
  const [isPhoneNumberCheck, setsPhoneNumberCheck] = useState(false);
  const [isUserPhoneNumberCheck, setIsUserPhoneNumberCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [qaiUserName, setQaiUserName] = useState("");
  const [qaiErrorMessage, setQaiErrorMessage] = useState("");
  const [qaiErrorMessageCheck, setQaiErrorMessageCheck] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { error } = useSelector((state) => state.user);
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
  const handleSerGender = (e) => {
    setGender(e.target.value);
  };
  useEffect(() => {
    if (
      isValidEmail &&
      email.length > 6 &&
      password.length > 5 &&
      name.length > 0 &&
      lastName.length > 0
    ) {
      setIsFieldValid(true);
    } else {
      setIsFieldValid(false);
    }
  }, [name, email, password, lastName]);
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
    if (
      (userPhoneNumber.length === 11 &&
        userPhoneNumber[0] === "0" &&
        userPhoneNumber[1] === "1") ||
      userPhoneNumber.length === 0
    ) {
      setIsUserPhoneNumberCheck(true);
    } else {
      setIsUserPhoneNumberCheck(false);
    }
  }, [userPhoneNumber]);
  useEffect(() => {
    if (qaiUserName.length === 0) {
      setQaiErrorMessageCheck(true);
    } else {
      setQaiErrorMessageCheck(false);
    }
  }, [qaiUserName]);

  const handleFirstName = (e) => {
    setName(capitalizeFirstLetter(e));
  };
  const handleLastName = (e) => {
    setLastName(capitalizeFirstLetter(e));
  };
  const [validUserName, setValidUserName] = useState(false);
  const handleQaiUserName = (e) => {
    setQaiUserName(e);
    dispatch(checkUserByUserName(e)).then((action) => {
      if (action.payload.status === 200) {
        if (
          action.payload.data.isExist &&
          action.payload.data.message !== "This User Id is already taken"
        ) {
          setValidUserName(true);
        } else {
          setValidUserName(false);
        }
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
  const handleUserPhoneNumber = (e) => {
    setUserPhoneNumber(e);
  };
  const onSubmit = (data) => {
    data.email = email;
    data.password = password;
    data.name = name.concat(" ", lastName);
    data.firstName = name;
    data.lastName = lastName;
    data.qaiUserName = qaiUserName;
    data.gender = gender;
    const qaiCreateData = {
      loginName: data.qaiUserName,
      password: password,
      name: name.concat(" ", lastName),
      email: email,
    };
    data.billingAccountNo = phone;
    data.phone = userPhoneNumber;
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
                alert.show(error, { type: "error" });
              } else if (action.payload.status === 204) {
                alert.show(error, {
                  type: "error",
                });
              } else if (
                action.payload.status === 200 ||
                action.payload.status === 201
              ) {
                alert.show("User Register Successfully", { type: "success" });
                navigate("/emailVerification");
              }
            });
          });
        })
      : dispatch(signup(data)).then((action) => {
          if (action.error) {
            alert.show(error, { type: "error" });
          } else if (
            action.payload?.status === 200 ||
            action.payload?.status === 201
          ) {
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
              handleFirstName={handleFirstName}
              handleLastName={handleLastName}
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
              setQaiErrorMessage={setQaiErrorMessage}
              qaiErrorMessageCheck={qaiErrorMessageCheck}
              setQaiUserName={setQaiUserName}
              validUserName={validUserName}
              setValidUserName={setValidUserName}
              qaiUserName={qaiUserName}
              handleSerGender={handleSerGender}
              gender={gender}
              setGender={setGender}
              handleUserPhoneNumber={handleUserPhoneNumber}
              userPhoneNumber={userPhoneNumber}
              isUserPhoneNumberCheck={isUserPhoneNumberCheck}
              lastName={lastName}
            />
          </form>
        </BgBox>
      </>
    </>
  );
};

export default Register;
