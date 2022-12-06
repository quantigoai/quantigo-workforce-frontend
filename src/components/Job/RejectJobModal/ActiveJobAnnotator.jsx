import React, {useEffect, useState} from 'react'
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {Button, Grid, Table, TableBody, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {getMyJobs, submitAJob} from '../../../features/slice/jobSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.common.white,
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

const ActiveJobAnnotator = () => {
    const [rows, setRows] = useState("");
    const [searched, setSearched] = useState("");
    const dispatch = useDispatch();
    const { myJobs } = useSelector((state) => state.job);
    const [dateState, setDateState] = useState();
    // const [takenTime, SettakenTime] =useState()
   
    useEffect(() => {
        // dispatch(getAllJobs());
        dispatch(getMyJobs());
        console.log(myJobs);
    }, []);

    const handletakenTime = (takenTime) => {
        const takentime = new Date("takenTime").getTime()
        const nowtimeAt = new Date().getTime
        setDateState(takentime - nowtimeAt)
        console.log(dateState);
    }
    const handleSubmitJob = (id) => {
        dispatch(submitAJob(id))
    }


    //serach function

    const paperstyle = { padding: "10px 20px", width: 1300, margin: "5px auto" };

    return (
        <>

            <div>
                <Grid container>
                    <Typography variant='h4'>Active Job</Typography>
                </Grid>
            </div>

            <div style={paperstyle}>


                <TableContainer >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead style={{ backgroundColor: "blue" }}>
                            <TableRow>

                                <StyledTableCell align="left">ID</StyledTableCell>


                                <StyledTableCell align="left">Reviewer</StyledTableCell>
                                <StyledTableCell align="left">Start Job</StyledTableCell>
                                < StyledTableCell align="left">submit job</StyledTableCell>
                                < StyledTableCell align="left">Status</StyledTableCell>
                                < StyledTableCell align="left">Reviewer Status</StyledTableCell>
                                < StyledTableCell align="left">Reviewer Note</StyledTableCell>
                                {/* < StyledTableCell align="left">Time Left</StyledTableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {myJobs.map((job) => (
                                <StyledTableRow key={job._id}>

                                    <StyledTableCell align="left">{job.job}</StyledTableCell>


                                    <StyledTableCell align="left">
                                        {job.reviewer}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Button >Link</Button>

                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {(job.status === "completed" && job.reviewStatus === "accepted") || (job.status === "completed" && job.reviewStatus === "pending") ? <Button disabled>Submit</Button> : <Button onClick={() => handleSubmitJob(job._id)}>Submit</Button>}


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
                                    <StyledTableCell align="left" handleTakenTime={()=>handletakenTime(job.takenAt)} >
                                        
                                        
                                        {dateState}
                                        {/* {handletakenTime(job.takenAt)} */}
                                    </StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default ActiveJobAnnotator;