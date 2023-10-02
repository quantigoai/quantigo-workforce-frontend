import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProgressBarForDashboard = () => {
  const [progress, setProgress] = React.useState(80);
  const { user } = useSelector((state) => state);
  const styles = {
    progress: {
      borderRadius: "50%",
    },
  };
  useEffect(() => {
    if (user.user.isNDASigned && user.user.isDocumentsSubmitted === "submitted") {
      setProgress(100);
    } else if (!user.user.isNDASigned && user.user.isDocumentsSubmitted === "submitted") {
      setProgress(90);
    } else if (user.user.isNDASigned && user.user.isDocumentsSubmitted === "pending") {
      setProgress(90);
    }
  }, [user]);
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) => theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
            // backgroundColor: "red",
          }}
          size="5vh"
          thickness={5}
          // {...props}
          value={100}
        />
        <CircularProgress
          // style={styles.progress}
          variant="determinate"
          disableShrink
          sx={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            color: (theme) => (theme.palette.mode === "light" ? "#2D58FF" : "#2D58FF"),
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
          }}
          size="5vh"
          value={progress}
          thickness={5}
          // {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 4,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "blue",
          }}>
          <Typography variant="wpf_h7_semiBold">
            <b> {progress}%</b>
          </Typography>
        </Box>
      </Box>

      {/* <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
          }}
          value={100}
          size="30vh"
        />
        <CircularProgress
          variant="determinate"
          value={progress}
          size="30vh"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
            animationDuration: "550ms",
            position: "absolute",
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Typography variant="caption" component="div" color="text.secondary">
            {progress}%
          </Typography>
        </Box>
      </Box>  */}
    </>
  );
};

export default ProgressBarForDashboard;
