import { Box, Skeleton } from '@mui/material';
import React from 'react';
import CourseIndexCardSkeleton from './CourseIndexCardSkeleton';
import CourseSkeletonHeader from './CourseSkeletonHeader';
import CourseCardSkeleton from './CourseCardSkeleton';

const CourseIndexPageSkeleton = () => {
  return (
    <Box>
      <CourseSkeletonHeader />
      <Box sx={{ display: 'flex' }}>
        {[0, 1].map((id) => (
          <Box
            key={id}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              px: '25px',
              mt: '20px',
              padding: '8px',
              ml: 2,
              // width: { xxl: '535px', xl: '420px', lg: '350px' },
              height: { xxl: '320px', xl: '280px', lg: '150px' },
              borderRadius: '10px',
            }}
          >
            <Box>
              <Skeleton variant="rounded" width="300px" height={160} />
            </Box>
            <Box>
              <Box sx={{ ml: 2 }}>
                <Skeleton sx={{ py: 1 }} variant="rounded" width="200px" height={20} />
              </Box>
              <Box sx={{ mt: 2, ml: 2 }}>
                <Skeleton sx={{ py: 1 }} variant="rounded" width="200px" height={20} />
              </Box>
              <Box sx={{ mt: 2, ml: 2 }}>
                <Skeleton sx={{ py: 1 }} variant="rounded" width="100%" height={20} />
              </Box>
              <Box sx={{ mt: 4, display: 'flex', flexDirection: 'row' }}>
                <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="20%" height={20} />
                <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="20%" height={20} />
                <Skeleton sx={{ py: 1, ml: 1 }} variant="rounded" width="20%" height={20} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ px: '25px' }}>
        <Skeleton sx={{ ml: 1, mb: 5 }} variant="rounded" width={'25%'} height={30} />
      </Box>
      <Box
        sx={{
          px: '25px',
          display: 'grid',
          gridTemplateColumns: {
            xxl: 'repeat(4,1fr)',
            xl: 'repeat(4,1fr)',
            lg: 'repeat(3,1fr)',
          },
          gridGap: '8px',
          mt: '16px',
          pr: '15px',
          gap: { xxl: '20px', xl: '15px', lg: '12px' },
        }}
      >
        {[0, 1, 2, 3].map((course) => (
          <Box
            sx={{
              // backgroundColor: isLightTheme ? '#fff' : '#000',
              width: { xxl: '368px', xl: '278px', lg: '250px' },
              borderRadius: '10px',
            }}
            key={course.createdAt}
          >
            <CourseCardSkeleton />
          </Box>
        ))}
      </Box>
      {/* <CourseIndexCardSkeleton /> */}
    </Box>
  );
};

export default CourseIndexPageSkeleton;
