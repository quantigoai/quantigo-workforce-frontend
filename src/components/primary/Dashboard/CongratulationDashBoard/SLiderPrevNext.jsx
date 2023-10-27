import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button } from "@mui/material";
import React from "react";
import { useSwiper } from "swiper/react";
const SLiderPrevNext = () => {
  const swiper = useSwiper();
  return (
    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "end", mt: 2 }}>
      <Button
        sx={{
          minWidth: "25px",
          "&:focus": {
            color: "white",
            backgroundColor: "#2E58FF",
          },
        }}
        onClick={() => swiper.slidePrev()}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        sx={{
          minWidth: "25px",
          "&:focus": {
            color: "white",
            backgroundColor: "#2E58FF",
          },
        }}
        onClick={() => swiper.slideNext()}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default SLiderPrevNext;
