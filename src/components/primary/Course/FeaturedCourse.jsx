import { Box, Grid } from '@mui/material';
import React from 'react';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomCard from './CustomCard';
import FeaturedCard from './FeaturedCard';

const FeaturedCourse = ({ courses, handleViewDetailsButton }) => {
  return (
    <Box>
      <Swiper
        modules={[Navigation, A11y]}
        // loopedSlides={3}
        // centeredSlides={true}
        slidesPerView={2.1}
        spaceBetween={10}
        // initialSlide={defaultIndex(user)}
      >
        {/* <SLiderPrevNext /> */}

        <Box sx={{ padding: '1%' }}>
          <Grid container spacing={3}>
            {courses.map((item) => (
              <Box key={item._id}>
                <SwiperSlide key={item._id}>
                  <FeaturedCard courseDirection="all" handleViewDetailsButton={handleViewDetailsButton} course={item} />
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
