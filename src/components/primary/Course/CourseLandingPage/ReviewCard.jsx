import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import quote from "../../../../assets/images/courses/bxs_quote-right.png";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";

const ReviewCard = ({ item, review }) => {
  console.log("🚀 ~ ReviewCard ~ item:", item);
  const swiperBoxStyle = {
    borderRadius: "8px",
    paddingY: "32px",
    paddingX: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    gap: "24px",
    height: "262px",
  };
  return (
    <>
      <Box sx={swiperBoxStyle}>
        <Grid container sx={{ backgroundColor: "", height: "100%" }}>
          <Grid item xs={12} sm={8} md={3} lg={2} sx={{ backgroundColor: "" }}>
            <Avatar
              sx={{
                borderRadius: "99px",
                height: { xl: "64px", lg: "45px", xxl: "70px" },
                width: { xl: "64px", lg: "45px", xxl: "70px" },
              }}
              src={item.user.image}
              alt=''
            />
          </Grid>

          <Grid item xs={12} sm={4} md={9} lg={10} sx={{ backgroundColor: "", height: "100%" }}>
            <Box sx={{ height: "100%" }}>
              <Box sx={{ height: "15%", backgroundColor: "" }}>
                <Grid container sx={{ paddingBottom: "3%" }}>
                  <Rating name='read-only' value={item.rating} readOnly precision={0.5} />
                </Grid>
              </Box>
              <Box sx={{ height: "50%", backgroundColor: "" }}>
                <Grid container>
                  <Typography variant='wpf_p3_medium' color={"neutral.997"}>
                    {/* {review.description} */}
                    {/* {item.review} */}
                    {item.review?.length > 300 ? item.review?.substring(0, 280) + "....." : item.review}
                  </Typography>
                </Grid>
              </Box>

              <Box sx={{ height: "25%", backgroundColor: "" }}>
                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "32px" }}
                >
                  {/* <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "32px" }}> */}
                  <Box>
                    <Typography variant='wpf_p2_semiBold' color='neutral.750'>
                      {item.user.name}
                    </Typography>
                    <br />
                    <Typography variant='wpf_p4_regular' color={"neutral.750"}>
                      {/* {item.user.role} */}
                      {item.user.role === "level_1_annotator"
                        ? "Level 1 Annotator"
                        : item.user.role === "level_2_annotator"
                        ? "Level 2 Annotator"
                        : item.user.role === "level_0_annotator"
                        ? "Level 0 Annotator"
                        : item.user.role === "level_3_annotator"
                        ? "Level 3 Annotator"
                        : item.user.role === "project_delivery_lead"
                        ? "Project Delivery Lead"
                        : item.user.role === "delivery_lead"
                        ? "Delivery Lead"
                        : item.user.role === "project_coordinator"
                        ? "Project Coordinator"
                        : item.user.role === "project_manager"
                        ? "Project Manager"
                        : item.user.role === "recruitment_manager"
                        ? "Recruitment Manager"
                        : item.user.role === "account_manager"
                        ? "Account Manager"
                        : capitalizeFirstLetter(item.user.role)}

                      {/* Corporate Development Center */}
                    </Typography>
                  </Box>
                  <Box>
                    <img src={quote} alt='' />
                  </Box>
                  {/* </Box> */}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ReviewCard;
