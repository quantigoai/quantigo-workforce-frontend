/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/CreateCourse.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 2:32:36 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import {Box, Grid, Paper, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import {createCourse, getAllCourses} from "../../../features/slice/courseSlice";
import {getAllSkills} from "../../../features/slice/skillSlice";
import {capitalizeFirstLetter} from "../../../helper/capitalizeFirstWord";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import CategoryField from "./InputFields/CategoryField";
import CoverImageField from "./InputFields/CoverImageField";
import DescriptionField from "./InputFields/DescriptionField";
import LanguageField from "./InputFields/LanguageField";
import LevelField from "./InputFields/LevelField";
import NameField from "./InputFields/NameField";
import PreRequisiteCourse from "./InputFields/PreRequisiteCourse";
import SkillField from "./InputFields/SkillField";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const paperStyle = {
  width: "80vw",
};

const CreateCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courses, isLoading, course } = useSelector((state) => state.course);
  const { skills } = useSelector((state) => state.skill);

  const toast = useToaster();
  const [courseName, setCourseName] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getAllSkills());
  }, []);

  useEffect(() => {
    setCourseName(courses.map((item) => item.name.toLowerCase()));
  }, [course]);

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

  // pre request courses function
  const [preRequisiteCourses, setPreRequisiteCourses] = React.useState([]);
  const [skill, setSkill] = React.useState([]);

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

  const nameValidation = (e) => {
    setName(capitalizeFirstLetter(e.target.value));
    if (courseName.includes(e.target.value.toLowerCase())) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const onSubmit = (data) => {
    const preRequisiteCoursesColl = preRequisiteCourses.map((preRequisite) => {
      return preRequisite._id;
    });
    const skillColl = skill.map((skill) => {
      return skill._id;
    });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", data.category);
    formData.append("level", data.level);
    formData.append("language", data.language);
    formData.append("description", data.description);
    formData.append("images", coverImageFile);

    formData.append("prerequisiteCourses", preRequisiteCoursesColl);
    formData.append("skills", skillColl);
    dispatch(createCourse(formData)).then((action) => {
      if (action.payload?.status === 200) {
        navigate("/course");
        toast.trigger("Course created successfully", "success");
      } else {
        toast.trigger("Can not create course", "error");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ paddingBottom: "2%" }}>
          <CommonHeader
            title="Create Course"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            isLoading={isLoading}
          />
        </Grid>

        <Box style={{ padding: "0%" }}>
          <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
            <Grid container style={{ padding: "0%" }}>
              <Grid
                container
                sx={{
                  py: "2%",
                  px: "2%",
                }}
              >
                <Grid container sx={{ mb: 4 }}>
                  <Grid item xs={12} px={0}>
                    <Stack direction="column" spacing={3}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <NameField nameValidation={nameValidation} register={register} />
                          {error && (
                            <Box
                              style={{
                                color: "red",
                                padding: "5px 5px",
                                marginBottom: "10px",
                              }}
                            >
                              {" "}
                              {"This Course name is already exists."}
                            </Box>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <DescriptionField register={register} />
                        </Grid>
                      </Grid>

                      <PreRequisiteCourse
                        course={course}
                        courses={courses}
                        handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
                        perRequisiteCourses={preRequisiteCourses}
                        MenuProps={MenuProps}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <LevelField register={register} />

                  <CategoryField register={register} />
                  <Grid item xs={3}>
                    <SkillField
                      skills={skills}
                      register={register}
                      skillSet={skill}
                      handleChangeSkills={handleChangeSkills}
                      MenuProps={MenuProps}
                    />
                  </Grid>
                  <LanguageField register={register} />
                </Grid>

                <Grid container xs={12} sx={{ py: 6 }}>
                  <Grid item xs={12} sx={{ paddingLeft: "0%", paddingBottom: "1%" }}>
                    <Typography>Course Cover Image</Typography>
                  </Grid>
                  <CoverImageField coverImage={coverImage} removeImage={removeImage} handleImage={handleImage} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </form>
    </>
  );
};
export default CreateCourse;
