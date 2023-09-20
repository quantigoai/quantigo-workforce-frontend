/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectTable2.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, September 19th 2023, 3:20:38 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Alert, Badge, Box, Link, Typography, styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import "swiper/css";
import { calculateTimeDifference, formatDate, formatTime } from "../../../helper/dateConverter";
import ChipGroup from "../../shared/CustomTable/ChipGroup";
import CustomButton from "../../shared/CustomTable/CustomButton";
import ProjectDrawerStatusChip from "../../shared/FilterField/ProjectDrawerStatusChip";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import PaginationTable from "./PaginationTable";
import SortingButton from "./Project2Details/SortingButton";
import DetailsPage from "./ProjectDetailsFull/DetailsPage";
import "./index.css";

/**
 * @param {object} pagination - pagination object
 * @param {function} setPagination - set pagination
 * @param {function} handleChangePagination - handle change pagination
 * @param {array} myColumn - array of columns
 * @param {array} myRows - array of rows
 * @param {function} handleDelete - handle delete button
 * @param {function} handleClick - handle click on edit button
 * @param {number} totalItems - total number of items
 * @returns {JSX.Element} A table for rendering rows and columns items
 *
 */

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 10,
    padding: "0 2px",
  },
}));

const ProjectTable2 = ({
  pagination,
  handleDetailsPage,
  setPagination,
  handleChangePagination,
  myColumn,
  myRows,
  handleDelete,
  handleClick,
  totalItems,
  handleId,
  filteredCol,
  handleProjectDetailsOpen,
  role,
  skillAlert,
}) => {
  const { isLoading } = useSelector((state) => state.projectDrawer);
  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  console.log("🚀 ~ file: ProjectTable2.jsx:68 ~ currentlyCheckedInProject:", currentlyCheckedInProject);
  return (
    <>
      <Box sx={{ height: "100vh" }} className="div1">
        {isLoading ? (
          <LoadingComponent height="50vh" />
        ) : (
          <>
            {myRows.length > 0 ? (
              <Table aria-label="simple table" className="myTable">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#fff" }} className="custom-header">
                    {myColumn.map((col) => (
                      <TableCell
                        sx={{
                          minWidth: col.width || "140px",
                          color: "#7B98BA",
                          textAlign: "left",
                          fontSize: "13px",
                        }}
                        key={col.id}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                          }}
                        >
                          <Typography sx={{ fontWeight: "600", color: "#7B98BA", fontSize: "12px" }} variant={"p"}>
                            {col.headerName}
                          </Typography>

                          {col.headerName !== "ACTIONS" && (
                            <Box onClick={() => handleId(col.field)}>
                              <SortingButton col={col.field} filteredCol={filteredCol} />
                            </Box>
                          )}
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody className="tableBody">
                  {myRows.map((row) => {
                    return (
                      <TableRow className="tableRow" key={row._id}>
                        {myColumn.map((col) => {
                          if (col.field === "project_skills") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <ChipGroup value={row[col?.field]} />
                              </TableCell>
                            );
                          }
                          if (col.field === "createdBy") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  {row[col?.field] || "Tanzim"}
                                </Typography>
                              </TableCell>
                            );
                          }
                          if (col.field === "benchmark") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  {row[col?.field] || "10 sec"}
                                </Typography>
                              </TableCell>
                            );
                          }
                          if (col.field === "estimated_end_date") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  {formatDate(row[col?.field]) || "20 july 2023"}
                                </Typography>
                              </TableCell>
                            );
                          }
                          if (col.field === "guideline") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  <Link
                                    sx={{
                                      textDecoration: "none",
                                      cursor: "pointer",
                                      fontSize: "14px",
                                    }}
                                    href="#"
                                  >
                                    click here <i className="ri-arrow-right-up-line"></i>
                                  </Link>
                                </Typography>
                              </TableCell>
                            );
                          }
                          if (col.field === "project_status") {
                            return (
                              <TableCell key={col.id} component="th" scope="row">
                                <ProjectDrawerStatusChip value={row[col?.field]} />
                              </TableCell>
                            );
                          } else if (col.field === "ACTIONS") {
                            return (
                              <TableCell key={col.id} component="th" scope="row">
                                <CustomButton
                                  role={role}
                                  handleProjectDetailsOpen={handleProjectDetailsOpen}
                                  params={row}
                                  handleClick={handleClick}
                                  handleDelete={handleDelete}
                                />
                              </TableCell>
                            );
                          } else if (col.field === "project_drawer_name") {
                            return (
                              <TableCell
                                onClick={() => handleDetailsPage(row)}
                                sx={{ textAlign: "left" }}
                                key={col.id}
                                component="th"
                                scope="row"
                              >
                                {currentlyCheckedInProject === row._id ? (
                                  <StyledBadge variant="dot" color="success">
                                    <Typography sx={{ color: "#253E5C", cursor: "pointer" }} variant="wf_p2_semiBold">
                                      {row[col?.field]}
                                    </Typography>
                                  </StyledBadge>
                                ) : (
                                  <Typography sx={{ color: "#253E5C", cursor: "pointer" }} variant="wf_p2_semiBold">
                                    {row[col?.field]}
                                  </Typography>
                                )}
                              </TableCell>
                            );
                          } else if (col.field === "workingTimeInMs") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  {calculateTimeDifference(row[col?.field])}
                                </Typography>
                              </TableCell>
                            );
                          } else if (col.field === "checkedInDate" || col.field === "checkedOutDate") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  {/* TODO Add working chip here */}
                                  {row[col?.field] ? formatDate(row[col?.field]) : "Working ⛑️"}
                                </Typography>
                              </TableCell>
                            );
                          } else if (col.field === "checkedInTime" || col.field === "checkedOutTime") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                {/* TODO Add working chip here  */}
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  {row[col?.field] ? formatTime(row[col?.field]) : "Working ⛑️"}
                                </Typography>
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                                  {row[col?.field]}
                                </Typography>
                              </TableCell>
                            );
                          }
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : role !== "admin" ? (
              <DetailsPage skillAlert={skillAlert} />
            ) : (
              <Alert Alert severity="error">
                No Users history found for this project!
              </Alert>
            )}
          </>
        )}
      </Box>
      {
        <Box
          sx={{
            display: "flex",
            backgroundColor: "white",
            width: "97%",
            margin: "auto",
            justifyContent: "flex-end",
          }}
        >
          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            handleChangePagination={handleChangePagination}
            totalItems={totalItems}
          />
        </Box>
      }
    </>
  );
};

export default ProjectTable2;
