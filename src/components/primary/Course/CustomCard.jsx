/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/CustomCard.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, February 16th 2023, 11:46:10 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, Button, CircularProgress, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import imageSample from "../../../assets/images/img.png";
import {getACourseByID, getAllChapterFromACourse, getCourseQuizzesResults,} from "../../../features/slice/courseSlice";
import CategoryChip from "./CategoryChip";
import LevelChip from "./CourseCardActionLebel/LevelChip";
import LanguageChip from "./LanguageChip";
import {setActiveChapterIndex, setActiveCourseId,} from "../../../features/slice/activePathSlice";

const MyCustomCard = {
  padding: "0 0 0 0 ",
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "5px 5px 0px 0px",
};

const MyCustomCardHover = {
  padding: "0 0 0 0 ",
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "5px 5px 0px 0px",
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

  // backgroundColor: "#FF9A45",
  backgroundColor: "rgba(255, 154, 69, 0.1)",
};

const CustomCard = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.course);
  const handleViewDetailsButton = (id) => {
    dispatch(getACourseByID(id)).then((res) => {
      dispatch(setActiveCourseId(id));
      dispatch(setActiveChapterIndex(0));
      dispatch(getAllChapterFromACourse(id)).then((res) => {
        dispatch(getCourseQuizzesResults(id)).then((results) => {
          navigate(`/course-details/${id}/index`);
        });
      });
    });
  };

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
    // TODO Fix grid layout
    <>
      <Box
        sx={{
          // width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-around",
          //!! Need to remove shadow later
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          mx: "0%",
          py: "0%",
          bgcolor: "#FFFFFF",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* image */}
        <Box
          sx={{
            width: "100%",
            height: "60%",
            pt: 0,
            mb: 2,
            overflow: "hidden",
          }}
        >
          <img
            style={
              hovering
                ? { ...MyCustomCard, ...MyCustomCardHover }
                : MyCustomCard
            }
            src={imageUrl}
            alt={course.name}
          />
        </Box>

        {/* Chips */}
        <Box sx={{ px: "3%" }}>
          <Grid container spacing={1} sx={{ py: "3%" }}>
            <Grid item xs={4} sx={{ paddingRight: "2%" }}>
              <LanguageChip language={course.language} />
            </Grid>
            <Grid item xs={4} sx={{ paddingRight: "2%" }}>
              <CategoryChip category={course.category} />
            </Grid>
            <Grid item xs={4} sx={{ padding: "0%" }}>
              <LevelChip level={course.level} />
            </Grid>
          </Grid>
        </Box>

        {/* Content */}
        <Box sx={{ px: "2%", height: "20%", pb: "3%" }}>
          <Grid container>
            <Typography variant="h5" sx={{ color: "#090080" }}>
              {course.name}
            </Typography>
          </Grid>

          <Grid container>
            <Typography variant="caption" sx={{ color: "#969CAF" }}>
              {course.description?.length > 100
                ? course.description?.substring(0, 100) + "....."
                : course.description}
            </Typography>
          </Grid>
        </Box>

        {/* Button */}
        <Box sx={{ px: "2%", pb: "3%" }}>
          <Grid
            container
            sx={{ display: "flex" }}
            onMouseEnter={handleMouseEnterInButton}
            onMouseLeave={handleMouseLeaveFromButton}
          >
            <Button
              disabled={isLoading}
              variant="outlined"
              fullWidth
              style={buttonStyle}
              onClick={() => handleViewDetailsButton(course._id)}
            >
              View
              {isLoading && (
                <CircularProgress
                  size={30}
                  sx={{
                    position: "absolute",
                    color: "#FF9A45",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CustomCard;
