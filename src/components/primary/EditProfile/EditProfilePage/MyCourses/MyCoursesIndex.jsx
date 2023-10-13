import {Box, Grid, styled, Table, TableBody, TableCell, tableCellClasses, TableRow, Typography,} from "@mui/material";
import React from "react";
import ProjectDrawerStatusChip from "../../../../shared/FilterField/ProjectDrawerStatusChip";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F7FE",
    color: "#3C4D6B",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#E6ECF5",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#F4F7FE",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MyCoursesIndex = () => {
  const documentList = [
    {
      name: "Document 01",
      _id: 1,
      status: "Completed",
    },
    {
      name: "Document 02",
      _id: 2,
      status: "Completed",
    },
    {
      name: "Document 04",
      _id: 4,
      status: "Completed",
    },
    {
      name: "Document 05",
      _id: 5,
      status: "Completed",
    },
    {
      name: "Document 06",
      _id: 6,
      status: "Completed",
    },
    {
      name: "Document 07",
      _id: 7,
      status: "Completed",
    },
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Grid container sx={{ padding: "2%" }}>
            <Grid item xs={12} sx={{ paddingBottom: "1%" }}>
              <Typography variant="h6" sx={{ color: "#3C4D6B" }}>
                {" "}
                <b>Enroll courses</b>{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ borderRadius: "8px", border: "1px solid #E6ECF5" }}>
                <Table
                  sx={{ width: "100%", borderRadius: "8px" }}
                  aria-label="customized table">
                  <TableBody>
                    {documentList.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.status}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container sx={{ padding: "2%" }}>
            <Grid xs={12} sx={{ paddingBottom: "1%" }}>
              <Typography variant="h6" sx={{ color: "#3C4D6B" }}>
                <b>Achieved Skills</b>
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Box
                sx={{
                  border: "1px solid #E6ECF5",
                  // padding: "16px",
                  borderRadius: "8px",
                  background: "#FAFCFF",
                  height: "200px",
                  padding: "2%",
                }}>
                <Grid container>
                  {documentList.map((p) => (
                    <>
                      <Box sx={{ paddingRight: "1%", paddingBottom: "1%" }}>
                        <ProjectDrawerStatusChip key={p._id} value={p.name} />
                      </Box>
                    </>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyCoursesIndex;
