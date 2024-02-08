import { Box, Grid } from '@mui/material';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import img from '../../../../assets/images/courses/image 35.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ReviewSwipper = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6];
  const [selectedSlide, setSelectedSlide] = useState(0);
  const { isLightTheme } = useSelector((state) => state.theme);
  const handleSlideClick = (index) => {
    setSelectedSlide(index);
  };

  const review = {
    img: img,
    id: 1,
    name: 'Vasiliy Ovchinnikov',
    description:
      'We are very satisfied with working with Quantigo AI.Quality of service has met our expectations and at some point even exceeded them. Also, we have to mention great labeling quality, and the ability to follow tight deadlines.',
  };

  return (
    <Box
      sx={{
        cursor: 'pointer',
        height: { xxl: '320px', xl: '340', lg: '380px' },
        backgroundColor: isLightTheme ? '#fff' : '#000',
      }}
    >
      <Swiper
        style={{}}
        modules={[Navigation, A11y, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={2.2}
        spaceBetween={15}
      >
        <Box sx={{ padding: '1%', backgroundColor: 'red' }}>
          <Grid sx={{ backgroundColor: 'red' }} container spacing={3}>
            {arr.map((item, index) => (
              <Grid sx={{ backgroundColor: 'red' }} key={item} item xs={12} sm={6} md={3} gap={1}>
                <SwiperSlide style={{ backgroundColor: isLightTheme ? '#fff' : '#000' }} key={item._id}>
                  <Box
                    onClick={() => handleSlideClick(index)}
                    sx={{
                      backgroundColor:
                        index === selectedSlide
                          ? isLightTheme
                            ? '#fff'
                            : '#081429'
                          : isLightTheme
                          ? '#F1F5F9'
                          : '#091E42',
                      border: index === selectedSlide ? '2px solid  #2E58FF' : '2px solid #F1F5F9 ',
                      borderRadius: '8px',
                    }}
                  >
                    <ReviewCard item={item} review={review} />
                  </Box>
                </SwiperSlide>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Swiper>
    </Box>
  );
};

export default ReviewSwipper;
