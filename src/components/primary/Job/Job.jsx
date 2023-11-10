/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/Job.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 12:05:57 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {useTheme} from "@emotion/react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {Box, Grid, IconButton, Paper, Radio, Tab, Tabs} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {availableJobsForReviewer, getAllAssignedJob, getAllJobs, getMyJobs} from "../../../features/slice/jobSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";

// import NotificationToaster from "../NotificationToaster/NotificationToaster";

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
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const Job = () => {
  const [rows, setRows] = useState("");
  const [searched, setSearched] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.isLoading);

  const { role } = user.user;

  const [value1, setValue1] = React.useState("taken");
  const [statusType, setStatusType] = useState("");
  const [annotator, setAnnotator] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [attemptLeft, setAttemptLeft] = useState(0);
  const [projectIdFilter, setProjectIdFilter] = useState(0);
  const { skills } = useSelector((state) => state.skill);
  const [skill, setSkill] = React.useState([]);
  const [skillSet1, setSkillSet1] = React.useState([]);
  const [skillSet2, setSkillSet2] = React.useState([]);
  const [date, setDate] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isClicked, setIsClicked] = React.useState("");
  const [dateValue, setDateValue] = React.useState(null);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });

    // value.map((skill) => {
    selectedSkills.map((skill) => {
      const preData = {
        name: skill.name,
        id: skill._id,
      };
      setSkillSet1([
        {
          ...preData,
        },
      ]);
    });
    setSkillSet2([
      {
        ...skillSet1,
      },
    ]);
    !selectedSkills.length && setIsSkillEmpty(true);
    setSkill(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  const handleFilter = () => {
    const skillColl = skill.map((skill) => {
      return skill._id;
    });
    const data = {
      ...(statusType ? { status: statusType } : {}),
      ...(annotator ? { annotator } : {}),
      ...(reviewer ? { reviewerId: reviewer } : {}),
      ...(attemptLeft ? { attemptLeft } : {}),
      ...(projectIdFilter ? { projectIdFilter } : {}),
      ...(skillColl ? { skills: skillColl } : {}),
      ...(date ? { date } : {}),
    };
    // TODO: need to fix this
    location.pathname === "/jobs/alljobs" && dispatch(getAllJobs(data));
    location.pathname === "/jobs/ongoingjobs" && dispatch(getAllAssignedJob(data));
    location.pathname === "/jobs/assignedjobs" && dispatch(getAllAssignedJob(data));
    location.pathname === "/jobs/archivejob" && dispatch(getAllAssignedJob(data));
    location.pathname === "/jobs/activejobs" && dispatch(getMyJobs(data));
    location.pathname === "/jobs/archivejobs" && dispatch(getMyJobs(data));
  };

  const handleReset = () => {
    location.pathname === "/jobs/alljobs" && dispatch(getAllJobs());
    location.pathname === "/jobs/ongoingjobs" && dispatch(getAllAssignedJob());
    location.pathname === "/jobs/assignedjobs" && dispatch(getAllAssignedJob());
    location.pathname === "/jobs/activejobs" && dispatch(getMyJobs());
    location.pathname === "/jobs/archivejobs" && dispatch(getMyJobs());
    location.pathname === "/jobs/archivejob" && dispatch(getAllAssignedJob());
    setStatusType("");
    setIsClicked("");
    setAnnotator("");
    setReviewer("");
    setAttemptLeft("");
    setProjectIdFilter("");
    setDate("");
    setDateValue(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (role === "reviewer") {
      dispatch(availableJobsForReviewer());
    } else {
      dispatch(getAllJobs());
    }
    if (role !== "admin") {
      dispatch(getMyJobs());
    }

    dispatch(getAllAssignedJob());
    location.pathname === "/jobs/alljobs" && setValue1("Pending");
    location.pathname === "/jobs/availablejobs" && setValue1("Pending");
    location.pathname === "/jobs/ongoingjobs" && setValue1("taken");
  }, []);

  const handleChangeTag = (event, newValue) => {
    setValue1(newValue);
  };
  const navigate = useNavigate();
  const paperstyle = {
    // width: "80vw",
    width: "100%",
  };

  // const [value, setValue] = React.useState("Pending");
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  //   if (event.target.value === "Pending") {
  //     navigate("/jobs/alljobs");
  //   } else {
  //     navigate("/jobs/ongoingjobs");
  //   }
  // };

  return (
    <>
      {location.pathname !== "/jobs/create-job" && (
        <>
          <Box
            sx={{
              display: "flex",
              pb: "2%",
            }}
          >
            <Grid
              container
              sx={{
                paddingBottom: "0%",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <CommonHeader title="Jobs" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " isLoading={isLoading} customButton="Create Job" />
            </Grid>
          </Box>

          {role === "admin" || role === "delivery_lead" || role === "delivery_manager" ? (
            <>
              <Paper elevation={0} style={paperstyle}>
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    centered
                    sx={{
                      width: "100%",
                      display: "flex",
                    }}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    value={value1}
                    onChange={handleChangeTag}
                  >
                    <Tab value="Pending" onClick={() => navigate("/jobs/alljobs")} label="Available Job" control={<Radio />} />
                    <Tab value="taken" onClick={() => navigate("/jobs/ongoingjobs")} label="Active Job" control={<Radio />} />
                    <Tab value="archived" onClick={() => navigate("/jobs/archivejob")} control={<Radio />} label="Archive Job" />
                  </Tabs>
                </Box>
              </Paper>
            </>
          ) : (
            // ) : role === "reviewer" ? (
            //   <>
            //     <Paper elevation={0} style={paperstyle}>
            //       <Box sx={{ width: "100%" }}>
            //         <Tabs
            //           centered
            //           sx={{
            //             width: "100%",
            //             display: "flex",
            //           }}
            //           variant="fullWidth"
            //           indicatorColor="primary"
            //           textColor="primary"
            //           value={value1}
            //           onChange={handleChangeTag}>
            //           <Tab
            //             value="Pending"
            //             onClick={() => navigate("/jobs/availablejobs")}
            //             control={<Radio />}
            //             label="Available Job"
            //           />
            //           <Tab
            //             value="taken"
            //             onClick={() => navigate("/jobs/activejobs")}
            //             control={<Radio />}
            //             label="Active Job"
            //           />
            //           <Tab
            //             value="archived"
            //             onClick={() => navigate("/jobs/archivejobs")}
            //             control={<Radio />}
            //             label="Archive Job"
            //           />
            //         </Tabs>
            //       </Box>
            //     </Paper>
            //   </>
            // )
            <>
              <Paper elevation={0} style={paperstyle}>
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    centered
                    sx={{
                      width: "100%",
                      display: "flex",
                    }}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    value={value1}
                    onChange={handleChangeTag}
                  >
                    <Tab value="Pending" onClick={() => (role === "reviewer" ? navigate("/jobs/availablejobs") : navigate("/jobs/alljobs"))} control={<Radio />} label="Available Job" />
                    <Tab value="taken" onClick={() => navigate("/jobs/activejobs")} control={<Radio />} label="Active Job" />
                    <Tab value="archived" onClick={() => navigate("/jobs/archivejobs")} control={<Radio />} label="Archive Job" />
                  </Tabs>
                </Box>
              </Paper>
            </>
          )}
        </>
      )}
      <Outlet context={[statusType, setStatusType, annotator, setAnnotator, reviewer, setReviewer, attemptLeft, setAttemptLeft, date, setDate, handleFilter, handleReset, handleClose, anchorEl, setAnchorEl, isClicked, setIsClicked, dateValue, setDateValue, setProjectIdFilter, projectIdFilter, handleChangeSkills, skill]} />
    </>
  );
};

export default Job;
