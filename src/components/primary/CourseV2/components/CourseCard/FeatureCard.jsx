/*
 * File           : FeatureCard.jsx
 * Project        : wmpfrontv2
 * Created Date   : We 20 Mar 2024 11:44:04
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed Mar 20 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import { SwiperSlide } from "swiper/react";

import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import imageSample from "../../../../../assets/images/img.png";
import CategoryChip from "../../../Course/CategoryChip";

import LevelChip from "../../../Course/CourseCardActionLebel/LevelChip";
import LanguageChip from "../../../Course/LanguageChip";
// import CategoryChip from "./CategoryChip";
// import LevelChip from "./CourseCardActionLebel/LevelChip";
// import LanguageChip from "./LanguageChip";
const MyCustomCard = {
  padding: "0 0 0 0 ",
  // width: '224px',
  // height: '224px',
  borderRadius: "10px",
  objectFit: "cover",
};

const MyCustomCardHover = {
  padding: "0 0 0 0 ",
  // width: '224px',
  // height: '224px',
  objectFit: "cover",
  borderRadius: "10px",
  transform: "scale(1.03)",
  transition: "all 1s ease",
};

const ButtonInitial = {
  borderRadius: "2px",
  border: "1px solid #ffffff",
  color: "#ffffff",
  transition: "all 1s ease",
};

const FeaturedCard = ({ handleViewDetailsButton, course, courseDirection }) => {
  // console.log("🚀 ~ FeaturedCard ~ course:", course)
  const imageUrl = course.images?.length ? `${course.images[0]}` : imageSample;
  const { isLightTheme } = useSelector((state) => state.theme);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const screenSize = window.innerWidth;
  let width = "90%";
  let height = "90%";
  if (screenSize >= 1500) {
    width = 250;
    height = 250;
  } else if (screenSize === 1440) {
    width = 224;
    height = 224;
  } else if (screenSize >= 992) {
    width = 200;
    height = 200;
  }
  // useEffect(() => {
  //   if (hovering && !buttonHovering) {
  //     setButtonStyle(ButtonDivMouseOn);
  //   } else if (buttonHovering) {
  //     setButtonStyle(ButtonHover);
  //   } else {
  //     setButtonStyle(ButtonInitial);
  //   }
  // }, [hovering, buttonHovering]);

  return (
    <Grid item sx={{ backgroundColor: isLightTheme ? "#fff" : "#000" }}>
      <SwiperSlide style={{ backgroundColor: isLightTheme ? "#fff" : "#000" }}>
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            display: "flex",
            width: "100%",
            padding: "8px",
          }}
        >
          <Box
            sx={{ cursor: "pointer", overflow: "hidden" }}
            // onClick={() => handleViewDetailsButton(course._id, courseDirection)}
          >
            <img
              style={
                hovering
                  ? {
                      ...MyCustomCard,
                      ...MyCustomCardHover,
                      width,
                      height,
                    }
                  : { ...MyCustomCard, width, height }
              }
              src={imageUrl}
              alt=""
            />
          </Box>
          <Box sx={{ width: { xxl: "428px", xl: "398px", lg: "350px" }, paddingX: "24px", paddingY: "12px" }}>
            <Typography
              variant="wpf_p4_semiBold"
              sx={{
                mb: 1,
                textAlign: "left",
                display: "flex",
                justifyContent: "start",
                backgroundColor: "#476CFF",
                borderRadius: "32px",
                width: { xxl: "55px", xl: "51px", lg: "45px" },
                padding: { xl: "3px 12px", xxl: "5px 15px", lg: "3px 10px" },
                color: "#fff",
              }}
            >
              Featured
            </Typography>{" "}
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", height: "90px", mt: "15px" }}>
              <Typography
                onClick={() => handleViewDetailsButton(course._id, courseDirection)}
                variant="wpf_h6_semiBold"
                color={"grey.500"}
                sx={{ cursor: "pointer", lineHeight: "20px" }}
              >
                {/* Test */}
                {course.name?.length > 50 ? course.name?.substring(0, 60) + "....." : course.name}
              </Typography>{" "}
              <Typography sx={{ lineHeight: "18px", mt: "6px" }} variant="wpf_h8_regular" color={"grey.550"}>
                {course.description?.length > 100
                  ? course.description?.substring(0, 110) + "....."
                  : course.description}
                {/* test desc */}
              </Typography>{" "}
            </Box>
            <br />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <Box sx={{}}>
                <LanguageChip language={course.language} />
              </Box>
              <Box sx={{}}>
                <CategoryChip category={course.category} />
              </Box>
              <Box sx={{}}>
                <LevelChip level={course.level} />
              </Box>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
    </Grid>
  );
};

export default FeaturedCard;
