import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ProcessCard from "./ProcessCard";
import processList from "./ProcessLIst";
import ProcessCard2 from "./ProcessCard2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SLiderPrevNext from "./SLiderPrevNext";
const CongratulationStepProcess = () => {
  const paperstyle = {
    backgroundColor: "neutral.N000",
    padding: ".5%",
    // width: "100%",
    // height: "100%",
    borderRadius: "8px",
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          // height: "100%",
          borderRadius: "8px",
          // backgroundColor: "neutral.N000",
        }}
      >
        <Paper
          elevation={0}
          style={{
            backgroundColor: "neutral.N000",
            padding: ".5%",
            // width: "100%",
            // height: "100%",
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
            slidesPerView={1.4}
            spaceBetween={60}
            grabCursor={true}
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
                    {/* <ProcessCard2 item={item} /> */}
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
