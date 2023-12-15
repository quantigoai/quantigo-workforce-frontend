/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomComponenet/CommonHeader/CommonHeader.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, February 15th 2023, 10:21:13 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Alert, AlertTitle, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CourseDeleteModal from "../../../primary/Course/CourseDetailsPage/CourseDeleteModal";
import CourseNewHeaderBottom from "../../../primary/CourseNew/CourseNewHeaderBottom/CourseNewHeaderBottom";
import editCourseIcon from "../../../../assets/images/edit.svg";
import RectangleIcon from "../../../../assets/images/Rectangle 3.svg";
import EditCourseModal from "../../../primary/Course/CreateCourseModal/EditCourseModal";
import CourseProgressBar from "../../../primary/Course/CourseProgressBar";
import CommonHeaderProgress from "./CommonHeaderProgress";
import useToaster from "../../../../customHooks/useToaster";
import { useState } from "react";
import { updateACourseById } from "../../../../features/slice/courseSlice.js";
const CommonHeaderForCourse = ({ durationTime, title, isLoading, isLightTheme, customButton }) => {
  const { course, courses } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleNavigation = (navigateLink) => {
    switch (navigateLink) {
      case "Create Course":
        navigate("/create-course");
        break;
      case "Create Benchmark":
        navigate("/benchmarknew/create");
        break;
      case "Edit Course":
        navigate(`/edit-course/${course._id}`);
        break;
      case "Update Benchmark":
        navigate(`/benchmarknew/update`);
        break;
      case "Create Job":
        navigate("/jobs/create-job");
        break;
      case "Edit Profile":
        navigate("/edit-profile");
        break;
      default:
        break;
    }
  };

  // const { course, courses } = useSelector((state) => state.course);

  const [preRequisiteCourses, setPreRequisiteCourses] = useState([]);
  const { skills } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const toast = useToaster();

  const [skillSet1, setSkillSet1] = useState([]);
  const [skillSet2, setSkillSet2] = useState([]);
  const [skill, setSkill] = useState([]);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);
  const [isPreRequisiteCourseEmpty, setIsPreRequisiteCourseEmpty] = useState(false);
  const [preRequisite, setPreRequisite] = useState([]);
  const [preRequisite1, setPreRequisite1] = useState([]);

  const handleClose = () => {
    setOpen(false);
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
    // preRequisiteCourses.length && formData.append("prerequisiteCourses", preRequisiteCoursesColl);
    // isPreRequisiteCourseEmpty && formData.append("prerequisiteCourses", []);
    // skill.length && formData.append("skills", skillColl);
    // isSkillEmpty && formData.append("skills", []);

    const newData = {
      id: course._id,
      formData,
    };

    dispatch(updateACourseById(newData)).then((action) => {
      if (action.payload?.status === 200) {
        // navigate("/course");
        toast.trigger("Course updated successfully", "success");
        // handleClose();
        // reset();
        setOpen(false);
      } else {
        toast.trigger("Can not create course", "error");
      }
    });
  };

  // const goPreviousPage = () => {
  //   handleCancel && handleCancel();
  //   navigate(-1);
  // };

  return (
    <>
      {user.role === "reviewer" && !user.active ? (
        <>
          {" "}
          <Box sx={{ paddingBottom: "1%" }}>
            <Alert sx={{ width: "100%" }} severity="error">
              <AlertTitle>Warning</AlertTitle>
              Please activate your account .
            </Alert>
          </Box>
        </>
      ) : (
        <></>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "100%",
          backgroundColor: isLightTheme ? "#fff" : "#121212",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "1%",
            width: "100%",
            justifyContent: "space-between",
            // paddingTop: "1%",
            // paddingLeft: "1%",
            // paddingBottom: "1%",
            // backgroundColor: "#FFFFFF",
            backgroundColor: isLightTheme ? "#fff" : "#121212",
            // backgroundColor: "red",
            borderBottom: "1px solid #EBEDF5",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Box>
              <Typography variant="wpf_h4_semiBold">{title}</Typography>
            </Box>
            <Box>
              <Typography color={"grey.700"} variant="wpf_p3_regular">
                {course.description}
              </Typography>
            </Box>
            <Box>
              <Typography color={"grey.700"} variant="wpf_p3_regular">
                Course Duration: <span style={{ fontWeight: "bold" }}>{durationTime}</span>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                textAlign: "right",
                justifyContent: "end",
                paddingLeft: "0%",
                // borderBottom: "1px solid #EBEDF5",
              }}
            >
              {customButton === "dashboard" || customButton === "Create User" || customButton === "null" ? (
                <></>
              ) : customButton ? (
                <Grid item xs={6}>
                  <>
                    {user.role === "trainer" || user.role === "admin" || user.role === "project_delivery_lead" ? (
                      <>
                        <Box
                          sx={{
                            paddingTop: "2%",
                            justifyContent: "right",
                          }}
                        >
                          <Box>
                            <Button
                              // variant="contained"
                              disabled={isLoading}
                              type="submit"
                              sx={{
                                //   width: "100%",
                                //   height: "45px",
                                //   backgroundColor: "#2D58FF",
                                //   color: "#FFFFFF",
                                //   "&:hover": {
                                //     backgroundColor: "#FF9A45",
                                //     color: "#1D1D1D",
                                //   },
                                borderRadius: "2px",
                              }}
                              onClick={handleOpen}
                              // onClick={() => handleNavigation(customButton)}
                            >
                              <img src={editCourseIcon} />
                            </Button>
                            {/* <Button onClick={handleOpen}>Create Course</Button> */}
                            <EditCourseModal
                              open={open}
                              handleClose={handleClose}
                              onSubmit={onSubmit}
                              course={course}
                              preRequisiteCourses={preRequisiteCourses}
                              handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
                              skills={skills}
                              handleChangeSkills={handleChangeSkills}
                              coverImage={coverImage}
                              removeImage={removeImage}
                              handleImage={handleImage}
                              isLoading={isLoading}
                              skill={skill}
                            />

                            <CourseDeleteModal
                              course={course}
                              // handleDeleteCourse={handleDeleteCourse}
                            />
                          </Box>
                        </Box>
                      </>
                    ) : (
                      <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <CommonHeaderProgress />
                      </Box>
                    )}
                  </>
                </Grid>
              ) : (
                <>
                  <Grid item xs={3}>
                    <Button
                      onClick={goPreviousPage}
                      variant="outlined"
                      sx={{
                        width: "100%",
                        color: "#2D58FF",
                        height: "45px",
                        borderRadius: "2px",
                      }}
                    >
                      CANCEL
                    </Button>
                  </Grid>

                  <Grid item xs={3}>
                    {title === "Create Job Pool" || title === "Create a Benchmark" ? (
                      <>
                        <Button
                          variant="contained"
                          disabled={isLoading}
                          type="submit"
                          sx={{
                            width: "100%",
                            height: "45px",
                            backgroundColor: "#2D58FF",
                            color: "#FFFFFF",
                            "&:hover": {
                              backgroundColor: "#FF9A45",
                              color: "#1D1D1D",
                            },
                            borderRadius: "2px",
                          }}
                        >
                          Create
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          disabled={isLoading}
                          type="submit"
                          sx={{
                            width: "100%",
                            height: "45px",
                            backgroundColor: "#2D58FF",
                            color: "#FFFFFF",
                            "&:hover": {
                              backgroundColor: "#FF9A45",
                              color: "#1D1D1D",
                            },
                            borderRadius: "2px",
                          }}
                        >
                          Save
                        </Button>
                      </>
                    )}
                  </Grid>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              // justifyContent: "left",
              padding: "1%",
              // paddingTop: "1%",
              // paddingBottom: "1%",
              // paddingLeft: "1%",
              backgroundColor: isLightTheme ? "#fff" : "#121212",
            }}
          >
            <CourseNewHeaderBottom course={course} isLightTheme={isLightTheme} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CommonHeaderForCourse;
