import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="wpf_h7_medium" color="grey.500">
          Course Progress
        </Typography>
        <Typography variant="wpf_h7_medium" color="grey.500">{`${Math.round(props.value)}%`}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const CourseProgress = () => {
  const [progress, setProgress] = React.useState(70);

  React.useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    // }, 800);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};

export default CourseProgress;
