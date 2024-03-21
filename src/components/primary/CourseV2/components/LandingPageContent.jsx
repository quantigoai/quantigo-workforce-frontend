/*
 * File           : LandingPageContent.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 11:34:37
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
import { Box } from "@mui/material";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import CourseContentTab from "./LandingPage/CourseContentTab";
import CourseLandingAbout from "./LandingPage/CourseLandingAbout";
import CourseContentSkills from "./LandingPage/CourseContentSkills";
import CourseSeriesList from "./CourseSeries/CourseSeriesList";
import CourseCertificate from "./Certificate/CourseCertificate";
import CourseReviews from "./Reviewes/CourseReviews";
import RelatedCourseIndex from "./RelatedCourse/RelatedCourseIndex";


const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "20px",
  position: "relative",
};
const certificateStyle = {
  height: "40%",
  position: "sticky",
  zIndex: "50",
  top: 0,
};
const LandingPageContent = ({ course }) => {
  const [value, setValue] = React.useState();
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const testimonialRef = useRef(null);
  const { isLightTheme } = useSelector((state) => state.theme);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "1") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === "2") {
      coursesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === "3") {
      testimonialRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      <Box sx={boxStyle}>
        <Box
          sx={{
            width: { xxl: "70%", xl: "65%", lg: "70%" },
            typography: "body1",
          }}
        >
          <Box>
            <CourseContentTab handleChange={handleChange} value={value} />
          </Box>
          <Box ref={aboutRef} sx={{ mt: "20px" }}>
            <CourseLandingAbout />
          </Box>
          <Box sx={{ mt: "48px" }}>
            <CourseContentSkills course={course}  />
          </Box>
          <Box ref={coursesRef} sx={{ mt: "48px" }}>
            <CourseSeriesList course={course}  />
          </Box>
        </Box>
        <Box sx={{ ...certificateStyle, width: { xxl: "25%", xl: "30%", lg: "25%" } }}>
          <CourseCertificate />
        </Box>
      </Box>
      <Box ref={testimonialRef} sx={{ mt: "48px", padding: "24px" }}>
        <CourseReviews />
      </Box>
      <Box ref={testimonialRef} sx={{ mt: "48px", padding: "24px", backgroundColor: isLightTheme ? "#F8FAFC" : "" }}>
        <RelatedCourseIndex  />
      </Box>
    </Box>
  );
};

export default LandingPageContent;
