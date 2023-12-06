import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CourseProgressBar from "./CourseProgressBar";

const SingleChapterNew = ({ courseChapter, index, role }) => {
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const { isLightTheme } = useSelector((state) => state.theme);

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
  const [progress, setProgress] = React.useState(0);
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
          alignItems: "flex-start",
          height: "20px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box sx={{ height: "100%" }}>
            {role === "admin" ? (
              // // <img src={activeChapterIndex === index ? chapterBlueIcon : iconChapter}  />

              <Typography
                sx={{
                  color: activeChapterIndex === index ? "#2E58FF" : isLightTheme ? "#1D2939" : "#fff",
                  fontWeight: activeChapterIndex === index ? "500" : "400",
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
                  }}
                >
                  {index + 1}
                </Box>
                {/* <CourseProgressBar index={index} /> */}
              </>
            )}
          </Box>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Typography
              variant="wpf_p3_regular"
              sx={{
                color: activeChapterIndex === index ? "#2E58FF" : isLightTheme ? "#1D2939" : "#fff",
                fontWeight: activeChapterIndex === index ? "500" : "400",
                fontFamily: "Inter",
                textTransform: "none",
                marginLeft: "10px",
                fontSize: "11px",
              }}
            >
              <span style={{}}> {courseChapter.title}</span>
            </Typography>
          </Box>
        </Box>
        {/* {courseChapter.score !== undefined && ( */}
        {/* <Box>
          <Chip label={`Avg: ${courseChapter.scoreAverage}`} sx={scoreStyle(courseChapter.scoreAverage)}></Chip>
        </Box> */}
        {/* )} */}
        <Box sx={{ color: "#1D2939", height: "100%" }}>
          {/* <img src={activeChapterIndex === index ? iconBlue : iconButton} /> */}
          <i className="ri-arrow-right-s-line"></i>
        </Box>
      </Box>
    </>
  );
};

export default SingleChapterNew;
