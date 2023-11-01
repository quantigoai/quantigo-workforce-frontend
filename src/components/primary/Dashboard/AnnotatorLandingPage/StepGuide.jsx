/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Dashboard/AnnotatorLandingPage/StepGuide.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 1:56:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Grid } from "@mui/material";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SLiderPrevNext from "../CongratulationDashBoard/SLiderPrevNext";
import MiniStepCard from "./MiniStepCard";

const StepGuide = ({ isStep }) => {
  return (
    <Box
      sx={{
        // height: "213px",
        height: "100%",
        width: "100%",
        backgroundColor: "neutral.N100",
        borderRadius: "8px",
      }}
    >
      <Swiper
        modules={[Navigation, A11y]}
        loopedSlides={1}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={60}
        initialSlide={0}
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
        <Box
          sx={{
            my: 0,
            display: "flex",
            justifyContent: "end",
          }}
        >
          <SLiderPrevNext isStep={isStep} />
        </Box>

        <Box>
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <Grid key={item} item xs={12} sm={6} md={3} gap={1}>
                <SwiperSlide
                  key = {item}
                  style={{
                    height: "100%",
                  }}
                >
                  <MiniStepCard index={index} />
                </SwiperSlide>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Swiper>
    </Box>
  );
};

export default StepGuide;
