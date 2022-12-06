import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getABenchMarkByProjectId } from '../../features/slice/benchMarkSlice';
import { getProjectByWorkSpace } from '../../features/slice/projectByWorkspaceSlice';
import { getAllTeams } from '../../features/slice/teamSlice';
import { getWorkSpaceById } from '../../features/slice/workSpaceSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ShowBenchMark = () => {

    const { teams } = useSelector((state) => state.team);
    const { workspaces } = useSelector((state) => state.workspace);
    const { projects } = useSelector((state) => state.project);
    const { datasets } = useSelector((state) => state.dataset);
    const { jobs } = useSelector((state) => state.job);

    const { benchMark } = useSelector((state) => state.benchMark);

    const [teamID, setTeamID] = useState("");
    const [workspaceID, setWorkSpaceID] = useState("")
    const [projectId, setProjectID] = useState()
    const [datasetID, setDatasetID] = useState("")
    const [imagecount, setimagecount] = useState("")
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("success");
    const [classesBenchMark, setClassData] = useState([]);
    const [tagsBenchMark, setTagData] = useState([])
    const [averageCount, setAverageCount] = useState();
    const [timeValue, setTimeValue] = useState("");
    const dispatch = useDispatch();
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
        setWorkSpaceID(getworkspaceid);
        // console.log(workspaceID);
        dispatch(getProjectByWorkSpace(getworkspaceid))
    }
    const handlechangeProject = (e) => {
        const getprojectid = e.target.value;
        console.log(getprojectid);
        setProjectID(getprojectid);
        dispatch(getABenchMarkByProjectId(getprojectid))


    }
    console.log(benchMark)
    const handledeletebenchMark = (benchaMarkId) => {
        console.log(benchaMarkId)
        // dispatch(deleteABenchMarkById(benchaMarkId))
    }
    const [edit, serEdit] = useState("noeditable")
    const handelEdit = () => {
        serEdit("editAble")
    }

    // Modification BenchMark
    const handelModification = () => {

    }
    const paperstyle = { padding: '0px 0px', width: 1200, height: "100%", margin: "10px auto" }

    return (
        <>
            <div style={{ padding: "2%", paddingLeft: "2%" }}>
                <Paper elevation={5} style={paperstyle} sx={{ padding: "0%" }}>
                    <Grid container style={{ paddingTop: "3%", paddingLeft: "40%" }} >
                        <Typography variant='h4'>
                            Show Bench Mark

                        </Typography>

                    </Grid>

                    <Grid container style={{ padding: "2%" }}>


                        <Grid container xs={4} style={{ padding: "3%" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Team</InputLabel>

                                <Select

                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={(e) => handlechangeTeam(e)}
                                    label="Team"

                                >
                                    {teams.map((team) => (
                                        <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                                    ))}


                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container xs={4} style={{ padding: "3%" }}>
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
                        <Grid container xs={4} style={{ padding: "3%" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Project</InputLabel>
                                <Select

                                    onChange={(e) => handlechangeProject(e)}
                                    label="project"
                                //  {...register("projectId", { required: true })}
                                >
                                    {projects.map((project) => (
                                        <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        {benchMark ? <>
                            <Grid container xs={12} style={{ paddingLeft: "5%" }}>
                                <Typography variant='h4'>BenchMark Name : {benchMark.name}</Typography>
                            </Grid>
                            <Grid container xs={12} style={{ paddingLeft: "5%", paddingBottom: "5%" }}>
                                <Typography variant='h4'>
                                    BenchMark Description : {benchMark.description}
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='h4'>Class</Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ Width: "20%" }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Title</TableCell>
                                                <TableCell align="left">Time (Second)</TableCell>
                                                <TableCell align="left">Counnt (Avg)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {benchMark.classesBenchMark.map((row) => (
                                                <TableRow

                                                    key={row.title}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="left"

                                                    >{row.title}</TableCell>
                                                    {edit === "editAble" ? <TableCell align="left" >
                                                        <TextField
                                                            defaultValue={row.value}></TextField>

                                                    </TableCell> :
                                                        <TableCell align="left" >

                                                            {row.value}
                                                        </TableCell>}
                                                    {edit === "editAble" ? <TableCell align="left" >
                                                        <TextField
                                                            defaultValue={row.averageCount}></TextField>

                                                    </TableCell> :
                                                        <TableCell align="left" >
                                                            {row.averageCount}
                                                        </TableCell>
                                                    }


                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='h4'>Tag</Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ Width: "20%" }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Title</TableCell>
                                                <TableCell align="left">Time (Second)</TableCell>
                                                <TableCell align="left">Counnt (Avg)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {benchMark.tagsBenchMark.map((row) => (
                                                <TableRow

                                                    key={row.title}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="left"

                                                    >{row.name}
                                                    </TableCell>
                                                    {edit === "editAble" ?
                                                        <TableCell align="left" >
                                                            <TextField
                                                                name="number"
                                                                InputProps={{
                                                                    inputProps: { min: 0 }
                                                                }}
                                                                onKeyPress={(event) => {
                                                                    if (event?.key === '-' || event?.key === '+') {
                                                                        event.preventDefault();
                                                                    }
                                                                }}
                                                                type={"number"}
                                                                defaultValue={row.value}
                                                            // onBlur={(e) => setTimeValue(e.target.value)}
                                                            >

                                                            </TextField>

                                                        </TableCell>
                                                        :
                                                        <TableCell align="left" >
                                                            {row.value}

                                                        </TableCell>}
                                                    {edit === "editAble" ?
                                                        <TableCell align="left" >
                                                            <TextField
                                                                name="number"
                                                                InputProps={{
                                                                    inputProps: { min: 0 }
                                                                }}
                                                                onKeyPress={(event) => {
                                                                    if (event?.key === '-' || event?.key === '+') {
                                                                        event.preventDefault();
                                                                    }
                                                                }}
                                                                type={"number"}
                                                                defaultValue={row.averageCount}>
                                                                {/* onBlur={(e) => testTag(e, row.id, row.name)} */}
                                                            </TextField>

                                                        </TableCell> :
                                                        <TableCell align="left" >
                                                            {row.averageCount}
                                                        </TableCell>
                                                    }


                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Grid>


                            <Grid container xs={4} style={{ padding: "3%", justifyContent: "center" }}>
                                <Typography variant='h4'>Image</Typography>
                            </Grid>


                            <Grid container xs={4} style={{ padding: "3%" }}>
                                {edit === "editAble" ?
                                    <TextField
                                        defaultValue={benchMark.imageBenchMark.value}>

                                    </TextField>
                                    :
                                    <Typography variant='h6'>Time (Second) : {benchMark.imageBenchMark.value}</Typography>}

                            </Grid>
                            <Grid container xs={4} style={{ padding: "3%" }}>
                                {edit === "editAble" ?
                                    <TextField
                                        defaultValue={benchMark.imageBenchMark.averageCount}>

                                    </TextField>
                                    :
                                    <Typography variant='h6'>Counnt (Avg) :  {benchMark.imageBenchMark.averageCount}</Typography>}


                            </Grid>
                            <Grid xs={6}>
                                <Button onClick={() => handledeletebenchMark(benchMark._id)}><DeleteForeverIcon />Delete BenchMark</Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button onClick={() => handelEdit()}> Update BenchMark</Button>
                            </Grid>
                            {edit === "editAble" ?
                                <Grid xs={6}>
                                    <Button onClick={() => handelModification()}> modification BenchMark  </Button>
                                </Grid>
                                :
                                <></>
                            }

                        </>
                            :
                            <>
                            </>
                        }







                    </Grid>

                </Paper>
            </div>



        </>
    )
}

export default ShowBenchMark