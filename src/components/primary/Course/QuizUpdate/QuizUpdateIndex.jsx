import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestionFromQuiz, insertAQuestionInQuiz, updateQuizQA } from "../../../../features/slice/quizSlice";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import ChapterUpdateHeader from "../ChapterCreate/ChapterUpdateHeader";
import QuestionType from "../QuizPage/QuestionType";
import QuizNameDurationField from "../QuizPage/QuizNameDurationField";
import useToaster from "../../../../customHooks/useToaster";

const QuizUpdateIndex = () => {
  const [inputFields, setInputFields] = useState([]);
  const { courseChapters } = useSelector((state) => state.course);

  const [disabledButton, setDisabledButton] = useState(true);
  const [durationTime, setDurationTime] = useState("");
  const { quiz } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const [tempData, setTempData] = useState({
    quizId: "",
    questionAndAnswer: {},
  });
  const [addQuiz, setAddQuiz] = useState({
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
    const duration = courseChapters?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.estimatedTimeToRead || 0;
    }, 0);
    const hours = Math.floor(duration / 60) || 0;
    const minutes = duration % 60 || 0;
    if (hours === 0) {
      if (minutes === 0) {
        setDurationTime(minutes + " minute");
      } else {
        setDurationTime(minutes + " minutes");
      }
    } else {
      setDurationTime(hours + " hours " + minutes + " minutes");
    }
  }, [quiz]);

  const handleChangeInput = (uniqueId, event) => {
    const newInputFields = inputFields.map((i) => {});

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
  const handleUpdate = (value, index, field) => {
    if (field.newQuiz) {
      const qaID = field.uniqueId;
      const newAddData1 = { ...addQuiz };
      newAddData1.quizId = quiz._id;
      newAddData1.questionAndAnswer[qaID] = {
        pa: {
          ...newAddData1.questionAndAnswer[qaID]?.pa,
          ...(index !== "questionType"
            ? {
                [index]: value,
                ...(newAddData1.questionAndAnswer[qaID]?.pa?.questionType ? {} : { questionType: field.questionType }),
              }
            : {
                [index]: value,
              }),
        },
      };

      setAddQuiz(newAddData1);
    } else {
      const qaID = field._id;
      const newTempData1 = { ...tempData };
      newTempData1.quizId = quiz._id;
      newTempData1.questionAndAnswer[qaID] = {
        pa: {
          ...newTempData1.questionAndAnswer[qaID]?.pa,
          ...(index !== "questionType"
            ? {
                [index]: value,
                ...(newTempData1.questionAndAnswer[qaID]?.pa?.questionType ? {} : { questionType: field.questionType }),
              }
            : {
                [index]: value,
              }),
        },
      };

      setTempData(newTempData1);
    }
  };

  useEffect(() => {
    Object.entries(tempData.questionAndAnswer).map(([key, val], i) => {
      inputFields.map((i) => {
        if (i._id === key) {
          if (val.pa.questionType != i.questionType) {
            if (i.questionType === "imageInOptions") {
              if (val.pa.questionType === "imageAndOptions") {
                setDisabledButton(true);
                const possibleAnswersArray = [
                  "possibleAnswers_0",
                  "possibleAnswers_1",
                  "possibleAnswers_2",
                  "possibleAnswers_3",
                ];
                const allPossibleAnswersPresent = possibleAnswersArray.every((answer) => answer in val.pa);

                if (allPossibleAnswersPresent && "questionImage" in val.pa) {
                  setDisabledButton(false);
                }
              }
              if (val.pa.questionType === "default") {
                setDisabledButton(true);
                const possibleAnswersArray = [
                  "possibleAnswers_0",
                  "possibleAnswers_1",
                  "possibleAnswers_2",
                  "possibleAnswers_3",
                ];
                const allPossibleAnswersPresent = possibleAnswersArray.every((answer) => answer in val.pa);

                if (allPossibleAnswersPresent) {
                  setDisabledButton(false);
                }
              }
            }
            if (i.questionType === "imageAndOptions") {
              if (val.pa.questionType === "default") {
                setDisabledButton(false);
              }
            }
            if (val.pa.questionType === "imageAndOptions") {
              setDisabledButton(true);
              if ("questionImage" in val.pa) {
                setDisabledButton(false);
              }
              // else {
              //   setDisabledButton(true)
              // }
            }
            if (val.pa.questionType === "imageInOptions") {
              setDisabledButton(true);
              const possibleAnswersArray = [
                "possibleAnswers_0",
                "possibleAnswers_1",
                "possibleAnswers_2",
                "possibleAnswers_3",
              ];
              const allPossibleAnswersPresent = possibleAnswersArray.every((answer) => answer in val.pa);

              if (allPossibleAnswersPresent) {
                setDisabledButton(false);
              }
            }
          }
          if (val.pa.questionType === i.questionType) {
            setDisabledButton(false);
          }
        }
      });
    });
  }, [tempData]);
  const [deleteQuestionIds, setDeleteQuestionIds] = useState([]);
  const [RestoreQuestionID, setRestoreQuestionID] = useState("");
  const handleRemoveQA = (uniqueId) => {
    console.log("🚀 ~ file: QuizUpdateIndex.jsx:188 ~ handleRemoveQA ~ uniqueId:", uniqueId);
    setDeleteQuestionIds((current) => [...current, uniqueId]);
    // const values = [...inputFields];
    // values.splice(
    //   values.findIndex((value) => value.uniqueId === uniqueId),
    //   1
    // );
    // setInputFields(values);
  };
  const handleRestoreQuestion = (uniqueId) => {
    setRestoreQuestionID(uniqueId);
    const updatedDeleteQuestionIds = deleteQuestionIds.filter((id) => id !== uniqueId);

    setDeleteQuestionIds(updatedDeleteQuestionIds);
    // setRestoreQuestionID((current) => [...current, uniqueId]);
  };

  console.log("🚀 ~ file: QuizUpdateIndex.jsx:188 ~ QuizUpdateIndex ~ RestoreQuestionID:", deleteQuestionIds);

  const handleAddQA = () => {
    setInputFields([
      ...inputFields,

      {
        _id: new Date().getTime(),
        newQuiz: true,
        question: {},
        correctAnswerIndex: "",
        possibleAnswers: [],
        correctAnswer: "",
        questionType: "default",
      },
    ]);
  };
  const toast = useToaster();
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => {
    let tempQA;
    // Delete Question in a Quiz
    if (deleteQuestionIds.length !== 0) {
      const deleteQuizData = {
        quizId: quiz._id,
        data: {
          questionIds: deleteQuestionIds,
        },
      };
      dispatch(deleteQuestionFromQuiz(deleteQuizData));
    }
    // update  Quiz Question Answer

    {
      tempData.questionAndAnswer.length !== 0 &&
        Object.entries(tempData.questionAndAnswer).map(([key, val], i) => {
          const data1 = {
            quizId: quiz._id,
            questionId: key,
            formDataQ: null,
          };
          const formData = new FormData();
          Object.entries(val.pa).map(([k, v], i) => {
            formData.append(`${k}`, v);
            data1.formDataQ = formData;
          });
          dispatch(updateQuizQA(data1)).then((action) => {
            // navigate(`/course-details/${course._id}`);
            if (action.error) {
              toast.trigger(action.error.message, "error");
            } else {
              toast.trigger(action.payload.data.message, "success");
            }
          });

          // for (let pair of formData.entries()) {
          //   console.log(pair[0] + ", " + pair[1]);
          // }
        });
    }

    // add a new question in Quiz
    {
      addQuiz.questionAndAnswer.length !== 0 &&
        Object.entries(addQuiz.questionAndAnswer).map(([key, val], i) => {
          const data1 = {
            quizId: quiz._id,
            // questionId: key,
            formDataQ: null,
          };
          const formData = new FormData();
          Object.entries(val.pa).map(([k, v], i) => {
            formData.append(`${k}`, v);
            data1.formDataQ = formData;
          });
          dispatch(insertAQuestionInQuiz(data1));
          // for (let pair of formData.entries()) {
          //   console.log(pair[0] + ", " + pair[1]);
          // }
        });
    }
  };

  return (
    <>
      <Box className="content" sx={{ backgroundColor: "neutral.N000" }}>
        <Grid container sx={{ borderTop: "1px solid #E6ECF5", paddingTop: "1%" }}>
          <Grid xs={2}>
            {/* <Button
              sx={{
                color: 'neutral.800',
                // width: {
                //   xl: "110px",
                //   lg: "110px",
                // },
                height: {
                  xl: '32px',
                  lg: '100%',
                },
                textTransform: 'none',
                display: 'flex',
                gap: 1,
              }}
            // onClick={handleGoBack}
            >
              <img
                style={{
                  width: '15px',
                  height: '15px',
                }}
              // src={backIcon}
              />

              <Typography variant="wpf_p4_medium" sx={{ paddingLeft: '0%' }}>
                Back to Course
              </Typography>
            </Button> */}
          </Grid>
          <Grid xs={8}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box className="">
                <ChapterUpdateHeader disabledButton={disabledButton} durationTime={durationTime} />
              </Box>

              <Box sx={{ backgroundColor: "" }}>
                <QuizNameDurationField update={true} method={methods} onSubmit={onSubmit} handleSubmit={handleSubmit} />
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
                }}
              >
                {inputFields &&
                  inputFields.map((inputField) => {
                    const isDeleted = deleteQuestionIds.includes(inputField._id);
                    const backgroundColor = isDeleted ? "red" : "";

                    return (
                      <Box key={inputField.uniqueId} sx={{ paddingBottom: "2%", backgroundColor }}>
                        <QuestionType
                          handleRemoveQA={handleRemoveQA}
                          handleChangeInput={handleChangeInput}
                          inputField={inputField}
                          inputFields={inputFields}
                          handleUpdate={handleUpdate}
                          update={true}
                          handleRestoreQuestion={handleRestoreQuestion}
                          RestoreQuestionID={RestoreQuestionID}
                          deleteQuestionIds={deleteQuestionIds}
                        />
                      </Box>
                    );
                  })}
                {/* {inputFields &&
                  inputFields.map((inputField) => (
                    <Box key={inputField.uniqueId} sx={{ paddingBottom: "2%" ,backgroundColor:"red" }}>
                      {" "}
                      <QuestionType
                        handleRemoveQA={handleRemoveQA}
                        handleChangeInput={handleChangeInput}
                        inputField={inputField}
                        inputFields={inputFields}
                        handleUpdate={handleUpdate}
                        update={true}
                        handleRestoreQuestion={handleRestoreQuestion}
                      />
                    </Box>
                  ))} */}
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

export default QuizUpdateIndex;
