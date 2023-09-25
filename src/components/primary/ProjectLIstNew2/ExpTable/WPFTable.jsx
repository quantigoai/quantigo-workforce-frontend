import { Box, Link, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { calculateTimeDifference, formatDate, formatTime } from "../../../../helper/dateConverter";
import ChipGroup from "../../../shared/CustomTable/ChipGroup";
import CustomButton from "../../../shared/CustomTable/CustomButton";
import ProjectDrawerStatusChip from "../../../shared/FilterField/ProjectDrawerStatusChip";
import SortingButton from "../Project2Details/SortingButton";
import "./index.css";
// const stickyFirstColumn = [{ id: "name", label: "Name", minWidth: 170 }];
// const stickyLastColumn = [
//   {
//     id: "density",
//     label: "Density",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
// ];
// const columns = [
//   { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
//   {
//     id: "population",
//     label: "Population",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "Size\u00a0(km\u00b2)",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
// ];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function WPFTable({
  handleDetailsPage,
  myColumn,
  myRows,
  handleDelete,
  handleClick,
  handleId,
  filteredCol,
  handleProjectDetailsOpen,
  role,
  currentlyCheckedInProject,
  stickyFirstColumn,
  stickyLastColumn,
  columns,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    myColumn.length > 0 && (
      <>
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TableContainer
            sx={{
              height: "90%",
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {stickyFirstColumn.map((column) => (
                    <TableCell className="first-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
                      <Stack flexDirection={"row"}>
                        {column.headerName}
                        <Box onClick={() => handleId(column.field)}>
                          <SortingButton column={column.field} filteredCol={filteredCol} />
                        </Box>
                      </Stack>
                    </TableCell>
                  ))}
                  {columns.map((column) => (
                    <TableCell className="common-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
                      <Stack flexDirection={"row"}>
                        {column.headerName}
                        <Box onClick={() => handleId(column.field)}>
                          <SortingButton column={column.field} filteredCol={filteredCol} />
                        </Box>
                      </Stack>
                    </TableCell>
                  ))}
                  {stickyLastColumn.map((column) => (
                    <TableCell className="last-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {myRows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {stickyFirstColumn.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            sx={{
                              minWidth: column.minWidth,
                            }}
                            className="tablerow1st"
                            key={column.id}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(row[column?.field])
                              : row[column?.field]}
                          </TableCell>
                        );
                      })}

                      {columns.map((column) => {
                        const value = row[column.id];
                        if (column.field === "project_skills") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <ChipGroup value={row[column?.field]} />
                            </TableCell>
                          );
                        } else if (column.field === "createdBy") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wf_p2_semiBold">{row[column?.field] || "Admin"}</Typography>
                            </TableCell>
                          );
                        } else if (column.field === "benchmark") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wf_p2_semiBold">{row[column?.field] || "10 sec"}</Typography>
                            </TableCell>
                          );
                        } else if (column.field === "estimated_end_date") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wf_p2_semiBold">
                                {formatDate(row[column?.field]) || "20 july 2023"}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "relevantDocuments") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              {row?.[column.field]?.length > 0 ? (
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  <Link
                                    sx={{
                                      textDecoration: "none",
                                      cursor: "pointer",
                                      fontSize: "14px",
                                    }}
                                    href={row?.[column.field]?.[0].documentUrl}
                                  >
                                    click here
                                    <i className="ri-arrow-right-up-line"></i>
                                  </Link>
                                </Typography>
                              ) : (
                                ""
                              )}
                            </TableCell>
                          );
                        } else if (column.field === "project_status") {
                          return (
                            <TableCell key={column.id} component="th" scope="row">
                              <ProjectDrawerStatusChip value={row[column?.field]} />
                            </TableCell>
                          );
                        } else if (column.field === "workingTimeInMs") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wf_p2_semiBold">
                                {calculateTimeDifference(row[column?.field])}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "checkedInDate" || column.field === "checkedOutDate") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wf_p2_semiBold">
                                {/* TODO Add working chip here */}
                                {row[column?.field] ? formatDate(row[column?.field]) : "Working ⛑️"}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "checkedInTime" || column.field === "checkedOutTime") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              {/* TODO Add working chip here  */}
                              <Typography variant="wf_p2_semiBold">
                                {row[column?.field] ? formatTime(row[column?.field]) : "Working ⛑️"}
                              </Typography>
                            </TableCell>
                          );
                        }

                        return (
                          <TableCell key={column.id}>
                            {column.format && typeof value === "number"
                              ? column.format(row[column?.field])
                              : row[column?.field]}
                          </TableCell>
                        );
                      })}

                      {stickyLastColumn.map((column) => {
                        return (
                          <TableCell className="tablerowlast" key={column.id}>
                            <CustomButton
                              role={role}
                              handleProjectDetailsOpen={handleProjectDetailsOpen}
                              params={row}
                              handleClick={handleClick}
                              handleDelete={handleDelete}
                            />
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <TablePagination
            sx={{
              height: "10%",
            }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </>
    )
  );
}
