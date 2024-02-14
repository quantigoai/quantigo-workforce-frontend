import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import RelatedCourseCard from "./RelatedCourseCard";
import { useSelector } from "react-redux";

const RelatedCourseIndex = () => {
  const relatedCourses = [1, 5, 6, 3];
  const { courses, isLoading } = useSelector((state) => state.course);

  return (
    <>
      <Box>
        <Box>
          <Typography variant='wpf_h5_Bold' color={"grey.600"}>
            Related Course
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "20px",
            width: "100%",
            height: "90%",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "8px",
            // border: "0px 0px 1px 0px",
            // backgroundColor: isLightTheme ? "#F2F6FC" : "#212121",
            boxShadow: "0px 1px 3px 0px #09008014",
          }}
        >
          <Grid
            container
            // spacing={2}
            sx={{
              height: "100%",
              width: "100%",
            }}
          >
            {courses?.map((course) => (
              <Grid item xs={12} sm={6} md={3} sx={{ py: 2, paddingRight: "2%" }}>
                <RelatedCourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RelatedCourseIndex;
