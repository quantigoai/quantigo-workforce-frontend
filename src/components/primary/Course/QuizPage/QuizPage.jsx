import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import QuizHeader from "./QuizHeader";
import CustomTextField from "../../../shared/CustomField/CustomTextField";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import QuizNameDurationField from "./QuizNameDurationField";
import RegistrationForm from "../../Auth/Register/RegistrationForm";
import { LoadingButtonStyle } from "../../Auth/Login/Login";
import QuestionType from "./QuestionType";

const QuizPage = () => {
  const methods = useForm({
    // resolver: yupResolver(LoginSchema),
    // defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    // dispatch(login(data)).then((action) => {
    //   if (action.payload?.status === 200) {
    //     toast.trigger("Login Successful", "success");
    //     navigate("/dashboard");
    //   } else {
    //     toast.trigger("Login failed", "error");
    //   }
    // });
  };

  return (
    <Box className="content">
      <Box className="contentHeader">
        <QuizHeader />
      </Box>

      <Box
        sx={{
          height: "85%",
          overflow: "auto",
          backgroundColor: "neutral.N000",
          width: "100%",
          pt: 2,
          mt: 2,
          pr: 20,
          pl: 3,
        }}
      >
        <Box>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <QuizNameDurationField method={methods} onSubmit={onSubmit} handleSubmit={handleSubmit} />
          </FormProvider>
          <Box>
            <QuestionType />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuizPage;
