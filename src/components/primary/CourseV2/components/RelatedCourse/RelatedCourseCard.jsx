/*
 * File           : RelatedCourseCard.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 01:35:40
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RectangleIcon from "../../../../../assets/images/courses/Rectangle 12.svg";
import ArrowIcon from "../../../../../assets/images/courses/Vector.svg";

import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
const MyCustomCard = {
  padding: "0 0 0 0 ",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px 10px 0px 0px",
};

const MyCustomCardHover = {
  padding: "0 0 0 0 ",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px 10px 0px 0px",
  transform: "scale(1.05)",
  transition: "all 1s ease",
};

const ButtonInitial = {
  borderRadius: "2px",
  border: "1px solid #ffffff",
  color: "#ffffff",
  transition: "all 1s ease",
};
const ButtonDivMouseOn = {
  borderRadius: "2px",
  border: "1px solid #2D58FF",
  color: "#2D58FF",
};
const ButtonHover = {
  color: "#090080",
  backgroundColor: "rgba(255, 154, 69, 0.1)",
};

const RelatedCourseCard = ({ course }) => {
  const imageUrl = course.images?.length ? `${course.images[0]}` : imageSample;
  const navigate = useNavigate();

  const [hovering, setHovering] = useState(false);
  const [buttonHovering, setButtonHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setButtonHovering(false);
  };


  const screenSize = window.innerWidth;
  let width = "90%";
  let height = "90%";
  // let height = '10%'; // Default width for large screens
  if (screenSize >= 1500) {
    // Extra-large screens
    width = 352;
    // width = 328;

    height = 180;
  } else if (screenSize === 1440) {
    // Large screens
    width = 278;
    height = 160;
  } else if (screenSize >= 992) {
    width = 250;
    height = 160;
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
    <>
      {/* */}

      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          borderRadius: "10px 10px 10px 10px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0px 1px 0px 0px #F8FAFC",
        }}
      >
        <Box
          sx={{ cursor: "pointer", position: "relative" }}
          onClick={() => navigate(`/course-new/course-landing/${course._id}`)}
        >
          <Box
            sx={{
              position: "absolute",
              left: { xxl: 280, xl: 200, lg: 175 },
              top: 10,
              zIndex: 20,
            }}
          ></Box>
          <Box sx={{ overflow: "hidden" }}>
            <img
              style={
                hovering
                  ? {
                      ...MyCustomCard,
                      ...MyCustomCardHover,
                      width,
                      height,
                      // overflow: 'hidden',
                    }
                  : {
                      ...MyCustomCard,
                      width,
                      height,
                    }
              }
              src={imageUrl}
              alt=""
            />
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: "16px",
            paddingY: "12px",
          }}
        >
          <Box>
            <Typography variant="wpf_p4_semiBold" color={"primary.P600"} sx={{ mb: 1 }}>
              {capitalizeFirstLetter(course.category)} <img src={RectangleIcon} /> {capitalizeFirstLetter(course.level)}
            </Typography>
          </Box>
          <Box sx={{ height: "110px" }}>
            <Box>
              <Typography
                onClick={() => navigate(`/course-new/course-landing/${course._id}`)}
                variant="wpf_h6_semiBold"
                color={"grey.500"}
                sx={{ cursor: "pointer", lineHeight: "20px" }}
              >
                {course.name?.length > 50 ? course.name?.substring(0, 50) + "....." : course.name}
              </Typography>
            </Box>
            <Box></Box>{" "}
            <Typography sx={{ lineHeight: "18px" }} variant="wpf_h8_regular" color={"grey.550"}>
              {course.description?.length > 100 ? course.description?.substring(0, 70) + "....." : course.description}
            </Typography>
          </Box>
          <Box onClick={() => navigate(`/course-new/course-landing/${course._id}`)} sx={{ cursor: "pointer" }}>
            <Typography variant="wpf_p4_medium">View Details</Typography>

            <img style={{ marginLeft: "15px" }} src={ArrowIcon} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RelatedCourseCard;
