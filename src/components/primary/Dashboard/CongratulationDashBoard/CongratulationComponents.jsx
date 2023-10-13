import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import congImg from "../../../../assets/images/congImg.svg";
import jobIcon from "../../../../assets/images/totalJobIcon.svg";
import CongratulationStepProcess from "./CongratulationStepProcess";

const CongratulationComponents = () => {
  const paperstyle = {
    backgroundColor: "neutral.N000",
    padding: ".5%",
    // width: "100%",
    // height: "100%",
    borderRadius: "8px",
  };

  const teamicondiv = { paddingBottom: "1%", paddingTop: "0%", borderRadius: "2px" };
  const navigate = useNavigate();
  return (
    <>
      <Grid container style={teamicondiv}>
        <Grid xs={12}>
          <Box>
            <Paper elevation={0} style={paperstyle}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  sx={{
                    paddingLeft: "2%",
                    backgroundColor: "warning.100",
                    display: "flex",
                    // justifyContent: "right", // Center the content horizontally
                    alignItems: "center",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}>
                  <Box>
                    {" "}
                    <img src={congImg} />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box sx={{ padding: "3%" }}>
                    <Grid xs={12}>
                      <Typography variant="wpf_h4_semiBold" sx={{ color: "neutral.750" }}>
                        Congratulations
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <Typography variant="wpf_p3_regular" sx={{ color: "neutral.N300" }}>
                        Lorem ipsum dolor sit amet consectetur. Libero faucibus dui faucibus et. Nisi amet viverra
                        egestas vel urna eu hendrerit. Mauris urna id dictum tortor. Vulputate vitae turpis duis sit. Id
                        eleifend tincidunt integer vitae scelerisque.
                      </Typography>
                    </Grid>
                    <Grid xs={12} sx={{ paddingTop: "3%" }}>
                      <Button
                        // onClick={() => {
                        //   navigate("/course");
                        // }}
                        sx={{
                          textTransform: "none",
                          borderRadius: "8px",
                          border: "1px solid #FFAB00",
                          backgroundColor: "#FFF8EB",
                          color: "#FF9900",
                          "&:hover": {
                            backgroundColor: "#FF9A45",
                            color: "#1D1D1D",
                          },

                          width: "126px",
                          height: "40px",
                        }}>
                        Get Started
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{
                    // paddingLeft: "2%",
                    backgroundColor: "primary.B008",
                    display: "flex",
                    justifyContent: "center", // Center the content horizontally
                    alignItems: "center",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                  }}>
                  <Box>
                    <Grid container sx={{ justifyContent: "center", paddingBottom: "9%" }}>
                      <img src={jobIcon} />
                    </Grid>
                    <Grid container sx={{ justifyContent: "center" }}>
                      <Typography variant="wpf_h4_Bold" sx={{ color: "neutral.750" }}>
                        108
                      </Typography>
                    </Grid>
                    <Grid container sx={{ justifyContent: "center" }}>
                      <Typography variant="wpf_p4_medium" sx={{ color: "neutral.750" }}>
                        Total Available Jobs
                      </Typography>
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
