import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import useToaster from "../../../../customHooks/useToaster";
import { createQuizFunction } from "../../../../features/slice/quizSlice";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import ChapterCreateHeader from "../ChapterCreate/ChapterCreateHeader";
import QuestionType from "../QuizPage/QuestionType";
import QuizNameDurationField from "../QuizPage/QuizNameDurationField";

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
      isTextFieldEnabled: false,
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
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.uniqueId === uniqueId),
      1
    );
    setInputFields(values);
  };

  const handleChangeInput = (uniqueId, event, questionImage) => {
    console.log("🚀 ~ handleChangeInput ~ event:", event);
    const newInputFields = inputFields.map((i) => {
      if (event === "imageAndOptions" || event === "default" || event === "imageInOptions") {
        if (uniqueId === i.uniqueId) {
          i["possibleAnswers"] = [];
        }
      }
      if (event === "default" || event === "imageInOptions") {
        if (uniqueId === i.uniqueId) {
          if (i.question.questionImage) {
            delete i.question.questionImage;
          }
        }
      }

      if (event?.target?.name === "questionText") {
        if (uniqueId === i.uniqueId) {
          i.question[event.target.name] = event.target.value;
        }
      }
      if (questionImage === "questionImage") {
        if (uniqueId === i.uniqueId) {
          i.question[questionImage] = event;
        }
      }
      if (event?.target?.name === "questionText" && event?.target?.name === "questionImage") {
        if (uniqueId === i.uniqueId) {
          i[event.target.name] = event.target.value;
        }
      }
      console.log("🚀 ~ newInputFields ~ i:", i);
      return i;
    });

    setInputFields(newInputFields);
  };

  useEffect(() => {}, [inputFields]);
  const { course } = useSelector((state) => state.course);
  const quizSchema = Yup.object().shape({
    quiz_name: Yup.string().required("Quiz name is required"),
    // duration: Yup.string().required(" Quiz duration is required"),
    passMarkThreshold: Yup.number()
      .required("Quiz Pass Mark threshold is required")
      .lessThan(101, "Quiz Pass Mark threshold must be in range between 1 to 100")
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

  const { quiz_name, passMarkThreshold } = watch();

  const isFieldNotEmpty = !!quiz_name && !!passMarkThreshold;
  const isInValid = errors.passMarkThreshold;

  useEffect(() => {
    if (isFieldNotEmpty && !isInValid?.message) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [isFieldNotEmpty, isInValid?.message]);
  const [quizLoading, setQuizLoading] = useState(false);
  const [reject, setReject] = React.useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    data.courseId = courseChapter.rootCourse._id;
    data.courseChapterId = courseChapter._id;
    formData.append("courseId", data.courseId);
    formData.append("courseChapterId", courseChapter._id);
    formData.append("name", data.quiz_name);
    formData.append("passMarkThreshold", data.passMarkThreshold);
    // inputFields.map((inputField) => {
    //   delete inputField.uniqueId;
    //   return inputField;
    // });

    inputFields.forEach((qa, index) => {
      formData.append(`questionAndAnswer[${index}][questionType]`, qa.questionType);
      // TODO handle this dynamically
      qa.isTextFieldEnabled &&
        formData.append(`questionAndAnswer[${index}][isTextFieldEnabled]`, qa.isTextFieldEnabled);
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
        // formData.append(`questionAndAnswer[${index}][possibleAnswers][${answerIndex}]`, answer);
      });

      // if (qa.correctAnswerIndex) {
      // if (qa.correctAnswerIndex >= 0 && qa.correctAnswerIndex < 4) {
      if (
        qa.correctAnswerIndex === 0 ||
        qa.correctAnswerIndex === 1 ||
        qa.correctAnswerIndex === 2 ||
        qa.correctAnswerIndex === 3
      ) {
        formData.append(`questionAndAnswer[${index}][correctAnswerIndex]`, qa.correctAnswerIndex);
      }
      // }
      else {
        formData.append(`questionAndAnswer[${index}][correctAnswerIndex]`, -1);
      }
      // formData.append(`questionAndAnswer[${index}][correctAnswer]`, qa.correctAnswer);
      // if (qa.correctAnswerIndex >= 0 && qa.correctAnswerIndex < 4) {
      //   formData.append(`questionAndAnswer[${index}][correctAnswerIndex]`, qa.correctAnswerIndex);
      // } else {
      //   console.log("sd");
      //   formData.append(`questionAndAnswer[${index}][correctAnswerIndex]`, 5);
      // }
    });
    data.questionAndAnswer = inputFields;

    await toast.responsePromise(
      createQuizFunction(formData),
      setQuizLoading,
      {
        initialMessage: "quiz is creating ...",
        inPending: () => {
          setReject(false);
        },
        afterSuccess: (data) => {
          setReject(false);
          navigate(`/course-homepage/${course._id}`);
        },
        afterError: (data) => {
          setReject(false);
        },
      },
      "forQuizCreate"
    );

    // dispatch(createAQuiz(formData)).then((action) => {
    //   // navigate(`/course-details/${course._id}`);
    //   if (action.error) {
    //     toast.trigger(action.error.message, "error");
    //   } else {
    //     toast.trigger(action.payload.data.message, "success");
    //   }
    // });
  };

  return (
    <>
      <Box className='content' sx={{ backgroundColor: "neutral.N000" }}>
        <Grid container sx={{ borderTop: "1px solid #E6ECF5", paddingTop: "5px" }}>
          <Grid xs={1}></Grid>
          <Grid xs={8}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box className=''>
                <ChapterCreateHeader quizLoading={quizLoading} isDisable={isDisable} durationTime={durationTime} />
              </Box>

              <Box sx={{ mt: 1 }}>
                <QuizNameDurationField
                  method={methods}
                  onSubmit={onSubmit}
                  handleSubmit={handleSubmit}
                  update={false}
                />
              </Box>

              <Box
                sx={{
                  height: { lg: "57vh", xl: "57vh", xxl: "63vh" },
                  overflowY: "auto  ",
                  "&::-webkit-scrollbar": {
                    width: "0", // Hide the scrollbar
                  },
                }}
              >
                {inputFields.map((inputField) => (
                  <Box key={inputField.uniqueId} sx={{ paddingBottom: "2%" }}>
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
