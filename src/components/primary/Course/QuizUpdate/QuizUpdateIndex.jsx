import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuizQA } from '../../../../features/slice/quizSlice';
import FormProvider from '../../../shared/FormProvider/FormProvider';
import ChapterUpdateHeader from '../ChapterCreate/ChapterUpdateHeader';
import QuestionType from '../QuizPage/QuestionType';
import QuizNameDurationField from '../QuizPage/QuizNameDurationField';

const QuizUpdateIndex = () => {
  const [inputFields, setInputFields] = useState([]);
  const { courseChapters } = useSelector((state) => state.course);

  const [disabledButton, setDisabledButton] = useState(true);
  const [durationTime, setDurationTime] = useState('');
  const { quiz } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const [tempData, setTempData] = useState({
    quizId: '',
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
        setDurationTime(minutes + ' minute');
      } else {
        setDurationTime(minutes + ' minutes');
      }
    } else {
      setDurationTime(hours + ' hours ' + minutes + ' minutes');
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
    console.log(
      '🚀 ~ file: QuizUpdateIndex.jsx:71 ~ handleUpdate ~ field:',
      field,
    );
    console.log(
      '🚀 ~ file: QuizUpdateIndex.jsx:71 ~ handleUpdate ~ index:',
      index,
    );
    console.log(
      '🚀 ~ file: QuizUpdateIndex.jsx:71 ~ handleUpdate ~ value:',
      value,
    );
    const qaID = field._id;
    const newTempData1 = { ...tempData };
    newTempData1.quizId = quiz._id;
    newTempData1.questionAndAnswer[qaID] = {
      pa: {
        ...newTempData1.questionAndAnswer[qaID]?.pa,
        ...(index !== 'questionType'
          ? {
              [index]: value,
              ...(newTempData1.questionAndAnswer[qaID]?.pa?.questionType
                ? {}
                : { questionType: field.questionType }),
            }
          : {
              [index]: value,
            }),
      },
    };

    setTempData(newTempData1);
  };
  // const handleImageFn = (value, index, field, id) => {
  const handleImageFn = (e, id) => {
    console.log(
      '🚀 ~ file: QuizUpdateIndex.jsx:103 ~ handleImageFn ~ e:',
      e.target.files[0],
    );
    console.log('🚀 ~ file: QuizUpdateIndex.jsx:102 ~ handleImageFn ~ id:', id);
    // console.log(
    //   '🚀 ~ file: QuizUpdateIndex.jsx:71 ~ handleUpdate ~ field:',
    //   field,
    // );
    // console.log(
    //   '🚀 ~ file: QuizUpdateIndex.jsx:71 ~ handleUpdate ~ index:',
    //   index,
    // );
    // console.log(
    //   '🚀 ~ file: QuizUpdateIndex.jsx:71 ~ handleUpdate ~ value:',
    //   value,
    // );
    // const qaID = field._id;
    // const newTempData1 = { ...tempData };
    // newTempData1.quizId = quiz._id;
    // newTempData1.questionAndAnswer[qaID] = {
    //   pa: {
    //     ...newTempData1.questionAndAnswer[qaID]?.pa,
    //     ...(index !== 'questionType'
    //       ? {
    //           [index]: value,
    //           ...(newTempData1.questionAndAnswer[qaID]?.pa?.questionType
    //             ? {}
    //             : { questionType: field.questionType }),
    //         }
    //       : {
    //           [index]: value,
    //         }),
    //   },
    // };

    // setTempData(newTempData1);
  };
  console.log(tempData);
  useEffect(() => {
    Object.entries(tempData.questionAndAnswer).map(([key, val], i) => {
      inputFields.map((i) => {
        if (i._id === key) {
          if (val.pa.questionType != i.questionType) {
            if (i.questionType === 'imageInOptions') {
              if (val.pa.questionType === 'imageAndOptions') {
                setDisabledButton(true);
                const possibleAnswersArray = [
                  'possibleAnswers_0',
                  'possibleAnswers_1',
                  'possibleAnswers_2',
                  'possibleAnswers_3',
                ];
                const allPossibleAnswersPresent = possibleAnswersArray.every(
                  (answer) => answer in val.pa,
                );

                if (allPossibleAnswersPresent && 'questionImage' in val.pa) {
                  setDisabledButton(false);
                }
              }
              if (val.pa.questionType === 'default') {
                setDisabledButton(true);
                const possibleAnswersArray = [
                  'possibleAnswers_0',
                  'possibleAnswers_1',
                  'possibleAnswers_2',
                  'possibleAnswers_3',
                ];
                const allPossibleAnswersPresent = possibleAnswersArray.every(
                  (answer) => answer in val.pa,
                );

                if (allPossibleAnswersPresent) {
                  setDisabledButton(false);
                }
              }
            }
            if (i.questionType === 'imageAndOptions') {
              if (val.pa.questionType === 'default') {
                setDisabledButton(false);
              }
            }
            if (val.pa.questionType === 'imageAndOptions') {
              setDisabledButton(true);
              if ('questionImage' in val.pa) {
                setDisabledButton(false);
              }
              // else {
              //   setDisabledButton(true)
              // }
            }
            if (val.pa.questionType === 'imageInOptions') {
              setDisabledButton(true);
              const possibleAnswersArray = [
                'possibleAnswers_0',
                'possibleAnswers_1',
                'possibleAnswers_2',
                'possibleAnswers_3',
              ];
              const allPossibleAnswersPresent = possibleAnswersArray.every(
                (answer) => answer in val.pa,
              );

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
  const handleRemoveQA = (uniqueId) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.uniqueId === uniqueId),
      1,
    );
    setInputFields(values);
  };

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

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => {
    console.log(data);
    let tempQA;

    {
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
        dispatch(updateQuizQA(data1));
        // for (let pair of formData.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }
      });
    }
  };

  return (
    <>
      <Box className="content" sx={{ backgroundColor: 'neutral.N000' }}>
        <Grid
          container
          sx={{ borderTop: '1px solid #E6ECF5', paddingTop: '1%' }}
        >
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
                <ChapterUpdateHeader
                  disabledButton={disabledButton}
                  durationTime={durationTime}
                />
              </Box>

              <Box sx={{ backgroundColor: '' }}>
                <QuizNameDurationField
                  update={true}
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
                {inputFields &&
                  inputFields.map((inputField) => (
                    <Box key={inputField.uniqueId} sx={{ paddingBottom: '2%' }}>
                      {' '}
                      <QuestionType
                        handleRemoveQA={handleRemoveQA}
                        handleChangeInput={handleChangeInput}
                        inputField={inputField}
                        inputFields={inputFields}
                        handleUpdate={handleUpdate}
                        handleImageFn={handleImageFn}
                        update={true}
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

export default QuizUpdateIndex;
