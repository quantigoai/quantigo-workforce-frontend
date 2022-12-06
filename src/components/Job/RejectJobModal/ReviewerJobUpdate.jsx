import {Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {createJob, getAllJobs} from '../../../features/slice/jobSlice';


const ReviewerJobUpdate = () => {
  const dispatch = useDispatch();
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const { datasets } = useSelector((state) => state.dataset);
  const { jobs } = useSelector((state) => state.job);


  const { register, handleSubmit } = useForm();
  const [teamID, setTeamID] = useState("");
  const [workspaceID, setWorkSpaceID] = useState("")
  const [projecID, setProjectID] = useState("")
  const [datasetID, setDatasetID] = useState("")
  const [imagecount, setimagecount] = useState("")

  useEffect(() => {

    dispatch(getAllJobs())
  }, []);




  const onSubmit = (data) => {
    console.log(data);
    dispatch(createJob(data))
    console.log(jobs);
  }

  const paperstyle = { padding: '0px 0px', width: 1300, height: 750, margin: "10px auto" }

  return (
    <>

      <Grid>
        <div >
          <Paper elevation={5} style={paperstyle} sx={{ padding: "2%" }}>
            <Grid container style={{ paddingTop: "3%", paddingLeft: "40%" }} >
              <Typography variant='h4'>
                Reviewer Update

              </Typography>

            </Grid>
            <form >
              <Grid container style={{ padding: "2%" }}>
                <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Job Name</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // onChange={(e) => handlechangeTeam(e)}
                      label="HUB"

                    >
                      {jobs.map((job) => (
                        <MenuItem key={job._id} value={job._id}>{job.title}</MenuItem>
                      ))}


                    </Select>
                  </FormControl>

                </Grid>
                <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                  <TextField
                    fullWidth
                    name="Comment"
                    label="Comment"
                  >

                  </TextField>
                </Grid>
                <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">JOB Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"

                      label="HUB"
                    // onChange={handleChange}
                    //   {...register("hub", { required: true })}

                    >
                      <MenuItem value={'male'}>Accept job</MenuItem>
                      <MenuItem value={'chuagange'}>modified</MenuItem>

                    </Select>
                  </FormControl>
                </Grid>

                <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                  <Button>Update</Button>
                </Grid>

              </Grid>

            </form>
          </Paper>
        </div>
      </Grid>

    </>
  )
}

export default ReviewerJobUpdate;