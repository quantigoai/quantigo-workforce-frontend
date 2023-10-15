import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import arrowIcon from "../../../../assets/images/arrowCon.svg";
import confirmIcon from "../../../../assets/images/confirmprocess.svg";

export const defaultIndex = ( user) => {
  if (user.isEmailVerified) {
    return 2;
  }
  if (user.isEmailVerified && user.isVerified) {
    return 2;
  }
  return 1;
};

const ProcessCard2 = ({ item }) => {
  const { user } = useSelector((state) => state.user);

  const showCompleteIcon = (caseId, user) => {
    if (caseId === 1) {
      return true;
    }
    if (caseId === 2 && user.isEmailVerified) {
      return true;
    }
    if (caseId === 3 && user.isVerified) {
      return true;
    }
    return false;
  };
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
            {!showCompleteIcon(item._id, user) && (
              <>
                <Typography variant="wpf_p4_semiBold" sx={{ paddingRight: "3%", color: "neutral.N300" }}>
                  Continue
                </Typography>
                <img src={arrowIcon} />
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessCard2;
