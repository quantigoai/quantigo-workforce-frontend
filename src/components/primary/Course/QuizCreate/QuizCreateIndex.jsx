import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import backIcon from "../../../../assets/images/dashboardIcon/GoBackIcon.svg";
import ChapterCreateHeader from "../ChapterCreate/ChapterCreateHeader";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { useForm } from "react-hook-form";
import QuizNameDurationField from "../QuizPage/QuizNameDurationField";
import QuestionType from "../QuizPage/QuestionType";

const QuizCreateIndex = () => {
  const [inputFields, setInputFields] = useState([
    {
      uniqueId: new Date().getTime(),
      question: {},
      correctAnswerIndex:"",
      possibleAnswers: [],
      correctAnswer: "",
    },
  ]);
  const handleAddQA = () => {
    setInputFields([
      ...inputFields,
      {
        uniqueId: new Date().getTime(),
        question: {},
        correctAnswerIndex:"",
        possibleAnswers: [],
        correctAnswer: "",
      },
    ]);
  };
  const handleRemoveQA = (uniqueId) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.uniqueId === uniqueId),
      1
    );
    setInputFields(values);
  };
  const handleChangeInput = (uniqueId, event) => {
    console.log("🚀 ~ file: QuizCreateIndex.jsx:41 ~ handleChangeInput ~ event:", event)
    // console.log("🚀 ~ file: QuizCreateIndex.jsx:39 ~ handleChangeInput ~ event:", event.target.name)
    const newInputFields = inputFields.map((i) => {
      if (event?.target?.name == "questionText") {
        i.question[event.target.name] = event.target.value;
      }
      if (event?.target?.name == "questionImage") {
        i.question[event.target.name] = event.target.value;
      } else {
        if (uniqueId === i.uniqueId) {
          i[event.target.name] = event.target.value;
        }
      }
      return i;
    });

    setInputFields(newInputFields);
  };
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
  console.log(inputFields);
  return (
    <>
      <Box className="content" sx={{ backgroundColor: "neutral.N000" }}>
        <Grid container sx={{ borderTop: "1px solid #E6ECF5", paddingTop: "1%" }}>
          <Grid xs={2}>
            <Button
              sx={{
                color: "neutral.800",
                // width: {
                //   xl: "110px",
                //   lg: "110px",
                // },
                height: {
                  xl: "32px",
                  lg: "100%",
                },
                textTransform: "none",
                display: "flex",
                gap: 1,
              }}
              // onClick={handleGoBack}
            >
              <img
                style={{
                  width: "15px",
                  height: "15px",
                }}
                src={backIcon}
              />

              <Typography variant="wpf_p4_medium" sx={{ paddingLeft: "0%" }}>
                Back to Course
              </Typography>
            </Button>
          </Grid>
          <Grid xs={8}>
            <Box className="">
              <ChapterCreateHeader />
            </Box>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ backgroundColor: "" }}>
                <QuizNameDurationField method={methods} onSubmit={onSubmit} handleSubmit={handleSubmit} />
              </Box>
              <Box
                sx={{
                  // height: "76vh",
                  height: { lg: "73vh", xl: "60vh", xxl: "67vh" },
                  overflowY: "auto  ",
                  "&::-webkit-scrollbar": {
                    width: "0", // Hide the scrollbar
                  },
                  // backgroundColor: "blue",
                }}>
                {inputFields.map((inputField) => (
                  <Box key={inputField.uniqueId} sx={{ paddingBottom: "2%" }}>
                    {" "}
                    <QuestionType
                      handleRemoveQA={handleRemoveQA}
                      handleChangeInput={handleChangeInput}
                      inputField={inputField}
                      inputFields={inputFields}
                    />
                  </Box>
                ))}
              </Box>
            </FormProvider>
            <Box>
              <Button onClick={() => handleAddQA()}>Add another question</Button>
            </Box>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QuizCreateIndex;
