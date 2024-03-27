/*
 * File           : FeaturedCourseSection.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 12:20:24
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Thu Mar 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import { default as React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeaturedCard from './CourseCard/FeatureCard';
import { Box } from '@mui/material';

const FeaturedCourseSection = () => {
  const { isLightTheme } = useSelector((state) => state.theme);

  const {
    initialCourses: { featureCourseList },
  } = useSelector((state) => state.course);

  const [slidesPerView, setSlidesPerView] = useState(2.1);

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
    <Box sx={{ height: '100%' }}>
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
        {featureCourseList?.map((item, index) => (
          <SwiperSlide
            key={item._id}
            style={{
              backgroundColor: isLightTheme ? '#fff' : '#000',
              width: '100%',
              height: '60%',
              // backgroundColor: 'yellow',
            }}
          >
            <FeaturedCard course={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FeaturedCourseSection;
