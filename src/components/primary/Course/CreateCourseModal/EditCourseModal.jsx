import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import FormProvider from "../../../shared/FormProvider/FormProvider";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import TextFieldCourse from "./TextFieldCourse";
import PreRequisiteCourseFiled from "./PreRequisiteCourseFiled";
import { useState } from "react";
import CSelectField from "./CSelectField";
import { courseCategoryFields, courseLanguageFields, courseLevelFields } from "../../AllUsers/userFilterOptions";
import CourseSkillfiled from "./CourseSkillfiled";
import DocumentImageUpload from "../../Documents/DocumentImageUpload";
import { createCourse, updateACourseById } from "../../../../features/slice/courseSlice";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../../customHooks/useToaster";
import CTextFieldDescription from "./CTextFieldDescription";
import CourseCoverImageField from "./CourseCoverImageField";
const style = {
  position: "relative",
  top: "50%",
  // height: "95%",
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
const style1 = {
  // position: "relative",
  width: "100%",
  // backgroundColor: "red",
  // height: "500px",
};
export const LineStackSingle = ({ children }) => (
  <Stack
    // direction="row"
    spacing={2}
    sx={{
      // backgroundColor:"red",
      height: {
        lg: "72px",
        xl: "80px",
        xxl: "85px",
      },
    }}
  >
    {children}
  </Stack>
);
export const LineStack = ({ children }) => (
  <Stack
    direction="row"
    spacing={2}
    sx={{
      // backgroundColor:"red",
      height: {
        lg: "72px",
        xl: "80px",
        xxl: "85px",
      },
    }}
  >
    {children}
  </Stack>
);

export const FieldBox = ({ children }) => (
  <Box
    sx={{
      width: "50%",
      height: {
        lg: "72px",
        xl: "82px",
        xxl: "85px",
      },
    }}
  >
    {children}
  </Box>
);

const EditCourseModal = ({ handleClose, open }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { isLoading, course, courses } = useSelector((state) => state.course);
  const [preRequisiteCourses, setPreRequisiteCourses] = useState([]);
  //   const [isUpdate, setIsUpdate] = useState(true);
  const { skills } = useSelector((state) => state.skill);
  const [skillSet1, setSkillSet1] = useState([]);
  const [skillSet2, setSkillSet2] = useState([]);
  const [skill, setSkill] = useState([]);
  const [preRequisite, setPreRequisite] = useState([]);
  // const [preRequisiteCourses, setPreRequisiteCourses] = React.useState([]);
  const [preRequisite1, setPreRequisite1] = useState([]);
  const [isPreRequisiteCourseEmpty, setIsPreRequisiteCourseEmpty] = useState(false);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToaster();
  const CourseCreateSchema = Yup.object().shape({
    name: Yup.string().required("Course name is required"),
    description: Yup.string().required("Course description is required"),

    level: Yup.string().required("Course level is required"),
    category: Yup.string().required("Course category is required"),
    language: Yup.string().required("Course language is required"),
  });

  const methods = useForm({
    resolver: yupResolver(CourseCreateSchema),
    defaultValues: {
      name: course.name,
      description: course.description,
      level: course.level,
      category: course.category,
      language: course.language,
    },
  });
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
  const { handleSubmit } = methods;
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
    console.log("🚀 ~ file: EditCourseModal.jsx:227 ~ onSubmit ~ coverImageFile:", coverImageFile);

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
      } else {
        toast.trigger("Can not create course", "error");
      }
    });
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        // sx={{
        //   backgroundColor: "green.800",
        // }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={`Edit ${course.name}`} />

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box sx={style1}>
                <Box
                  sx={{
                    // height: "580px",
                    height: {
                      lg: "550px",
                      xl: "580px",
                      xxl: "780px",
                    },
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: "0", // Hide the scrollbar
                    },
                  }}
                >
                  <Box
                    sx={{
                      paddingLeft: "16px",
                      paddingTop: "1%",
                      paddingRight: "16px",
                    }}
                  >
                    <LineStackSingle>
                      <TextFieldCourse name="name" label="Course Name" defaultValue={course.name} isRequired={true} />
                    </LineStackSingle>
                    {/* <LineStackSingle> */}
                    <Stack
                      // direction="row"
                      spacing={2}
                      sx={{
                        // backgroundColor:"red",
                        height: {
                          lg: "92px",
                          xl: "110px",
                          xxl: "115px",
                        },
                      }}
                    >
                      <CTextFieldDescription
                        name="description"
                        label="Course Description"
                        defaultValue={course.description}
                        isRequired={true}
                      />
                    </Stack>
                    {/* </LineStackSingle> */}
                    <Stack
                      // direction="row"
                      spacing={2}
                      sx={{
                        // backgroundColor:"red",
                        height: {
                          lg: "70px",
                          xl: "70px",
                          xxl: "80px",
                        },
                      }}
                    >
                      <PreRequisiteCourseFiled
                        perRequisiteCourses={preRequisiteCourses}
                        handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
                        isUpdate={true}
                      />
                    </Stack>
                    <LineStack>
                      <FieldBox>
                        <CSelectField
                          name={"level"}
                          label="Level"
                          options={courseLevelFields}
                          defaultValue={course.level}
                          isRequired={true}
                        />
                      </FieldBox>
                      <FieldBox>
                        <CSelectField
                          name={"category"}
                          label="Category"
                          options={courseCategoryFields}
                          defaultValue={course.category}
                          isRequired={true}
                        />
                      </FieldBox>
                    </LineStack>
                    <Stack
                      // direction="row"
                      spacing={2}
                      sx={{
                        // backgroundColor:"red",
                        height: {
                          lg: "70px",
                          xl: "70px",
                          xxl: "80px",
                        },
                      }}
                    >
                      <CourseSkillfiled
                        skills={skills}
                        // register={register}
                        skillSet={skill}
                        handleChangeSkills={handleChangeSkills}
                        isUpdate={true}
                      />
                    </Stack>
                    <LineStackSingle>
                      <CSelectField
                        name={"language"}
                        label="Language"
                        options={courseLanguageFields}
                        defaultValue={course.language}
                        isRequired={true}
                      />
                    </LineStackSingle>
                    <Stack
                      // direction="row"
                      // spacing={2}
                      sx={
                        {
                          // backgroundColor:"red",
                        }
                      }
                    >
                      <Typography
                        variant="wpf_h7_medium"
                        sx={{
                          mb: 0,
                          color: "neutral.N300",
                        }}
                      >
                        Course Cover Image
                      </Typography>
                      <CourseCoverImageField
                        coverImage={coverImage}
                        removeImage={removeImage}
                        handleImage={handleImage}
                        update={true}
                      />
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingY: { lg: "10px", xl: "12px", xxl: "12px" },
                  paddingX: { lg: "14px", xl: "16px", xxl: "16px" },
                  mt: 1,
                  borderTop: "2px solid #F2F6FC",
                }}
              >
                <Button
                  onClick={handleClose}
                  sx={{
                    textTransform: "none",
                    paddingX: { lg: "20px", xl: "30px", xxl: "30px" },
                    paddingY: { lg: "3px", xl: "5px", xxl: "5px" },
                    fontSize: {
                      lg: "12px",
                      xl: "14px",
                      xxl: "14px",
                    },
                    height: { lg: "40px", xl: "40px", xxl: "40px" },
                    width: "120px",
                    borderRadius: "8px",
                    border: "1px solid #F4F7FE",
                    backgroundColor: "#F4F7FE",
                    color: "#62728F",
                    "&:hover": {
                      backgroundColor: "#F4F7FE",
                    },
                  }}
                  variant="filled"
                >
                  Cancel
                </Button>
                <LoadingButton
                  type="submit"
                  loading={isLoading}
                  sx={{
                    textTransform: "none",
                    paddingX: { lg: "20px", xl: "30px", xxl: "30px" },
                    paddingY: { lg: "3px", xl: "5px", xxl: "5px" },
                    fontSize: {
                      lg: "12px",
                      xl: "14px",
                      xxl: "14px",
                    },
                    height: { lg: "40px", xl: "40px", xxl: "40px" },
                    width: "120px",
                    borderRadius: "8px",
                    backgroundColor: "#2E58FF",
                    "&:hover": {
                      background: "#244EF5",
                    },
                    "&:disabled": {
                      backgroundColor: "#B6C9F0",
                      color: "#FFFFFF",
                    },
                  }}
                  variant="contained"
                >
                  Create
                </LoadingButton>
              </Box>
            </FormProvider>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default EditCourseModal;
