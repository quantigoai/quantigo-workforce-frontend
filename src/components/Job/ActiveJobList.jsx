import React, {useEffect, useState} from 'react'

import TableCell, {tableCellClasses} from "@mui/material/TableCell";

import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";

import {getMyJobs, submitAJob, updateReviewerStatus} from '../../features/slice/jobSlice';

import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import MoveUpIcon from '@mui/icons-material/MoveUp';

import {useForm} from 'react-hook-form';
import NotificationToaster from '../NotificationToaster/NotificationToaster';


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

const ActiveJobList = () => {

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { myJobs } = useSelector((state) => state.job);

  const [RejectId, setRejectId] = React.useState("");
  const [RejectName, setRejectName] = React.useState("");
  const { user } = useSelector((state) => state);
  const { role } = user.user;



  useEffect(() => {
    dispatch(getMyJobs());
  }, []);

  const handleRejectJob = (id, name) => {
    setOpenModal(true);
    setRejectId(id);
    setRejectName(name)

  }
  const handleClose = () => setOpenModal(false);

  const handleSubmitJob = (id) => {
    dispatch(submitAJob(id)).then((action) => {
      if (action.payload?.status === 200 || 201) {
        setMessage("Job submit successfully");
        setVariant("success");
        setOpen(true);
      } else if (action.payload?.status === 400) {
        setMessage(action.payload.message);
        setVariant("error");
        setOpen(true);
      }
    })

  }


  const onSubmit = (data) => {

    const newData = {
      id: RejectId,
      data: data
    }
    dispatch(updateReviewerStatus(newData))
    setOpen(false)

  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //    paddingLeft :"20%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 10,
    p: 1,
  };
  const paperstyle = { padding: "10px 20px", width: 1300, margin: "5px auto" };
  const handleClick = (joblink) => {

    window.open(joblink);
  };
  return (
    <>

      <div>
        <Grid container>
          <Typography variant='h4'>{role} Job list</Typography>
        </Grid>
      </div>

      <div style={paperstyle}>


        <TableContainer >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "blue" }}>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                {/* <StyledTableCell align="left">Annotator</StyledTableCell> */}
                {role === "reviewer" ? <StyledTableCell align="left">Annotator</StyledTableCell> : <StyledTableCell align="left">Reviewer</StyledTableCell>}

                {role === "reviewer" ? <StyledTableCell align="left">Annotator status	</StyledTableCell> : <StyledTableCell align="left">Status</StyledTableCell>}
                {role === "reviewer" ? <StyledTableCell align="left">ReviewStatus</StyledTableCell> : <StyledTableCell align="left">ReviewStatus</StyledTableCell>}
                {role === "reviewer" ? <StyledTableCell align="left">Action</StyledTableCell> : <StyledTableCell align="left">	submit job</StyledTableCell>}
                {role === "reviewer" ? <></> : <StyledTableCell align="left">	Reviewer Note</StyledTableCell>}
                {role === "reviewer" ? <></> : <StyledTableCell align="left">	Attempt left</StyledTableCell>}
                {role === "reviewer" ? <></> : <StyledTableCell align="left">	Go job</StyledTableCell>}
                {/* <StyledTableCell align="left">ReviewStatus</StyledTableCell> */}


              </TableRow>
            </TableHead>
            <TableBody>
              {myJobs.map((job) => (
                <StyledTableRow key={job._id}>

                  <StyledTableCell component="th" scope="row">
                    {job?.job?.name}
                  </StyledTableCell>
                  {role === "reviewer" ? <StyledTableCell align="left">{job?.annotator?.name}</StyledTableCell> : <StyledTableCell align="left">{job?.reviewer?.name}</StyledTableCell>}


                  {role === "reviewer" ? <StyledTableCell align="left">{job.status}</StyledTableCell> : <StyledTableCell align="left">{job.status}</StyledTableCell>}

                  {/* <StyledTableCell align="left">
                    {job.reviewStatus
                    }
                  </StyledTableCell> */}


                  {role === "reviewer" ? <StyledTableCell align="left">{job.reviewStatus}</StyledTableCell> : <StyledTableCell align="left">{job.reviewStatus}</StyledTableCell>}

                  {
                    role === "reviewer" ?

                      <StyledTableCell align="left">
                        {
                          // (job.status === "completed" && job.reviewStatus === "rejected") || (job.status === "completed" && job.reviewStatus === "pending")
                          (job.status === "reviewing")
                            ?
                            <>
                              <Button onClick={() => handleRejectJob(job._id, job.job.name)}><SwipeRightIcon />Action</Button>

                              <Modal
                                open={openModal}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                  <Grid>
                                    <div >
                                      <Paper elevation={5} style={paperstyle} sx={{}}>
                                        <Grid container style={{ paddingTop: "3%", paddingLeft: "30%" }} >
                                          <Typography variant='h4'>
                                            {RejectName}

                                            {/* ({job._id}) */}

                                          </Typography>

                                        </Grid>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                          <Grid container style={{ padding: "2%" }}>
                                            <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                                              <InputLabel id="demo-simple-select-label">ReviewStatus</InputLabel>
                                              <Select
                                                fullWidth
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"

                                                label="reviewStatus"

                                                {...register("reviewStatus", { required: true })}

                                              >
                                                <MenuItem value={'rejected'}>Rejected</MenuItem>
                                                <MenuItem value={'accepted'}>Accepted</MenuItem>

                                              </Select>

                                            </Grid>
                                            <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                                              <TextField
                                                fullWidth
                                                name="Comment"
                                                label="Comment"
                                                {...register("reviewNote", { required: true })}
                                              >

                                              </TextField>
                                            </Grid>

                                            <Grid container xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%", justifyContent: "center" }}>
                                              <Button variant="contained" type="submit">Update</Button>
                                            </Grid>

                                          </Grid>

                                        </form>
                                      </Paper>
                                    </div>
                                  </Grid>
                                </Box>

                              </Modal>

                            </> : <></>}
                      </StyledTableCell>
                      :  
                      <StyledTableCell>
                        {((job.status === "inProgress" &&  !job.isExpired) || (job.status === "rechecked" &&  !job.isExpired)) ?
                          <Button onClick={() => handleSubmitJob(job._id)}>Submit</Button>
                          :
                          <Button disabled>Submit</Button>}
                      </StyledTableCell>}
                  {
                    role === "reviewer" ? <></>
                      : <StyledTableCell> {job.reviewNote}</StyledTableCell>
                  }
                  {
                    role === "reviewer" ? <></>
                      : <StyledTableCell> {job.attemptLeft}</StyledTableCell>
                  }
                  {
                    role === "reviewer" ? <></>
                      : <StyledTableCell> <Button onClick={() => handleClick(job.jobLink)} ><MoveUpIcon /></Button></StyledTableCell>
                  }

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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

export default ActiveJobList;