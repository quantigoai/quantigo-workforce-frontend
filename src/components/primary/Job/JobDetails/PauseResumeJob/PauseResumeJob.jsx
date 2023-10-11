import { Button, FormControl, Grid, InputLabel, MenuItem, Select, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import { pauseResumeJobs } from "../../../../../features/slice/jobSlice";

const ButtonStyle = styled(Button)({
  width: "100%",
  // height: "40px",
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const PauseResumeJob = ({ job }) => {
  const toast = useToaster();
  const dispatch = useDispatch();
  const handlePauseJob = (e, jobId) => {
    const data = {
      action: e.target.value,
      ids: [jobId],
    };
    dispatch(pauseResumeJobs(data)).then((action) => {
      if (action.payload?.status === 200) {
        action.payload.data[0].status === "paused"
          ? toast.trigger("Job Paused Successfully", "success")
          : toast.trigger("Job Resumed Successfully", "success");
      } else {
        toast.trigger("Something went wrong, Try again", "error");
      }
    });
  };
  return (
    <>
      <>
        <Grid container gap={3}>
          <Grid xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pause/Resume</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => handlePauseJob(e, job._id)}
                label="Pause/Resume"
                defaultValue={job.status === "inProgress" ? "" : "paused"}
              >
                <MenuItem value="paused">Pause</MenuItem>
                <MenuItem value="resume">Resume</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid  container  sx={{ justifyContent: "center" }}>
            <ButtonStyle>Change</ButtonStyle>
          </Grid> */}
        </Grid>
      </>
    </>
  );
};

export default PauseResumeJob;
