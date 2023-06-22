import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

// import { getMyJobs, submitAJob, updateReviewerStatus } from '../../features/slice/jobSlice';
import MoveUpIcon from "@mui/icons-material/MoveUp";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";

import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  getAjobInfoById,
  submitAJob,
  superJobSetStatus,
  updateReviewerStatus,
} from "../../../features/slice/jobSlice";
import CountDown from "../../shared/CountDown/CountDown";
import SearchBar from "../../shared/SearchBar/SearchBar";
import ActiveJobAnnotatorDetails from "./JobDetails/ActiveJobAnnotatorDetails";
import JobStatusField from "./JobStatusBox/JobStatusField";
import RejectModal from "./RejectModal/RejectModal";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
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

const ActiveJobList = ({ action }) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { myJobs } = useSelector((state) => state.job);

  const [RejectId, setRejectId] = React.useState("");
  const [RejectName, setRejectName] = React.useState("");
  const { user } = useSelector((state) => state);
  const { isLoading } = useSelector((state) => state.job);
  const { role } = user.user;

  const [filterMyJobs, setFilterMyJobs] = useState([]);

  useEffect(() => {
    dispatch(setActivePath("Jobs"));
  }, []);

  const alert = useAlert();

  useEffect(() => {
    if (action === "archivejobs") {
      setFilterMyJobs(
        myJobs.filter(
          (job) =>
            job.status === "rejected" ||
            job.status === "completed" ||
            job.status === "expired"
        )
      );
    } else if (action === "jobs") {
      setFilterMyJobs(
        myJobs.filter(
          (job) =>
            !job.status.includes("rejected") &&
            !job.status.includes("completed") &&
            !job.status.includes("expired")
        )
      );
    } else {
      setFilterMyJobs(myJobs);
    }
  }, [action, myJobs]);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filtered = filterMyJobs.filter((entry) =>
    Object.values(entry).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(search.toLowerCase())
    )
  );
  const handleRejectJob = (id, name) => {
    setOpenModal(true);
    setRejectId(id);
    setRejectName(name);
  };
  const handleClose = () => setOpenModal(false);

  const handleSubmitJob = (job, id) => {
    dispatch(getAjobInfoById(job.spvJobId)).then((action) => {
      if (
        action.payload.data.status === "in_progress" ||
        action.payload.data.status === "on_review"
      ) {
        dispatch(submitAJob(id)).then((action) => {
          if (
            action.payload?.status === 200 ||
            action.payload?.status === 201
          ) {
            alert.show(action.payload.data.message, { type: "success" });
          } else if (action.payload?.status === 206) {
            alert.show(action.payload?.data.message, { type: "error" });
          } else if (action.payload?.status === 204) {
            alert.show("Job is not paused", { type: "error" });
          } else if (action.payload?.status === 400) {
            alert.show(action.payload.data.message, { type: "error" });
          }
        });
      } else {
        alert.show("Please start the job", { type: "error" });
      }
    });
  };

  const onSubmit = (data) => {
    const newData = {
      id: RejectId,
      data: data,
    };
    dispatch(updateReviewerStatus(newData)).then((res) => {
      if (res.payload.status === 200 || res.payload?.status === 201) {
        alert.show(res.payload.data.message, { type: "success" });
      } else if (res.payload.status === 206) {
        alert.show(res.payload.data.message, { type: "error" });
      } else if (res.payload.status === 204) {
        alert.show("Job is not paused", { type: "error" });
      } else if (res.payload?.status === 400) {
        alert.show(res.payload.data.message, { type: "error" });
      }
    });
    handleClose();
    setOpen(false);
  };

  // TODO Temporary for redirecting to the job
  const handleClick = (joblink, spvJobId) => {
    // const tempLink = "https://quantigo.supervise.ly/labeling/jobs/list"
    let tempLink = joblink.split(".")[0];
    tempLink = tempLink.split("//")[1];
    const tempLink2 = tempLink.includes("ag")
      ? "https://ag-quantigo.supervise.ly/labeling/jobs/list"
      : "https://quantigo.supervise.ly/labeling/jobs/list";
    dispatch(superJobSetStatus(spvJobId));

    window.open(tempLink2);
  };
  const paperStyle = {
    padding: "0px 0px",
    width: "100%",
    height: "100%",
  };
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
            <SearchBar placeholder="Search a Job" func={handleChange} />
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
              <Table sx={{ border: "1px solid #DADCDF" }}>
                <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ color: "#969CAF", fontSize: "20px" }}
                    >
                      No
                    </TableCell>

                    <TableCell sx={{ color: "#969CAF", fontSize: "20px" }}>
                      Title
                    </TableCell>

                    {role === "reviewer" ? (
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        Status{" "}
                      </TableCell>
                    ) : (
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        Status
                      </TableCell>
                    )}
                    {role === "reviewer" || action === "archivejobs" ? (
                      <></>
                    ) : (
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        Time Left
                      </TableCell>
                    )}
                    {role === "reviewer" ? (
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "20px" }}
                      >
                        Action
                      </TableCell>
                    ) : action === "archivejobs" ? (
                      <></>
                    ) : (
                      <>
                        <TableCell
                          align="left"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          {" "}
                          Submit job
                        </TableCell>
                      </>
                    )}

                    <TableCell
                      align="left"
                      sx={{ color: "#969CAF", fontSize: "20px" }}
                    >
                      {" "}
                      Job Link
                    </TableCell>

                    <TableCell
                      align="left"
                      sx={{ color: "#969CAF", fontSize: "20px" }}
                    >
                      {" "}
                      Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filtered.map((job, i) => (
                    <TableRow key={i}>
                      <TableCell align="left">{i + 1}</TableCell>
                      <TableCell align="left" component="th" scope="row">
                        {job?.job?.name}
                      </TableCell>
                      <TableCell align="left">
                        <JobStatusField jobStatus={job.status} />
                      </TableCell>

                      {role === "reviewer" || action === "archivejobs" ? (
                        <></>
                      ) : job.isExpired ? (
                        <TableCell align="left">Expired Already</TableCell>
                      ) : (
                        <TableCell align="left" sx={{ px: 2 }}>
                          <CountDown job={job} />
                        </TableCell>
                      )}
                      {role === "reviewer" ? (
                        <TableCell align="left">
                          {job.status === "reviewing" ? (
                            <>
                              <Button
                                onClick={() =>
                                  handleRejectJob(job._id, job.job.name)
                                }
                              >
                                <SwipeRightIcon />
                                Action
                              </Button>
                            </>
                          ) : (
                            <></>
                          )}
                        </TableCell>
                      ) : action === "archivejobs" ? (
                        <></>
                      ) : (
                        <>
                          <TableCell>
                            {(job.status === "inProgress" && !job.isExpired) ||
                            (job.status === "rechecked" && !job.isExpired) ? (
                              <ButtonStyle
                                variant="outlined"
                                disabled={isLoading}
                                onClick={() => handleSubmitJob(job, job._id)}
                              >
                                Submit
                              </ButtonStyle>
                            ) : (
                              <ButtonStyle variant="outlined" disabled>
                                Submit
                              </ButtonStyle>
                            )}
                          </TableCell>
                        </>
                      )}
                      {/* {role === "reviewer" ? (
                        <></>
                      ) : (
                        <TableCell> {job.reviewNote}</TableCell>
                      )} */}
                      {/* {role === "reviewer" ? (
                        <></>
                      ) : (
                        <TableCell> {job.attemptLeft}</TableCell>
                      )} */}
                      {role === "reviewer" ? (
                        <>
                          {" "}
                          <TableCell>
                            {" "}
                            <Button
                              onClick={() =>
                                handleClick(job.reviewerJobLink, job.spvJobId)
                              }
                            >
                              <MoveUpIcon />
                            </Button>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          {" "}
                          <TableCell>
                            {" "}
                            <Button
                              onClick={() =>
                                handleClick(job.jobLink, job.spvJobId)
                              }
                            >
                              <MoveUpIcon />
                            </Button>
                          </TableCell>
                        </>
                      )}

                      <TableCell align="left">
                        <ActiveJobAnnotatorDetails job={job} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Paper>
      </Box>
      <RejectModal
        openModal={openModal}
        handleClose={handleClose}
        RejectName={RejectName}
        register={register}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default ActiveJobList;
