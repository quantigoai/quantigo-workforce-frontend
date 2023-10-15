import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import arrowIcon from "../../../../assets/images/arrowCon.svg";
import confirmIcon from "../../../../assets/images/confirmprocess.svg";
import waitIcon from "../../../../assets/images/waitIcon.svg";
const ProcessCard = ({ item }) => {
  return (
    <>
      <Box
        sx={{
          //   width: "350px",
          height: "226px",
          border: item.active ? "1px solid #36B37E" : "1px solid #EAECF0",
          backgroundColor: item.active ? "green.801" : "neutral.990",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center", // Center the content horizontally
          alignItems: "center",
          paddingLeft: "7%",
        }}
      >
        <Box>
          <Grid container sx={{ paddingBottom: "5%" }}>
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
          </Grid>
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
    </>
  );
};

export default ProcessCard;
