import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../../customHooks/useToaster";
import { getAllCourses } from "../../../../features/slice/courseSlice";
import { getAllSkills } from "../../../../features/slice/skillSlice";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import {
  courseCategoryFields,
  courseLanguageFields,
  courseLevelFields,
} from "../../../primary/AllUsers/userFilterOptions";
import DocumentImageUpload from "../../Documents/DocumentImageUpload";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import CSelectField from "./CSelectField";
import CTextField from "./CTextField";
import CTextFieldDescription from "./CTextFieldDescription";
import CourseSkillfiled from "./CourseSkillfiled";
import PreRequisiteCourseFiled from "./PreRequisiteCourseFiled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
const CreateCourseModal = ({ handleClose, open }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const methods = useForm({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courses, isLoading, course } = useSelector((state) => state.course);
  const { skills } = useSelector((state) => state.skill);
  const { isLightTheme } = useSelector((state) => state.theme);
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
  const handleCreateCourse = (data) => {};
  // const onSubmit = (data) => {
  //   const preRequisiteCoursesColl = preRequisiteCourses.map((preRequisite) => {
  //     return preRequisite._id;
  //   });
  //   const skillColl = skill.map((skill) => {
  //     return skill._id;
  //   });

  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("category", data.category);
  //   formData.append("level", data.level);
  //   formData.append("language", data.language);
  //   formData.append("description", data.description);
  //   formData.append("images", coverImageFile);

  //   formData.append("prerequisiteCourses", preRequisiteCoursesColl);
  //   formData.append("skills", skillColl);
  //   // dispatch(createCourse(formData)).then((action) => {
  //   //   if (action.payload?.status === 200) {
  //   //     navigate("/course");
  //   //     toast.trigger("Course created successfully", "success");
  //   //   } else {
  //   //     toast.trigger("Can not create course", "error");
  //   //   }
  //   // });
  // };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: { xl: "95%", lg: "85%" },
            width: { xl: "35%", lg: "40%" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "",
              height: "100%",
              position: "relative",
            }}
          >
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <Box sx={{ height: "8%", backgroundColor: "" }}>
              <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Create Project"} />
            </Box>
            <Box
              sx={{
                height: "92%",
                backgroundColor: "",
              }}
            >
              <Box
                sx={{
                  height: "80%",
                  // backgroundColor: "red",
                  // overflowY: "auto",
                  padding: "3%",
                  "&::-webkit-scrollbar": {
                    width: "0",
                  },
                  overflowY: "auto",
                  zIndex: 1,
                }}
              >
                <>
                  <Grid container>
                    {" "}
                    <CTextField nameValidation={nameValidation} register={register} />
                  </Grid>
                  <Grid container>
                    <CTextFieldDescription register={register} />
                  </Grid>
                  <Grid container>
                    <PreRequisiteCourseFiled perRequisiteCourses={preRequisiteCourses} />
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sx={{ paddingRight: "1%" }}>
                      <CSelectField name={"level"} options={courseLevelFields} level={"Level"} register={register} />
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <CSelectField
                        name={"category"}
                        options={courseCategoryFields}
                        level={"Category"}
                        register={register}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <CourseSkillfiled
                      skills={skills}
                      register={register}
                      skillSet={skill}
                      handleChangeSkills={handleChangeSkills}
                      // MenuProps={MenuProps}
                    />
                  </Grid>

                  <Grid container>
                    {" "}
                    <CSelectField
                      name={"language"}
                      options={courseLanguageFields}
                      level={"Language"}
                      register={register}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ paddingLeft: "0%", paddingBottom: "1%" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        mb: 1,
                        color: isLightTheme ? "#091E42" : "#FFFFFF",
                        // paddingBottom:"1%"
                      }}
                    >
                      Course Cover Image
                    </Typography>
                  </Grid>
                  <DocumentImageUpload coverImage={coverImage} removeImage={removeImage} handleImage={handleImage} />
                  {/* <CoverImageField coverImage={coverImage} removeImage={removeImage} handleImage={handleImage} /> */}
                </>
              </Box>
              <Box sx={{ height: "10%", backgroundColor: "", zIndex: 0 }}>
                {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px",
                      mt: 2,
                      borderTop: "2px solid #F2F6FC",
                    }}> */}
                <Grid container sx={{ padding: "2%" }}>
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        width: "120px",
                        textTransform: "none",
                        backgroundColor: "primary.B008",
                        color: "neutral.N650",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "neutral.N600",
                          color: "neutral.N650",
                        },
                      }}
                      onClick={() => handleClose()}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container sx={{ justifyContent: "right" }}>
                      <Button
                        type="submit"
                        sx={{
                          width: "128px",
                          textTransform: "none",
                          backgroundColor: "#2E58FF",
                          color: "#FFFFFF",

                          borderRadius: "8px",
                          "&.Mui-disabled": {
                            background: "#B6C9F0",
                            color: "#FFFFFF",
                          },
                          "&:hover": {
                            backgroundColor: "#2E58FF",
                            color: "#FFFFFF",
                            // border: "1px solid #2E58FF",
                          },
                        }}
                        onClick={() => handleCreateCourse()}
                        // onClick={handleSubmission}
                      >
                        Create
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                {/* </Box> */}
              </Box>
            </Box>
            {/* </form> */}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CreateCourseModal;
