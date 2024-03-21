/*
 * File           : LandingPageHeader.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 11:34:26
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Thu Mar 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import editCourseIcon from "../../../../assets/images/courses/editCourse.svg";
import { enrollACourse, getCertificateInfo } from "../../../../features/slice/courseSlice";
import useCourseDetails from "../../Course/hooks/courseDetailshooks/useCourseDetails";
// import { enrollACourse, getCertificateInfo } from "../../../../features/slice/courseSlice";
// import { updateUserEnrollCourse } from "../../../../features/slice/userSlice";
import { updateUserEnrollCourse } from "../../../../features/slice/userSlice";
import CategoryChip from "../../Course/CategoryChip";
import LevelChip from "../../Course/CourseCardActionLebel/LevelChip";
import CourseDeleteModal from "../../Course/CourseDetailsPage/CourseDeleteModal";
import CourseContent from "../../Course/CourseLandingPage/CourseContent";
import CourseHeaderTitle from "../../Course/CourseLandingPage/CourseHeaderTitle";
import CourseSubmitReviewModal from "../../Course/CourseLandingPage/CourseSubmitReviewModal";
import EditCourseModal from "../../Course/CreateCourseModal/EditCourseModal";
import LanguageChip from "../../Course/LanguageChip";
import CustomImage from "../shared/ImageComponent/CustomImage";
import { boxStyle, btnStyle } from "./CourseCard/courseCardStyle";

const LandingPageHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isEnrollAble, enrolmentMessage } = useSelector((state) => state.course);
  const { id } = useParams();

  const {
    skill,
    course,
    open,
    handleOpen,
    handleClose,
    onSubmit,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    skills,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    checkedFeatured,
    outcomes,
    setOutcomes,
    dateTime,
    isFeatured,
    setIsFeatured,
    handleChangeFeatured,
    handleDateTime,
    hub,
    handleChangeHubs,
  } = useCourseDetails();

  const handleRouteChange = () => {
    if (
      user.role === "level_0_annotator" ||
      user.role === "level_1_annotator" ||
      user.role === "level_2_annotator" ||
      user.role === "level_3_annotator" ||
      user.role === "reviewer"
    ) {
      if (user.enrolledCourses.includes(course._id)) {
        navigate(`/course-homepage/${course._id}`);
      } else if (user.completedCourses.includes(course._id)) {
        navigate(`/course-homepage/${course._id}`);
      } else {
        navigate(`/course-homepage/${course._id}`);
        dispatch(enrollACourse(course._id)).then((action) => {
          dispatch(updateUserEnrollCourse(action.payload.data.course._id));
        });
      }
    } else {
      navigate(`/course-homepage/${course._id}`);
    }
  };

  const handleCertificate = (id) => {
    dispatch(getCertificateInfo(id));
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={{ width: { xxl: "72%", xl: "68%", lg: "80%" }, paddingY: "16px" }}>
        <Box sx={{ width: { xxl: "100%", xl: "80%", lg: "95%" } }}>
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ paddingRight: "6px" }}>
                  <LanguageChip language={course.language || ""} />
                </Box>
                <Box sx={{ paddingRight: "6px" }}>
                  <CategoryChip category={course.category || ""} />
                </Box>
                <Box sx={{ padding: "0%" }}>
                  <LevelChip level={course.level || ""} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4}>
              {user.role === "admin" || user.role === "reviewer" ? (
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      width: "150px",
                      height: "40px",
                      borderRadius: "6px",
                      backgroundColor: "#fff",
                      border: "1px solid #F4F7FE",
                    }}
                    onClick={handleOpen}
                  >
                    <img src={editCourseIcon} />
                    <span style={{ paddingLeft: "8px" }}>
                      <Typography variant="wpf_p4_medium" sx={{ color: "#2D58FF" }}>
                        Edit Course
                      </Typography>
                    </span>
                  </Button>

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
                    skill={skill}
                    dateTime={dateTime}
                    checkedFeatured={checkedFeatured}
                    handleChangeFeatured={handleChangeFeatured}
                    outcomes={outcomes}
                    setOutcomes={setOutcomes}
                    handleDateTime={handleDateTime}
                    isFeatured={isFeatured}
                    setIsFeatured={setIsFeatured}
                    hub={hub}
                    handleChangeHubs={handleChangeHubs}
                  />

                  <CourseDeleteModal course={course} />
                </Box>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <Box sx={{ paddingY: "12px" }}>
              <CourseHeaderTitle course={course} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px solid #EAECF0", borderBottom: "1px solid #EAECF0", marginTop: "10px" }}>
          <CourseContent course={course} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px", mb: "16px" }}>
          <Button disabled={!isEnrollAble} sx={btnStyle} onClick={handleRouteChange}>
            {(user.role === "level_0_annotator" && !user.completedCourses.includes(course._id)) ||
            (user.role === "level_1_annotator" && !user.completedCourses.includes(course._id)) ||
            (user.role === "level_2_annotator" && !user.completedCourses.includes(course._id)) ||
            (user.role === "level_3_annotator" && !user.completedCourses.includes(course._id)) ||
            (user.role === "reviewer" && user.completedCourses.includes(course._id))
              ? "Enroll Now"
              : "View Course"}
          </Button>

          {user.completedCourses.includes(course._id) && (
            <Link to={`/certificate`} target="blank">
              <Button onClick={() => handleCertificate(id)} disabled={!isEnrollAble} sx={{ ...btnStyle, ml: 1 }}>
                Download Certificate
              </Button>
            </Link>
          )}

          <CourseSubmitReviewModal user={user} course={course} isEnrollAble={isEnrollAble} />
          <Typography variant="wpf_p3_regular" color={"grey.550"} sx={{ marginLeft: "20px" }}>
            <span style={{ color: "#344054", fontWeight: "600" }}>{course.totalCurrentEnrolledStudents}</span> already
            enrolled
          </Typography>
        </Box>
        {!isEnrollAble && (
          <Box>
            <Alert
              variant="filled"
              severity="warning"
              sx={{
                border: "1px solid #F2A200",
                color: "warning.400",
                backgroundColor: "warning.100",
                borderRadius: "6px",
              }}
            >
              {enrolmentMessage}
            </Alert>
          </Box>
        )}
      </Box>
    
      <CustomImage
        height={"100%"}
        width={"100%"}
        maxHeight={{ xxl: "300px", xl: "300px", lg: "300px" }}
        maxWidth={{ xxl: "390px", xl: "340px", lg: "320px" }}
        alt={course.name}
        imageUrl={course.images}
      />
    </Box>
  );
};

export default LandingPageHeader;
