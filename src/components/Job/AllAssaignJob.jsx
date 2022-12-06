import React, {useEffect, useState} from 'react'
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {
    Box,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from '@mui/material';
import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../features/slice/userSlice";
import {
    assignedJobToAUser,
    getAllAssignedJob,
    getAllJobs,
    pauseResumeJobs,
    takeAjob
} from '../../features/slice/jobSlice';
import NotificationToaster from '../NotificationToaster/NotificationToaster';
import {useTheme} from "@emotion/react";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#5C5CFF",
        color: theme.palette.common.white,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const AllAssaignJob = () => {
    const [rows, setRows] = useState("");
    const [searched, setSearched] = useState("");
    const dispatch = useDispatch();
    const { jobs } = useSelector((state) => state.job);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("success");
    const { user } = useSelector((state) => state);
    const { assignedJob } = useSelector((state) => state.job);
    const { users } = useSelector((state) => state.user);
    const { role } = user.user;
    const { name } = user.user;
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    useEffect(() => {
        dispatch(getAllJobs())
        dispatch(getAllAssignedJob())
        dispatch(getAllUsers());
    }, [])

    //serach function
    const handleTakeJob = (id) => {
        dispatch(takeAjob(id));
        setMessage("Take Job");
        setVariant("success");
        setOpen(true);
    }
    const test = (job) => {

    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -100%)',
        //    paddingLeft :"20%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 1,
        p: 1,
    };
    const handleddetails = (id) => {
        setOpenModal(true);
    }
    const handleClose = () => setOpenModal(false);
    const paperstyle = { padding: "10px 20px", width: 1300, margin: "5px auto" };
    const detailasModalstyle = { padding: "10px 20px", width: "100%", height: "100%", margin: "5px auto" };

    // pagging table
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleReassaignedJob = (e, jobId) => {
        console.log(e.target.value)
        console.log(jobId)
        const data = {
            userid: e.target.value,
            jobid: jobId

        }

        dispatch(assignedJobToAUser(data))
    }

    // pause Job
    const handlePauseJob = (e, jobId) => {

        const data = {
            action: e.target.value,
            ids: [jobId]

        }
        console.log(data)
        dispatch(pauseResumeJobs(data))
    }


    return (
        <>

            {/* <div>
                <Grid container sx={{ paddingLeft: "5%" }}>
                    <Typography variant='h4' style={{ color: "#5C5CFF" }}>Job list</Typography>
                </Grid>
            </div> */}

            <div style={paperstyle}>


                <TableContainer >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead style={{ backgroundColor: "blue" }}>
                            <TableRow>

                                <StyledTableCell align="left">
                                    <TableSortLabel style={{ color: "#FFFFFF" }}>
                                        TITLE
                                    </TableSortLabel>
                                </StyledTableCell>
                                <StyledTableCell align="left">Annotator Name</StyledTableCell>
                                <StyledTableCell align="left">Reviwer Name</StyledTableCell>

                                <StyledTableCell align="left">Status</StyledTableCell>
                                <StyledTableCell align="left"> Reciwer Status</StyledTableCell>
                                <StyledTableCell align="left"> Reciwer Note</StyledTableCell>
                                <StyledTableCell align="left">Attempt Left</StyledTableCell>
                                <StyledTableCell align="left">Pause/Resume</StyledTableCell>
                                <StyledTableCell align="left">Reassigned job</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? assignedJob.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : assignedJob
                            ).map((job) => (
                                <StyledTableRow key={job._id}>

                                    <StyledTableCell align="left">{job.job.name}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        {job.annotator.name
                                        }
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {job.reviewer.name
                                        }
                                    </StyledTableCell>


                                    <StyledTableCell align="left">
                                        {job.status}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {job.reviewStatus}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {job.reviewNote}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {job.attemptLeft}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {job.status === "inProgress" ?

                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Pause/Resume</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    onChange={(e) => handlePauseJob(e, job._id)}
                                                    label="Pause/Resume"

                                                >
                                                    <MenuItem value="pause">Pause</MenuItem>
                                                    <MenuItem value="resume">Resume</MenuItem>



                                                </Select>
                                            </FormControl>
                                            : <></>
                                            }
                                    </StyledTableCell>
                                  
                                        <StyledTableCell align="left">
                                              {(job.status === "rejected" && job.attemptLeft === 0) ?
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">ReAssaigned</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    onClick={() => test(job)}
                                                    onChange={(e) => handleReassaignedJob(e, job.job.id)}
                                                    label="ReAssaigned"

                                                >
                                                    {users.map((user) =>
                                                        (user.role === "level_1_annotator"
                                                            || user.role === "level_2_annotator"
                                                            || user.role === "level_3_annotator"
                                                        ) && <MenuItem key={user._id} value={user._id}>{user.name}</MenuItem>

                                                    )}


                                                </Select>
                                            </FormControl>
                                             :
                                             <></>
                                         }
                                            
                                        </StyledTableCell>

                                    {/* <StyledTableCell >
                                        <Button onClick={() => handleddetails(job.id)}>Details</Button>
                                        <Modal
                                            open={openModal}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}><Grid>

                                                <Paper elevation={5} style={detailasModalstyle} sx={{}}>
                                                    <Grid container style={{ paddingTop: "3%" }} >
                                                        <Typography variant='h4'>

                                                            Action

                                                        </Typography>


                                                    </Grid>
                                                    <Grid>
                                                        <Typography variant='h4'>

                                                            Action
                                                            ({job._id})
                                                        </Typography>
                                                    </Grid>

                                                </Paper>
                                            </Grid>

                                            </Box>
                                        </Modal>
                                    </StyledTableCell> */}

                                </StyledTableRow>


                            ))}

                        </TableBody>

                    </Table>
                </TableContainer>

                <NotificationToaster
                    message={message}
                    severity={variant}
                    open={open}
                    setOpen={setOpen}
                />
            </div>
            <div style={{ paddingLeft: "60%" }}>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={jobs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: {
                            'aria-label': 'rows per page',
                        },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </div>
        </>
    )
}

export default AllAssaignJob;