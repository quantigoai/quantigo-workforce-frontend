import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PageinationTable from "./PageinationTable";
import { Box } from "@mui/material";
const ProjectTable2 = ({ myColumn, myRows }) => {
  //   const columns = Object.keys(myColumn[0] || {});
  // test commit 
  return (
    <>
      {/* <TableContainer component={Paper}> */}
      {/* <Table sx={{ minWidth: "100%" }}> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, height: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {myColumn.map((col) => (
                <TableCell
                  align="middle"
                  sx={{
                    minWidth: col.width || "140px",
                    color: "#7B98BA",
                  }}
                  key={col.id}
                >
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {myRows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {myColumn.map((col) => {
                  return (
                    <TableCell
                      align="middle"
                      sx={{
                        width: col.width || 140,
                      }}
                      key={col.id}
                      component="th"
                      scope="row"
                    >
                      {row[col?.field]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <PageinationTable />
        </Box>
      </TableContainer>
    </>
  );
};

export default ProjectTable2;
