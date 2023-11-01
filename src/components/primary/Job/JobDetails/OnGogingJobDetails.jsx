import { Grid, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import u_multiply from "../../../../assets/images/u_multiply.png";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import TakenTime from "../../../shared/CountDown/TakenTime";
import PauseResumeJob from "./PauseResumeJob/PauseResumeJob";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const OnGogingJobDetails = ({ job, setAnchorEl }) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 550,
          // padding: "4%",
        }}
        role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box sx={{ paddingTop: "4%", paddingLeft: "4%" }}>
          <Grid container>
            <Grid item xs={10}>
              <Typography variant="h6" sx={{ color: "#090080" }}>
                Details
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ justifyContent: "right" }}>
              <Button onClick={toggleDrawer(anchor, false)}>
                <img src={u_multiply} />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: "4%" }}>
          <Grid container>
            <Grid container sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Title
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {job.job.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Path
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {job.teamName} /{job.workspaceName}/{job.projectName}
                </Typography>
              </Grid>
            </Grid>

            <Grid container sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Reviewer
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {job?.reviewer?.qaiUserName}
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Reviewer Status
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {capitalizeFirstLetter(job.reviewStatus)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Taken Time
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  <TakenTime takenAt={job.takenAt} />
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Submitted Time
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  <TakenTime takenAt={job.submittedAt} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid sx={{ border: "1px solid #DADCDF" }}></Grid> */}
        </Box>
        {job.status === "inProgress" || job.status === "paused" ? (
          <>
            <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}>
              <Grid container>
                <Grid item xs={10}>
                  <Typography variant="h7" sx={{ color: "#090080" }}>
                    Pause Or Resume
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ padding: "4%" }}>
              <PauseResumeJob job={job} />
            </Box>{" "}
          </>
        ) : (
          <></>
        )}
        {/*  Reassign job ToDo List */}
        {/* {job.status === "expired" ? (
          <>
            <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}>
              <Grid container>
                <Grid item xs={10}>
                  <Typography variant="h7" sx={{ color: "#090080" }}>
                    Reassign
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ padding: "4%" }}>
              <ReassignedJobIndex job={job} />
            </Box>
          </>
        ) : (
          <></>
        )} */}
      </Box>
    </>
  );

  return (
    <>
      <Box>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <ButtonStyle variant="outlined" onClick={toggleDrawer(anchor, true)}>
              Details
            </ButtonStyle>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default OnGogingJobDetails;
