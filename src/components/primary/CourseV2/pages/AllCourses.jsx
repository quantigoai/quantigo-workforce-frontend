/*
 * File           : AllCourses.jsx
 * Project        : wmpfrontv2
 * Created Date   : We 20 Mar 2024 11:43:00
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed Mar 20 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box } from "@mui/material";
import { default as React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCoursesNew } from "../../../../features/slice/courseSlice";
import FeaturedCourseSection from "../components/FeaturedCourseSection";
import LevelBasedSection from "../components/LevelBasedSection";

const AllCourses = () => {
  const dispatch = useDispatch();
  const [level, setLevel] = React.useState([]);
  const [dataLoading, setDataLoading] = React.useState(true);

  useEffect(() => {
    const test = () => {
      dispatch(getAllCoursesNew({})).then((res) => {
        setLevel(Object.keys(res.payload.data.courses.coursesByLevelList));
        setDataLoading(false);
      });
    };
    test();
  }, [dataLoading]);

  return dataLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Box sx={{ p: "25px" }}>
      {/* TODO implement header here */}

      <FeaturedCourseSection />
      {level.map((level) => (
        <LevelBasedSection title={level} key={level} />
      ))}
    </Box>
  );
};

export default AllCourses;
