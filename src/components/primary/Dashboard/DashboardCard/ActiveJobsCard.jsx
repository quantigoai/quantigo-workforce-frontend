import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import iconPendding from "../../../../assets/images/dashboardIcon/MyActive JobsIcon.svg";

const ActiveJobsCard = () => {
  const { totalCountData } = useSelector((state) => state.dashboard);
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{
            padding: "0%",
            width: "100%",
            height: "100px",
            borderRadius: "8px",
          }}>
          <Box sx={{ padding: "4%", position: "relative" }}>
            <Grid container >
              <Grid item xs={3}>
                <img src={iconPendding} />
              </Grid>
              <Grid item xs={9}>
                <Grid container>
                  <Typography sx={{ color: "#3C4D6B" }}>
                    {user.role === "level_0_annotator" ||
                    user.role === "level_1_annotator" ||
                    user.role === "level_2_annotator" ||
                    user.role === "level_3_annotator" ||
                    user.role === "Reviewer"
                      ? "My Active Jobs"
                      : "Active Jobs"}
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "4%" }}>
                  <Grid item xs={8}>
                    <Typography sx={{ color: "#091E42" }} variant="h5">
                      <b>
                        {" "}
                        {user.role === "level_0_annotator" ||
                        user.role === "level_1_annotator" ||
                        user.role === "level_2_annotator" ||
                        user.role === "level_3_annotator" ||
                        user.role === "Reviewer"
                          ? totalCountData.requestedUsersOnGoingJobs
                          : totalCountData.activeJobs}
                      </b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default ActiveJobsCard;
