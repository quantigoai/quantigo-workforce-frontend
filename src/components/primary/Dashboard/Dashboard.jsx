/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/Dashboard.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 11:11:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Box, Grid, Paper} from "@mui/material";
import dayjs from "dayjs";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActivePath} from "../../../features/slice/activePathSlice";
import {
    getDashboardData,
    getDashboardDataHourly,
    getDashboardDataWeekly,
} from "../../../features/slice/dashboardSlice";
import {convertDate} from "../../../helper/customData";
import AnnotatorLandingPage from "./AnnotatorLandingPage/AnnotatorLandingPage";
import BarChart from "./BarChart/BarChart";
import CongratulationComponents from "./CongratulationDashBoard/CongratulationComponents";
import DashboardIndex from "./DashboardIndex";
import LineChart from "./LineChart/LineChart";
import LineChartDaily from "./LineChart/LineChartDaily";
import PieChartForUser from "./PieChart/PieChartForUser";
import PirChartForProjectDrawer from "./PieChart/PirChartForProjectDrawer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = React.useState(dayjs().startOf("month"));
  const [endDate, setEndDate] = React.useState(dayjs());
  const [projectLoading, setProjectLoading] = React.useState(true);
  const [weekLoading, setWeekLoading] = React.useState(true);
  const [hourLoading, setHourLoading] = React.useState(true);
  const user = useSelector((state) => state.user);
  const { role } = user.user;

  // ! TODO Configure it later
  useEffect(() => {
    setProjectLoading(true);
    const data = {
      startDate: convertDate(startDate),
      endDate: convertDate(endDate),
    };
    dispatch(getDashboardData(data)).then(() => {
      setProjectLoading(false);
    });
  }, []);

  useEffect(() => {
    dispatch(setActivePath("Dashboard"));
    setWeekLoading(true);
    setHourLoading(true);
    dispatch(getDashboardDataWeekly()).then(() => {
      setWeekLoading(false);
    });
    dispatch(getDashboardDataHourly()).then(() => {
      setHourLoading(false);
    });
  }, []);

  const adminExtraData = () => {
    return (
      <>
        <Grid container sx={{ paddingBottom: "2%" }}>
          <Grid item xs={12} xl={6} lg={5} md={4} sx={{ paddingRight: "2%" }}>
            <Paper elevation={0} sx={{ borderRadius: "8px", height: { xl: "350px", lg: "330px" } }}>
              {!projectLoading && (
                <BarChart
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  loading={projectLoading}
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} xl={3} lg={3.5} md={4} sx={{ paddingRight: "2%" }}>
            <Paper
              elevation={0}
              sx={{
                // height: "99%",
                borderRadius: "8px",
                paddingLeft: "3%",
                height: { xl: "350px", lg: "330px" },
              }}
            >
              {/* <Grid sx={{ paddingTop: "5%" }}></Grid> */}
              <PieChartForUser />
            </Paper>
          </Grid>
          <Grid item xs={12} xl={3} lg={3.5} md={4}>
            <Paper
              elevation={0}
              sx={{
                height: { xl: "350px", lg: "330px" },
                borderRadius: "8px",
                paddingLeft: "3%",
              }}
            >
              <PirChartForProjectDrawer />
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sx={{ paddingRight: "2%" }}>
            <Paper elevation={0} sx={{ borderRadius: "8px" }}>
              <LineChart loading={weekLoading} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} sx={{ borderRadius: "8px" }}>
              <LineChartDaily loading={hourLoading} />
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      {user.user.isEmailVerified ? (
        <>
          <Box sx={{ padding: "1%", height: "100%" }}>
            {user.user.isVerified ? (
              role === "level_1_annotator" ||
              role === "level_2_annotator" ||
              role === "level_3_annotator" ||
              role === "reviewer" ? (
                <>
                  {/* <CongratulationComponents /> */}
                  <AnnotatorLandingPage />
                </>
              ) : (
                <>
                  {role === "level_0_annotator" ? (
                    // <>
                    //   <Box
                    //     container
                    //     sx={{
                    //       paddingRight: "%",
                    //       width: "100%",
                    //     }}
                    //   >
                    //     <Paper
                    //       elevation={0}
                    //       sx={{
                    //         borderRadius: "8px",
                    //       }}
                    //     >
                    //       {!projectLoading && (
                    //         <BarChart
                    //           startDate={startDate}
                    //           setStartDate={setStartDate}
                    //           endDate={endDate}
                    //           setEndDate={setEndDate}
                    //           loading={projectLoading}
                    //         />
                    //       )}
                    //     </Paper>
                    //   </Box>
                    // </>

                    <CongratulationComponents />
                  ) : (
                    // <AnnotatorLandingPage />
                    <>
                      <DashboardIndex />
                      {adminExtraData()}
                    </>
                  )}
                </>
              )
            ) : (
              <>
                {user.user.role !== "admin" ? (
                  <CongratulationComponents />
                ) : (
                  <>
                    <DashboardIndex />
                    {adminExtraData()}
                  </>
                )}{" "}
              </>
            )}
          </Box>
        </>
      ) : (
        <>
          <CongratulationComponents />
        </>
      )}
    </>
  );
};

export default Dashboard;
