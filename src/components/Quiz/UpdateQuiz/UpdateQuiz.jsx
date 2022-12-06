import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {updateQuizById} from "../../../features/slice/quizSlice";
import NotificationToaster from "../../NotificationToaster/NotificationToaster";
import QuestionAnswer from "../QuestionAnswer";

const UpdateQuiz = ({ quizId }) => {
  const { courses } = useSelector((state) => state.course);
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
    data.courseId = courseId;
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
            j === "4"
              ? (tempQA.question = tempPossibleAnswer[j])
              : (tempQA.correctAnswer = tempPossibleAnswer[j]);
          }
          tempQA.possibleAnswers = paCopy;
        });
        return tempQA;
      }
    });
    // filter out undefined values
    data.questionAndAnswer = modifiedQA.filter((i) => i !== undefined);
    const bulkData = {
      id: quiz._id,
      data,
    };

    dispatch(updateQuizById(bulkData)).then((action) => {
      if (action.payload?.status === 200) {
        setMessage("Quiz Updated Successfully");
        setVariant("success");
        setOpen(true);
      } else {
        setMessage("Quiz can not Updated");
        setVariant("error");
        setOpen(true);
      }
    });
  };

  return (
    <>
      <Box sx={{ px: "3%", py: "1%" }} style={{ width: 1300 }}>
        <Typography variant="h4" sx={{ mb: "2%" }}>
          Update Quiz
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} justify={"center"} alignItems={"center"}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Quiz Name"
                defaultValue={quiz.name}
                {...register("name", { required: true })}
                autocomplete="off"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="duration"
                type={"number"}
                label="Duration"
                defaultValue={quiz.duration}
                {...register("duration", { required: true })}
              ></TextField>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: "left" }}>
              <Typography variant="h5" sx={{ m: "2%" }}>
                Update Question and Answer for quiz{" "}
              </Typography>
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
                />
              ))}
          </Grid>

          <Button type="submit" variant="contained" sx={{ mt: "2%" }}>
            Update Quiz
          </Button>
        </form>
        <NotificationToaster
          message={message}
          severity={variant}
          open={open}
          setOpen={setOpen}
        />
      </Box>
    </>
  );
};

export default UpdateQuiz;
