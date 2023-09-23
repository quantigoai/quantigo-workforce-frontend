/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/TableComponenet.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 21st 2023, 2:42:44 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Badge, Box, Link, Typography, styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "swiper/css";
import { calculateTimeDifference, formatDate, formatTime } from "../../../helper/dateConverter";
import ChipGroup from "../../shared/CustomTable/ChipGroup";
import CustomButton from "../../shared/CustomTable/CustomButton";
import ProjectDrawerStatusChip from "../../shared/FilterField/ProjectDrawerStatusChip";
import SortingButton from "./Project2Details/SortingButton";
import "./index.css";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 10,
    padding: "0 2px",
  },
}));
const TableComponent = ({
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
}) => {
  return (
    <>
      <Table aria-label="simple table" className="myTable">
        <TableHead>
          <TableRow className="custom-header">
            {myColumn.map((col) => (
              <TableCell
                sx={{
                  minWidth: col.width || "140px",
                  textAlign: "left",
                }}
                key={col.id}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "12px" }} variant={"p"}>
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
                  } else if (col.field === "createdBy") {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        <Typography variant="wf_p2_semiBold">{row[col?.field] || "Admin"}</Typography>
                      </TableCell>
                    );
                  } else if (col.field === "benchmark") {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        <Typography  variant="wf_p2_semiBold">
                          {row[col?.field] || "10 sec"}
                        </Typography>
                      </TableCell>
                    );
                  } else if (col.field === "estimated_end_date") {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        <Typography  variant="wf_p2_semiBold">
                          {formatDate(row[col?.field]) || "20 july 2023"}
                        </Typography>
                      </TableCell>
                    );
                  } else if (col.field === "relevantDocuments") {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        {row?.[col.field]?.length > 0 ? (
                          <Typography sx={{ color: "#253E5C" }} variant="wf_p2_semiBold">
                            <Link
                              sx={{
                                textDecoration: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                              }}
                              href={row?.[col.field]?.[0].documentUrl}
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
                  } else if (col.field === "project_status") {
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
                            <Typography sx={{ cursor: "pointer" }} variant="wf_p2_semiBold">
                              {row[col?.field]}
                            </Typography>
                          </StyledBadge>
                        ) : (
                          <Typography sx={{ cursor: "pointer" }} variant="wf_p2_semiBold">
                            {row[col?.field]}
                          </Typography>
                        )}
                      </TableCell>
                    );
                  } else if (col.field === "workingTimeInMs") {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        <Typography variant="wf_p2_semiBold">{calculateTimeDifference(row[col?.field])}</Typography>
                      </TableCell>
                    );
                  } else if (col.field === "checkedInDate" || col.field === "checkedOutDate") {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        <Typography variant="wf_p2_semiBold">
                          {/* TODO Add working chip here */}
                          {row[col?.field] ? formatDate(row[col?.field]) : "Working ⛑️"}
                        </Typography>
                      </TableCell>
                    );
                  } else if (col.field === "checkedInTime" || col.field === "checkedOutTime") {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        {/* TODO Add working chip here  */}
                        <Typography variant="wf_p2_semiBold">
                          {row[col?.field] ? formatTime(row[col?.field]) : "Working ⛑️"}
                        </Typography>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                        <Typography variant="wf_p2_semiBold">{row[col?.field]}</Typography>
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableComponent;
