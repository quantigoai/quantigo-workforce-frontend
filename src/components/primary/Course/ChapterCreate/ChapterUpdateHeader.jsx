import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CommonHeader from "../../../shared/CustomComponenet/CommonHeader/CommonHeader";
import { getAQuizById } from "../../../../features/slice/quizSlice";

const ChapterUpdateHeader = ({ isEditChapter, disabledButton, durationTime }) => {
  const { course, courseChapter } = useSelector((state) => state.course);
  const { isLoading } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const [isActiveChapter, setIsActiveChapter] = useState(false);
  const [isActiveQuiz, setIsActiveQuiz] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("create-chapter") || location.pathname.includes("update-chapter")) {
      setIsActiveChapter(true);
    } else {
      setIsActiveQuiz(true);
    }
  }, [location.pathname]);
  const navigate = useNavigate();
  const handleQuizUpdate = () => {
    if (!courseChapter.quiz) {
      navigate(`/quiz-create/${course._id}`);
    } else {
      dispatch(getAQuizById(courseChapter.quiz.id)).then((action) => {
        if (action.payload.status === 200) {
          navigate(`/update-quiz/${courseChapter._id}`);
        }
      });
    }
  };
  const handleChapterUpdate = () => {
    // setIsActiveChapter(true);
    navigate(`/update-chapter/${courseChapter._id}`);
    // navigate(`/create-chapter/${course._id}`);
  };

  return (
    <>
      <Box
        // className="headerBox"
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          //   align-items: center;
          backgroundColor: "neutral.N000",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "start",
              alignItems: "start",
              //   paddingX: "10px",
            }}
          >
            <CommonHeader title={courseChapter.title} customButton="Create User" />
            <Typography sx={{ mt: 1 }} variant="wpf_p4_regular">
              Course Duration: <span style={{ fontWeight: "bold" }}>{durationTime}</span>{" "}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button
                sx={{
                  backgroundColor: isActiveChapter ? "#36B37E" : "#DFF2EA",
                  color: isActiveChapter ? "#fff" : "#36B37E",
                  textTransform: "none",
                  height: "36px",
                  width: "96px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: isActiveChapter ? "#36B37E" : "#DFF2EA",
                    color: isActiveChapter ? "#fff" : "#36B37E",
                  },
                }}
                onClick={handleChapterUpdate}
              >
                Chapter
              </Button>
              <Button
                sx={{
                  backgroundColor: isActiveQuiz ? "#36B37E" : "#DFF2EA",
                  color: isActiveQuiz ? "#fff" : "#36B37E",
                  textTransform: "none",
                  height: "36px",
                  borderRadius: "8px",
                  ml: 2,
                  width: "96px",
                  "&:hover": {
                    backgroundColor: isActiveQuiz ? "#36B37E" : "#DFF2EA",
                    color: isActiveQuiz ? "#fff" : "#36B37E",
                  },
                }}
                disabled={isLoading}
                onClick={handleQuizUpdate}
              >
                Quiz
              </Button>
            </Box>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: "12px 20px",
          }}
        >
          <Button
            type="submit"
            // disabled={disabledButton}
            // disabled={true}
            sx={{
              backgroundColor: "#2E58FF",
              color: "#fff",
              textTransform: "none",
              height: "40px",
              borderRadius: "8px",
              ml: 2,
              width: "128px",
              "&:hover": {
                backgroundColor: "#244EF5",
              },
            }}
          >
            {setIsActiveChapter ? " Save Changes" : "Save Changes"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChapterUpdateHeader;
