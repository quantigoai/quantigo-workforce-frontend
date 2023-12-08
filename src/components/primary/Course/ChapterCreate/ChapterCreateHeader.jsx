import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonHeader from "../../../shared/CustomComponenet/CommonHeader/CommonHeader";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ChapterCreateHeader = ({ isEditChapter }) => {
  const { course } = useSelector((state) => state.course);

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
              Course Duration: <span style={{ fontWeight: "bold" }}>4 hrs 32 mins</span>{" "}
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
                }}
                onClick={handleChapterCreate}
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
                    backgroundColor: "#FAFCFF",
                  },
                  "&:focus": {
                    backgroundColor: "#36B37E",
                    color: "#DFF2EA",
                  },
                  "&:selected": {
                    backgroundColor: "#36B37E",
                  },
                }}
                onClick={handleQuizCreate}
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
            {isEditChapter ? " Save changes" : "Create chapter"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChapterCreateHeader;
