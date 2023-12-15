import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import useToaster from "../../../../customHooks/useToaster";
import { createAQuiz } from "../../../../features/slice/quizSlice";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import ChapterCreateHeader from "../ChapterCreate/ChapterCreateHeader";
import QuestionType from "../QuizPage/QuestionType";
import QuizNameDurationField from "../QuizPage/QuizNameDurationField";
import { useNavigate, useParams } from "react-router-dom";
const QuizCreateIndex = () => {
  const { courseChapter, courseChapters } = useSelector((state) => state.course);
  const toast = useToaster();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);
  const [durationTime, setDurationTime] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      uniqueId: new Date().getTime(),
      question: {},
      correctAnswerIndex: "",
      possibleAnswers: [],
      correctAnswer: "",
      questionType: "default",
    },
  ]);
  const handleAddQA = () => {
    setInputFields([
      ...inputFields,
      {
        uniqueId: new Date().getTime(),
        question: {},
        correctAnswerIndex: "",
        possibleAnswers: [],
        correctAnswer: "",
        questionType: "default",
      },
    ]);
  };
  useEffect(() => {
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

    // navigate(`/course-details/${course._id}/index`);
  }, []);
  const handleRemoveQA = (uniqueId) => {
    console.log("🚀 ~ file: QuizCreateIndex.jsx:64 ~ handleRemoveQA ~ uniqueId:", uniqueId);
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.uniqueId === uniqueId),
      1
    );
    setInputFields(values);
  };
  const handleChangeInput = (uniqueId, event) => {
    const newInputFields = inputFields.map((i) => {
      if (uniqueId === "imageAndOptions" || uniqueId === "default" || uniqueId === "imageInOptions") {
        i["possibleAnswers"] = [];
      }
      if (uniqueId === "default" || uniqueId === "imageInOptions") {
        console.log(i.question.questionImage);
        i.question["questionImage"] = "";
      }
      console.log("🚀 ~ file: QuizCreateIndex.jsx:94 ~ newInputFields ~ i:", i);
      if (event?.target?.name === "questionText") {
        if (uniqueId === i.uniqueId) {
          i.question[event.target.name] = event.target.value;
        }
      }
      if (event?.target?.name === "questionImage") {
        if (uniqueId === i.uniqueId) {
          i.question[event.target.name] = event.target.files[0];
        }
      }
      if (event?.target?.name === "questionText" && event?.target?.name === "questionImage") {
        if (uniqueId === i.uniqueId) {
          i[event.target.name] = event.target.value;
        }
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  useEffect(() => {}, [inputFields]);
  console.log(inputFields);
  const quizSchema = Yup.object().shape({
    quiz_name: Yup.string().required("Quiz name is required"),
    // duration: Yup.string().required(" Quiz duration is required"),
    duration: Yup.number()
      .required("Quiz duration is required")
      .lessThan(21, "Quiz duration must be in range between 1 to 20")
      .transform((value) => (isNaN(value) ? undefined : value)),
  });
  const methods = useForm({
    resolver: yupResolver(quizSchema),
    // defaultValues,
    mode: "all",
  });
  const {
    watch,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { quiz_name, duration } = watch();

  const isFieldNotEmpty = !!quiz_name && !!duration;
  const isInValid = errors.duration;

  useEffect(() => {
    if (isFieldNotEmpty && !isInValid?.message) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [isFieldNotEmpty, isInValid?.message]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    data.courseId = courseChapter.rootCourse._id;
    data.courseChapterId = courseChapter._id;
    formData.append("courseId", data.courseId);
    formData.append("courseChapterId", courseChapter._id);
    formData.append("name", data.quiz_name);
    formData.append("duration", data.duration);
    // inputFields.map((inputField) => {
    //   delete inputField.uniqueId;
    //   return inputField;
    // });

    inputFields.forEach((qa, index) => {
      formData.append(`questionAndAnswer[${index}][questionType]`, qa.questionType);
      if (qa.questionType === "default" || qa.questionType === "imageInOptions") {
        if (qa.question.questionText) {
          formData.append(`questionAndAnswer[${index}][question][questionText]`, qa.question.questionText);
        }
      } else {
        if (qa.question.questionText) {
          formData.append(`questionAndAnswer[${index}][question][questionText]`, qa.question.questionText);
        }
        if (qa.question.questionImage) {
          formData.append(`question_${index}`, qa.question.questionImage);
          // formData.append(`questionAndAnswer[${index}][question][questionImage]`, qa.question.questionImage);
        }
      }
      qa.possibleAnswers.forEach((answer, answerIndex) => {
        if (qa.questionType === "imageInOptions") {
          formData.append(`question_${index}_Answer_${answerIndex}`, answer);
        } else {
          formData.append(`questionAndAnswer[${index}][possibleAnswers][${answerIndex}]`, answer);
        }
        // const key = Object.keys(answer)[0];
        // console.log("🚀 ~ file: QuizCreateIndex.jsx:101 ~ qa.possibleAnswers.forEach ~ answer:", answer);
        // formData.append(`questionAndAnswer[${index}][possibleAnswers][${answerIndex}]`, answer);
      });

      // formData.append(`questionAndAnswer[${index}][correctAnswer]`, qa.correctAnswer);
      formData.append(`questionAndAnswer[${index}][correctAnswerIndex]`, qa.correctAnswerIndex);
    });
    

    data.questionAndAnswer = inputFields;
    // dispatch(createAQuiz(formData)).then((action) => {
    //   if (action.error) {
    //     toast.trigger(action.error.message, "error");
    //   } else {
    //     // const courseId = action.payload.data.course._id;
    //     // const { _id, name } = action.payload.data;
    //     // dispatch(manuallyUpdateCourse({ id: _id, name }));
    //     // navigate(`/course-details/${courseId}/content`);
    //     toast.trigger("Quiz Create Successfully", "success");
    //     navigate(`/course-details/${id}/index`);
    //   }
    // });
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
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
                src={backIcon}
              />

              <Typography variant="wpf_p4_medium" sx={{ paddingLeft: '0%' }}>
                Back to Course
              </Typography>
            </Button> */}
          </Grid>
          <Grid xs={8}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box className="">
                <ChapterCreateHeader isDisable={isDisable} durationTime={durationTime} />
              </Box>

              <Box sx={{ backgroundColor: "", mt: 3 }}>
                <QuizNameDurationField
                  method={methods}
                  onSubmit={onSubmit}
                  handleSubmit={handleSubmit}
                  update={false}
                />
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

// data = {
//   quizId: "sdsdssdsad",
//   questionId: "15414587414654",
//   formData: {
//     // formData.append(`questionAndAnswer[${index}][question][questionText]`, qa.question.questionText);
//   }
// }
