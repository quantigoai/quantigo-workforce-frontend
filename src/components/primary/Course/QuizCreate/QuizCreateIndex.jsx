import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import backIcon from '../../../../assets/images/dashboardIcon/GoBackIcon.svg';
import useToaster from '../../../../customHooks/useToaster';
import { createAQuiz } from '../../../../features/slice/quizSlice';
import FormProvider from '../../../shared/FormProvider/FormProvider';
import ChapterCreateHeader from '../ChapterCreate/ChapterCreateHeader';
import QuestionType from '../QuizPage/QuestionType';
import QuizNameDurationField from '../QuizPage/QuizNameDurationField';

const QuizCreateIndex = () => {
  const { courseChapter } = useSelector((state) => state.course);
  const toast = useToaster();
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([
    {
      uniqueId: new Date().getTime(),
      question: {},
      correctAnswerIndex: '',
      possibleAnswers: [],
      correctAnswer: '',
      questionType: 'default',
    },
  ]);
  const handleAddQA = () => {
    setInputFields([
      ...inputFields,
      {
        uniqueId: new Date().getTime(),
        question: {},
        correctAnswerIndex: '',
        possibleAnswers: [],
        correctAnswer: '',
        questionType: 'default',
      },
    ]);
  };
  const handleRemoveQA = (uniqueId) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.uniqueId === uniqueId),
      1,
    );
    setInputFields(values);
  };
  const handleChangeInput = (uniqueId, event) => {
    const newInputFields = inputFields.map((i) => {
      if (event?.target?.name === 'questionText') {
        i.question[event.target.name] = event.target.value;
      }
      if (event?.target?.name === 'questionImage') {
        i.question[event.target.name] = event.target.files[0];
      }
      if (
        event?.target?.name === 'questionText' &&
        event?.target?.name === 'questionImage'
      ) {
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
    const formData = new FormData();
    data.courseId = courseChapter.rootCourse._id;
    data.courseChapterId = courseChapter._id;
    formData.append('courseId', data.courseId);
    formData.append('courseChapterId', courseChapter._id);
    formData.append('name', data.quiz_name);
    formData.append('duration', data.duration);
    // inputFields.map((inputField) => {
    //   delete inputField.uniqueId;
    //   return inputField;
    // });

    inputFields.forEach((qa, index) => {
      formData.append(
        `questionAndAnswer[${index}][questionType]`,
        qa.questionType,
      );
      if (
        qa.questionType === 'default' ||
        qa.questionType === 'imageInOptions'
      ) {
        formData.append(
          `questionAndAnswer[${index}][question][questionText]`,
          qa.question.questionText,
        );
      } else {
        formData.append(
          `questionAndAnswer[${index}][question][questionText]`,
          qa.question.questionText,
        );
        formData.append(`question_${index}`, qa.question.questionImage);
        // formData.append(`questionAndAnswer[${index}][question][questionImage]`, qa.question.questionImage);
        console.log(
          '🚀 ~ file: QuizCreateIndex.jsx:98 ~ inputFields.forEach ~ qa.question.questionImage:',
          qa.question.questionImage,
        );
      }
      qa.possibleAnswers.forEach((answer, answerIndex) => {
        if (qa.questionType === 'imageInOptions') {
          formData.append(`question_${index}_Answer_${answerIndex}`, answer);
        } else {
          formData.append(
            `questionAndAnswer[${index}][possibleAnswers][${answerIndex}]`,
            answer,
          );
        }
        // const key = Object.keys(answer)[0];
        // console.log("🚀 ~ file: QuizCreateIndex.jsx:101 ~ qa.possibleAnswers.forEach ~ answer:", answer);
        // formData.append(`questionAndAnswer[${index}][possibleAnswers][${answerIndex}]`, answer);
      });

      // formData.append(`questionAndAnswer[${index}][correctAnswer]`, qa.correctAnswer);
      formData.append(
        `questionAndAnswer[${index}][correctAnswerIndex]`,
        qa.correctAnswerIndex,
      );
    });

    data.questionAndAnswer = inputFields;
    console.log(formData);
    dispatch(createAQuiz(formData)).then((action) => {
      if (action.payload?.status === 200) {
        // const courseId = action.payload.data.course._id;
        // const { _id, name } = action.payload.data;
        // dispatch(manuallyUpdateCourse({ id: _id, name }));
        // navigate(`/course-details/${courseId}/content`);
        toast.trigger('Quiz Create Successfully', 'success');
      } else {
        toast.trigger('Quiz can not create', 'error');
      }
    });
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  };
  console.log(inputFields);

  return (
    <>
      <Box className="content" sx={{ backgroundColor: 'neutral.N000' }}>
        <Grid
          container
          sx={{ borderTop: '1px solid #E6ECF5', paddingTop: '1%' }}
        >
          <Grid xs={2}>
            <Button
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
            </Button>
          </Grid>
          <Grid xs={8}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box className="">
                <ChapterCreateHeader />
              </Box>

              <Box sx={{ backgroundColor: '' }}>
                <QuizNameDurationField
                  method={methods}
                  onSubmit={onSubmit}
                  handleSubmit={handleSubmit}
                />
              </Box>
              <Box
                sx={{
                  // height: "76vh",
                  height: { lg: '73vh', xl: '60vh', xxl: '67vh' },
                  overflowY: 'auto  ',
                  '&::-webkit-scrollbar': {
                    width: '0', // Hide the scrollbar
                  },
                  // backgroundColor: "blue",
                }}
              >
                {inputFields.map((inputField) => (
                  <Box key={inputField.uniqueId} sx={{ paddingBottom: '2%' }}>
                    {' '}
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
              <Button onClick={() => handleAddQA()}>
                Add another question
              </Button>
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
