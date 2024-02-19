import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const CourseLandingAbout = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { course } = useSelector((state) => state.course);

  const boxStyle = {
    display: "flex",
    alignItems: "start",
    backgroundColor: isLightTheme ? "#F8FAFC" : "#101828",
    padding: "20px",
    borderRadius: "8px",
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Box>
          <Typography variant='wpf_h5_Bold' color='neutral.995'>
            What you&apos;ll learn
          </Typography>
        </Box>
        <Box sx={{ mt: "12px" }}>
          <Typography variant={"wpf_p3_regular"} color={"grey.#344054"}>
            {course.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gridGap: "12px",
          mt: "24px",
        }}
      >
        {course.outComes &&
          course.outComes.map((item) => (
            <>
              <Box sx={boxStyle}>
                <i style={{ color: "#667085" }} className='ri-check-line'></i>
                <Typography sx={{ marginLeft: "8px" }} variant='wpf_p3_regular' color={"grey.500"}>
                  {item}
                </Typography>
              </Box>
            </>
          ))}
      </Box>
    </Box>
  );
};

export default CourseLandingAbout;
