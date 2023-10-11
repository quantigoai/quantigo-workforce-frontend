/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/CreateQuiz.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 10:36:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import { getAllCourses, manuallyUpdateCourse } from "../../../features/slice/courseSlice";
import { createAQuiz } from "../../../features/slice/quizSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import QuestionAnswer from "./QuestionAnswer";
import ChapterName from "./QuizField.jsx/ChapterName";
import CourseName from "./QuizField.jsx/CourseName";
import Duration from "./QuizField.jsx/Duration";
import QuizName from "./QuizField.jsx/QuizName";

const CreateQuiz = () => {
  const { courseChapter } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toast = useToaster();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const [inputFields, setInputFields] = useState([
    {
      uniqueId: new Date().getTime(),
      question: "",
      possibleAnswers: [],
      correctAnswer: "",
    },
  ]);

  const handleChangeInput = (uniqueId, event) => {
    const newInputFields = inputFields.map((i) => {
      if (uniqueId === i.uniqueId) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  // Set A new field when add question is clicked
  const handleAddQA = () => {
    setInputFields([
      ...inputFields,
      {
        uniqueId: new Date().getTime(),
        question: "",
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

  const onSubmit = (data) => {
    data.courseId = courseChapter.rootCourse._id;
    data.courseChapterId = courseChapter._id;
    inputFields.map((inputField) => {
      delete inputField.uniqueId;
      return inputField;
    });
    data.questionAndAnswer = inputFields;

    dispatch(createAQuiz(data)).then((action) => {
      if (action.payload?.status === 200) {
        const courseId = action.payload.data.course._id;
        const { _id, name } = action.payload.data;
        dispatch(manuallyUpdateCourse({ id: _id, name }));
        navigate(`/course-details/${courseId}/content`);
        toast.trigger("Quiz Create Successfully", "success");
      } else {
        toast.trigger("Quiz can not create", "error");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Grid
            container
            sx={{
              paddingBottom: "2%",
            }}
          >
            <CommonHeader
              title="Create Quiz"
              description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
              // isLoading={isLoading}
              // customButton="Create Quiz"
            />
          </Grid>
        </Box>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Grid container spacing={2} justify={"center"} alignItems={"center"}>
            <Grid container sx={{ paddingBottom: "2%" }}>
              <Paper elevation={0} sx={{ width: "100%" }}>
                <Grid container>
                  <CourseName courseChapter={courseChapter} />
                  <ChapterName courseChapter={courseChapter} />
                </Grid>
                <Grid container>
                  <QuizName register={register} />
                  <Duration register={register} />
                </Grid>
              </Paper>
            </Grid>

            {inputFields.map((inputField) => (
              <QuestionAnswer
                isUpdate={false}
                key={inputField.uniqueId}
                handleQA={handleAddQA}
                handleRemoveQA={handleRemoveQA}
                handleChangeInput={handleChangeInput}
                setInputFields={setInputFields}
                inputField={inputField}
                inputFields={inputFields}
                tempData={""}
              />
            ))}
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default CreateQuiz;
