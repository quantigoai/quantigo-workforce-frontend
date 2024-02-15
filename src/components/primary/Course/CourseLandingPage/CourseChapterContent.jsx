import { Box, Button, Grid, Typography } from "@mui/material";
import arrowIcon from "../../../../assets/images/courses/arrowIcon.svg";
import React from "react";
import { useSelector } from "react-redux";
import CourseChapterAccordion from "./CourseChapterAccordion";

const CourseChapterContent = ({ course }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { courseChapters } = useSelector((state) => state.course);
  const accordionBoxNumberStyle = {
    // backgroundColor: "#E2E8F0",
    backgroundColor: isLightTheme ? "#E2E8F0" : "",
    padding: "2px",
    borderRadius: "99px",
    display: "flex",
    width: "24px",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };
  const arr = [0, 1, 2, 3, 4, 5];
  return (
    <Box>
      <Box>
        <Typography variant={"wpf_h5_Bold"} color='neutral.995'>
          Professional Certificate - 6 course series
        </Typography>
        <br />
        <Box sx={{ mt: "8px" }}>
          <Typography variant='wpf_p3_regular' color={"grey.500"}>
            Prepare for a new career in the high-growth field of project management, no experience or degree required.
            Get professional training designed by Google and get on the fastrack to a competitively paid job.
          </Typography>
        </Box>
      </Box>
      {/* <Box sx={{ border: "1px solid #E2E8F0", borderRadius: "10px", mt: "20px" }}>
        <CourseChapterAccordion arr={arr} isLightTheme={isLightTheme} course={course} />
      </Box> */}

      <Box
        sx={{
          mt: "20px",
          backgroundColor: isLightTheme ? "#F8FAFC" : "",
          // height: "200px",
          border: "2px solid #E2E8F0",
          borderRadius: "8px",
          maxHeight: 430,
          // overflowY: "auto",
          overflowY: "auto",
          // "&::-webkit-scrollbar": {
          //   width: "0", // Hide the scrollbar
          // },
        }}
      >
        {courseChapters &&
          courseChapters.map((item, index) => (
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                justifyContent: "center",
                // paddingRight: "20px",
                borderTop: index === 0 ? "" : "1px solid #E2E8F0",
                paddingTop: "1%",
                paddingBottom: "1%",
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={1}
                  sx={{ backgroundColor: "", alignItems: "center", justifyContent: "center", display: "flex" }}
                >
                  <Box sx={accordionBoxNumberStyle}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>{index + 1}</Typography>
                  </Box>
                  {/* <img src={course_Complete} alt='' /> */}
                </Grid>
                <Grid item xs={9} sx={{ backgroundColor: "" }}>
                  <Typography
                    // color={"grey.600"}
                    variant='wpf_p3_semiBold'
                    // sx={{ opacity: "0.6", }}
                  >
                    {item.title}
                  </Typography>
                  <br />
                  <Typography variant='wpf_p4_regular' color={"grey.700"}>
                    40 minutes
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ px: "2%", alignItems: "center", justifyContent: "end", display: "flex" }}>
                  <img src={arrowIcon} alt='' />
                </Grid>
              </Grid>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default CourseChapterContent;