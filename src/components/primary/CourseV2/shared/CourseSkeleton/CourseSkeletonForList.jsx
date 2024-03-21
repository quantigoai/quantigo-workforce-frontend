import { Box, Skeleton } from "@mui/material";
import React from "react";

const CourseSkeletonForList = ({ SkeletonCount }) => {
  const skeletonArray = Array.from({ length: SkeletonCount }, (_, index) => index);

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box sx={{}}>
          {skeletonArray.map((_, index) => (
            <Box key={index}>
              <Skeleton />
              <Skeleton animation='wave' />
              <Skeleton animation={false} />
              <Skeleton />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CourseSkeletonForList;
