/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/UpdateQuiz.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 10:36:17 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Box, Grid, Paper} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import {updateQuizById} from "../../../features/slice/quizSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import QuestionAnswer from "./QuestionAnswer";
import ChapterName from "./QuizField.jsx/ChapterName";
import CourseName from "./QuizField.jsx/CourseName";
import Duration from "./QuizField.jsx/Duration";
import QuizName from "./QuizField.jsx/QuizName";


const UpdateQuiz = ({ quizId }) => {
  const toast = useToaster();
  const { course } = useSelector((state) => state.course);
  const [removeId, setRemoveIds] = useState([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const { quiz } = useSelector((state) => state.quiz);
  const [inputFields, setInputFields] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [md, setMd] = useState({});
  const navigate = useNavigate();
  const [tempData, setTempData] = useState({
    quizId: "",
    questionAndAnswer: {},
  });

  useEffect(() => {
    setInputFields(quiz.questionAndAnswer);
    quiz && setMd({ ...quiz });
  }, [quiz]);

  const handleChangeInput = (uniqueId, event) => {
    const newInputFields = inputFields.map((i) => {
      if (uniqueId === i._id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputFields(newInputFields);
  };

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
      values.findIndex((value) => value._id === uniqueId),
      1
    );
    setInputFields(values);
    setRemoveIds([...removeId, uniqueId]);
  };
  const handleChangeCourse = (e) => {
    const courseId = e.target.value;
    setCourseId(courseId);
  };

  const handleUpdate = (v, i, f) => {
    const qaID = f._id;
    const newTempData1 = { ...tempData };
    newTempData1.quizId = quiz._id;
    if (i === 4 || i === 5) {
      i === 4 ? (newTempData1.question = v) : (newTempData1.correctAnswer = v);
    }
    newTempData1.questionAndAnswer[qaID] = {
      pa: {
        ...newTempData1.questionAndAnswer[qaID]?.pa,
        [i]: v,
      },
    };
    setTempData(newTempData1);
  };
  const onSubmit = (data) => {
    // data.courseId = courseId;
    inputFields.map((inputField) => {
      delete inputField.uniqueId;
      return inputField;
    });

    let tempQA;
    const modifiedQA = inputFields.map((i) => {
      tempQA = { ...i };
      if (tempData.questionAndAnswer[i._id]) {
        const tempPossibleAnswer = tempData.questionAndAnswer[i._id].pa;
        const paIndex = Object.keys(tempPossibleAnswer);
        let paCopy = [...tempQA.possibleAnswers];
        const updatedPA = paIndex.map((j) => {
          if (j !== "4" && j !== "5") {
            paCopy.splice(j, 1, tempPossibleAnswer[j]);
          } else {
            j === "4" ? (tempQA.question = tempPossibleAnswer[j]) : (tempQA.correctAnswer = tempPossibleAnswer[j]);
          }
          tempQA.possibleAnswers = paCopy;
        });
        return tempQA;
      }
    });
    // filter out undefined values
    data.questionAndAnswer = modifiedQA.filter((i) => i !== undefined);
    data.deletedQuestion = removeId;
    const bulkData = {
      id: quiz._id,
      data,
    };
    dispatch(updateQuizById(bulkData)).then((action) => {
      if (action.payload?.status === 200) {
        navigate(`/course-details/${course._id}`);
        toast.trigger("Quiz Updated Successfully", "success");
      } else {
        toast.trigger("Failed to update the quiz", "error");
      }
    });
  };

  return Object.keys(quiz).length ? (
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
              title="Update Quiz"
              description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            />
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2} justify={"center"} alignItems={"center"}>
            <Grid container sx={{ paddingBottom: "2%" }}>
              <Paper elevation={0} sx={{ width: "100%" }}>
                <Grid container>
                  <CourseName defaultValue={quiz.course.name} />
                  <ChapterName defaultValue={quiz.courseChapter.name} />
                </Grid>
                <Grid container>
                  <QuizName register={register} defaultValue={quiz.name} />
                  <Duration register={register} defaultValue={quiz.duration} />
                </Grid>
              </Paper>
            </Grid>
            {inputFields &&
              inputFields.map((inputField, index) => (
                <QuestionAnswer
                  isUpdate={true}
                  key={inputField._id}
                  handleQA={handleAddQA}
                  handleRemoveQA={handleRemoveQA}
                  handleChangeInput={handleChangeInput}
                  setInputFields={setInputFields}
                  inputField={inputField}
                  inputFields={inputFields}
                  handleUpdate={handleUpdate}
                  tempData={tempData}
                />
              ))}
          </Grid>
        </Box>
      </form>
    </>
  ) : (
    <Box>
      <h1>Nothing found</h1>
    </Box>
  );
};

export default UpdateQuiz;
