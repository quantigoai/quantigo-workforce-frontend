/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/AllJobs.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 12:58:05 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import { useTheme } from "@emotion/react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  addDefaultReviewer,
  addUserToATeam,
  availableJobsForReviewer,
  getAllJobs,
  takeAjob,
} from "../../../features/slice/jobSlice";
import { getAllTeams } from "../../../features/slice/teamSlice";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import SearchBar from "../../shared/SearchBar/SearchBar";
import PendingJobDetails from "./JobDetails/PendingJobDetails";

const ButtonStyle = styled(Button)({
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

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
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
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

const AllJobs = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { user, role } = useSelector((state) => state.user);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [orderSortTimeLimit, setOrderSortTimeLimit] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const { isLoading, jobs, totalJobs } = useSelector((state) => state.job);
  const [date, setDate] = useState("");
  useEffect(() => {
    dispatch(setActivePath("Jobs"));
    // !! Need to be fixed later
    dispatch(getAllTeams());
  }, []);

  const createSortHandler = () => {
    setOrderSortTimeLimit(!orderSortTimeLimit);
    const data = {
      ...(orderSortTimeLimit ? { timeLimit: "desc" } : { timeLimit: "asc" }),
      ...(date ? { date } : {}),
    };
    console.log(data);
    location.pathname === "/jobs/alljobs" && dispatch(getAllJobs(data));
  };

  const handleTakeJob = (id) => {
    const annotatorData = {
      id,
      role: "annotator",
    };
    const reviewerData = {
      id,
      role: "reviewer",
    };
    dispatch(addUserToATeam(annotatorData));
    dispatch(addDefaultReviewer(reviewerData));
    dispatch(takeAjob(id)).then((action) => {
      if (action.payload?.status === 200 || action.payload?.status === 201) {
        alert.show("Job taken successfully", { type: "success" });
      } else if (action.payload?.status === 204) {
        alert.show("You have reached the limit", { type: "error" });
      } else if (action.payload?.status === 205) {
        alert.show("You need to complete the required course first ", {
          type: "error",
        });
      } else {
        alert.show("Job taken Failed", { type: "error" });
      }
    });
  };
  useEffect(() => {
    if (user.role === "reviewer") {
      dispatch(availableJobsForReviewer());
    } else {
      dispatch(getAllJobs({ limit: rowsPerPage, skip: page * rowsPerPage }));
    }
  }, [rowsPerPage, page]);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const filtered = jobs.filter((entry) =>
  //   Object.values(entry).some(
  //     (val) =>
  //       typeof val === "string" &&
  //       val.toLowerCase().includes(search.toLowerCase())
  //   )
  // );

  const paperStyle = {
    padding: "0px 0px",
    width: "100%",
    height: "100%",
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };
  return (
    <>
      <Box>
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
              <SearchBar placeholder="Search a Job" func={handleChange} />
            </Grid>

            {user.role === "level_0_annotator" ||
            user.role === "level_1_annotator" ||
            user.role === "level_2_annotator" ||
            user.role === "level_3_annotator" ||
            user.role === "reviewer" ? (
              <>
                {/* {user.activeJobs.length === 0 && user.isJobBlocked ? ( */}
                {user.isJobBlocked ? (
                  <>
                    <Grid
                      container
                      sx={{
                        paddingTop: "2%",
                        paddingLeft: "3%",
                        paddingRight: "3%",
                        paddingBottom: "0%",
                      }}
                    >
                      <Alert sx={{ width: "100%" }} severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Please contact admin for unblock account —{" "}
                        <strong>check it out!</strong>
                      </Alert>
                    </Grid>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}

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
                <Table
                  aria-label="simple table"
                  sx={{ border: "1px solid #DADCDF" }}
                >
                  {/* TODO : Convert this in a separate component  */}
                  <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        No
                      </TableCell>

                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        Title
                      </TableCell>

                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        <TableSortLabel>No of Images</TableSortLabel>
                      </TableCell>
                      {user.role === "admin" ||
                      user.role === "project_lead" ||
                      user.role === "delivery_manager" ? (
                        <>
                          {/* // <TableCell
                        //   align="center"
                        //   sx={{ color: "#969CAF", fontSize: "20px" }}>
                        //   Status
                        // </TableCell> */}
                        </>
                      ) : (
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Take Job
                        </TableCell>
                      )}
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        <TableSortLabel
                          direction={orderSortTimeLimit ? "asc" : "dsc"}
                          onClick={() => createSortHandler()}
                        >
                          Time Limit (Minutes)
                        </TableSortLabel>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        Category
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {(
                      rowsPerPage > 0
                      ? filtered.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filtered
                    ) */}
                    {jobs.map((job, i) => (
                      <TableRow key={job._id}>
                        <TableCell align="center">
                          {page * rowsPerPage + i + 1}
                        </TableCell>
                        <TableCell align="left">{job.title}</TableCell>

                        <TableCell align="center">
                          {job?.images?.length}
                        </TableCell>
                        {user.role === "admin" ||
                        user.role === "project_lead" ||
                        user.role === "delivery_manager" ? (
                          <>
                            {/* //{" "}
                            <TableCell align="center">
                              // <JobStatusField jobStatus={job.status} />
                              //{" "}
                            </TableCell> */}
                          </>
                        ) : job.restrictedUsers.includes(user._id) ? (
                          <TableCell align="center">
                            <ButtonStyle
                              disabled
                              variant="outlined"
                              onClick={() => handleTakeJob(job._id)}
                            >
                              Take Job
                            </ButtonStyle>
                          </TableCell>
                        ) : (
                          <TableCell align="center">
                            {user.isJobBlocked ? (
                              <>
                                {" "}
                                <ButtonStyle
                                  disabled
                                  variant="outlined"
                                  onClick={() => handleTakeJob(job._id)}
                                >
                                  Take Job
                                </ButtonStyle>
                              </>
                            ) : (
                              <>
                                {" "}
                                <ButtonStyle
                                  disabled={isLoading}
                                  variant="outlined"
                                  onClick={() => handleTakeJob(job._id)}
                                >
                                  Take Job
                                </ButtonStyle>
                              </>
                            )}
                          </TableCell>
                        )}
                        <TableCell align="center">{job.timeLimit}</TableCell>
                        <TableCell align="center">
                          {capitalizeFirstLetter(job.category)}
                        </TableCell>
                        <TableCell align="center">
                          {/* TODO Fixed the typo */}
                          <PendingJobDetails job={job} />
                          {/* <ActionPenddingJob /> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Paper>
        </Box>
      </Box>

      {/* This is for pagination */}
      {/* TODO Need to move in a separate component */}
      <Box>
        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid container sx={{ justifyContent: "right", paddingRight: "3%" }}>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                25,
                { label: "All", value: totalJobs },
              ]}
              colSpan={3}
              count={totalJobs}
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

export default AllJobs;
