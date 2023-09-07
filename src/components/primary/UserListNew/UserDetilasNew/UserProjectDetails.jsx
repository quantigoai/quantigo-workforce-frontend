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
} from "@mui/material";
import React from "react";
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
        <Typography sx={{ fontSize: "14px" }}>
          <b>List of Projects</b>
        </Typography>
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
              <TableHead sx={{ backgroundColor: "#FAFCFF" }}>
                <TableRow>
                  <TableCell sx={{ height: "15px" }}>Name</TableCell>
                  <TableCell align="left" sx={{ height: "15px" }}>
                    End Date
                  </TableCell>
                  <TableCell align="left" sx={{ height: "15px" }}>
                    House
                  </TableCell>
                  <TableCell align="left" sx={{ height: "15px" }}>
                    Rating
                  </TableCell>
                  <TableCell align="left" sx={{ height: "15px" }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projectList.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{
                      height: "34px",
                      backgroundColor: "#FAFCFF",
                    }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.endName}</TableCell>
                    <TableCell align="left">{row.hours}</TableCell>
                    <TableCell align="left">{row.rating}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
      <Box  sx={{ paddingTop: "2%" ,paddingBottom:"2%"}}>
        <Typography sx={{ fontSize: "14px" }}>
          <b>List of Annotation</b>
        </Typography>
      </Box>
    </>
  );
};

export default UserProjectDetails;
