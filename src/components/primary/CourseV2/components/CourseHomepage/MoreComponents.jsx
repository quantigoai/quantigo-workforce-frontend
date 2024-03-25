/*
 * File           : MoreComponents.jsx
 * Project        : wmpfrontv2
 * Created Date   : Mo 25 Mar 2024 12:54:05
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

import { Grid, Tooltip, Typography } from '@mui/material';
import React from 'react';

const MoreComponents = ({ moreArray }) => {
  return (
    <>
      {moreArray?.length === 1 ? (
        <>
          {moreArray.map((prerequisiteCourse) => (
            <Grid key={prerequisiteCourse?._id} item gap={1}>
              <Typography variant='wpf_p3_medium_2' color={'grey.600'}>
                {' '}
                {prerequisiteCourse?.name}
              </Typography>
            </Grid>
          ))}
        </>
      ) : moreArray?.length === 0 ? (
        <>
          <Typography variant='wpf_p3_medium_2' color={'grey.600'}>
            {' '}
            None
          </Typography>
        </>
      ) : (
        <>
          <Typography variant='wpf_p3_medium_2' color={'grey.600'}>
            {' '}
            {moreArray && moreArray[0]?.name},
          </Typography>
          <Tooltip
            title={moreArray?.map((prerequisiteCourse, index) => (
              <Grid key={prerequisiteCourse._id} item gap={1}>
                {index != 0 && <Typography> {prerequisiteCourse.name}</Typography>}
              </Grid>
            ))}
            arrow
          >
            <Typography variant='wpf_p3_medium_2' color={'grey.600'}>
              {' '}
              + {moreArray?.length - 1} more
            </Typography>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default MoreComponents;
