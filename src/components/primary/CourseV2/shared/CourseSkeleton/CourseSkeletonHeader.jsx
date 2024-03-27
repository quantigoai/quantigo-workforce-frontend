import { Box, Skeleton } from '@mui/material';
import React from 'react';

const CourseSkeletonHeader = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          height: '10%',
          alignItems: 'center',
          padding: '5px 10px',
          mt: 2,
        }}
      >
        <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width={'25%'} height={30} />

        <Skeleton sx={{ py: 1, ml: 20 }} variant="rounded" width="10%" height={40} />
        <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="10%" height={40} />
        <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="10%" height={40} />
        <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="20%" height={40} />
        <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="5%" height={5} />
      </Box>
    </Box>
  );
};

export default CourseSkeletonHeader;
