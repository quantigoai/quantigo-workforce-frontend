import { Box, Skeleton } from '@mui/material';
import React from 'react';

const CourseIndexCardSkeleton = () => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, px: '25px' }}>
        {[0, 1, 2, 3].map((id) => (
          <Box
            key={id}
            sx={{
              width: { xxl: '300px', xl: '278px', lg: '150px' },
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{ height: { xxl: 180, xl: 160, md: 167, lg: 160 }, width: { xxl: 368, xl: 278, md: 167, lg: 200 } }}
            >
              <Skeleton variant="rounded" width="100%" height={160} />
            </Box>
            <Box sx={{ py: 1, width: { xxl: 368, xl: 278, md: 167, lg: 200 } }}>
              <Skeleton variant="rounded" width="100%" height={20} />
            </Box>
            <Box sx={{ py: 1, width: { xxl: 368, xl: 278, md: 167, lg: 200 } }}>
              <Skeleton variant="rounded" width="100%" height={20} />
            </Box>
            <Box sx={{ py: 1, width: { xxl: 368, xl: 278, md: 167, lg: 200 } }}>
              <Skeleton variant="rounded" width="100%" height={20} />
            </Box>
            <Box sx={{ pt: 2, width: { xxl: 368, xl: 278, md: 167, lg: 200 } }}>
              <Skeleton variant="rounded" width="100%" height={20} />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CourseIndexCardSkeleton;
