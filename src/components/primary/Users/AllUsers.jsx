/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Users/AllUsers.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 11:32:34 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
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
import React, { useEffect, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import { getAllUsers } from "../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import NdaAccept from "./NdaAccept/NdaAccept";
import NidDetails from "./NidDetals/NidDetails";
import UserActiveStatueCheck from "./UserActiveCheck/UserActiveStatueCheck";
import UserDetailsIndex from "./UserDetais/UserDetailsIndex";
import SearchBar from "../../shared/SearchBar/SearchBar";
import SearchBarforUserList from "../../shared/SearchBar/SearchBarforUserList";

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
const AllUsers = ({ action }) => {
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
  const handleClose = () => setOpenModal(false);
  const handleClick = (signNda) => {
    const pdfLink = url.concat("/" + signNda);
    window.open(pdfLink);
  };
  const paperStyle = {
    padding: "0px 0px",
    width: "100%",
    height: "100%",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

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
            style={{
              paddingTop: "2%",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "0%",
            }}>
            <Grid
              xs={11}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "1%",
              }}>
              <SearchBarforUserList
                placeholder="Search User"
                onChange={handleChange}
                handleClick={handleClick}
              />
              {/* <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search a user"
                variant="outlined"
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid container xs={1}>
              {/* TODO Move this to a separate component */}
              <Box>
                <CSVLink data={csvUsers} filename={"users_List.csv"}>
                  <ButtonStyle
                    variant="outlined"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    <Grid container sx={{ paddingTop: "8%" }}>
                      <Grid xs={4}>
                        <DownloadIcon />
                      </Grid>
                      <Grid xs={8}>
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
                    {/* {role === "recruitment_manager" ? (
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "16px" }}>
                        Upload Date
                      </TableCell>
                    ) : (
                      <></>
                    )} */}
                    {/* {role === "recruitment_manager" || role === "admin" ? (
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "16px" }}
                      >
                        Document
                      </TableCell>
                    ) : (
                      <></>
                    )} */}
                    {/* {role === "recruitment_manager" || role === "admin" ? (
                      <TableCell
                        align="left"
                        sx={{ color: "#969CAF", fontSize: "16px" }}
                      >
                        NDA
                      </TableCell>
                    ) : (
                      <></>
                    )} */}
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
                          ? "Delivery Manager"
                          : user.role === "project_lead"
                          ? "Project Lead"
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
                      {/* {role === "recruitment_manager" ? (
                        <StyledTableCell align="left">
                          <UpdateTime takenAt={user.updatedAt} />
                        </StyledTableCell>
                      ) : (
                        <></>
                      )} */}
                      {/* {role === "recruitment_manager" || role === "admin" ? (
                        <StyledTableCell align="left">
                          {user.documentNo ? (
                            <Button>
                              <PreviewIcon
                                onClick={() =>
                                  handleDetailNid(
                                    user.documentsImage,
                                    user.documentNo,
                                    user.documentsType,
                                    user.name
                                  )
                                }
                              />
                            </Button>
                          ) : (
                            <Button disabled>
                              <PreviewIcon
                                onClick={() =>
                                  handleDetailNid(
                                    user.documentsImage,
                                    user.documentNo,
                                    user.documentsType,
                                    user.name
                                  )
                                }
                              />
                            </Button>
                          )}
                        </StyledTableCell>
                      ) : (
                        <></>
                      )} */}
                      {/* {role === "recruitment_manager" || role === "admin" ? (
                        <StyledTableCell align="left">
                          {user.signImage ? (
                            <Button>
                              <DownloadIcon
                                onClick={() => handleClick(user.signImage)}
                              />
                            </Button>
                          ) : (
                            <Button disabled>
                              <DownloadIcon
                                onClick={() => handleClick(user.signImage)}
                              />
                            </Button>
                          )}
                        </StyledTableCell>
                      ) : (
                        <></>
                      )}
                      } */}
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
          <Grid container sx={{ justifyContent: "right", paddingRight: "3%" }}>
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
  );
};

export default AllUsers;
