import React, {useEffect, useState} from 'react'
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import {getDataSetByProjectID} from '../../features/slice/dataSetSlice';
import {getProjectByWorkSpace} from '../../features/slice/projectByWorkspaceSlice';
import {getWorkSpaceById} from '../../features/slice/workSpaceSlice';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from 'react-hook-form';
import {getAllTeams} from '../../features/slice/teamSlice';
import {calculateAnnotation} from '../../features/slice/benchMarkSlice';


const CalculateAnnotation = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [teamID, setTeamID] = useState("");
  const [workspaceID, setWorkSpaceID] = useState("")
  const [projecID, setProjectID] = useState("")
  const [datasetID, setDatasetID] = useState("")
  const [imagecount, setimagecount] = useState("")
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const { datasets } = useSelector((state) => state.dataset);
  const { annotationsCount, totalAnnotationsCount } = useSelector((state) => state.benchMark.benchMarks);
  const { timeCalculation } = useSelector((state) => state.benchMark.benchMarks);
  const { totalTimeCalculation } = useSelector((state) => state.benchMark.benchMarks)
  const { benchMark } = useSelector((state) => state)

  const [classes, setClasses] = useState([])
  const [testarray, setTestarray] = useState({})
  const [userList, setUserIist] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  const handlechangeTeam = (e) => {
    const getteamid = e.target.value;
    setTeamID(getteamid)
    dispatch(getWorkSpaceById(getteamid))
  };

  const handlechangeWorkspace = (e) => {
    const getworkspaceid = e.target.value;
    dispatch(getProjectByWorkSpace(getworkspaceid))
  }

  const handlechangeProject = (e) => {
    const getprojectid = e.target.value;
    setProjectID(getprojectid);
    dispatch(getDataSetByProjectID(getprojectid))
  }


  useEffect(() => {
    totalTimeCalculation?.classes && setClasses(totalTimeCalculation.classes)
    classes.length > 0 && setUserIist(Object.keys(classes));

  }, [totalTimeCalculation])


  const handlechangeDataset = async (e) => {
    setIsLoading(true);
    setClasses([])
    const datasetId = e.target.value;
    dispatch(calculateAnnotation(datasetId)).then((res) => {
      setIsLoading(false)
    })
  }
  const userName = Object.keys(classes);


  const paperstyle = { padding: '30px 0px', width: "100", height: "100%", margin: "10px auto" }

  return (
    <>
      <Box style={{ padding: "10px", paddingLeft: "5%" }}>
        <Paper elevation={5} style={paperstyle} sx={{ padding: "2%" }}>
          <Grid container style={{ paddingTop: "3%", paddingLeft: "0%" }} >
            <Typography variant='h4' style={{ paddingLeft: "40%" }}>
              Calculate Annotation
            </Typography>
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
                    onChange={(e) => handlechangeDataset(e)}
                    label="dataset"
                  >
                    {datasets.map((dataset) => (
                      <MenuItem key={dataset.id} value={dataset.id}>{dataset.name}  ---({dataset.id})</MenuItem>
                    ))}
                  </Select>
                </FormControl>

              </Grid>
              <Grid xs={12}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">

                    <TableHead>

                      <TableRow>

                        <TableCell>Quaiantigo Ai ID</TableCell>
                        {/* <TableCell align="left">No. of Images</TableCell> */}
                        <TableCell align="left">NO .Of Tags</TableCell>
                        <TableCell align="left">No. of Objects</TableCell>
                        <TableCell align="left">Effective Work hour</TableCell>
                        <TableCell align="left">Effective Work Second</TableCell>

                      </TableRow>

                    </TableHead>

                    {
                      isLoading ?

                        <TableBody>
                          <TableCell align="left">
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={true} />
                          </TableCell>
                          <TableCell align="left">
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={true} />
                          </TableCell>
                          <TableCell align="left">
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={true} />
                          </TableCell>
                          <TableCell align="left">
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={true} />
                          </TableCell>
                          <TableCell align="left">
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={true} />
                          </TableCell>

                        </TableBody>

                        :

                        <TableBody>
                          {userName.map((user) => (
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell align="left">{user}</TableCell>
                              {/* <TableCell align='left'> </TableCell> */}
                              <TableCell align='left'>{totalAnnotationsCount.tags ? totalAnnotationsCount.tags[user] || 0 : 0}</TableCell>
                              <TableCell align='left'>{totalAnnotationsCount.classes ? totalAnnotationsCount.classes[user] || 0 : 0}</TableCell>
                              <TableCell align="left">{classes[user] / 3600}</TableCell>
                              <TableCell align="left">{classes[user]}</TableCell>

                            </TableRow>
                          ))}

                        </TableBody>

                    }
                  </Table>
                </TableContainer>

              </Grid>
            </Grid>

          </Grid>

        </Paper>
      </Box>
    </>
  )
}

export default CalculateAnnotation;