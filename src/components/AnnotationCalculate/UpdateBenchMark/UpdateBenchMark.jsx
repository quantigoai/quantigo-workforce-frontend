import {
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {getProjectMeta} from '../../../features/slice/benchMarkSlice';
import {getProjectByWorkSpace} from '../../../features/slice/projectByWorkspaceSlice';
import {getAllTeams} from '../../../features/slice/teamSlice';
import {getWorkSpaceById} from '../../../features/slice/workSpaceSlice';
import NotificationToaster from '../../NotificationToaster/NotificationToaster';


const UpdateBenchMark = () => {
    const initialValues = {
        value: "",
        averageCount: "",

    };
    const initialTagValues = {
        value: "",
        averageCount: "",
    }



    const dispatch = useDispatch();
    const { teams } = useSelector((state) => state.team);
    const { workspaces } = useSelector((state) => state.workspace);
    const { projects } = useSelector((state) => state.project);
    const { datasets } = useSelector((state) => state.dataset);
    const { jobs } = useSelector((state) => state.job);
    const { classes } = useSelector((state) => state.benchMark.prjectMetas);
    const { tags } = useSelector((state) => state.benchMark.prjectMetas);
    const { prjectMetas } = useSelector((state) => state.benchMark);

    const { register, handleSubmit } = useForm();
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

    const [imageBenchMark, setValues] = useState(initialValues);

    useEffect(() => {
        dispatch(getAllTeams());

    }, []);
    const handlechangeTeam = (e) => {
        const getteamid = e.target.value;
        setTeamID(getteamid)

        dispatch(getWorkSpaceById(getteamid))

    };

    //  console.log(teamID);
    //  useEffect(()=>{
    //   dispatch(getWorkSpaceById(teamID))
    //  },[])
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
        dispatch(getProjectMeta(getprojectid))


    }



    const onSubmit = (data) => {
        data.imageBenchMark = parseInt(data.imageBenchMark);
        imageBenchMark.value = parseInt(imageBenchMark.value)
        imageBenchMark.averageCount = parseInt(imageBenchMark.averageCount)

        const data1 = {
            ...data,
            projectId,
            classesBenchMark,
            tagsBenchMark,
            imageBenchMark
        }

        // dispatch(createBenchMark(data1)).then((action) => {
        //     if (action.payload?.status === 201 || 200) {
        //         setMessage("BenchMark created successfully");
        //         setVariant("success");
        //         setOpen(true);
        //     } else {
        //         setMessage("BenchMark not create");
        //         setVariant("danger");
        //         setOpen(true);
        //     }
        // });

        // setMessage("BenchMark created successfully");
        // setVariant("success");
        // setOpen(true);


    }

    const testClass = (e, id, name) => {

        const data = {
            id,
            title: name,
            value: timeValue,
            averageCount: e.target.value
        }
        data.value = parseInt(data.value)
        data.averageCount = parseInt(data.averageCount)
        setClassData([
            ...classesBenchMark,
            data
        ])
    }

    const testTag = (e, id, name) => {

        const data = {
            id,
            name,
            value: timeValue,
            averageCount: e.target.value
        }
        data.value = parseInt(data.value)
        data.averageCount = parseInt(data.averageCount)
        setTagData([
            ...tagsBenchMark,
            data
        ])
    }

    const testimageBenchMark = () => {

    }
    //  radio Button
    const [value, setValue] = React.useState('bench');
    const [value1, setValue1] = React.useState('bench');
    const handleChange = (event) => {
        setValue(event.target.value);

    };


    const handleChangeTag = (event) => {
        setValue1(event.target.value);

    };





    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...imageBenchMark,
            [name]: value,

        });
    };



    const paperstyle = { padding: '0px 0px', width: "100%", height: "100%", margin: "10px auto" }

    return (
        <>

            <div style={{ padding: "2%", paddingLeft: "2%" }}>
                <Paper elevation={5} style={paperstyle} sx={{ padding: "0%" }}>
                    <Grid container style={{ paddingTop: "3%", paddingLeft: "40%" }} >
                        <Typography variant='h4'>
                            Update Bench Mark

                        </Typography>

                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container style={{ padding: "2%" }}>
                            <Grid container xs={12} style={{ padding: "3%" }}>
                                <TextField
                                    fullWidth
                                    name="Name"
                                    label="Name"
                                    {...register("name", { required: true })}
                                >

                                </TextField>
                            </Grid>
                            <Grid container xs={12} style={{ padding: "3%" }}>
                                <TextField
                                    fullWidth
                                    name="description"
                                    label="Description"
                                    {...register("description", { required: true })}
                                >

                                </TextField>
                            </Grid>
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
                            {/* <Grid container style={{ paddingLeft: "40%" }}>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="bench" control={<Radio />} label="Add Bench Mark" />
                                    <FormControlLabel value="auto" control={<Radio />} label="flat bench Mark" />
                                </RadioGroup>
                            </Grid> */}
                            <Grid container style={{ padding: "3%" }}>
                                <Grid xs={6}>
                                    <Typography variant='h5'>Classes</Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography variant='h5'>Tag</Typography>
                                </Grid>
                                {classes ?
                                    <Grid container xs={6} style={{ padding: "1%" }}>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="bench" control={<Radio />} label="Indivitual" />
                                            <FormControlLabel value="auto" control={<Radio />} label="Flat bench Mark" />
                                        </RadioGroup>
                                        {value === "bench" ?
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
                                                        {classes.map((row) => (
                                                            <TableRow

                                                                key={row.title}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell align="left"
                                                                // {...register("name", { required: true })}
                                                                >{row.title}</TableCell>
                                                                {/* <FormControl onSelect={(e) => testClass(e, row.id, row.title)} align="left" sx={{ display: "flex" }}> */}
                                                                <TableCell align="left" >
                                                                    <TextField
                                                                        fullWidth
                                                                        InputProps={{
                                                                            inputProps: { min: 0 }
                                                                        }}
                                                                        onKeyPress={(event) => {
                                                                            if (event?.key === '-' || event?.key === '+') {
                                                                                event.preventDefault();
                                                                            }
                                                                        }}
                                                                        name="number"
                                                                        type={"number"}
                                                                        label="Second"

                                                                        onBlur={(e) => setTimeValue(e.target.value)}
                                                                    // {...register("value", { required: true })}
                                                                    >
                                                                    </TextField>

                                                                </TableCell>
                                                                <TableCell align="left" >
                                                                    <TextField
                                                                        fullWidth
                                                                        InputProps={{
                                                                            inputProps: { min: 0 }
                                                                        }}
                                                                        onKeyPress={(event) => {
                                                                            if (event?.key === '-' || event?.key === '+') {
                                                                                event.preventDefault();
                                                                            }
                                                                        }}
                                                                        name="number"
                                                                        type={"number"}
                                                                        label="Count"
                                                                        onBlur={(e) => testClass(e, row.id, row.title)}
                                                                    // onBlur={(e) => setAverageCount(e.target.value)}
                                                                    // onBlur={(e) => testClass(row.id, row.title, e)}
                                                                    // {...register("averageCount", { required: true })}
                                                                    >
                                                                    </TextField>
                                                                </TableCell>
                                                                {/* </FormControl> */}


                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer> : <>
                                                <TableContainer component={Paper}>
                                                    <Table sx={{ Width: "20%" }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell></TableCell>
                                                                <TableCell align="left">Time (Second)</TableCell>
                                                                <TableCell align="left">Counnt (Avg)</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>

                                                            <TableRow
                                                                // key={row.title}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell align="left"
                                                                // {...register("name", { required: true })}
                                                                >Bench Mark</TableCell>
                                                                <TableCell align="left">
                                                                    <TextField
                                                                        fullWidth
                                                                        name="number"
                                                                        type={"number"}
                                                                        label="value"

                                                                    // onBlur={(e) => testClass(row.id, row.title, e)}
                                                                    // {...register("value", { required: true })}
                                                                    >
                                                                    </TextField>



                                                                </TableCell>
                                                                <TableCell align="left">
                                                                    <TextField
                                                                        fullWidth
                                                                        name="number"
                                                                        type={"number"}
                                                                        label="Count"

                                                                    // onBlur={(e) => testClass(row.id, row.title, e)}
                                                                    // {...register("value", { required: true })}
                                                                    >
                                                                    </TextField>
                                                                </TableCell>

                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>


                                            </>}
                                    </Grid>
                                    : <></>
                                }
                                {tags ?
                                    <Grid container xs={6} style={{ padding: "1%" }}>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value1}
                                            onChange={handleChangeTag}
                                        >
                                            <FormControlLabel value="bench" control={<Radio />} label="Indivitual" />
                                            <FormControlLabel value="auto" control={<Radio />} label="Flat bench Mark" />
                                        </RadioGroup>
                                        {value1 === "bench" ?
                                            <TableContainer component={Paper}>
                                                <Table sx={{ Width: "20%" }} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Title</TableCell>
                                                            <TableCell align="left">Time (Second)</TableCell>
                                                            <TableCell align="left">Count (Avg)</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {tags.map((row) => (
                                                            <TableRow
                                                                key={row.name}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >

                                                                <TableCell align="left"
                                                                // {...register("name", { required: true })}
                                                                >{row.name}</TableCell>
                                                                <TableCell align="left">

                                                                    <TextField
                                                                        fullWidth
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
                                                                        label="Second"
                                                                        onBlur={(e) => setTimeValue(e.target.value)}
                                                                    // onChange={(e) => setTimeValue(e.target.value)}
                                                                    // onBlur={(e) => testTag(row.id, row.name, e)}
                                                                    // {...register("value", { required: true })}
                                                                    ></TextField>
                                                                </TableCell>

                                                                <TableCell align="left">                                                                <TextField
                                                                    fullWidth
                                                                    InputProps={{
                                                                        inputProps: { min: 0 }
                                                                    }}
                                                                    onKeyPress={(event) => {
                                                                        if (event?.key === '-' || event?.key === '+') {
                                                                            event.preventDefault();
                                                                        }
                                                                    }}
                                                                    name="number"
                                                                    min="0"
                                                                    type={"number"}
                                                                    label="Count"
                                                                    onBlur={(e) => testTag(e, row.id, row.name)}
                                                                // onBlur={(e) => testTag(row.id, row.name, e)}
                                                                // onChange={(e) => setAverageCount(e.target.value)}
                                                                // {...register("averageCount", { required: true })}
                                                                ></TextField>
                                                                </TableCell>


                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer> :
                                            <TableContainer component={Paper}>
                                                <Table sx={{ Width: "20%" }} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell></TableCell>
                                                            <TableCell align="left">Time (Second)</TableCell>
                                                            <TableCell align="left">Counnt (Avg)</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>

                                                        <TableRow
                                                            // key={row.title}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell align="left"
                                                            // {...register("name", { required: true })}
                                                            >Bench Mark
                                                            </TableCell>
                                                            <TableCell align="left">
                                                                <TextField
                                                                    fullWidth
                                                                    name="number"
                                                                    type={"number"}
                                                                    label="Second"
                                                                // onBlur={(e) => testClass(row.id, row.title, e)}
                                                                // {...register("value", { required: true })}
                                                                >
                                                                </TextField>



                                                            </TableCell>
                                                            <TableCell align="left">
                                                                <TextField
                                                                    fullWidth
                                                                    name="number"
                                                                    type={"number"}
                                                                    label="Count"
                                                                // onBlur={(e) => testClass(row.id, row.title, e)}
                                                                // {...register("value", { required: true })}
                                                                >
                                                                </TextField>
                                                            </TableCell>

                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>}
                                    </Grid>
                                    : <></>
                                }
                            </Grid>
                            <Grid container xs={4} style={{ padding: "3%", justifyContent: "center" }}>
                                <Typography variant='h4'>Image</Typography>
                            </Grid>


                            <Grid container xs={4} style={{ padding: "3%" }}>
                                <TextField
                                    fullWidth
                                    value={imageBenchMark.value}
                                    onChange={handleInputChange}
                                    inputmode="numeric"
                                    name="value"
                                    label="Value"
                                ></TextField>

                            </Grid>
                            <Grid container xs={4} style={{ padding: "3%" }}>
                                <TextField
                                    value={imageBenchMark.averageCount}
                                    onChange={handleInputChange}
                                    name="averageCount"
                                    label="Count (Avg)"
                                ></TextField>

                            </Grid>



                            <Grid container xs={12} style={{ padding: "3%", justifyContent: "center" }}>
                                <Button variant="contained" type="submit">Create</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>
            </div>
            <NotificationToaster
                message={message}
                severity={variant}
                open={open}
                setOpen={setOpen}
            />

        </>
    )
}

export default UpdateBenchMark;