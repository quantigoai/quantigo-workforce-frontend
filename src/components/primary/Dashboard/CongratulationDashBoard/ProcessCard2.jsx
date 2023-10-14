import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import confirmIcon from "../../../../assets/images/confirmprocess.svg";
import waitIcon from "../../../../assets/images/waitIcon.svg";
import arrowIcon from "../../../../assets/images/arrowCon.svg";
import SLiderPrevNext from "./SLiderPrevNext";

const ProcessCard2 = ({ item }) => {
  return (
    <Box
      sx={{
        height: "140px",
        border: item.active ? "1px solid #36B37E" : "2px solid #EAECF0",
        backgroundColor: item.active ? "green.801" : "#Fff",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between", // Center the content horizontally
        alignItems: "center",
        paddingLeft: "7%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        {/* <Grid container sx={{ paddingBottom: "5%" }}>
          {item.active ? (
            <>
              {" "}
              <img src={confirmIcon} />
            </>
          ) : (
            <Box sx={{ position: "relative" }}>
              <img
                style={{
                  border: "4px solid white",
                  borderRadius: "50%",
                }}
                src={waitIcon}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 14,

                  // width: "100px",
                  // height: "100px",
                }}
              >
                <Typography variant="wpf_h6_Bold">0{item._id}</Typography>
              </Box>
            </Box>
          )}
        </Grid> */}
        <Box>
          <img src={item.image} alt="" />
        </Box>
        <Box sx={{ paddingLeft: "20px" }}>
          <Grid container>
            <Typography variant="wpf_p2_semiBold" sx={{ color: "neutral.N300" }}>
              {item.header}
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
