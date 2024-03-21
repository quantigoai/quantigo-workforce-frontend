/*
 * File           : LevelBasedSection.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 12:29:14
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

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicCard from "./CourseCard/BasicCard";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";

const LevelBasedSection = ({ title }) => {
  console.log("🚀 ~ LevelBasedSection ~ title:", title)
  const {
    initialCourses: { coursesByLevelList },
  } = useSelector((state) => state.course);

  const { isLightTheme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const {
  //     // courses,
  //     isDataLoading,
  //     search,
  //     filter,
  //   } = useCourseManagement();

  const handleSeeMore = () => {
    if (title === "Basic Courses") {
      navigate(`/courses/all-course/basic`);
    } else if (title === "Beginner Courses") {
      navigate("/courses/all-course/beginner");
    } else if (title === "Intermediate Courses") {
      navigate("/courses/all-course/intermediate");
    } else {
      navigate("/courses/all-course/advanced");
    }
  };

  return (
    <Box sx={{ pr: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
          //   mt: seeMore ? "40px" : "",
          mt: "40px",
        }}
      >
        <Typography variant="wpf_h4_Bold" color={"neutral.995"}>
          {capitalizeFirstLetter(title)} Courses
        </Typography>

        <Typography
          onClick={handleSeeMore}
          sx={{
            display: "flex",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            color: "#266AED",
            mr: "25px",
          }}
          variant="wpf_p3_medium_3"
        >
          See more
          <ArrowForwardIosIcon sx={{ fontSize: "12px", ml: "5px", mt: "2px" }} />
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xxl: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            lg: "repeat(3,1fr)",
          },
          gridGap: "8px",
          mt: "16px",
          pr: "15px",
          gap: { xxl: "20px", xl: "15px", lg: "12px" },
        }}
      >
        {coursesByLevelList[title]?.map((course) => (
          <Box
            sx={{
              backgroundColor: isLightTheme ? "#fff" : "#000",
              width: { xxl: "368px", xl: "278px", lg: "250px" },
              borderRadius: "10px",
            }}
            key={course._id}
          >
            <BasicCard course={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LevelBasedSection;
