import { Box, Typography } from '@mui/material';
import React from 'react';
import CommonHeader from '../../../../shared/CustomComponenet/CommonHeader/CommonHeader';

const QuizHeading = ({ course, filterChapter }) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '99%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #E6ECF5',
      }}
    >
      <Box
        sx={{
          padding: '10px 10px',
          height: '70px',
          width: { xxl: '100%', xl: '100%', lg: '100%' },
        }}
      >
        <CommonHeader title={filterChapter[0]?.quiz.name} customButton="Create User" />

        <Typography sx={{ opacity: '0.7', height: '13px' }} variant="wpf_p3_regular" color={'neutral.750'}>
          Course Name: <span style={{ fontWeight: '600' }}>{course?.name} </span>,
        </Typography>
        <Typography sx={{ opacity: '0.7', height: '13px' }} variant="wpf_p3_regular" color={'neutral.750'}>
          Chapter Name: <span style={{ fontWeight: '600' }}> {filterChapter[0]?.title}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default QuizHeading;
