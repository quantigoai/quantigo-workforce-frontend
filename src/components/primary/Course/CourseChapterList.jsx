/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/CourseChapterList.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 20th 2023, 1:41:02 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, Button, Grid, Paper} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import SingleChapter from "./SingleChapter";
import {setActiveChapterIndex} from "../../../features/slice/activePathSlice";

const CourseChapterList = ({ courseChapters, handleChapter}) => {
  const { course } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeChapterIndex } = useSelector((state) => state.activePath);


  const handleClick = (id, index, quizId) => {
    handleChapter(id);
    dispatch(setActiveChapterIndex(index));
    navigate(`/course-details/${course._id}?isRedirect=true`);
  };

  return (
    <>
      <Box sx={{ width: "100%", paddingTop: "3%" }}>
        <Paper elevation={0} sx={{ paddingTop: "0%" }}>
          {courseChapters &&
            courseChapters?.map((courseChapter, index) => (
              <Grid key={index} container sx={{ paddingLeft: "0%" }}>
                <Button
                  fullWidth
                  key={courseChapter._id}
                  sx={{
                    height: "56px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 154, 69, 0.1)",
                    },
                    backgroundColor:
                      activeChapterIndex === index && "rgba(255, 154, 69, 0.4)",
                  }}
                  onClick={() =>
                    handleClick(
                      courseChapter._id,
                      index,
                      courseChapter.quiz?.id
                    )
                  }
                >
                  <SingleChapter courseChapter={courseChapter} />
                </Button>
              </Grid>
            ))}
        </Paper>
      </Box>
    </>
  );
};

export default CourseChapterList;
