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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const congratulationDiv = { paddingBottom: "1%", paddingTop: "0%", borderRadius: "2px", height: "28%" };
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
      <Grid container style={congratulationDiv}>
        <Grid items xs={2}>
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
              <Typography variant="wpf_h5_Bold" sx={{ color: "neutral.N000" }}>
                Estimated Balance
              </Typography>
              <br />
              <Typography variant="wpf_h5_Bold" sx={{ textAlign: "center", color: "neutral.N000" }}>
                &#2547;{estimatedPayment.toLocaleString("en-US")}
              </Typography>
            </Box>
            <br />
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="wpf_h6_Bold" sx={{ color: "neutral.N000" }}>
                Total Paid Amount
              </Typography>
              <br />
              <Typography variant="wpf_h5_Bold" sx={{ textAlign: "center", color: "neutral.N000" }}>
                &#2547;{totalPaidAmount.toLocaleString("en-US")}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid items xs={8}>
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
                  xs={2}
                  md={3}
                  lg={3}
                  xl={3}
                  sx={{
                    paddingLeft: "2%",
                    backgroundColor: "warning.100",
                    display: "flex",
                    alignItems: "center",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <Box>
                    {" "}
                    <img src={congImg} />
                  </Box>
                </Grid>
                <Grid item xs={10} md={7} lg={7} xl={8}>
                  <Box sx={{ padding: "3%" }}>
                    <Grid xs={12}>
                      <Typography variant="wpf_h4_semiBold" sx={{ color: "neutral.750" }}>
                        Congratulations
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <Typography variant="wpf_p3_regular" sx={{ color: "neutral.N300" }}>
                        Quantigo Workforce platform is a place where you can earn money by doing annotation work. It is
                        a very simple process. You just have to follow the steps given below. We give you the
                        opportunity to grow your career with us. We are always with you to help you.
                      </Typography>
                    </Grid>
                    <Grid xs={12} sx={{ paddingTop: "3%" }}>
                      <Button
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
          xs={2}
          lg={2}
          md={2}
          xl={2}
          sx={{
            backgroundColor: "neutral.N000",
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            height: "100%",
            width: "100%",
          }}
        >
          <StepGuide />
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
