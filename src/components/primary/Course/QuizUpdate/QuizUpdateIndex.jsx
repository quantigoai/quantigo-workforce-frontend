import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChapterCreateHeader from "../ChapterCreate/ChapterCreateHeader";
import { useForm } from "react-hook-form";
import QuizNameDurationField from "../QuizPage/QuizNameDurationField";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import { useDispatch, useSelector } from "react-redux";
import QuestionType from "../QuizPage/QuestionType";
import { updateQuizQA } from "../../../../features/slice/quizSlice";

const QuizUpdateIndex = () => {
  const [inputFields, setInputFields] = useState([]);
  const { quiz } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
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
    console.log("🚀 ~ file: QuizUpdateIndex.jsx:57 ~ handleUpdate ~ f:", f);
    console.log("🚀 ~ file: QuizUpdateIndex.jsx:57 ~ handleUpdate ~ i:", i);

    const qaID = f._id;
    const newTempData1 = { ...tempData };
    newTempData1.quizId = quiz._id;

    newTempData1.questionAndAnswer[qaID] = {
      pa: {
        ...newTempData1.questionAndAnswer[qaID]?.pa,
        ...(i !== "questionType"
          ? {
              [i]: v,
              questionType: f.questionType,
            }
          : {
              [i]: v,
            }),
        // ...newTempData1.questionAndAnswer[qaID]?.pa,
        // [i]: v,
      },
    };
    setTempData(newTempData1);
  };
  console.log(tempData);
  const handleRemoveQA = (uniqueId) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.uniqueId === uniqueId),
      1
    );
    setInputFields(values);
  };
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => {
    let tempQA;
    console.log(tempData.questionAndAnswer);

    {
      Object.entries(tempData.questionAndAnswer).map(([key, val], i) => {
        const data1 = {
          quizId: quiz._id,
          questionId: key,
          formDataQ: null,
        };
        const formData = new FormData();
        Object.entries(val.pa).map(([k, v], i) => {
          console.log(k);
          console.log(v);

          formData.append(`${k}`, v);
          data1.formDataQ = formData;
        });
        dispatch(updateQuizQA(data1));
        for (let pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
      });
    }
  };

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
                        handleRemoveQA={handleRemoveQA}
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
