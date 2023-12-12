/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/Course.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 10:14:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Button, Grid, Paper, styled } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { createCourse, getAllCourses } from "../../../features/slice/courseSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import LoadingSkeleton from "../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton";
import CourseHeader from "./CourseHeader/CourseHeader";
import CourseTab from "./CourseTab";
import CreateCourseModal from "./CreateCourseModal/CreateCourseModal";
import CustomCard from "./CustomCard";
import CourseCreateModal from "./CreateCourseModal/CourseCreateModal";
import useToaster from "../../../customHooks/useToaster";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
const Course = () => {
  const { role } = useSelector((state) => state.user.user);
  const [filterCourses, setFilterCourses] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const { courses } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);

  const CoursePaper = styled(Paper)({
    width: "100%",
    height: "90%",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px",
    border: "0px 0px 1px 0px",
    backgroundColor: isLightTheme ? "#F2F6FC" : "#212121",
    boxShadow: "0px 1px 3px 0px #09008014",
  });
  useEffect(() => {
    dispatch(setActivePath("Course"));
    dispatch(getAllSkills());
    dispatch(getAllCourses()).then(() => {
      setIsLoading(false);
    });
  }, [isLoading]);

  const navigate = useNavigate();
  const [preRequisiteCourses, setPreRequisiteCourses] = React.useState([]);
  const { skills } = useSelector((state) => state.skill);
  const [skill, setSkill] = React.useState([]);
  const dispatch = useDispatch();
  const toast = useToaster();
  const CourseCreateSchema = Yup.object().shape({
    name: Yup.string().required("Course name is required"),
    description: Yup.string().required("Course description is required"),

    level: Yup.string().required("Course level is required"),
    category: Yup.string().required("Course category is required"),
    language: Yup.string().required("Course language is required"),
  });

  const handleClose = () => {
    setOpen(false);
    reset();
    setPreRequisiteCourses([]);
    setSkill([]);
  };
  const methods = useForm({
    resolver: yupResolver(CourseCreateSchema),
    mode: "all",
  });
  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;

    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    setSkill(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    setCoverImage(null);
  };
  const handleChange_Pre_Requisite_Course = (event) => {
    const {
      target: { value },
    } = event;

    const selectedPreRequisiteCourses = value.map((course) => {
      return courses.find((c) => c.name === course);
    });

    setPreRequisiteCourses(
      // On autofill we get a stringified value.
      typeof selectedPreRequisiteCourses === "string" ? value.split(",") : selectedPreRequisiteCourses
    );
  };
  const { handleSubmit, reset } = methods;
  const onSubmit = (data) => {
    const preRequisiteCoursesColl = preRequisiteCourses.map((preRequisite) => {
      return preRequisite._id;
    });
    const skillColl = skill.map((skill) => {
      return skill._id;
    });

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("level", data.level);
    formData.append("language", data.language);
    formData.append("description", data.description);
    formData.append("images", coverImageFile);

    formData.append("prerequisiteCourses", preRequisiteCoursesColl);
    formData.append("skills", skillColl);
    dispatch(createCourse(formData)).then((action) => {
      if (action.payload?.status === 200) {
        // navigate("/course");
        toast.trigger("Course created successfully", "success");
        handleClose();
      } else {
        toast.trigger("Can not create course", "error");
      }
    });
  };
  return (
    <>
      <CourseCreateModal
        handleSubmit={handleSubmit}
        methods={methods}
        preRequisiteCourses={preRequisiteCourses}
        handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
        onSubmit={onSubmit}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        skills={skills}
        skill={skill}
        handleChangeSkills={handleChangeSkills}
        coverImage={coverImage}
        removeImage={removeImage}
        handleImage={handleImage}
        isLoading={isLoading}
      />
      <Box className="content">
        <Box className="contentHeader">
          <CourseHeader open={open} setOpen={setOpen} handleOpen={handleOpen} />
        </Box>
        <CoursePaper>
          <>
            {isLoading ? (
              <>
                <LoadingSkeleton />
              </>
            ) : (
              <>
                {role === "level_0_annotator" ||
                role === "level_1_annotator" ||
                role === "level_2_annotator" ||
                role === "level_3_annotator" ||
                role === "reviewer" ? (
                  <>
                    {" "}
                    <CourseTab filterCourses={filterCourses} isLoading={isLoading} />
                  </>
                ) : (
                  <>
                    {/* <CourseTab filterCourses={filterCourses} isLoading={isLoading} /> */}
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      {courses.map((course) => (
                        <Grid key={course._id} item xs={12} px={1} sm={6} md={3} sx={{ height: "50%" }}>
                          <CustomCard course={course} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </>
            )}
          </>
        </CoursePaper>
      </Box>
    </>
  );
};

export default Course;
