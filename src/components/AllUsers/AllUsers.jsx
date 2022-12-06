import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../features/slice/userSlice";
import {Box, IconButton, TablePagination} from "@mui/material";
import {useTheme} from "@emotion/react";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


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
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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

const AllUsers = ({ action }) => {
  const [rows, setRows] = useState("");
  const [searched, setSearched] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state)
  const { role } = user.user;
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  // const { jobs } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(getAllUsers());
    // dispatch(getAllAssignedJob())
  }, []);

  // console.log(jobs);
  //serach function
  // const requestSearch = (searchedVal: string) => {
  //   const filteredRows = users.name.filter((row) => {
  //     return users.name.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   setRows(filteredRows);
  // };

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };
  const paperstyle = { padding: "10px 20px", width: 1300, margin: "5px auto" };

  useEffect(() => {
    if (action === "reviewer") {
      setFilterUsers(users.filter((user) => user.role === "reviewer"))
    }
    else if (action === "annotator") {
      setFilterUsers(users.filter((user) =>
        user.role === "level_0_annotator" ||
        user.role === "level_1_annotator" ||
        user.role === "level_2_annotator" ||
        user.role === "level_3_annotator"
      ))
    }
    else {
      setFilterUsers(users)
    }
  }, [users])
  //  pagging table
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // sorting

  return (
    <>
      <div style={paperstyle}>
        {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "blue" }}>
              <TableRow>
                <StyledTableCell>Quantiogoai ID</StyledTableCell>

                <StyledTableCell>
                  Name
                </StyledTableCell>

                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Hub</StyledTableCell>
                <StyledTableCell align="left">Role</StyledTableCell>
                {/* {role === "delivery_manager" ? <></> : */}
                <StyledTableCell align="left">Phone NO</StyledTableCell>
                {/* } */}
                {role === "delivery_manager" ? <></> :
                  <StyledTableCell align="left">
                    Varified
                  </StyledTableCell>
                }


              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filterUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : filterUsers
              ).map((user) => (

                <StyledTableRow key={user._id}>
                  <StyledTableCell component="th" scope="row">
                    {user.qaiId}
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.email}</StyledTableCell>
                  <StyledTableCell align="left">
                    Dhaka
                    {/* {user.gender === undefined
                    ? ""
                    : user.gender.toLowerCase() === "male"
                      ? "Male"
                      : "Female"} */}
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    {user.role === "level_1_annotator"
                      ? "L 1 "
                      : user.role === "level_2_annotator"
                        ? "L 2"
                        : user.role}
                  </StyledTableCell>
                  {/* {role === "delivery_manager" ? <></> : */}
                  <StyledTableCell align="left">
                    {user.phone ? user.phone : "N/A"}
                  </StyledTableCell>
                  {/* } */}
                  {role === "delivery_manager" ? <></> :
                    <StyledTableCell align="left">
                      {user.verified ? "Verified" : "Unverified"}{" "}
                    </StyledTableCell>}
                </StyledTableRow>
              ))}
            </TableBody>



          </Table>



        </TableContainer>
      </div>
      <div style={{ paddingLeft: "60%" }}>
        <TablePagination
          // style={{ paddingLeft: "50%" }}
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          count={filterUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          // SelectProps={{
          //   inputProps: {
          //     'aria-label': 'rows per page',
          //   },
          //   native: true,
          // }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    </>
  );
};

export default AllUsers;
