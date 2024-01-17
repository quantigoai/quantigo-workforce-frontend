import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteQuestionFromQuiz,
  insertAQuestionInQuiz,
  updateQuizById,
  updateQuizQA,
  updateQuizQAFunction,
} from "../../../../features/slice/quizSlice";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import ChapterUpdateHeader from "../ChapterCreate/ChapterUpdateHeader";
import QuestionType from "../QuizPage/QuestionType";
import QuizNameDurationField from "../QuizPage/QuizNameDurationField";
import useToaster from "../../../../customHooks/useToaster";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const QuizUpdateIndex = () => {
  const [inputFieldsCopy, setInputFieldsCopy] = useState([]);
  const { courseChapters } = useSelector((state) => state.course);
  const [isCompleted, setIsCompleted] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [durationTime, setDurationTime] = useState("");
  const { quiz } = useSelector((state) => state.quiz);
  console.log("🚀 ~ file: QuizUpdateIndex.jsx:24 ~ QuizUpdateIndex ~ quiz:", quiz);
  const [inputFields, setInputFields] = useState(quiz.questionAndAnswer);

  const dispatch = useDispatch();
  const [tempData, setTempData] = useState({
    quizId: "",
    questionAndAnswer: {},
  });
  const [addQuiz, setAddQuiz] = useState({
    quizId: "",
    questionAndAnswer: {},
  });
  const QuizEditSchema = Yup.object().shape({
    name: Yup.string().required("Quiz name is required"),
    // duration: Yup.string().required("Quiz duration is required"),
    duration: Yup.number()
      .required("Quiz duration is required")
      .lessThan(21, "Quiz duration must be in range between 1 to 20")
      .transform((value) => (isNaN(value) ? undefined : value)),
  });
  const methods = useForm({
    resolver: yupResolver(QuizEditSchema),
    defaultValues: {
      name: quiz.name,
      duration: quiz.duration,
    },
    mode: "all",
  });
  useEffect(() => {
    // setInputFields(quiz.questionAndAnswer);
    // quiz && setMd({ ...quiz });
    setInputFieldsCopy([...inputFields]);
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
      const newInputFields = inputFields.map((item) => {
        if (item._id === field._id) {
          if (index === "questionText") {
            item.question[index] = value;
          }
          if (index === "questionImage") {
            item.question[index] = value;
          }
          if (index === "correctAnswerIndex") {
            item.correctAnswerIndex = value;
          }

          if (index === "questionType") {
            item.questionType = value;
            if (value === "imageAndOptions" || value === "default" || value === "imageInOptions") {
              item.possibleAnswers = [];
            }
            if (value === "default" || value === "imageInOptions") {
              delete item.question.questionImage;
            }
          }
          if (index === "correctAnswerIndex") {
            item.correctAnswerIndex = value;
          }
          if (index === "possibleAnswers_0") {
            item.possibleAnswers[0] = value;
          }
          if (index === "possibleAnswers_1") {
            item.possibleAnswers[1] = value;
          }

          if (index === "possibleAnswers_2") {
            item.possibleAnswers[2] = value;
          }

          if (index === "possibleAnswers_3") {
            item.possibleAnswers[3] = value;
          }
        }
        return item;
      });

      setInputFieldsCopy(newInputFields);
      setInputFields(newInputFields);

      const qaID = field._id;
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
  const handleRemoveQA = (field) => {
    if (field.newQuiz) {
      // const values = [...inputFields];
      // values.splice(
      //   values.findIndex((value) => value._id === field._id),
      //   1
      // );
      const filteredArr = inputFieldsCopy.filter((item) => item._id !== field._id);

      delete addQuiz.questionAndAnswer[field._id];
      setInputFieldsCopy(filteredArr);
      setInputFields(filteredArr);
      setIsCompleted(true);
    } else {
      setDeleteQuestionIds((current) => [...current, field._id]);
    }
  };
  const handleRestoreQuestion = (uniqueId) => {
    setRestoreQuestionID(uniqueId);
    const updatedDeleteQuestionIds = deleteQuestionIds.filter((id) => id !== uniqueId);

    setDeleteQuestionIds(updatedDeleteQuestionIds);
    // setRestoreQuestionID((current) => [...current, uniqueId]);
  };

  // solve this
  useEffect(() => {}, [inputFieldsCopy]);
  const handleAddQA = () => {
    setInputFieldsCopy([
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
  const [quizaUpdateLoading, setQuizUpdateLoading] = useState(false);
  const [accept, setAccept] = useState(false);

  const onSubmit = async (data) => {
    await toast.responsePromise(
      // updateQuizQAFunction(data1),
      setQuizUpdateLoading,
      {
        initialMessage: "quiz is updating ...",
        inPending: () => {
          setAccept(false);
        },
        afterSuccess: (data) => {
          setAccept(false);
        },
        afterError: (data) => {
          setAccept(false);
        },
      },
      "forQuizCreate"
    );
    let tempQA;

    // update  Quiz Question Answer

    {
      tempData.questionAndAnswer.length !== 0 &&
        Object.entries(tempData.questionAndAnswer).map(async ([key, val], i) => {
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

    // add a new question in Quiz
    console.log(addQuiz.questionAndAnswer);
    {
      addQuiz.questionAndAnswer.length !== 0 &&
        Object.entries(addQuiz.questionAndAnswer).map(([key, val], i) => {
          const data1 = {
            quizId: quiz._id,
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

    // Update a quiz name and duration

    const finalData = {
      id: quiz._id,
      data,
    };
    dispatch(updateQuizById(finalData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        toast.trigger(action.payload.data.message, "success");
      }
    });
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
                {inputFieldsCopy &&
                  inputFieldsCopy.map((inputField) => {
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
                          isCompleted={isCompleted}
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
