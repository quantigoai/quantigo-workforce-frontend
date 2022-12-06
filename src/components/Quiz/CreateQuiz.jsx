import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getAllCourses} from "../../features/slice/courseSlice";
import {createAQuiz} from "../../features/slice/quizSlice";
import NotificationToaster from "../NotificationToaster/NotificationToaster";
import QuestionAnswer from "./QuestionAnswer";

const CreateQuiz = () => {
  const { courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
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
  const [courseId, setCourseId] = useState("");

  const handleChangeInput = (uniqueId, event) => {
    const newInputFields = inputFields.map((i) => {
      if (uniqueId === i.uniqueId) {
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
      values.findIndex((value) => value.uniqueId === uniqueId),
      1
    );
    setInputFields(values);
  };

  const handleChangeCourse = (e) => {
    const courseId = e.target.value;
    setCourseId(courseId);
  };

  const onSubmit = (data) => {
    data.courseId = courseId;
    inputFields.map((inputField) => {
      delete inputField.uniqueId;
      return inputField;
    });
    data.questionAndAnswer = inputFields;
    dispatch(createAQuiz(data)).then((action) => {
      if (action.payload?.status === 200) {
        setMessage("Quiz Created");
        setVariant("success");
        setOpen(true);
      } else {
        setMessage("Quiz can not Created");
        setVariant("error");
        setOpen(true);
      }
    });
  };

  return (
    <>
      <Box sx={{ px: "3%", py: "1%" }} style={{ width: 1300 }}>
        <Typography variant="h4" sx={{ mb: "2%" }}>
          Create a Course Quiz
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} justify={"center"} alignItems={"center"}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Course Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Course"
                  onChange={(e) => handleChangeCourse(e)}
                >
                  {courses.map((course) => (
                    <MenuItem key={course._id} value={course._id}>
                      {course.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Quiz Name"
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
                {...register("duration", { required: true })}
              ></TextField>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: "left" }}>
              <Typography variant="h5" sx={{ m: "2%" }}>
                Create Question and Answer for quiz{" "}
              </Typography>
            </Grid>

            {inputFields.map((inputField) => (
              <QuestionAnswer
                key={inputField.uniqueId}
                handleQA={handleAddQA}
                handleRemoveQA={handleRemoveQA}
                handleChangeInput={handleChangeInput}
                setInputFields={setInputFields}
                inputField={inputField}
                inputFields={inputFields}
              />
            ))}
          </Grid>

          <Button type="submit" variant="contained" sx={{ mt: "2%" }}>
            Create Quiz
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

export default CreateQuiz;
