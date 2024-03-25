/*
 * File           : ChapterProgressbar.jsx
 * Project        : wmpfrontv2
 * Created Date   : Mo 25 Mar 2024 12:38:23
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Mon Mar 25 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import course_Complete from '../../../../../assets/images/courses/course_Complete.svg';
const ChapterProgressbar = ({ item, score, passMarkThreshold }) => {
  return (
    <>
      {/* <img src={course_Complete} alt='' /> */}

      <Box sx={{ position: 'relative', alignItems: 'center', display: 'flex' }}>
        {score < passMarkThreshold ? (
          <>
            <CircularProgress
              variant='determinate'
              sx={{
                color: (theme) => (theme.palette.mode === 'light' ? '#D2DFFA' : '#D2DFFA'),
                // backgroundColor: "red",
              }}
              size='20px'
              thickness={7}
              // {...props}
              value={100}
            />
            <CircularProgress
              variant='determinate'
              disableShrink
              sx={{
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                color: (theme) => (theme.palette.mode === 'light' ? '#2D58FF' : '#2D58FF'),
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
              }}
              size='20px'
              value={score}
              thickness={7}
            />
          </>
        ) : (
          <>
            <img src={course_Complete} />
          </>
        )}
      </Box>
    </>
  );
};

export default ChapterProgressbar;
