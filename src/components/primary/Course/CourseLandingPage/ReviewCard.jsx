import { Box, Typography } from '@mui/material';
import React from 'react';
import quote from '../../../../assets/images/courses/bxs_quote-right.png';

const ReviewCard = ({ item, review }) => {
  const swiperBoxStyle = {
    borderRadius: '8px',
    paddingY: '32px',
    paddingX: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '24px',
  };
  return (
    <Box>
      <Box sx={swiperBoxStyle}>
        <img style={{ borderRadius: '99px' }} src={review.img} alt="" />
        <Box sx={{ textAlign: 'justify' }}>
          <Typography variant="wpf_p3_medium" color={'neutral.997'}>
            {review.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '32px' }}>
            <Box>
              <Typography variant="wpf_p2_semiBold" color="neutral.750">
                {review.name}
              </Typography>
              <br />
              <Typography variant="wpf_p4_regular" color={'neutral.750'}>
                Corporate Development Center
              </Typography>
            </Box>
            <img src={quote} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCard;
