import { Box, Skeleton } from "@mui/material";
import React from "react";

const CourseCardSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          width: { xxl: "300px", xl: "278px", lg: "250px" },
          borderRadius: "10px",
        }}
      >
        <Box sx={{ height: { xxl: 180, xl: 160, md: 167, lg: 160 }, width: { xxl: 368, xl: 278, md: 167, lg: 250 } }}>
          <Skeleton variant='rounded' width={200} height={160} />
        </Box>
        <Box sx={{ py: 1 }}>
          <Skeleton variant='rounded' width={200} height={20} />
        </Box>
        <Box sx={{ py: 1 }}>
          <Skeleton variant='rounded' width={200} height={20} />
        </Box>
        <Box sx={{ py: 1 }}>
          <Skeleton variant='rounded' width={200} height={20} />
        </Box>
        <Box sx={{ pt: 2 }}>
          <Skeleton variant='rounded' width={200} height={20} />
        </Box>
      </Box>
    </>
  );
};

export default CourseCardSkeleton;
