import {Box, CircularProgress, Typography} from "@mui/material";
import React, {useState} from "react";

const CommonHeaderProgress = () => {
  const [progress, setProgress] = useState(75);
  return (
    <Box sx={{ position: "relative", top: 0 }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => (theme.palette.mode === "light" ? "#D2DFFA" : "#D2DFFA"),
          // backgroundColor: "red",
        }}
        size="50px"
        thickness={5}
        // {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
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
        size="50px"
        value={progress}
        thickness={5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 7,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "blue",
        }}
      >
        <Typography sx={{ fontSize: "15px" }}>
          <b> {progress}%</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default CommonHeaderProgress;
