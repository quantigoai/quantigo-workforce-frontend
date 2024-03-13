import { Box, Grid } from "@mui/material";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import img from "../../../../assets/images/courses/image 35.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviewForCourseId } from "../../../../features/slice/courseSlice";

const ReviewSwipper = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [allReviews, setAllReviews] = useState([]);
  console.log("🚀 ~ ReviewSwipper ~ allReviews:", allReviews);

  const { isLightTheme } = useSelector((state) => state.theme);
  const { course } = useSelector((state) => state.course);

  const handleSlideClick = (index) => {
    setSelectedSlide(index);
  };

  useEffect(() => {
    dispatch(getAllReviewForCourseId(course._id)).then((action) => {
      setAllReviews(action.payload.data.reviews);
    });
  }, []);

  const review = {
    img: img,
    id: 1,
    name: "Vasiliy Ovchinnikov",
    description:
      "We are very satisfied with working with Quantigo AI.Quality of service has met our expectations and at some point even exceeded them. Also, we have to mention great labeling quality, and the ability to follow tight deadlines.",
  };

  return (
    <Box
      sx={{
        cursor: "pointer",
        // height: { xxl: "370px", xl: "340px", lg: "380px" },
        backgroundColor: isLightTheme ? "#fff" : "#000",
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
        <Box sx={{ padding: "1%",}}>
          <Grid sx={{ }} container spacing={3}>
            {allReviews.map((item, index) => (
              <Grid sx={{ }} key={item} item xs={12} sm={6} md={3} gap={1}>
                <SwiperSlide style={{ backgroundColor: isLightTheme ? "#fff" : "#000" }} key={item._id}>
                  <Box
                    onClick={() => handleSlideClick(index)}
                    sx={{
                      backgroundColor:
                        index === selectedSlide
                          ? isLightTheme
                            ? "#fff"
                            : "#081429"
                          : isLightTheme
                          ? "#F1F5F9"
                          : "#091E42",
                      border: index === selectedSlide ? "2px solid  #2E58FF" : "2px solid #F1F5F9 ",
                      borderRadius: "8px",
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
