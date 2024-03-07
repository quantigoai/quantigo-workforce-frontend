import React from "react";
import course_Complete from "../../../../assets/images/courses/course_Complete.svg";
import { Box, CircularProgress } from "@mui/material";
const ChapterProgressbar = ({ item, score, passMarkThreshold }) => {
  console.log("🚀 ~ ChapterProgressbar ~ item:", item);

  return (
    <>
      {/* <img src={course_Complete} alt='' /> */}

      <Box sx={{ position: "relative", alignItems: "center", display: "flex" }}>
        {score < passMarkThreshold ? (
          <>
            <CircularProgress
              variant='determinate'
              sx={{
                color: (theme) => (theme.palette.mode === "light" ? "#D2DFFA" : "#D2DFFA"),
                // backgroundColor: "red",
              }}
              size='20px'
              thickness={7}
              // {...props}
              value={100}
            />
            <CircularProgress
              variant='determinate'
              disableShrink
              sx={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
                color: (theme) => (theme.palette.mode === "light" ? "#2D58FF" : "#2D58FF"),
                animationDuration: "550ms",
                position: "absolute",
                left: 0,
                top: 0,
              }}
              size='20px'
              value={score}
              thickness={7}
            />
          </>
        ) : (
          <>
            <img src={course_Complete} />
          </>
        )}
      </Box>
    </>
  );
};

export default ChapterProgressbar;
