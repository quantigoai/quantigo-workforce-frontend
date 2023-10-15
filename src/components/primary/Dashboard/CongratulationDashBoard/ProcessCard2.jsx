import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import confirmIcon from "../../../../assets/images/confirmprocess.svg";
import waitIcon from "../../../../assets/images/waitIcon.svg";
import arrowIcon from "../../../../assets/images/arrowCon.svg";
import SLiderPrevNext from "./SLiderPrevNext";
import NorthEastIcon from "@mui/icons-material/NorthEast";
const ProcessCard2 = ({ item }) => {
  return (
    <Box
      sx={{
        height: "140px",
        border: item.active ? "1px solid #EFF9F5" : "2px solid #EAECF0",
        backgroundColor: item.active ? "green.801" : "neutral.N000",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between", // Center the content horizontally
        alignItems: "center",
        paddingLeft: "7%",
        position: "relative",
      }}
    >
      {item.active && (
        <Box sx={{ position: "absolute", top: 4, left: 1085 }}>
          {" "}
          <img style={{ width: "20px" }} src={confirmIcon} />
        </Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
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
            {!item.active && (
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
