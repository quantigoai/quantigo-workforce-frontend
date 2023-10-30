import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import congImg from "../../../../assets/images/congImg.svg";
import jobIcon from "../../../../assets/images/totalJobIcon.svg";
import CongratulationStepProcess from "./CongratulationStepProcess";

const CongratulationComponents = () => {
  const paperStyle = {
    backgroundColor: "neutral.N000",
    padding: ".5%",
    borderRadius: "8px",
  };

  const teamIconDiv = { paddingBottom: "1%", paddingTop: "0%", borderRadius: "2px" };

  return (
    <>
      <Grid container style={teamIconDiv}>
        <Grid xs={12}>
          <Box>
            <Paper elevation={0} style={paperStyle}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  md={3}
                  lg={3}
                  xl={2}
                  sx={{
                    paddingLeft: "2%",
                    backgroundColor: "warning.100",
                    display: "flex",
                    alignItems: "center",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <Box sx={{ width: "90%", margin: "auto" }}>
                    {" "}
                    <img style={{ width: "100%", margin: "auto" }} src={congImg} />
                  </Box>
                </Grid>
                <Grid item xs={8} md={7} lg={7} xl={8}>
                  <Box sx={{ padding: "3%" }}>
                    <Grid xs={12}>
                      <Typography variant="wpf_h5_medium" sx={{ color: "neutral.750" }}>
                        Congratulations
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <Typography variant="wpf_p4_regular" sx={{ color: "neutral.N300" }}>
                        Quantigo Workforce platform is a place where you can earn money by doing annotation work. It is
                        a very simple process. You just have to follow the steps given below. We give you the
                        opportunity to grow your career with us. We are always with you to help yous.
                      </Typography>
                    </Grid>
                    <Grid xs={10} sx={{ paddingTop: "3%" }}>
                      <Button
                        sx={{
                          textTransform: "none",
                          borderRadius: "8px",
                          border: "1px solid #FFAB00",
                          backgroundColor: "#FFF8EB",
                          color: "#FF9900",
                          fontSize: {
                            lg: "10px",
                            xl: "12px",
                            xxl: "12px",
                          },
                          "&:hover": {
                            backgroundColor: "#FF9A45",
                            color: "#1D1D1D",
                          },
                          width: "20%",
                          height: "30%",
                        }}
                      >
                        Get Started
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={2}
                  lg={2}
                  md={2}
                  xl={2}
                  sx={{
                    backgroundColor: "primary.B008",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                  }}
                >
                  <Box>
                    <Grid container sx={{ justifyContent: "center", paddingBottom: "9%" }}>
                      <img src={jobIcon} />
                    </Grid>
                    <Grid container sx={{ justifyContent: "center" }}>
                      <Typography variant="wpf_h4_Bold" sx={{ color: "neutral.N300" }}>
                        {/* 108 */}
                        Coming Soon
                      </Typography>
                    </Grid>
                    <Grid container sx={{ justifyContent: "center" }}>
                      {/* <Typography variant="wpf_p4_medium" sx={{ color: "neutral.N300" }}>
                        Total Available Jobs
                      </Typography> */}
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <CongratulationStepProcess />
    </>
  );
};

export default CongratulationComponents;
