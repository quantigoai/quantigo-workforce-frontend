import { Box, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProcessCard2, { defaultIndex } from "./ProcessCard2";
import processList from "./ProcessLIst";
import SLiderPrevNext from "./SLiderPrevNext";

const CongratulationStepProcess = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
        }}
      >
        <Paper
          elevation={0}
          style={{
            backgroundColor: "neutral.N000",
            padding: ".5%",
            borderRadius: "8px",
          }}
        >
          <Box sx={{ padding: "1%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Grid container>
                <Typography variant="wpf_h4_semiBold">Quantigo Workforce Process</Typography>
              </Grid>
              <Grid container>
                <Typography variant="wpf_p3_regular" sx={{ color: "neutral.N300" }}>
                  These are process you have to follow step by step to earn money
                </Typography>
              </Grid>
            </Box>
          </Box>
          <Swiper
            modules={[Navigation, A11y]}
            loopedSlides={3}
            centeredSlides={true}
            slidesPerView={1.8}
            spaceBetween={60}
            initialSlide={defaultIndex(user)}
            // grabCursor={true}
            // loopedSlides={100}
            // loop={true}
            // navigation
            // centeredSlides={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SLiderPrevNext />

            <Box sx={{ padding: "1%" }}>
              <Grid container spacing={3}>
                {processList.map((item) => (
                  <Grid key={item._id} item xs={12} sm={6} md={3} gap={1}>
                    <SwiperSlide>
                      <ProcessCard2 item={item} />
                    </SwiperSlide>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Swiper>
        </Paper>
      </Box>
    </>
  );
};

export default CongratulationStepProcess;
