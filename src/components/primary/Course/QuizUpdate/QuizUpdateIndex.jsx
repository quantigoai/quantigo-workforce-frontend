import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChapterCreateHeader from "../ChapterCreate/ChapterCreateHeader";
import { useForm } from "react-hook-form";
import QuizNameDurationField from "../QuizPage/QuizNameDurationField";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { useSelector } from "react-redux";
import QuestionType from "../QuizPage/QuestionType";

const QuizUpdateIndex = () => {
  const [inputFields, setInputFields] = useState([]);
  const { quiz } = useSelector((state) => state.quiz);
  const [tempData, setTempData] = useState({
    quizId: "",
    questionAndAnswer: {},
  });

  const methods = useForm({
    // resolver: yupResolver(LoginSchema),
    // defaultValues,
  });
  useEffect(() => {
    setInputFields(quiz.questionAndAnswer);
    // quiz && setMd({ ...quiz });
  }, [quiz]);

  const handleChangeInput = (uniqueId, event) => {
    console.log("🚀 ~ file: QuizUpdateIndex.jsx:23 ~ handleChangeInput ~ uniqueId:", uniqueId);
    console.log("🚀 ~ file: QuizUpdateIndex.jsx:23 ~ handleChangeInput ~ event:", event);
    console.log("hittt");
    console.log(inputFields);

    const newInputFields = inputFields.map((i) => {
      console.log("🚀 ~ file: QuizUpdateIndex.jsx:31 ~ newInputFields ~ i:", i);
    });

    // const newInputFields = inputFields.map((i) => {
    //   if (event?.target?.name === "questionText") {
    //     i.question[event.target.name] = event.target.value;
    //   }
    //   if (event?.target?.name === "questionImage") {
    //     i.question[event.target.name] = event.target.files[0];
    //   }
    //   if (event?.target?.name === "questionText" && event?.target?.name === "questionImage") {
    //     if (uniqueId === i.uniqueId) {
    //       i[event.target.name] = event.target.value;
    //     }
    //   }
    //   return i;
    // });

    // setInputFields(newInputFields);
  };
  const handleUpdate = (v, i, f) => {
    const qaID = f._id;
    const newTempData1 = { ...tempData };
    newTempData1.quizId = quiz._id;
    // if (i === 4 || i === 5) {
    //   i === 4 ? (newTempData1.question = v) : (newTempData1.correctAnswer = v);
    // }
    console.log("🚀 ~ file: QuizUpdateIndex.jsx:55 ~ handleUpdate ~ i:", i);
    newTempData1.questionAndAnswer[qaID] = {
      pa: {
        ...newTempData1.questionAndAnswer[qaID]?.pa,
        [i]: v,
      },
    };
    setTempData(newTempData1);
    console.log("🚀 ~ file: QuizUpdateIndex.jsx:72 ~ handleUpdate ~ newTempData1:", newTempData1);
  };
  console.log(tempData);
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => {};
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
                // src={backIcon}
              />

              <Typography variant="wpf_p4_medium" sx={{ paddingLeft: "0%" }}>
                Back to Course
              </Typography>
            </Button>
          </Grid>
          <Grid xs={8}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box className="">
                <ChapterCreateHeader />
              </Box>

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
                {inputFields &&
                  inputFields.map((inputField) => (
                    <Box key={inputField.uniqueId} sx={{ paddingBottom: "2%" }}>
                      {" "}
                      <QuestionType
                        //   handleRemoveQA={handleRemoveQA}
                        handleChangeInput={handleChangeInput}
                        inputField={inputField}
                        inputFields={inputFields}
                        handleUpdate={handleUpdate}
                        update={true}
                      />
                    </Box>
                  ))}
              </Box>
            </FormProvider>
            <Box>{/* <Button onClick={() => handleAddQA()}>Add another question</Button> */}</Box>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QuizUpdateIndex;
