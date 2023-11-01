/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Dashboard/AnnotatorLandingPage/AnnotatorLandingPage.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, October 26th 2023, 10:31:49 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import congImg from "../../../../assets/images/congImg.svg";
import { getTotalCountData } from "../../../../features/slice/dashboardSlice";
import { convertDate } from "../../../../helper/customData";
import BarChart from "../BarChart/BarChart";
import TotalEstimatedWorkingHoursCard from "../DashboardCard/TotalEstimatedWorkingHoursCard";
import TotalProjectDrawerCard from "../DashboardCard/TotalProjectDrawerCard";
import TotalWorkingHoursCard from "../DashboardCard/TotalWorkingHoursCard";
import StepGuide from "./StepGuide";
const AnnotatorLandingPage = () => {
  const paperStyle = {
    backgroundColor: "neutral.N000",
    // padding: ".5%",
    borderRadius: "8px",
    height: "100%",
    width: "97%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const congratulationDiv = {
    paddingBottom: "0%",
    paddingTop: "0%",
    borderRadius: "2px",
    height: {
      lg: "200px",
      // xl: "100px",
      // xxl: "100px",
    },
  };
  const { totalCountData } = useSelector((state) => state.dashboard);
  const [startDate, setStartDate] = React.useState(dayjs().startOf("month"));
  const [endDate, setEndDate] = React.useState(dayjs());
  const {
    user: { estimatedPaymentForProjects, role, totalPaidAmount },
  } = useSelector((state) => state.user);

  const [estimatedPayment, setEstimatedPayment] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalCountData());
  }, []);

  useEffect(() => {
    if (estimatedPaymentForProjects) {
      const totalAmount = estimatedPaymentForProjects.reduce((acc, curr) => {
        return acc + curr.estimatedPayment;
      }, 0);
      setEstimatedPayment(totalAmount);
    }
  }, [estimatedPaymentForProjects]);
  useEffect(() => {
    const data = {
      startDate: convertDate(startDate),
      endDate: convertDate(endDate),
    };
    //  dispatch(getDashboardData(data)).then(() => {
    //    setProjectLoading(false);
    //  });
  }, []);
  return (
    <>
      <Grid container sx={congratulationDiv}>
        <Grid items lg={3} xl={2} xxl={2}>
          <Box
            sx={{
              pr: 1,
              backgroundColor: "primary.main",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              height: "100%",
              // gap: "1rem",
              // borderTopLeftRadius: "8px",
              // borderBottomLeftRadius: "8px",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="wpf_p3_semiBold" sx={{ color: "neutral.N000" }}>
                Estimated Balance
              </Typography>
              <br />
              <Typography variant="wpf_p2_semiBold" sx={{ textAlign: "center", color: "neutral.N000" }}>
                &#2547;{estimatedPayment.toLocaleString("en-US")}
              </Typography>
            </Box>
            <br />
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="wpf_p4_semiBold" sx={{ color: "neutral.N000" }}>
                Total Paid Amount
              </Typography>
              <br />
              <Typography variant="wpf_p4_semiBold" sx={{ textAlign: "center", color: "neutral.N000" }}>
                &#2547;{totalPaidAmount.toLocaleString("en-US")}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid items lg={6} xl={8} xxl={8}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
            }}
          >
            <Paper elevation={0} style={paperStyle}>
              <Grid container>
                <Grid
                  item
                  xs={3}
                  md={3}
                  lg={3}
                  xl={3}
                  sx={{
                    backgroundColor: "warning.100",
                    display: { lg: "none", xl: "flex", xxl: "flex" },
                    alignItems: "center",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <Box sx={{ width: "80%", margin: "auto" }}>
                    <img style={{ width: "100%", margin: "auto" }} src={congImg} />
                  </Box>
                </Grid>
                <Grid item xs={9} md={9} lg={12} xl={9}>
                  <Box sx={{ padding: "3%" }}>
                    <Grid xs={12}>
                      <Typography variant="wpf_h5_medium" sx={{ color: "neutral.750" }}>
                        Congratulations
                      </Typography>
                    </Grid>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="wpf_p4_regular" sx={{ color: "neutral.N300", mt: 2 }}>
                        Quantigo Workforce platform is a place where you can earn money by doing annotation work. It is
                        a very simple process. You just have to follow the steps given below. We give you the
                        opportunity to grow your career with us. We are always with you to help you.
                      </Typography>
                    </Box>
                    <Grid xs={10} sx={{ paddingTop: "3%", pb: 2 }}>
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
                          width: "100px",
                          height: "30%",
                        }}
                      >
                        Get Started
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          xl={2}
          xxl={2}
          sx={{
            backgroundColor: "neutral.N100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            // height: "150px",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <StepGuide isStep={true} />
        </Grid>
      </Grid>

      {/* <CongratulationStepProcess /> */}
      <Grid
        container
        sx={{
          paddingTop: "2%",
          height: { xl: "350px", lg: "330px" },
        }}
      >
        <Grid
          container
          xs={4}
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "space-around",
            gap: 2,
          }}
        >
          <Grid item xs={12} sx={{ paddingRight: "2%" }}>
            <TotalProjectDrawerCard />
          </Grid>
          <Grid item xs={12} sx={{ paddingRight: "2%" }}>
            <TotalEstimatedWorkingHoursCard />
          </Grid>
          <Grid item xs={12} sx={{ paddingRight: "2%" }}>
            <TotalWorkingHoursCard />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={0} sx={{ borderRadius: "8px", height: { xl: "350px", lg: "330px" } }}>
            <BarChart
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              loading={false}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AnnotatorLandingPage;
