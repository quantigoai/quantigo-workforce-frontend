/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/Dashboard.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 11:11:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  getDashboardData,
  getDashboardDataHourly,
  getDashboardDataWeekly,
} from "../../../features/slice/dashboardSlice";
import { resendEmailVarification } from "../../../features/slice/userSlice";
import { convertDate } from "../../../helper/customData";
import BarChart from "./BarChart/BarChart";
import CongratulationComponents from "./CongratulationDashBoard/CongratulationComponents";
import DashboardDocument from "./DashBoardForDocument/DashboardDocument";
import DashboardIndex from "./DashboardIndex";
import LineChart from "./LineChart/LineChart";
import LineChartDaily from "./LineChart/LineChartDaily";
import PieChart from "./PieChart/PieChart";
import PieChartForUser from "./PieChart/PieChartForUser";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = React.useState(dayjs().startOf("month"));
  const [endDate, setEndDate] = React.useState(dayjs());
  const [projectLoading, setProjectLoading] = React.useState(true);
  const [weekLoading, setWeekLoading] = React.useState(true);
  const [hourLoading, setHourLoading] = React.useState(true);
  const [sendMessage, setSendMessage] = React.useState("");
  const { user } = useSelector((state) => state);
  const { isLoading } = useSelector((state) => state.user);
  const { role } = user.user;
  const alert = useAlert();
  // ! Configure it later
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
  console.log("start", startDate);
  console.log("end", endDate);
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

  const paperstyleResendEmail = {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    // width: "100",
    height: "400px",
    borderRadius: "2px",
    justifyContent: "center",
  };
  const handleresendEmail = () => {
    dispatch(resendEmailVarification()).then((action) => {
      if (action.payload?.status === 200 || action.payload?.status === 201) {
        alert.show(action.payload.data, { type: "success" });
        setSendMessage(action.payload.data);
      } else {
        alert.show("Email Not Send", { type: "error" });
      }
    });
  };
  return (
    <>
      {user.user.isEmailVerified ? (
        <>
          <Box
            // sx={{ backgroundColor: "#F5F5F5", height: "100%", width: "100%" }}>
            sx={{ height: "100%" }}>
            {role === "level_0_annotator" ? (
              <>
                {user.user.isVerified ? (
                  <CongratulationComponents />
                ) : (
                  <DashboardDocument />
                )}
                {/* <DashboardDocument /> */}
                {/*  */}
              </>
            ) : (
              <>
                <DashboardIndex />
                {role === "level_0_annotator" ||
                role === "level_1_annotator" ||
                role === "level_2_annotator" ||
                role === "level_3_annotator" ||
                role === "reviewer" ? (
                  <>
                    <Box
                      container
                      sx={{
                        paddingRight: "2%",
                        width: "100%",
                        height: "20%",
                      }}>
                      <Paper
                        elevation={0}
                        sx={{
                          borderRadius: "8px",
                          // width: "100%",
                          // height: "100%",
                        }}>
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
                    </Box>
                  </>
                ) : (
                  <>
                    <Grid container sx={{ paddingBottom: "2%" }}>
                      <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                        <Paper elevation={1} sx={{ borderRadius: "8px" }}>
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
                      <Grid item xs={3} sx={{ paddingRight: "2%" }}>
                        <Paper
                          elevation={1}
                          sx={{
                            // paddingTop: "10%",
                            height: "99%",
                            borderRadius: "8px",
                          }}>
                          {/* <Grid sx={{ paddingTop: "5%" }}></Grid> */}
                          <PieChartForUser />
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          elevation={1}
                          sx={{
                            // paddingTop: "5%",
                            height: "99%",
                            borderRadius: "8px",
                          }}>
                          <PieChart />
                        </Paper>
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                        <Paper elevation={1} sx={{ borderRadius: "8px" }}>
                          <LineChart loading={weekLoading} />
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper elevation={1} sx={{ borderRadius: "8px" }}>
                          <LineChartDaily loading={hourLoading} />
                        </Paper>
                      </Grid>
                    </Grid>
                  </>
                )}
              </>
            )}
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              // backgroundColor: "#F5F5F5",
              height: "100%",
              // width: "100%",
              padding: "1%",
            }}>
            <Paper elevation={0} style={paperstyleResendEmail}>
              <Grid
                container
                sx={{ justifyContent: "center", paddingTop: "7%" }}>
                <Typography variant="h4" sx={{ color: "#090080" }}>
                  Please check your email
                </Typography>
              </Grid>
              {/* TODO Check position and css here */}
              <Grid
                container
                sx={{
                  justifyContent: "center",
                  paddingTop: "2%",
                  position: "relative",
                }}>
                <Button
                  disabled={isLoading}
                  sx={{
                    backgroundColor: "#2D58FF",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#FF9A45",
                      color: "#1D1D1D",
                    },
                  }}
                  onClick={() => handleresendEmail()}>
                  Resend Email
                </Button>
                {isLoading && (
                  <CircularProgress
                    size={30}
                    sx={{
                      position: "absolute",
                      color: "#FF9A45",
                    }}
                  />
                )}
              </Grid>

              <Grid
                container
                sx={{ justifyContent: "center", paddingTop: "2%" }}>
                <Typography variant="h6" sx={{ color: "#090080" }}>
                  {sendMessage}
                </Typography>
              </Grid>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
};

export default Dashboard;
