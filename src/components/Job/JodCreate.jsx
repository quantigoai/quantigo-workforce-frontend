import {Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {getDataSetByProjectID} from '../../features/slice/dataSetSlice';
import {createJob} from '../../features/slice/jobSlice';
import {getProjectByWorkSpace} from '../../features/slice/projectByWorkspaceSlice';
import {getAllTeams} from '../../features/slice/teamSlice';
import {getWorkSpaceById} from '../../features/slice/workSpaceSlice';
import NotificationToaster from '../NotificationToaster/NotificationToaster';


const JodCreate = () => {
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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  useEffect(() => {
    dispatch(getAllTeams());

  }, []);


  const handlechangeTeam = (e) => {
    const getteamid = e.target.value;
    setTeamID(getteamid)

    dispatch(getWorkSpaceById(getteamid))

  };

  //  useEffect(()=>{
  //   dispatch(getWorkSpaceById(teamID))
  //  },[])
  const handlechangeWorkspace = (e) => {
    const getworkspaceid = e.target.value;
    setWorkSpaceID(getworkspaceid);

    dispatch(getProjectByWorkSpace(getworkspaceid))
  }
  const handlechangeProject = (e) => {
    const getprojectid = e.target.value;
    setProjectID(getprojectid);

    dispatch(getDataSetByProjectID(getprojectid))
  }
  const handlechangeDataset = (e, par) => {
    const getdatset = e.target.value;
    setDatasetID(getdatset);
    setDatasetID(par)

    // dispatch(getDataSetByProjectID(getdatset))


  }

  const onSubmit = (data) => {
    data.split = parseInt(data.split);
    console.log(data)
    dispatch(createJob(data)).then((action) => {
      if (action.payload?.status === 201 || 200) {
        setMessage("Job Pool Created");
        setVariant("success");
        setOpen(true);
      } else {
        setMessage("Job Not Pool");
        setVariant("danger");
        setOpen(true);
      }
    });

    // setMessage("Job Pull");
    // setVariant("success");
    // setOpen(true);
  }

  const paperstyle = { padding: '30px 0px', width: 1300, height: 750, margin: "10px auto" }

  return (
    <>

      <Grid>
        <div style={{ padding: "10px", paddingLeft: "5%" }}>
          <Paper elevation={5} style={paperstyle} sx={{ padding: "2%" }}>
            <Grid container style={{ paddingTop: "3%", paddingLeft: "40%" }} >
              <Typography variant='h4'>
                Job Pool

              </Typography>

            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container style={{ padding: "2%" }}>
                <Grid xs={3} style={{ padding: "1%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Team</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={(e) => handlechangeTeam(e)}
                      label="HUB"

                    >
                      {teams.map((team) => (
                        <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                      ))}


                    </Select>
                  </FormControl>

                </Grid>
                <Grid xs={3} style={{ padding: "1%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Work Space </InputLabel>
                    <Select

                      onChange={(e) => handlechangeWorkspace(e)}
                      label="workspace"

                    >
                      {workspaces.map((workspace) => (
                        <MenuItem key={workspace.id} value={workspace.id}>{workspace.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                </Grid>
                <Grid xs={3} style={{ padding: "1%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Project</InputLabel>
                    <Select

                      onChange={(e) => handlechangeProject(e)}
                      label="project"

                    >
                      {projects.map((project) => (
                        <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                </Grid>
                <Grid xs={3} style={{ padding: "1%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Data Set </InputLabel>
                    <Select

                      onChange={(e) => handlechangeDataset(e, 'par')}
                      label="dataset"
                      {...register("datasetId", { required: true })}
                    // onClick={handlehubselect}
                    >
                      {datasets.map((dataset) => (
                        <MenuItem key={dataset.id} par={dataset.imagesCount} value={dataset.id}>{dataset.name}    ({dataset.imagesCount})</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                </Grid>


              </Grid>
              <Grid container style={{ padding: "5%" }}>
                <Grid xs={6} style={{ padding: "2%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"

                      label="Image"
                      {...register("jobType", { required: true })}
                    // onChange={handleChange}
                    //   {...register("hub", { required: true })}
                    //   onClick={handlehubselect}
                    >
                      <MenuItem value={'tagging'}>Tag</MenuItem>
                      <MenuItem value={'labeling'}>Labeling</MenuItem>
                      {/* <MenuItem value={'image_classification'}>Image </MenuItem> */}
                      <MenuItem value={'all'}>All</MenuItem>

                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={6} style={{ padding: "2%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={"image"}
                      label="Image"
                      {...register("category", { required: true })}

                    >
                      <MenuItem value={'image'}>Image</MenuItem>
                      <MenuItem value={'video'}>Video</MenuItem>


                    </Select>
                  </FormControl>

                </Grid>
              </Grid>
              <Grid container style={{ padding: "5%" }}>
                <TextField
                  fullWidth
                  name="number"
                  type={"number"}
                  label="How many job create"
                  {...register("split", { required: true })}
                ></TextField>
              </Grid>

              <Grid container style={{ paddingLeft: "40%" }}>
                <Button variant="contained" type="submit"> job create</Button>
              </Grid>
            </form>
          </Paper>
        </div>
      </Grid>
      <NotificationToaster
        message={message}
        severity={variant}
        open={open}
        setOpen={setOpen}
      />

    </>
  )
}

export default JodCreate;