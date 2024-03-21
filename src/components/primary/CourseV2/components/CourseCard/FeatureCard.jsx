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
import { useSelector } from "react-redux";
import imageSample from "../../../../../assets/images/img.png";
import CategoryChip from "../../../Course/CategoryChip";

import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import LevelChip from "../../../Course/CourseCardActionLebel/LevelChip";
import LanguageChip from "../../../Course/LanguageChip";
import CustomHoverImage from "../../shared/ImageComponent/CustomHoverImage";

const FeaturedCard = ({ course }) => {
  const imageUrl = course.images?.length ? `${course.images[0]}` : imageSample;
  const { isLightTheme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  return (
    <Grid item xs={5.8} sx={{ backgroundColor: isLightTheme ? "#fff" : "#000" }}>
      <SwiperSlide
        style={{
          backgroundColor: isLightTheme ? "#fff" : "#000",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            padding: "8px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
            }}
            onClick={() => navigate(`/course-new/course-landing/${course._id}`)}
          >
            <CustomHoverImage
              height={"100%"}
              width={"100%"}
              maxHeight={{ xxl: 250, xl: 224, md: 167, lg: 200 }}
              maxWidth={{ xxl: 250, xl: 224, md: 167, lg: 200 }}
              alt={course.name}
              imageUrl={imageUrl}
            />
          </Box>

          <Box
            sx={{
              height: "100%",
              width: "100%",
              paddingX: "24px",
              paddingY: "12px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <Chip
                sx={{
                  height: "25px",
                }}
                label={
                  <Typography
                    variant="wpf_p5_semiBold"
                    sx={{
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "start",
                      backgroundColor: "#476CFF",
                      borderRadius: "32px",
                      color: "#fff",
                    }}
                  >
                    Featured
                  </Typography>
                }
                color="primary"
              />
            </Box>
            <Box
              sx={{
                height: "75%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", justifyContent: "start", height: "90px", mt: "15px" }}
              >
                <Typography
                  onClick={() => navigate(`/course-new/course-landing/${course._id}`)}
                  variant="wpf_h6_semiBold"
                  color={"grey.500"}
                  sx={{ cursor: "pointer", lineHeight: "20px" }}
                >
                  {course.name?.length > 50 ? course.name?.substring(0, 60) + "....." : course.name}
                </Typography>{" "}
                <Typography sx={{ lineHeight: "18px", mt: "6px" }} variant="wpf_h8_regular" color={"grey.550"}>
                  {course.description?.length > 100
                    ? course.description?.substring(0, 110) + "....."
                    : course.description}
                </Typography>{" "}
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
                <Box>
                  <LanguageChip language={course.language} />
                </Box>
                <Box>
                  <CategoryChip category={course.category} />
                </Box>
                <Box>
                  <LevelChip level={course.level} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
    </Grid>
  );
};

export default FeaturedCard;
