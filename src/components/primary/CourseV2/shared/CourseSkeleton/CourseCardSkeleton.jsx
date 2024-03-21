import { Box, Skeleton } from "@mui/material";
import React from "react";

const CourseCardSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          width: { xxl: "368px", xl: "278px", lg: "250px" },
          borderRadius: "10px",
        }}
      >
        <Box sx={{ height: { xxl: 180, xl: 160, md: 167, lg: 160 }, width: { xxl: 368, xl: 278, md: 167, lg: 250 } }}>
          <Skeleton variant='rounded' width={368} height={160} />
        </Box>
        <Box sx={{ py: 1 }}>
          <Skeleton variant='rounded' width={368} height={20} />
        </Box>
        <Box sx={{ py: 1 }}>
          <Skeleton variant='rounded' width={368} height={20} />
        </Box>
        <Box sx={{ py: 1 }}>
          <Skeleton variant='rounded' width={368} height={20} />
        </Box>
        <Box sx={{ pt: 5 }}>
          <Skeleton variant='rounded' width={100} height={20} />
        </Box>
      </Box>
    </>
  );
};

export default CourseCardSkeleton;
