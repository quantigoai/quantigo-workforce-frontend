import {Grid, Paper, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
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
          <Box sx={{ padding: "6%", position: "relative" }}>
            <Grid container>
              <Grid item xs={12} xl={4} lg={5} md={5} sm={5}>
                <img src={iconPendding} />
              </Grid>
              <Grid item xs={12} xl={8} lg={7} md={7} sm={7}>
                <Grid container>
                  <Typography variant={"wpf_p4_medium"} sx={{ color: "neutral.N300" }}>
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
                  <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
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
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default ActiveJobsCard;
