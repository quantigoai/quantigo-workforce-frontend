/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/OngoingJob.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 12:38:27 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import TableCell from "@mui/material/TableCell";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import {
  Box,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { assignedJobToAUser, getAllAssignedJob } from "../../../features/slice/jobSlice";
import { getAllUsers } from "../../../features/slice/userSlice";
// import NotificationToaster from "../NotificationToaster/NotificationToaster";
import { useTheme } from "@emotion/react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import DateAndTime from "../../shared/CountDown/DateAndTime";
import TakenTime from "../../shared/CountDown/TakenTime";
import SearchBar from "../../shared/SearchBar/SearchBar";
import OnGogingJobDetails from "./JobDetails/OnGogingJobDetails";
import JobStatusField from "./JobStatusBox/JobStatusField";
import useToaster from "../../../customHooks/useToaster";

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
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const OngoingJob = ({ action }) => {
  const alert = useAlert();

  const toast = useToaster();
  const [rows, setRows] = useState("");
  const [searched, setSearched] = useState("");
  const dispatch = useDispatch();
  const { assignedJob } = useSelector((state) => state.job);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [filterAssignedJob, setFilterAssignedJob] = useState([]);
  useEffect(() => {
    // dispatch(getAllJobs());
    dispatch(getAllAssignedJob());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (action === "archiveJob") {
      setFilterAssignedJob(
        assignedJob.filter((job) => job.status === "rejected" || job.status === "completed" || job.status === "expired")
      );
    } else if (action === "jobs") {
      setFilterAssignedJob(
        assignedJob.filter(
          (job) =>
            !job.status.includes("rejected") && !job.status.includes("completed") && !job.status.includes("expired")
        )
      );
    } else {
      setFilterAssignedJob(assignedJob);
    }
  }, [action, assignedJob]);

  // pagging table
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleReassignedJob = (e, jobId) => {
    const data = {
      userid: e,
      jobid: jobId,
    };

    dispatch(assignedJobToAUser(data)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("Job Reassigned Successfully", { type: "success" });
      } else {
        alert.show("Job Can not Reassigned", { type: "error" });
      }
    });
  };

  // pause Job
  // const handlePauseJob = (e, jobId) => {
  //   const data = {
  //     action: e.target.value,
  //     ids: [jobId],
  //   };
  //   dispatch(pauseResumeJobs(data)).then((action) => {
  //     if (action.payload?.status === 200) {
  //       action.payload.data[0].status === "paused"
  //         ? alert.show("Job Paused Successfully", { type: "success" })
  //         : alert.show("Job Resumed Successfully", { type: "success" });
  //     } else {
  //       alert.show("Something went wrong, Try again", { type: "error" });
  //     }
  //   });
  // };

  const paperStyle = {
    padding: "0px 0px",
    width: "100%",
    height: "100%",
  };

  // TODO Make a search bar component
  const [searchAnchorEl, setSearchAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setSearchAnchorEl(searchAnchorEl ? null : event.currentTarget);
  };

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = filterAssignedJob.filter((entry) =>
    Object.values(entry).some((val) => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Box>
        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid
            container
            style={{
              paddingTop: "2%",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "0%",
            }}
          >
            <SearchBar placeholder="Search Job" onChange={handleChange} handleClick={handleClick} />
          </Grid>
          <Grid
            container
            style={{
              paddingTop: "2%",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "3%",
            }}
          >
            <TableContainer>
              <Table aria-label="simple table" sx={{ border: "1px solid #DADCDF" }}>
                {/* TODO : Convert this in a separate component  */}
                <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                  <TableRow>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      No
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Title
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Annotator
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Reviewer
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Status
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Taken Time
                    </TableCell>

                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Attempt Left
                    </TableCell>
                    {/* <TableCell
                      align="left"
                      sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Pause/Resume
                    </TableCell> */}

                    <TableCell align="left" sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : filtered
                  ).map((job, i) => (
                    <TableRow
                      key={job._id}
                      sx={{
                        height: "54px",
                      }}
                    >
                      <TableCell align="center">{page * rowsPerPage + i + 1}</TableCell>
                      <TableCell align="left" sx={{ color: "#1D1D1D" }}>
                        {job.job.name}
                      </TableCell>
                      <TableCell align="center">{job?.annotator.qaiUserName}</TableCell>
                      <TableCell align="center"> {job?.reviewer?.qaiUserName}</TableCell>

                      <TableCell align="center">
                        <JobStatusField jobStatus={job.status} />
                      </TableCell>

                      <TableCell align="center">
                        <TakenTime takenAt={job.takenAt} />
                        <DateAndTime takenAt={job.takenAt} />
                      </TableCell>

                      <TableCell align="center">{job.attemptLeft}</TableCell>
                      {/* <TableCell align="left">
                        {job.status === "inProgress" ||
                        job.status === "paused" ? (
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Pause/Resume
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // onChange={(e) => handlePauseJob(e, job._id)}
                              label="Pause/Resume"
                              defaultValue={
                                job.status === "inProgress" ? "" : "paused"
                              }>
                              <MenuItem value="paused">Pause</MenuItem>
                              <MenuItem value="resume">Resume</MenuItem>
                            </Select>
                          </FormControl>
                        ) : (
                          <></>
                        )}
                      </TableCell> */}

                      <TableCell align="left">
                        <OnGogingJobDetails job={job} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Paper>
      </Box>
      <Box>
        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid container sx={{ justifyContent: "right", paddingRight: "3%" }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={filterAssignedJob.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default OngoingJob;
