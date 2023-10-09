import {
  Box,
  Grid,
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
import starIcon from "../../../../assets/images/StarIcon.svg";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#FAFCFF",
    color: "#5A6B89",
    padding: "8px",
    // height: "0px",
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
    // backgroundColor: "#EFF9F5",
    padding: "8px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: "#FFFFFF",
  // },
  // "&:nth-of-type(even)": {
  //   backgroundColor: "#FFFFFF",
  // },
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
    status: "Working",
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
const annotationList = [
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 1,
  },
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 2,
  },
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 3,
  },
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 4,
  },
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 5,
  },
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 6,
  },
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 6,
  },
  {
    name: "Document 01",

    hours: "15 hrs",
    _id: 6,
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
                      // backgroundColor: row.status === "Working" ? "#EFF9F5" : "",
                      // backgroundColor:"red"
                    }}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{
                        backgroundColor: row.status === "Working" ? "#EFF9F5" : "", 
                      }}>
                      <Typography variant="wf_h6">{row.name}</Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{
                        backgroundColor: row.status === "Working" ? "#EFF9F5" : "", 
                      }}>
                      {" "}
                      <Typography variant="wf_h6">{row.endName}</Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{
                        backgroundColor: row.status === "Working" ? "#EFF9F5" : "", 
                      }}>
                      {" "}
                      <Typography variant="wf_h6">{row.hours}</Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{
                        backgroundColor: row.status === "Working" ? "#EFF9F5" : "", 
                      }}>
                      {" "}
                      <Typography variant="wf_h6">
                        <img src={starIcon} /> {row.Rating} Star
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{
                        backgroundColor: row.status === "Working" ? "#EFF9F5" : "", 
                      }}>
                      {" "}
                      <Typography variant="wf_h6" sx={{ color: row.status === "Working" ? "#36B37E" : "" }}>
                        {row.status}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
      <Box sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
        <Grid container>
          <Typography variant="wf_h5_bold">List of Annotation</Typography>
        </Grid>
        <Box sx={{ paddingLeft: "1%", paddingTop: "2%", paddingBottom: "2%" }}>
          <Grid
            container
            spacing={0.5}
            sx={{
              // backgroundColor: "blue",
              border: "1px solid #E6ECF5",

              borderRadius: "8px",
            }}>
            {annotationList.map((item) => (
              <Grid
                key={item._id}
                item
                xs={4}
                // gap={1}
                sx={{ borderBottom: "1px solid #E6ECF5", borderRight: "1px solid #E6ECF5" }}>
                <Grid container sx={{ padding: "1%" }}>
                  <Grid item xs={7}>
                    <Typography variant="wf_h6" sx={{ color: "#5A6B89" }}>
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="wf_h6" sx={{ color: "#091E42" }}>
                      : {item.hours}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default UserProjectDetails;
