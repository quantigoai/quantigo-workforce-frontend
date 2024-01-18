import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import image1 from "../../../../assets/images/img.png";
import image2 from "../../../../assets/images/image-annotation.jpg";
import image3 from "../../../../assets/images/logoBlue.png";
import image4 from "../../../../assets/images/loginWMP.png";

// const images = [image1, image2, image3, image4];
const ImageSwiperIndex = ({ images, level }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      {/* <Box sx={{ height: "518px" }}> */}
      <Box sx={{ height: level === "Standard Photo" ? "400px" : "518px" }}>
        
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
           
          }}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          // className="mySwiper"
        >
          {images &&
            images.map((item) => (
              <SwiperSlide style={{}} key={item}>
                <img src={item} style={{ borderRadius: "8px" ,width:"100%",height:"100%" }} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </>
  );
};

export default ImageSwiperIndex;
