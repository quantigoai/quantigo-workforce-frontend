import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Grid, Popper, Skeleton, TablePagination, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import { getAllUsers } from "../../../features/slice/userSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import SearchBarforUserList from "../../shared/SearchBar/SearchBarforUserList";
import NidDetails from "../Users/NidDetals/NidDetails";
import TablePaginationActions from "./TablePaginationActions";
import UsersTable from "./UsersTable";
import AllUsers from "./AllUsers/AllUsers";
import "../ProjectLIstNew2/index.css";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  width: "100%",
  height: "100%",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const annotatorRoles = ["level_0_annotator", "level_1_annotator", "level_2_annotator", "level_3_annotator"];
const reviewerRoles = ["reviewer"];

const UserListIndex = ({ action }) => {
  const [csvUsers, setCsvUsers] = useState([]);
  const dispatch = useDispatch();
  const { users, totalUsers } = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user);
  const { role } = user.user;
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [openModal, setOpenModal] = useState(false);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [hubFilter, setHubFilter] = useState("");
  const [date, setDate] = useState("");
  const { skills } = useSelector((state) => state.skill);
  const [skill, setSkill] = React.useState([]);
  const [statusType, setStatusType] = useState("");
  const [isClicked, setIsClicked] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterData, setFilterData] = React.useState({});

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;
    const selectedSkills = value.map((skill) => {
      return skills.find((s) => s.name === skill);
    });
    setSkill(
      // On autofill we get a stringified value.
      typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    );
  };

  const handleFilterUser = () => {
    const skillColl = skill.map((skill) => {
      return skill._id;
    });

    const data = {
      ...(roleFilter ? { role: roleFilter } : {}),
      ...(hubFilter ? { hub: hubFilter } : {}),
      ...(statusType ? { active: statusType } : {}),
      ...(skillColl ? { skills: skillColl } : {}),
      ...(date ? { date } : {}),
    };
    setFilterData(data);
    data.limit = rowsPerPage;
    data.skip = page * rowsPerPage;
    dispatch(getAllUsers(data));
  };
  const handleResetUser = () => {
    setSkill([]);
    setDate("");
    setRoleFilter("");
    setHubFilter("");
    setStatusType("");
    setFilterData({});
    setRowsPerPage(10);
    setPage(0);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setSkill([]);
    setAnchorE2(null);
  };

  const url = import.meta.env.VITE_APP_SERVER_URL;

  const location = useLocation();

  useEffect(() => {
    if (action === "annotator") {
      dispatch(
        getAllUsers({
          role: annotatorRoles,
          limit: rowsPerPage,
          skip: page * rowsPerPage,
        })
      );
    } else if (role === "recruitment_manager" || role === "trainer" || action === "recruitment_manager") {
      dispatch(
        getAllUsers({
          role: [...annotatorRoles, ...reviewerRoles],
          limit: rowsPerPage,
          skip: page * rowsPerPage,
        })
      );
    } else if (action === "reviewer") {
      dispatch(
        getAllUsers({
          role: reviewerRoles,
          limit: rowsPerPage,
          skip: page * rowsPerPage,
        })
      );
    } else {
      dispatch(
        getAllUsers({
          ...filterData,
          limit: rowsPerPage,
          skip: page * rowsPerPage,
        })
      );
    }
    dispatch(getAllSkills());
  }, [action, rowsPerPage, page, role, dispatch]);

  useEffect(() => {
    if (users && users.length > 0) {
      const newArray = users.map(
        ({
          activeJobs,
          completedCourses,
          completedJobs,
          documentsImage,
          enrolledCourses,
          image,
          inCompletedJobs,
          rejectedJobs,
          skills,
          submittedJobs,
          emailToken,
          signImage,
          updatedAt,
          qaiId,
          __v,
          ...rest
        }) => rest
      );

      const finalArray = newArray?.map((item) => {
        if (item) {
          item.dob = new Date(item.dob).toLocaleDateString("en-US");
        }
        return item;
      });

      setCsvUsers(finalArray);
      if (location.pathname === "/annotators") {
        dispatch(setActivePath("Annotator List"));
      } else if (location.pathname === "/reviewers") {
        dispatch(setActivePath("Reviewer List"));
      } else if (location.pathname === "/users") {
        dispatch(setActivePath("Users"));
      } else {
        dispatch(setActivePath("All Users"));
      }
    }
  }, [dispatch, location.pathname, users]);

  // filter;
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //  pagination table
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // sorting
  const handleClose = () => {
    setAnchorEl(null);
    setOpenModal(false);
  };
  const handleClick = (signNda) => {
    const pdfLink = url.concat("/" + signNda);
    window.open(pdfLink);
  };
  const paperStyle = {
    padding: "0px 0px",
    width: "100%",
    height: "100%",
  };

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseOut = () => {
    setAnchorEl(null);
  };

  const popperOpen = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const skeletonCount = 5;
  const skeletonArray = Array.from({ length: skeletonCount }, (_, index) => index + 1);

  return (
    <>
      <>
        <Box
          sx={{
            display: "flex",
            mb: "2%",
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
            <CommonHeader title="User Management" customButton="Create User" />
          </Grid>
        </Box>

        <Box>
          <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
            <Grid
              container
              sx={{
                paddingTop: "2%",
                paddingLeft: "3%",
                paddingRight: "3%",
                paddingBottom: "0%",
              }}
            >
              <Grid
                item
                xs={11}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "1%",
                }}
              >
                <SearchBarforUserList
                  placeholder="Search User"
                  handleChange={handleChange}
                  handleClick={handleClick}
                  setRoleFilter={setRoleFilter}
                  handleFilterUser={handleFilterUser}
                  handleResetUser={handleResetUser}
                  setHubFilter={setHubFilter}
                  handleChangeSkills={handleChangeSkills}
                  skillSet={skill}
                  hubFilter={hubFilter}
                  roleFilter={roleFilter}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  statusType={statusType}
                  setStatusType={setStatusType}
                  handleCloseFilter={handleCloseFilter}
                  handleClickFilter={handleClickFilter}
                  anchorE2={anchorE2}
                />
              </Grid>
              <Grid item xs={1}>
                {/* TODO Move this to a separate component */}
                <Box>
                  <CSVLink data={csvUsers} filename={"users_List.csv"}>
                    <ButtonStyle variant="outlined" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                      <Grid container sx={{ paddingTop: "8%" }}>
                        <Grid item xs={4}>
                          <DownloadIcon />
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>Export</Typography>
                        </Grid>
                      </Grid>
                    </ButtonStyle>
                  </CSVLink>
                  <Popper id={id} open={popperOpen} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>Export the table into CSV.</Box>
                  </Popper>
                </Box>
              </Grid>
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
              {user.isLoading ? (
                <>
                  {" "}
                  <Grid key={user._id} container sx={{ paddingTop: "0%" }}>
                    {" "}
                    <Box sx={{ width: "100%" }}>
                      {skeletonArray.map((item) => (
                        <>
                          {" "}
                          <Box key={item}>
                            <Skeleton height={40} />
                            <Skeleton animation="wave" height={40} />
                            <Skeleton animation={false} height={40} />
                          </Box>
                        </>
                      ))}
                    </Box>
                  </Grid>
                </>
              ) : (
                <Box className="projectBox">
                  <TableContainer>
                    <UsersTable role={role} rowsPerPage={rowsPerPage} page={page} users={users} />
                  </TableContainer>
                  {/* <Box className="tableContent">
                    <AllUsers />
                  </Box> */}
                </Box>
              )}
            </Grid>
          </Paper>
        </Box>

        <Box>
          <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
            <Grid container sx={{ justifyContent: "right", paddingRight: "3%" }}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={totalUsers}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </Grid>
          </Paper>
        </Box>
        <NidDetails openModal={openModal} handleClose={handleClose} />
      </>
    </>
  );
};

export default UserListIndex;
