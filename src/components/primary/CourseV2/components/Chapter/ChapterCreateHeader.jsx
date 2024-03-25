import {Box, Button, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
// import CommonHeader from "../../../shared/CustomComponenet/CommonHeader/CommonHeader";
import {LoadingButton} from "@mui/lab";
import CommonHeader from "../../../../shared/CustomComponenet/CommonHeader/CommonHeader";

const ChapterCreateHeader = ({ isLoading, durationTime, isDisable, quizLoading }) => {
  const { course } = useSelector((state) => state.course);
  const [isActiveChapter, setIsActiveChapter] = useState(false);
  const [isChapterBtnDis, setIsChapterBtnDis] = useState(false);
  const [isQuizBtnDis, setIsQuizBtnDis] = useState(false);
  const [isActiveQuiz, setIsActiveQuiz] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("create-chapter")) {
      setIsActiveChapter(true);
      setIsQuizBtnDis(true);
    } else {
      setIsActiveQuiz(true);
      setIsChapterBtnDis(true);
    }
  }, [location.pathname]);
  const navigate = useNavigate();
  const handleQuizCreate = () => {
    // setIsActiveChapter(true);

    navigate(`/quiz-create/${course._id}`);
  };
  const handleChapterCreate = () => {
    // setIsActiveChapter(true);
    navigate(`/create-chapter/${course._id}`);
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
            <CommonHeader title={course.name} customButton="Create User" />
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
                onClick={handleChapterCreate}
                disabled={isChapterBtnDis}
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
                onClick={handleQuizCreate}
                disabled={isQuizBtnDis}
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
          <LoadingButton
            type="submit"
            loading={quizLoading}
            disabled={isDisable}
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
              "&:disabled": {
                backgroundColor: "#B6C9F0",
                color: "#fff",
              },
            }}
          >
            {isActiveChapter ? "Create chapter " : "Create Quiz"}
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default ChapterCreateHeader;
