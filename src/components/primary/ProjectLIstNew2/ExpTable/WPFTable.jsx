import { Badge, Box, Link, Paper, Stack, Typography, styled } from "@mui/material";
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

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 10,
    padding: "0 2px",
  },
}));

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
  return (
    myColumn.length > 0 && (
      <>
        {/* <Paper
          sx={{
            width: "100%",
            height: "92%",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        > */}
          <TableContainer className="tableContainer" sx={{ height: "100%" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead className="tableHeader">
                <TableRow>
                  {stickyFirstColumn.map((column) => (
                    <TableCell className="first-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
                      <Stack
                        flexDirection={"row"}
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="wpf_h7_semiBold" color="neutral.550">
                          {column.headerName}
                        </Typography>
                        <Box onClick={() => handleId(column.field)}>
                          <SortingButton column={column.field} filteredCol={filteredCol} />
                        </Box>
                      </Stack>
                    </TableCell>
                  ))}
                  {columns.map((column) => (
                    <TableCell className="common-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
                      <Stack
                        flexDirection={"row"}
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="wpf_h7_semiBold" color="neutral.550">
                          {column.headerName}
                        </Typography>
                        <Box onClick={() => handleId(column.field)}>
                          <SortingButton column={column.field} filteredCol={filteredCol} />
                        </Box>
                      </Stack>
                    </TableCell>
                  ))}
                  {stickyLastColumn.map((column) => (
                    <TableCell className="last-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
                      <Typography variant="wpf_h7_semiBold" color="neutral.550">
                        {column.headerName}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody className="tableBody">
                {myRows.map((row) => {
                  return (
                    <TableRow
                      hover
                      // role="checkbox"
                      // tabIndex={-1}
                      key={row.id}
                    >
                      {stickyFirstColumn.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            sx={{
                              minWidth: column.minWidth,
                            }}
                            className="tableColumn1st"
                            key={column.id}
                            onClick={() => handleDetailsPage(row)}
                          >
                            {currentlyCheckedInProject === row._id ? (
                              <StyledBadge variant="dot" color="success">
                                <Typography variant="wpf_p4_medium" color="neutral.700">
                                  {column.format && typeof value === "number"
                                    ? column.format(row[column?.field])
                                    : row[column?.field]}
                                </Typography>
                              </StyledBadge>
                            ) : (
                              <Typography variant="wpf_p4_medium" color="neutral.700">
                                {column.format && typeof value === "number"
                                  ? column.format(row[column?.field])
                                  : row[column?.field]}
                              </Typography>
                            )}
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
                              <Typography variant="wpf_p4_regular" color="neutral.700">
                                {row[column?.field] || "Admin"}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "benchmark") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wpf_p4_regular" color="neutral.700">
                                {row[column?.field] || "10 sec"}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "estimated_end_date") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wpf_p4_regular" color="neutral.700">
                                {formatDate(row[column?.field]) || "20 july 2023"}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "relevantDocuments") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              {row?.[column.field]?.length > 0 ? (
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p4_regular">
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
                              <Typography variant="wpf_p4_regular" color="neutral.700">
                                {calculateTimeDifference(row[column?.field])}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "checkedInDate" || column.field === "checkedOutDate") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              <Typography variant="wpf_p4_regular" color="neutral.700">
                                {/* TODO Add working chip here */}
                                {row[column?.field] ? formatDate(row[column?.field]) : "Working ⛑️"}
                              </Typography>
                            </TableCell>
                          );
                        } else if (column.field === "checkedInTime" || column.field === "checkedOutTime") {
                          return (
                            <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
                              {/* TODO Add working chip here  */}
                              <Typography variant="wpf_p4_regular" color="neutral.700">
                                {row[column?.field] ? formatTime(row[column?.field]) : "Working ⛑️"}
                              </Typography>
                            </TableCell>
                          );
                        }

                        return (
                          <TableCell key={column.id}>
                            <Typography variant="wpf_p4_regular" color="neutral.700">
                              {column.format && typeof value === "number"
                                ? column.format(row[column?.field])
                                : row[column?.field]}
                            </Typography>
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
        {/* </Paper> */}
      </>
    )
  );
}
