import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LanguageChip from "../LanguageChip";
import CategoryChip from "../CategoryChip";
import LevelChip from "../CourseCardActionLebel/LevelChip";
import RectangleIcon from "../../../../assets/images/courses/Rectangle 12.svg";
import ArrowIcon from "../../../../assets/images/courses/Vector.svg";

import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
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
  console.log("🚀 ~ RelatedCourseCard ~ course:", course);
  const imageUrl = course.images?.length ? `${course.images[0]}` : imageSample;

  const [hovering, setHovering] = useState(false);
  const [buttonHovering, setButtonHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setButtonHovering(false);
  };

  const handleMouseEnterInButton = () => {
    setButtonHovering(true);
  };

  const handleMouseLeaveFromButton = () => {
    setButtonHovering(false);
  };
  const handleCourseChange = () => {};
  const [buttonStyle, setButtonStyle] = useState(ButtonInitial);

  useEffect(() => {
    if (hovering && !buttonHovering) {
      setButtonStyle(ButtonDivMouseOn);
    } else if (buttonHovering) {
      setButtonStyle(ButtonHover);
    } else {
      setButtonStyle(ButtonInitial);
    }
  }, [hovering, buttonHovering]);

  return (
    <>
      <Box
        sx={{
          height: "350px",
          //   height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          //!! Need to remove shadow later
          boxShadow: "0px 3px 2px 0px rgba(37, 62, 92, 0.08)",
          // mx: "4%",
          //   px: 2,
          // py: "0%",
          // backgroundColor: "neutral.N000",
          borderRadius: "10px",
          border: "1px solid white",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box
          sx={{
            width: "100%",
            height: "49%",
            backgroundColor: "#fff",
            pt: 0,
            mb: 0,
            overflow: "hidden",
            cursor: "pointer",
          }}
          //   onClick={() => handleViewDetailsButton(course._id)}
        >
          <img
            style={hovering ? { ...MyCustomCard, ...MyCustomCardHover } : MyCustomCard}
            src={imageUrl}
            alt={course.name}
          />
        </Box>

        {/* Chips */}

        {/* Content */}
        <Box
          sx={{
            height: "51%",
            backgroundColor: "neutral.N000",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ px: "4%", height: "65%", pb: "0", py: 2 }}>
            <Grid
              container
              // onClick={() => handleViewDetailsButton(course._id)}
            >
              <Typography variant='wpf_p4_semiBold' color={"primary.P600"} sx={{ cursor: "pointer", mb: 1 }}>
                {capitalizeFirstLetter(course.category)} <img src={RectangleIcon} />{" "}
                {capitalizeFirstLetter(course.level)}
              </Typography>
            </Grid>
            <Grid
              container
              // onClick={() => handleViewDetailsButton(course._id)}
            >
              <Typography variant='wpf_h6_semiBold' color={"grey.500"} sx={{ cursor: "pointer" }}>
                {course.name}
              </Typography>
            </Grid>
            <Grid mt={1} container>
              <Typography variant='wpf_h8_regular' color={"grey.550"}>
                {course.description?.length > 100
                  ? course.description?.substring(0, 100) + "....."
                  : course.description}
              </Typography>
            </Grid>
          </Box>
          {/* //chip  */}
          <Box sx={{ px: "4%", height: "35%" }}>
            <Grid container sx={{ py: "8%" }}>
              {/* <Button sx={{ textTransform: "none", color: "#1E293B"  }}> */}
              <Typography variant='wpf_p4_medium'>View Details</Typography>

              <img style={{ marginLeft: "15px" }} src={ArrowIcon} />
              {/* </Button> */}
            </Grid>
          </Box>

          {/* //progress bar  */}
        </Box>
      </Box>
    </>
  );
};

export default RelatedCourseCard;
