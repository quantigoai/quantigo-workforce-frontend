import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import imageSample from '../../../assets/images/img.png';
import { capitalizeFirstLetter } from '../../../helper/capitalizeFirstWord';
import RectangleIcon from '../../../assets/images/courses/Rectangle 12.svg';
import LanguageChip from './LanguageChip';
import CategoryChip from './CategoryChip';
import LevelChip from './CourseCardActionLebel/LevelChip';
import { useSelector } from 'react-redux';
const MyCustomCard = {
  padding: '0 0 0 0 ',
  // width: '224px',
  // height: '224px',
  borderRadius: '10px',
  objectFit: 'cover',
};

const MyCustomCardHover = {
  padding: '0 0 0 0 ',
  // width: '224px',
  // height: '224px',
  objectFit: 'cover',
  borderRadius: '10px 10px 0px 0px',
  transform: 'scale(1.03)',
  transition: 'all 1s ease',
};

const ButtonInitial = {
  borderRadius: '2px',
  border: '1px solid #ffffff',
  color: '#ffffff',
  transition: 'all 1s ease',
};
const ButtonDivMouseOn = {
  borderRadius: '2px',
  border: '1px solid #2D58FF',
  color: '#2D58FF',
};
const ButtonHover = {
  color: '#090080',
  backgroundColor: 'rgba(255, 154, 69, 0.1)',
};
const FeaturedCard = ({ handleViewDetailsButton, course, courseDirection }) => {
  const imageUrl = course.images?.length ? `${course.images[0]}` : imageSample;
  const { isLightTheme } = useSelector((state) => state.theme);
  const [hovering, setHovering] = useState(false);
  const [buttonHovering, setButtonHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setButtonHovering(false);
  };

  const handleMouseEnterInButton = () => {
    setButtonHovering(true);
  };

  const handleMouseLeaveFromButton = () => {
    setButtonHovering(false);
  };

  const [buttonStyle, setButtonStyle] = useState(ButtonInitial);
  const screenSize = window.innerWidth;
  let width = '90%';
  let height = '90%';
  // let height = '10%'; // Default width for large screens
  if (screenSize >= 1500) {
    // Extra-large screens
    width = 250;
    height = 250;
  } else if (screenSize === 1440) {
    // Large screens
    width = 224;
    height = 224;
  } else if (screenSize >= 992) {
    width = 200;
    height = 200;
  }
  useEffect(() => {
    if (hovering && !buttonHovering) {
      setButtonStyle(ButtonDivMouseOn);
    } else if (buttonHovering) {
      setButtonStyle(ButtonHover);
    } else {
      setButtonStyle(ButtonInitial);
    }
  }, [hovering, buttonHovering]);
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: 'flex',
        width: '100%',
        padding: '8px',
      }}
    >
      <Box sx={{ cursor: 'pointer' }} onClick={() => handleViewDetailsButton(course._id, courseDirection)}>
        <img
          style={
            hovering
              ? {
                  ...MyCustomCard,
                  ...MyCustomCardHover,
                  width,
                  height,
                }
              : { ...MyCustomCard, width, height }
          }
          src={imageUrl}
          alt=""
        />
      </Box>
      <Box sx={{ width: { xxl: '428px', xl: '398px', lg: '350px' }, paddingX: '24px', paddingY: '12px' }}>
        <Typography
          variant="wpf_p4_semiBold"
          sx={{
            mb: 1,
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'start',
            backgroundColor: '#476CFF',
            borderRadius: '32px',
            width: { xxl: '55px', xl: '51px', lg: '45px' },
            padding: { xl: '3px 12px', xxl: '5px 15px', lg: '3px 10px' },
            color: '#fff',
          }}
        >
          Featured
        </Typography>{' '}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', height: '90px', mt: '15px' }}>
          <Typography
            onClick={() => handleViewDetailsButton(course._id, courseDirection)}
            variant="wpf_h6_semiBold"
            color={'grey.500'}
            sx={{ cursor: 'pointer', lineHeight: '20px' }}
          >
            {course.name?.length > 50 ? course.name?.substring(0, 60) + '.....' : course.name}
          </Typography>{' '}
          <Typography sx={{ lineHeight: '18px', mt: '6px' }} variant="wpf_h8_regular" color={'grey.550'}>
            {course.description?.length > 100 ? course.description?.substring(0, 110) + '.....' : course.description}
          </Typography>{' '}
        </Box>
        <br />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Box sx={{}}>
            <LanguageChip language={course.language} />
          </Box>
          <Box sx={{}}>
            <CategoryChip category={course.category} />
          </Box>
          <Box sx={{}}>
            <LevelChip level={course.level} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedCard;
