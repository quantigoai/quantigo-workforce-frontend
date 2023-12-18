import { Box, Typography } from "@mui/material";
import React from "react";
import useCourseDetails from "./hooks/courseDetailshooks/useCourseDetails";
const Style80 = {
  background: "#82BD40",
  color: "#FFFFFF",
  FontSize: "12px",
  width: "100%",
};
const Style75 = {
  background: "#4A2D8B ",
  color: "#FFFFFF",
  FontSize: "12px",
  width: "100%",
};
const Style70 = {
  background: "#EB6651 ",
  color: "#FFFFFF",
  FontSize: "12px",
  width: "100%",
};

const SingleChapterNew = ({ courseChapter, index, role }) => {
  const { isLightTheme, setProgress, activeChapterIndex } = useCourseDetails();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const scoreStyle = (score) => {
    let style = {};
    if (score >= 80) {
      style = Style80;
    } else if (score >= 75) {
      style = Style75;
    } else if (score >= 70) {
      style = Style70;
    } else {
      style = Style70;
    }
    return style;
  };

  return (
    <>
      <Box
        sx={{
          fontFamily: "Inter",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          height: "25px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "start", justifyContent: "center" }}>
          <Box>
            {role === "admin" ? (
              <Typography
                sx={{
                  color: activeChapterIndex === index ? "#2E58FF" : isLightTheme ? "#1D2939" : "#fff",
                  fontWeight: activeChapterIndex === index ? "500" : "400",
                  marginRight: "10px",
                }}
                variant="wpf_p3_regular"
              >
                {index + 1}.
              </Typography>
            ) : (
              <>
                <Box
                  sx={{
                    background: "#2EBD56",
                    fontWeight: "500",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: "20px",
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                  }}
                >
                  {index + 1}
                </Box>
                {/* <CourseProgressBar index={index} /> */}
              </>
            )}
          </Box>
          <Box sx={{}}>
            <Typography
              variant="wpf_p3_regular"
              sx={{
                color: activeChapterIndex === index ? "#2E58FF" : isLightTheme ? "#1D2939" : "#fff",
                fontWeight: activeChapterIndex === index ? "500" : "400",
                fontFamily: "Inter",
                textTransform: "none",
              }}
            >
              {courseChapter.title}
            </Typography>
          </Box>
        </Box>
        {/* {courseChapter.score !== undefined && ( */}
        {/* <Box>
          <Chip label={`Avg: ${courseChapter.scoreAverage}`} sx={scoreStyle(courseChapter.scoreAverage)}></Chip>
        </Box> */}
        {/* )} */}

        <Box sx={{ color: "#1D2939" }}>
          {/* <img src={activeChapterIndex === index ? iconBlue : iconButton} /> */}
          <i className="ri-arrow-right-s-line"></i>
        </Box>
      </Box>
    </>
  );
};

export default SingleChapterNew;
