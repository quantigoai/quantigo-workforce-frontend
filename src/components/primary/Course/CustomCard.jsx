/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/CustomCard.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, February 16th 2023, 11:46:10 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RectangleIcon from '../../../assets/images/courses/Rectangle 12.svg';
import ArrowIcon from '../../../assets/images/courses/Vector.svg';
import imageSample from '../../../assets/images/img.png';
import { capitalizeFirstLetter } from '../../../helper/capitalizeFirstWord';
const MyCustomCard = {
  padding: '0 0 0 0 ',
  objectFit: 'cover',
  borderRadius: '10px 10px 0px 0px',
  // border: '1px solid green',
};

const MyCustomCardHover = {
  padding: '0 0 0 0 ',
  width: '278px',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '10px 10px 0px 0px !important',
  transform: 'scale(1.04) ',
  transition: 'all 1.2s ease',
  // border: '1px solid red',
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

const CustomCard = ({
  courseDirection,
  course,
  handleViewDetailsButton,
  level,
  isActiveEnrolled,
  isActiveArchived,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.course);

  const imageUrl = course.images?.length ? `${course.images[0]}` : imageSample;

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
    width = 368;
    height = 180;
  } else if (screenSize === 1440) {
    // Large screens
    width = 278;
    height = 160;
  } else if (screenSize >= 992) {
    width = 250;
    height = 160;
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
    // TODO Fix grid layout
    <>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          borderRadius: '10px 10px 0px 0px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{ cursor: 'pointer', position: 'relative' }}
          onClick={() => handleViewDetailsButton(course._id, courseDirection)}
        >
          <Box
            sx={{
              position: 'absolute',
              left: { xxl: 280, xl: 200, lg: 175 },
              top: 10,
              zIndex: 20,
            }}
          >
            {(level && course.isFeaturedCourse) ||
            (isActiveEnrolled && course.isFeaturedCourse) ||
            (isActiveArchived && course.isFeaturedCourse) ? (
              <Typography
                sx={{
                  mb: 1,
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'start',
                  backgroundColor: '#476CFF',
                  borderRadius: '32px',
                  fontFamily: 'Inter',
                  fontSize: { xxl: '12px', xl: '10px', lg: '10px' },
                  width: { xxl: '75px', xl: '65px', lg: '65px' },
                  padding: { xl: '3px 12px', xxl: '5px 15px', lg: '3px 10px' },
                  color: '#fff',
                }}
              >
                Featured
              </Typography>
            ) : (
              <></>
            )}
          </Box>
          <Box sx={{ overflow: 'hidden' }}>
            <img
              style={
                hovering
                  ? {
                      ...MyCustomCard,
                      ...MyCustomCardHover,
                      width,
                      height,
                      // overflow: 'hidden',
                    }
                  : {
                      ...MyCustomCard,
                      width,
                      height,
                    }
              }
              src={imageUrl}
              alt=""
            />
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: '16px',
            paddingY: '12px',
          }}
        >
          <Box>
            <Typography variant="wpf_p4_semiBold" color={'primary.P600'} sx={{ mb: 1 }}>
              {capitalizeFirstLetter(course.category)} <img src={RectangleIcon} /> {capitalizeFirstLetter(course.level)}
            </Typography>
          </Box>
          <Box sx={{ height: '110px' }}>
            <Box>
              <Typography
                onClick={() => handleViewDetailsButton(course._id, courseDirection)}
                variant="wpf_h6_semiBold"
                color={'grey.500'}
                sx={{ cursor: 'pointer', lineHeight: '20px' }}
              >
                {course.name?.length > 50 ? course.name?.substring(0, 50) + '.....' : course.name}
              </Typography>
            </Box>
            <Box></Box>{' '}
            <Typography sx={{ lineHeight: '18px' }} variant="wpf_h8_regular" color={'grey.550'}>
              {course.description?.length > 100 ? course.description?.substring(0, 70) + '.....' : course.description}
            </Typography>
          </Box>
          <Box onClick={() => handleViewDetailsButton(course._id, courseDirection)} sx={{ cursor: 'pointer' }}>
            <Typography variant="wpf_p4_medium">View Details</Typography>

            <img style={{ marginLeft: '15px' }} src={ArrowIcon} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomCard;
