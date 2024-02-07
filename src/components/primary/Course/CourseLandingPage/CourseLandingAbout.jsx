import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
const CourseLandingAbout = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const boxStyle = {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-around',
    backgroundColor: isLightTheme ? '#F8FAFC' : '#101828',
    padding: '20px',
    borderRadius: '8px',
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Box>
          <Typography variant="wpf_h5_Bold" color="neutral.995">
            What you&apos;ll learn
          </Typography>
        </Box>
        <Box sx={{ mt: '12px' }}>
          <Typography variant={'wpf_p3_regular'} color={'grey.#344054'}>
            Lorem ipsum dolor sit amet consectetur. Ut elementum phasellus in consectetur lobortis. Ultricies quis porta
            neque morbi. Cras massa enim bibendum justo in. In pretium sollicitudin nunc non vitae nulla. Urna quis
            gravida odio vitae massa duis mauris ut. Habitasse tellus augue sed imperdiet morbi. Elit maecenas massa.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridGap: '12px', mt: '24px' }}>
        <Box sx={boxStyle}>
          <i style={{ color: '#667085' }} className="ri-check-line"></i>
          <Typography sx={{ marginLeft: '8px' }} variant="wpf_p3_regular" color={'grey.500'}>
            Gain an immersive understanding of the practices and skills needed to succeed in an entry-level project
            management role
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <i style={{ color: '#667085' }} className="ri-check-line"></i>
          <Typography sx={{ marginLeft: '8px' }} variant="wpf_p3_regular" color={'grey.500'}>
            Learn how to create effective project documentation and artifacts throughout the various phases of a project
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <i style={{ color: '#667085' }} className="ri-check-line"></i>
          <Typography sx={{ marginLeft: '8px' }} variant="wpf_p3_regular" color={'grey.500'}>
            Gain an immersive understanding of the practices and skills needed to succeed in an entry-level project
            management role
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseLandingAbout;
