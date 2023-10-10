/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/UpdateCourse.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 2:38:37 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import { updateACourseById } from "../../../features/slice/courseSlice";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import CategoryField from "./InputFields/CategoryField";
import CoverImageField from "./InputFields/CoverImageField";
import DescriptionField from "./InputFields/DescriptionField";
import LanguageField from "./InputFields/LanguageField";
import LevelField from "./InputFields/LevelField";
import LiveSessionLink from "./InputFields/LiveSessionLink";
import LiveSessionStartedTime from "./InputFields/LiveSessionStartedTime";
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

const UpdateCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { course, courses, isLoading } = useSelector((state) => state.course);
  const { skills } = useSelector((state) => state.skill);
  const [skill, setSkill] = React.useState([]);
  const [skillSet1, setSkillSet1] = React.useState([]);
  const [skillSet2, setSkillSet2] = React.useState([]);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);
  const [courseName, setCourseName] = useState([]);
  const [name, setName] = useState(course.name);
  const [error, setError] = useState(false);

  const [isPreRequisiteCourseEmpty, setIsPreRequisiteCourseEmpty] = useState(false);
  const alert = useAlert();

  const toast = useToaster();

  useEffect(() => {
    setContent(course?.content);
    setCourseName(courses.map((item) => item.name !== course.name && item.name.toLowerCase()));
  }, [course]);

  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [liveSessionTime, setLiveSessionTime] = useState();
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

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    // value.map((skill) => {
    selectedSkills.map((skill) => {
      const preData = {
        name: skill.name,
        id: skill._id,
      };
      setSkillSet1([
        {
          ...preData,
        },
      ]);
    });
    setSkillSet2([
      {
        ...skillSet1,
      },
    ]);
    !selectedSkills.length && setIsSkillEmpty(true);
    setSkill(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  const [preRequisiteCourses, setPreRequisiteCourses] = React.useState([]);

  const [preRequisite, setPreRequisite] = React.useState([]);

  const [preRequisite1, setPreRequisite1] = React.useState([]);

  const handleChange_Pre_Requisite_Course = (event) => {
    const {
      target: { value },
    } = event;

    const selectedPreRequisiteCourses = value.map((course) => {
      return courses.find((c) => c.name === course);
    });

    selectedPreRequisiteCourses.map((preRequisite) => {
      const preData = {
        name: preRequisite.name,
        id: preRequisite._id,
      };
      setPreRequisite([
        {
          ...preData,
        },
      ]);
    });
    setPreRequisite1([
      {
        ...preRequisite,
      },
    ]);
    !selectedPreRequisiteCourses.length && setIsPreRequisiteCourseEmpty(true);
    setPreRequisiteCourses(
      typeof selectedPreRequisiteCourses === "string" ? value.split(",") : selectedPreRequisiteCourses
    );
  };

  // update name validation
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

    data.images = coverImageFile;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", data.category);
    formData.append("level", data.level);
    formData.append("language", data.language);
    formData.append("description", data.description);
    formData.append("images", coverImageFile);
    formData.append("liveSessionLink", data.liveSessionLink);
    liveSessionTime && formData.append("liveSessionStartedAt", liveSessionTime);

    preRequisiteCourses.length && formData.append("prerequisiteCourses", preRequisiteCoursesColl);
    isPreRequisiteCourseEmpty && formData.append("prerequisiteCourses", []);
    skill.length && formData.append("skills", skillColl);
    isSkillEmpty && formData.append("skills", []);

    const newData = {
      id: course._id,
      formData,
    };

    // TODO Modify alert message
    dispatch(updateACourseById(newData)).then((action) => {
      if (action.payload?.status === 200) {
        const id = action.payload.data._id;
        toast.trigger("Course updated successfully", "success");
        navigate(`/course-details/${id}`);
      } else {
        toast.trigger("Can not update course", "error");
      }
    });
  };

  const paperStyle = {
    width: "80vw",
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ paddingBottom: "2%" }}>
          <CommonHeader
            title="Edit Course"
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
                          <NameField course={course} register={register} nameValidation={nameValidation} />
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
                          <DescriptionField course={course} register={register} />
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
                  <LevelField course={course} register={register} />

                  <CategoryField course={course} register={register} />

                  <Grid item xs={3}>
                    <SkillField
                      course={course}
                      skills={skills}
                      register={register}
                      skillSet={skill}
                      handleChangeSkills={handleChangeSkills}
                      MenuProps={MenuProps}
                    />
                  </Grid>

                  <LanguageField course={course} register={register} />
                </Grid>
                <Grid container spacing={2} sx={{ py: 4 }}>
                  <Grid item xs={6}>
                    <LiveSessionLink course={course} register={register} />
                  </Grid>
                  <Grid item xs={6}>
                    <LiveSessionStartedTime
                      course={course}
                      setLiveSessionTime={setLiveSessionTime}
                      register={register}
                    />
                  </Grid>
                </Grid>

                <Grid xs={12} sx={{ py: 6 }}>
                  <Grid xs={12} sx={{ paddingLeft: "0%", paddingBottom: "1%" }}>
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
export default UpdateCourse;
