import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import useCourseDetails from "../hooks/courseDetailshooks/useCourseDetails";
import ChapterHeader from "../../CourseNew/ChapterHeader";
import ChapterHeaderMenuIndex from "./ChapterHeaderMenuIndex";
import parse from "html-react-parser";
import prevIcon from "../../../../assets/images/PrevIcon.svg";
import nextIcon from "../../../../assets/images/NextIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setActiveChapterIndex } from "../../../../features/slice/activePathSlice";
import { getAChapterById } from "../../../../features/slice/courseSlice";
import { useNavigate } from "react-router-dom";

const ChapterViewIndex = () => {
  const {
    course,
    durationTime,
    isLoading,
    isInContent,
    isLightTheme,
    handleChapterClick,
    courseChapters,
    courseChapter,
    setDurationTime,
    setIsInContent,
  } = useCourseDetails();
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChapterChangePre = () => {
    const activeChapterId = courseChapters.find((chapter, index) => {
      return index === activeChapterIndex - 1;
    });
    dispatch(setActiveChapterIndex(activeChapterIndex - 1));
    dispatch(getAChapterById(activeChapterId._id)).then(() => {});
  };
  const handleChapterChangeNext = () => {
    const activeChapterId = courseChapters.find((chapter, index) => {
      return index === activeChapterIndex + 1;
    });
    dispatch(setActiveChapterIndex(activeChapterIndex + 1));
    dispatch(getAChapterById(activeChapterId._id)).then(() => {});
  };

  const handleEditChapter = () => {
    // dispatch(setActiveChapterIndex(activeChapterIndex));
    dispatch(getAChapterById(courseChapter._id)).then(() => {
      navigate(`/update-chapter/${courseChapter._id}`);
    });
  };
  const handleDeleteChapter = () => {};
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          height: "90%",
          overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F1F5F9",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "2%",
            paddingBottom: "3%",
            borderBottom: "2px solid ##F8FAFC",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <ChapterHeaderMenuIndex />
            </Grid>
            <Grid item xs={6}>
              <Button onClick={() => handleEditChapter()}>Edit Chapter</Button>
              <Button>Delete Chapter</Button>
            </Grid>
          </Grid>

          <Grid container>
            <Typography variant='wpf_h4_Bold'>{courseChapter.title}</Typography>
          </Grid>
          <Typography variant='wpf_p3_regular'>{courseChapter.description}</Typography>
        </Box>
        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <Grid container sx={{}}>
            {/* <Typography> {courseChapter._id}</Typography> */}
            <Grid
              xs={12}
              sx={
                {
                  // paddingLeft: "3%",
                  // paddingRight: "3%",
                }
              }
            >
              {courseChapter.content && parse(courseChapter.content)}
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10%",
          backgroundColor: "#fff",
          borderTop: "1px solid #F1F5F9",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Button
              disabled={activeChapterIndex === 0 ? true : false}
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                backgroundColor: "#F4F7FE",
                height: {
                  lg: "30px",
                  xl: "40px",
                  xxl: "40px",
                },
                // marginLeft: "13px",
                fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
                lineHeight: "20px",
                // width: {
                //   lg: "128px",
                //   xl: "128px",
                //   xxl: "140px",
                // },
                color: "#2E58FF",
                // "&:hover": {
                //   background: "#244EF5",
                // },
                padding: "16px 10px",
              }}
              onClick={() => handleChapterChangePre()}
            >
              <img src={prevIcon} />
              <span style={{ marginLeft: "8px" }}>Prev. Chapter</span>
            </Button>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                backgroundColor: "#2E58FF",
                height: {
                  lg: "30px",
                  xl: "40px",
                  xxl: "40px",
                },
                marginLeft: "13px",
                fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
                lineHeight: "20px",
                // width: {
                //   lg: "128px",
                //   xl: "128px",
                //   xxl: "140px",
                // },
                color: "white",
                "&:hover": {
                  background: "#244EF5",
                },
                padding: "16px 10px",
              }}
              disabled={activeChapterIndex === courseChapters.length - 1 ? true : false}
              onClick={() => handleChapterChangeNext()}
            >
              <span style={{ marginRight: "8px" }}>Next Chapter</span>
              <img src={nextIcon} />
            </Button>
          </Grid>

          <Grid item xs={6} container sx={{ justifyContent: "flex-end" }}>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                backgroundColor: "#36B37E",
                height: {
                  lg: "30px",
                  xl: "40px",
                  xxl: "40px",
                },
                marginLeft: "13px",
                fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
                lineHeight: "20px",
                width: {
                  lg: "128px",
                  xl: "128px",
                  xxl: "140px",
                },
                color: "white",
                "&:hover": {
                  background: "#244EF5",
                },
                padding: "16px 10px",
              }}
              // onClick={handleCreateModal}
            >
              Start Quiz
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChapterViewIndex;
