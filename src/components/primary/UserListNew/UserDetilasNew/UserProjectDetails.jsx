import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import React from "react";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FAFCFF",
    color: "#5A6B89",
    padding: "8px",
    // height: "0px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "8px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#FFFFFF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const projectList = [
  {
    name: "Document 01",
    endName: " 23 May 2022",
    hours: "15 hrs",
    Rating: "5",
    status: "Completed",
    _id: 1,
  },
  {
    name: "Document 02",
    endName: " 23 May 2022",
    hours: "15 hrs",
    Rating: "5",
    status: "Completed",
    _id: 2,
  },
  {
    name: "Document 03",
    endName: " 23 May 2022",
    hours: "15 hrs",
    Rating: "5",
    status: "Completed",
    _id: 3,
  },
];
const UserProjectDetails = () => {
  return (
    <>
      <Box sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
        <Typography variant="wf_h5_bold">List of Projects</Typography>
      </Box>
      <Box sx={{}}>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            //   padding: "16px",
            borderRadius: "8px",
            //   background: "#FAFCFF",
          }}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="left">End Date</StyledTableCell>
                  <StyledTableCell align="left">House</StyledTableCell>
                  <StyledTableCell align="left">Rating</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projectList.map((row) => (
                  <StyledTableRow
                    key={row._id}
                    sx={{
                      height: "34px",
                      backgroundColor: "#FAFCFF",
                    }}>
                    <StyledTableCell component="th" scope="row">
                      <Typography variant="wf_h6">{row.name}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      <Typography variant="wf_h6">{row.endName}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      <Typography variant="wf_h6">{row.hours}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      <Typography variant="wf_h6">{row.rating}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      <Typography variant="wf_h6">{row.status}</Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
      <Box sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
        <Typography variant="wf_h5_bold">List of Annotation</Typography>
      </Box>
    </>
  );
};

export default UserProjectDetails;
