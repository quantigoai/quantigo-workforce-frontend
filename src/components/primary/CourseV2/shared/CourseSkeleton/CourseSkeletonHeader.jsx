import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';

const CourseSkeletonHeader = () => {
  return (
    <Box
      sx={{
        px: { xxl: '25px', xl: '14px', lg: '25px' },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '9%',
        width: '100%',
      }}
    >
      <Grid container sx={{ display: 'flex', py: 2 }}>
        {/* <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width={'25%'} height={30} /> */}
        <Skeleton sx={{ py: 1 }} variant="rounded" width="60%" height={40} />
      </Grid>
      <Skeleton sx={{ py: 1, ml: 0 }} variant="rounded" width="10%" height={40} />
      <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="10%" height={40} />
      <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="10%" height={40} />
      <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="5%" height={5} />
    </Box>
  );
};

export default CourseSkeletonHeader;
