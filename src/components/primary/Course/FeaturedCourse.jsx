import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeaturedCard from './FeaturedCard';

const FeaturedCourse = ({ courses, handleViewDetailsButton }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const [slidesPerView, setSlidesPerView] = useState(2.1);
  const { user } = useSelector((state) => state.user);

  const handleResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1500) {
      setSlidesPerView(2.1);
    } else if (windowWidth === 1440) {
      setSlidesPerView(2.1);
    } else if (windowWidth > 1000) {
      setSlidesPerView(1.1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Box>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        speed={2500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={slidesPerView}
        spaceBetween={10}
      >
        <Box>
          <Grid container spacing={3}>
            {courses.map((item) => (
              <Box
                sx={{ backgroundColor: isLightTheme ? '#fff' : '#000' }}
                key={item._id}
              >
                <SwiperSlide
                  style={{ backgroundColor: isLightTheme ? '#fff' : '#000' }}
                  key={item._id}
                >
                  <FeaturedCard
                    courseDirection={
                      user.enrolledCourses.includes(item._id)
                        ? 'MyCourse'
                        : 'all'
                    }
                    handleViewDetailsButton={handleViewDetailsButton}
                    course={item}
                  />
                </SwiperSlide>
              </Box>
            ))}
          </Grid>
        </Box>
      </Swiper>
    </Box>
  );
};

export default FeaturedCourse;
