import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Box, Button} from "@mui/material";
import React from "react";
import {useSwiper} from "swiper/react";

const SLiderPrevNext = ({ isStep }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: isStep ? "neutral.N100" : "",
        justifyContent: "end",
      }}
    >
      <Button
        sx={{
          minWidth: "25px",
          backgroundColor: "transparent",
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
