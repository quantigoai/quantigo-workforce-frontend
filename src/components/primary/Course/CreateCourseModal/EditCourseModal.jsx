/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/CreateCourseModal/EditCourseModal.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, December 13th 2023, 7:09:04 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {yupResolver} from "@hookform/resolvers/yup";
import {LoadingButton} from "@mui/lab";
import {Stack} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import {courseCategoryFields, courseLanguageFields, courseLevelFields} from "../../AllUsers/userFilterOptions";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import CSelectField from "./CSelectField";
import CTextFieldDescription from "./CTextFieldDescription";
import CourseCoverImageField from "./CourseCoverImageField";
import CourseSkillfiled from "./CourseSkillfiled";
import PreRequisiteCourseFiled from "./PreRequisiteCourseFiled";
import TextFieldCourse from "./TextFieldCourse";

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

const EditCourseModal = ({
  handleClose,
  open,
  onSubmit,
  course,
  preRequisiteCourses,
  handleChange_Pre_Requisite_Course,
  skills,
  handleChangeSkills,
  coverImage,
  removeImage,
  handleImage,
  isLoading,
  skill,
}) => {
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
    mode: "all",
  });
  const { handleSubmit } = methods;
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
                  Save
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
