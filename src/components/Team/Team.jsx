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
import {getAllTeams} from "../../features/slice/teamSlice";
import {Grid, Typography} from "@mui/material";

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

const Team = () => {
  const [rows, setRows] = useState("");
  const [searched, setSearched] = useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  // const { jobs } = useSelector((state) => state.job);
  const { teams } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllTeams());
  }, []);
 
  
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
  const paperstyle = { padding: "15%",  width: "100%" };

  return (
    <>
    <div>
        <Grid container style={{paddingLeft:"10%"}}>
          <Typography variant='h4'>Team</Typography>
        </Grid>
      </div>
    
    
      <div style={{paperstyle}}>
        {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}

        <TableContainer component={Paper}>
          <Table  aria-label="customized table">
            <TableHead style={{ backgroundColor: "blue" }}>
              <TableRow>
                <StyledTableCell>Team ID</StyledTableCell>
                <StyledTableCell align="left">Team Name</StyledTableCell>
                <StyledTableCell align="left">Role</StyledTableCell>
                <StyledTableCell align="left">createdAt</StyledTableCell>
                <StyledTableCell align="left">updatedAt</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {teams.map((team) => (
                <StyledTableRow key={team._id}>
                    <StyledTableCell align="left">
                    {team.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {team.name}
                  </StyledTableCell>
                 
                  <StyledTableCell align="left">
                    {team.role}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {team.createdAt}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {team.updatedAt}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </>
  
  );
};

export default Team;
