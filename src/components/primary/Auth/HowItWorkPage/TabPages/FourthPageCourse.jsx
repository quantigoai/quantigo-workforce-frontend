import {Box, Typography} from "@mui/material";
import React from "react";
import DashboardHowItWorkPage from "./DashboardHowItWorkPage";

const FourthPageCourse = () => {
  var checkmark = "✔";
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          paddingLeft: "3%",
          paddingRight: "5%",
          height: "82vh",
          scrollBehavior: "smooth",
          scrollBehavior: "smooth",
          overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.6em",
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
        <Box sx={{ paddingBottom: "3%" }}>
          <Typography variant="h4" sx={{ color: "#282F3D" }}>
            Course
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "0%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            By clicking on the <b> "Get Started" </b> button, you will be
            redirected to the page where you can find all available courses to
            start learning. There are four annotator levels available, with
            Level 0 being the most basic level, Level 1 is Beginner level, Level
            2 is intermediate and Advanced level is Level 3.
          </Typography>
        </Box>

        <Box sx={{ paddingBottom: "0%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            On the course details page, click on <b>“View” </b>. After clicking
            on a course, you will see that it is broken down into chapters. Each
            chapter will have its own objectives, total time required to
            complete it, and assigned quiz.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Each course has a very detailed description to help you better
            choose the course that fits you. The description includes:
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "3%", paddingBottom: "2%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            {checkmark} Detailed syllabus
          </Typography>
          <br />
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            {checkmark} Level
          </Typography>
          <br />
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            {checkmark} Category
          </Typography>
          <br />
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            {checkmark} Language
          </Typography>
          <br />
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            {checkmark} Skills that you will gain
          </Typography>
          <br />
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            {checkmark} Prerequisite : Skills you gained from previous courses
          </Typography>
          <br />
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            {checkmark} Live session link with date and time
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "3%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Once you decide to enroll, click on the <b>"Get Started"</b> button
            located at the bottom right corner of the page. This will take you
            to the next page, where you can see the course broken down by
            chapters, and track your progress as a percentage. After enrolling,
            you can start watching videos and reading written content, and
            taking quizzes immediately to test your understanding.
          </Typography>
        </Box>

        <Box sx={{ paddingBottom: "2%" }}>
          <Typography variant="h6" sx={{ color: "#47536B" }}>
            Quiz
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            In each chapter, you will find one or more quizzes based on the
            chapter content. There are two types of quizzes: Multiple Choice
            Questions (MCQ) and True/False type. You must answer at least 75% of
            the questions correctly in order to pass the quiz.
          </Typography>
        </Box>

        <Box sx={{ paddingBottom: "3%" }}>
          <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
            Once you have successfully completed all the courses under Level 0,
            your annotator level will be automatically updated to the next
            level. After reaching <b> Level 1 </b>, you will be able to view the
            total number of available jobs that match your skills on your
            Dashboard.
          </Typography>
        </Box>

        <DashboardHowItWorkPage />
      </Box>
    </>
  );
};

export default FourthPageCourse;
