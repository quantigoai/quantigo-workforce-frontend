import React, {useEffect, useState} from 'react'
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {Grid, Table, TableBody, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {getAllJobs} from '../../../features/slice/jobSlice';

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

const JobIist = () => {
  const [rows, setRows] = useState("");
  const [searched, setSearched] = useState("");
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state);
  const { role } = user.user;
  const { name } = user.user;

  console.log(role);
  useEffect(() => {
    dispatch(getAllJobs());

  }, []);
  console.log(jobs);
  //serach function

  const paperstyle = { padding: "10px 20px", width: 1300, margin: "5px auto" };

  return (
    <>

      <div>
        <Grid container style={{ paddingLeft: "10%" }}>
          <Typography variant='h4'>Job list</Typography>
        </Grid>
      </div>

      <div style={paperstyle}>


        <TableContainer >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "blue" }}>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">TITLE</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Reviwer Id</StyledTableCell>
                <StyledTableCell align="left">No of Images</StyledTableCell>

                {/* <StyledTableCell align="left">Complete</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <StyledTableRow key={job._id}>
                  <StyledTableCell component="th" scope="row">
                    {job._id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{job.title}</StyledTableCell>
                  <StyledTableCell align="left">
                    {job.status}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {job.reviewer
                    }
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {job.images.length
                    }
                  </StyledTableCell>

                  {/* <StyledTableCell align="left">
                    <AssignmentTurnedInIcon style={{ color: "#1974D2" }} />
                  </StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default JobIist;