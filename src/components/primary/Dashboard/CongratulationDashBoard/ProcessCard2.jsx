import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../../../assets/images/arrowCon.svg";
import confirmIcon from "../../../../assets/images/confirmprocess.svg";
export const defaultIndex = (user) => {
  if (user.isEmailVerified) {
    return 2;
  }
  if (user.isEmailVerified && user.isVerified) {
    return 2;
  }
  return 1;
};
const showCompleteIcon = (Id, user) => {
  if (Id === 1) {
    return true;
  }
  if (Id === 2 && user.isEmailVerified) {
    return true;
  }
  if (Id === 3 && user.isVerified) {
    return true;
  }
  return false;
};
const showContinueButton = (Id, user) => {
  if (Id === 1) {
    return false;
  }
  if (Id === 2 && !user.isEmailVerified) {
    return true;
  }
  if (Id === 3 && user.isEmailVerified && !user.isVerified) {
    return true;
  }
  return false;
};

const ProcessCard2 = ({ item }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "140px",
        border: item.active ? "2px solid #EFF9F5" : "2px solid #EAECF0",
        backgroundColor: showCompleteIcon(item._id, user) ? "green.801" : "neutral.N000",
        borderRadius: "12px",
        alignItems: "center",
        paddingLeft: "7%",
      }}
    >
      {showCompleteIcon(item._id, user) ? (
        <Box sx={{ display: "flex", height: "30%", justifyContent: "flex-end" }}>
          <img style={{ width: "20px" }} src={confirmIcon} />
        </Box>
      ) : (
        <Box sx={{ display: "flex", height: "30%", justifyContent: "flex-end" }}></Box>
      )}

      <Box sx={{ display: "flex", width: "100%", height: "70%" }}>
        <Box>
          <img src={item.image} alt="" />
        </Box>
        <Box sx={{ paddingLeft: "20px" }}>
          <Grid container>
            <Typography variant="wpf_p2_semiBold" sx={{ color: "neutral.N300" }}>
              {item.header} <i className="ri-arrow-right-up-line"></i>
            </Typography>
          </Grid>
          <Grid container>
            {" "}
            <Typography variant="wpf_p4_regular" sx={{ color: "neutral.N300" }}>
              {item.describe}
            </Typography>
          </Grid>
          <Grid container sx={{ paddingTop: "2%" }}>
            {!showCompleteIcon(item._id, user) && showContinueButton(item._id, user) && (
              <Link>
                <Box
                  onClick={() => {
                    navigate(item.navigationLink);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.3,
                  }}
                >
                  <Typography
                    variant="wpf_p4_semiBold"
                    sx={{ paddingRight: "3%", color: "neutral.N300", cursor: "pointer" }}
                  >
                    Continue
                  </Typography>
                  <img src={arrowIcon} />
                </Box>
              </Link>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessCard2;
