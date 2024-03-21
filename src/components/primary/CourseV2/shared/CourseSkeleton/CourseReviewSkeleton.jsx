import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

const CourseReviewSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "8px",
          paddingY: "32px",
          paddingX: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          gap: "24px",
          height: "262px",
          width: "500px",
          //   backgroundColor: "black",
        }}
      >
        <Grid container sx={{ backgroundColor: "", height: "100%" }}>
          <Grid item xs={12} sm={8} md={3} lg={2} sx={{}}>
            <Skeleton variant='circular' width={64} height={64} />
          </Grid>

          <Grid item xs={12} sm={4} md={9} lg={10} sx={{ backgroundColor: "", height: "100%" }}>
            <Box sx={{ height: "100%" }}>
              <Box sx={{ height: "15%", backgroundColor: "" }}>
                <Grid container sx={{ paddingBottom: "3%" }}>
                  <Skeleton variant='rounded' width={210} height={20} />
                </Grid>
              </Box>
              <Box sx={{ height: "50%", backgroundColor: "" }}>
                <Grid container>
                  <Typography variant='wpf_p3_medium' color={"neutral.997"}>
                    <Skeleton variant='rectangular' width={370} height={90} />
                  </Typography>
                </Grid>
              </Box>

              <Box sx={{ height: "25%", backgroundColor: "" }}>
                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "32px" }}
                >
                  <Box>
                    <Skeleton variant='rounded' width={150} height={20} />

                    <br />
                    <Skeleton variant='rounded' width={210} height={20} />
                  </Box>
                  <Box></Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseReviewSkeleton;
