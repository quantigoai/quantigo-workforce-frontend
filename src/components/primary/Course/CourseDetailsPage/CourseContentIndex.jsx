import AddIcon from "@mui/icons-material/Add";
import {Box, Button, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {getAChapterById} from "../../../../features/slice/courseSlice";
import CommonHeader from "../../../shared/CustomComponenet/CommonHeader/CommonHeader";
import ShowQuiz from "../../Quiz/QuizPage/ShowQuiz";
import ShowResult from "../../Quiz/QuizPage/ShowResult/ShowResult";
import CourseChapterList from "../CourseChapterList";
import CourseContentComponents from "./CourseContentComponents";
import CourseDeleteModal from "./CourseDeleteModal";

const CourseContentIndex = () => {
  const { course, isLoading } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  const { courseChapters } = useSelector(
    (state) => state.course.courseChapters
  );
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [quizId, SetQuizId] = useState("");

  useEffect(() => {
    if (courseChapters?.length > 0) {
      if (
        location.pathname !== "/quiz" &&
        location.pathname !== "/show-result"
      ) {
        courseChapters.map((courseChapter, i) => {
          if (i === 0) {
            dispatch(getAChapterById(courseChapter._id));
          }
        });
      }
    }
  }, [courseChapters]);

  const handleChapter = (id) => {
    dispatch(getAChapterById(id));
  };
  const handleCreateChapter = (id) => {
    navigate(`/create-chapter/${id}`);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "baseline" }}>
        <Grid
          container
          sx={{
            paddingBottom: "2%",
          }}
        >
          <CommonHeader
            title={course.name}
            description={course.description}
            isLoading={isLoading}
            customButton="Edit Course"
          />
        </Grid>
      </Box>
      <Box>
        <Grid container sx={{ paddingTop: "2%" }}>
          {" "}
          <Grid
            container
            xs={3}
            sx={{ paddingRight: "2%", overflow: "hidden" }}
          >
            <Grid xs={12}>
              {user.role === "trainer" || user.role === "admin" ? (
                <Box>
                  <CourseDeleteModal course={course} />
                </Box>
              ) : (
                <></>
              )}
              {/* Chapter List item */}
              <CourseChapterList
                courseChapters={courseChapters}
                handleChapter={handleChapter}
              />
              {user.role === "trainer" || user.role === "admin" ? (
                <Box>
                  <Button
                    variant="contained"
                    disabled={isLoading}
                    type="submit"
                    sx={{
                      width: "100%",
                      height: "45px",
                      backgroundColor: "#2D58FF",
                      color: "#FFFFFF",
                      "&:hover": {
                        backgroundColor: "#FF9A45",
                        color: "#1D1D1D",
                      },
                      borderRadius: "2px",
                    }}
                    onClick={() => handleCreateChapter(course._id)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                      }}
                    >
                      <AddIcon />
                      Create Chapter
                    </Box>
                  </Button>
                </Box>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
          {/* Course Content */}
          <Grid container xs={9} sx={{}}>
            {location.pathname === "/quiz" ? (
              <ShowQuiz />
            ) : location.pathname === "/quiz-result" ? (
              <ShowResult />
            ) : (
              <CourseContentComponents quizId={quizId} />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseContentIndex;
