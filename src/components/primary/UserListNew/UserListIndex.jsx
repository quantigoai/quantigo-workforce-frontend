import React from "react";
import { useTheme } from "@emotion/react";
import DownloadIcon from "@mui/icons-material/Download";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Popper,
  SvgIcon,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import { getAllUsers } from "../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import SearchBar from "../../shared/SearchBar/SearchBar";
import SearchBarforUserList from "../../shared/SearchBar/SearchBarforUserList";
import NidDetails from "../Users/NidDetals/NidDetails";
import UserDetailsIndex from "../Users/UserDetais/UserDetailsIndex";
import NdaAccept from "../Users/NdaAccept/NdaAccept";
import UserActiveStatueCheck from "../Users/UserActiveCheck/UserActiveStatueCheck";

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
    <Box sx={{ flexShrink: 0 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
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
    fontSize: 16,
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
const UserListIndex = ({ action }) => {
  const [rows, setRows] = useState("");
  const [searched, setSearched] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const [csvUsers, setCsvUsers] = useState([]);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state);
  const { role } = user.user;
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [documentsImage, setDocumentsImage] = useState([]);
  const [documentsType, setDocumentsType] = useState("");
  const [userName, setUserName] = useState([]);
  const [documentsNo, setDocumentsNo] = useState();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [hubFilter, setHubFilter] = useState("");
  const [date, setDate] = useState("");
  const { skills, isLoading } = useSelector((state) => state.skill);
  const [skill, setSkill] = React.useState([]);
  const [skillSet1, setSkillSet1] = React.useState([]);
  const [skillSet2, setSkillSet2] = React.useState([]);
  const [isSkillEmpty, setIsSkillEmpty] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [isClicked, setIsClicked] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
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
    dispatch(getAllUsers(data));
  };
  const handleResetUser = () => {
    setSkill([]);
    dispatch(getAllUsers());
    setDate("");
    setRoleFilter("");
    setHubFilter("");
    setStatusType("");
  };

  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setSkill([]);
    setAnchorE2(null);
  };

  const url = process.env.REACT_APP_SERVER_URL;
  const tableRef = useRef(null);
  // const { jobs } = useSelector((state) => state.job);
  // const serverLink = "https://wmpserver.onrender.com/api/v1/";
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllSkills());
  }, [action]);

  const paperstyle = {
    padding: "10px 10px",
    width: "100%",
    margin: "5px auto",
  };

  useEffect(() => {
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
    const finalArray = newArray.map((item) => {
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
    if (action === "reviewer") {
      setFilterUsers(users.filter((user) => user.role === "reviewer"));
    } else if (action === "annotator") {
      setFilterUsers(
        users.filter(
          (user) =>
            user.role === "level_0_annotator" ||
            user.role === "level_1_annotator" ||
            user.role === "level_2_annotator" ||
            user.role === "level_3_annotator"
        )
      );
    } else if (
      role === "recruitment_manager" ||
      action === "recruitment_manager"
    ) {
      // TODO
      setFilterUsers(
        users.filter(
          (user) =>
            user.role === "level_0_annotator" ||
            user.role === "level_1_annotator" ||
            user.role === "level_2_annotator" ||
            user.role === "level_3_annotator" ||
            user.role === "reviewer"
        )
      );
    } else if (role === "trainer") {
      setFilterUsers(
        users.filter(
          (user) =>
            user.role === "level_0_annotator" ||
            user.role === "level_1_annotator" ||
            user.role === "level_2_annotator" ||
            user.role === "level_3_annotator" ||
            user.role === "reviewer"
        )
      );
    } else {
      setFilterUsers(users);
    }
  }, [users]);

  const customHub = (userName) => {
    const hubCode = userName ? userName?.split("_")[1]?.substring(0, 2) : "";
    switch (hubCode) {
      case "DK":
        return "Dhaka";
      case "KH":
        return "Khulna";
      case "SG":
        return "Sirajganj";
      case "CD":
        return "Chuadanga";
      case "MS":
        return "Mymensingh";
      default:
        return "Unknown";
    }
  };

  //filter
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filtered = filterUsers.filter((entry) =>
    Object.values(entry).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(search.toLowerCase())
    )
  );
  //  pagging table
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // sorting

  const handleDetailNid = (documentImage, documentNo, documentType, name) => {
    setOpenModal(true);
    setDocumentsImage(documentImage);
    setDocumentsNo(documentNo);
    setDocumentsType(documentType);
    setUserName(name);
  };
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
    // setAnchorEl(anchorEl ? null : event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleMouseOut = (event) => {
    setAnchorEl(null);
  };

  const popperOpen = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <>
        <Box
          sx={{
            display: "flex",
            mb: "2%",
          }}>
          <Grid
            container
            sx={{
              paddingBottom: "0%",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
            <CommonHeader
              title="User Management"
              // description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
              // isLoading={isLoading}
              customButton="Create User"
            />
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
              }}>
              <Grid
                item
                xs={11}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "1%",
                }}>
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
                    <ButtonStyle
                      variant="outlined"
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                      Export the table into CSV.
                    </Box>
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
              }}>
              <TableContainer>
                <Table sx={{ border: "1px solid #DADCDF" }} ref={tableRef}>
                  <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                    <TableRow>
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "16px" }}>
                        No
                      </TableCell>
                      <TableCell sx={{ color: "#969CAF", fontSize: "16px" }}>
                        QAI ID
                      </TableCell>
                      <TableCell sx={{ color: "#969CAF", fontSize: "16px" }}>
                        Name
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "16px" }}>
                        Email
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "16px" }}>
                        Role
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "16px" }}>
                        Status
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          color: "#969CAF",
                          fontSize: "16px",
                          paddingLeft: "2%",
                        }}>
                        Completed Job
                      </TableCell>

                      {role === "delivery_manager" ? (
                        <></>
                      ) : role === "recruitment_manager" ||
                        role === "admin" ||
                        role === "trainer" ? (
                        <>
                          <TableCell
                            align="left"
                            sx={{
                              color: "#969CAF",
                              fontSize: "16px",
                              paddingLeft: "4%",
                            }}>
                            Action
                          </TableCell>
                        </>
                      ) : (
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "16px" }}>
                          Verified
                        </TableCell>
                      )}
                      {role === "recruitment_manager" ||
                      role === "delivery_manager" ? (
                        <TableCell
                          align="left"
                          sx={{ color: "#969CAF", fontSize: "16px" }}>
                          Details
                        </TableCell>
                      ) : (
                        <></>
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? filtered.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filtered
                    ).map((user, i) => (
                      <TableRow key={i}>
                        <StyledTableCell align="left">
                          {page * rowsPerPage + i + 1}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {user.qaiUserName || "N/A"}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {user.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {user.email}
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          {user.role === "level_1_annotator"
                            ? "Level 1 Annotator"
                            : user.role === "level_2_annotator"
                            ? "Level 2 Annotator"
                            : user.role === "level_0_annotator"
                            ? "Level 0 Annotator"
                            : user.role === "level_3_annotator"
                            ? "Level 3 Annotator"
                            : user.role === "delivery_manager"
                            ? "Project Delivery Lead"
                            : user.role === "project_lead"
                            ? "Delivery Lead"
                            : user.role === "project_coordinator"
                            ? "Project Coordinator"
                            : user.role === "project_manager"
                            ? "Project Manager"
                            : user.role === "recruitment_manager"
                            ? "Recruitment Manager"
                            : capitalizeFirstLetter(user?.role)}
                        </StyledTableCell>
                        {/* {role === "delivery_manager" ? <></> : */}
                        <StyledTableCell align="left">
                          {/* {user.phone ? user.phone : "N/A"} */}
                          <UserActiveStatueCheck user={user} />
                          {/* <UserStatusField userStatus={user.active} /> */}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.completedJobs.length === 0
                            ? "N/A"
                            : user.completedJobs.length}
                        </StyledTableCell>
                        {role === "delivery_manager" ? (
                          <></>
                        ) : role === "recruitment_manager" ? (
                          <>
                            {user.isVerified ? (
                              <>
                                <StyledTableCell align="center">
                                  <Typography>Verified</Typography>
                                </StyledTableCell>
                              </>
                            ) : user.isNDAApproved === "rejected" ||
                              user.isDocumentsSubmitted === "rejected" ? (
                              <>
                                <StyledTableCell align="center">
                                  <Typography>Rejected</Typography>
                                </StyledTableCell>
                              </>
                            ) : (
                              <>
                                {" "}
                                <StyledTableCell align="center">
                                  <NdaAccept
                                    signNda={user.signImage}
                                    userId={user._id}
                                    isNDASigned={user.isNDASigned}
                                    signImage={user.signImage}
                                  />
                                </StyledTableCell>
                              </>
                            )}
                          </>
                        ) : (
                          <StyledTableCell align="center">
                            <UserDetailsIndex user={user} />
                            {/* {user.verified ? "Verified" : "Unverified"}{" "} */}
                          </StyledTableCell>
                        )}
                        {role === "recruitment_manager" ||
                        role === "delivery_manager" ? (
                          <StyledTableCell align="left">
                            <UserDetailsIndex user={user} />
                          </StyledTableCell>
                        ) : (
                          <></>
                        )}
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
            <Grid
              container
              sx={{ justifyContent: "right", paddingRight: "3%" }}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={filterUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </Grid>
          </Paper>
        </Box>
        <NidDetails
          openModal={openModal}
          handleClose={handleClose}
          documentImage={documentsImage}
          documentsNo={documentsNo}
          documentsType={documentsType}
          userName={userName}
        />
      </>
    </>
  );
};

export default UserListIndex;
