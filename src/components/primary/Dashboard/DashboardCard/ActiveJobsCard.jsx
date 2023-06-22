import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NorthIcon from "@mui/icons-material/North";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAssignedJob } from "../../../../features/slice/jobSlice";
import { useState } from "react";

const ActiveJobsCard = () => {
  const { totalCountData } = useSelector((state) => state.dashboard);
  const { user } = useSelector((state) => state.user);
  const { myJobs } = useSelector((state) => state.job);
  const [ActiveJobForUser, setActiveJobForUser] = useState(0);
  const dispatch = useDispatch();
  const JobLength = myJobs.length;
  useEffect(() => {
    dispatch(getAllAssignedJob());
  }, []);
  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{ padding: "0%", width: "100%", height: "100px" }}>
          <Box sx={{ padding: "4%" }}>
            <Grid container>
              <Typography sx={{ color: "#969CAF" }}>{user.role === "level_0_annotator" ||
                  user.role === "level_1_annotator" ||
                  user.role === "level_2_annotator" ||
                  user.role === "level_3_annotator" ||
                  user.role === "Reviewer"
                    ? "My Active Jobs"
                    : "Active Jobs"} </Typography>
            </Grid>
            <Grid container sx={{ paddingTop: "4%" }}>
              <Grid item xs={8}>
                <Typography sx={{ color: "##1D1D1D" }} variant="h5">
                  {user.role === "level_0_annotator" ||
                  user.role === "level_1_annotator" ||
                  user.role === "level_2_annotator" ||
                  user.role === "level_3_annotator" ||
                  user.role === "Reviewer"
                    ? totalCountData.requestedUsersOnGoingJobs
                    : totalCountData.activeJobs}
                </Typography>
              </Grid>
              {/* <Grid
                container
                item
                xs={4}
                sx={{ justifyContent: "right", paddingTop: "2%" }}>
                <Typography sx={{ color: "#2D58FF" }} variant="body2">
                  {" "}
                  + {totalCountData.activeJobs}%
                </Typography>
                <NorthIcon sx={{ color: "#2D58FF", fontSize: "small" }} />
              </Grid> */}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default ActiveJobsCard;
