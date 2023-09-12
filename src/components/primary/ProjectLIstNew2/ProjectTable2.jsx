import { Box, Link, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import "swiper/css";
import ChipGroup from "../../shared/CustomTable/ChipGroup";
import CustomButton from "../../shared/CustomTable/CustomButton";
import ProjectDrawerStatusChip from "../../shared/FilterField/ProjectDrawerStatusChip";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import PaginationTable from "./PaginationTable";
import "./index.css";
import SortingButton from "./Project2Details/SortingButton";

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

const ProjectTable2 = ({ pagination, handleDetailsPage, setPagination, handleChangePagination, myColumn, myRows, handleDelete, handleClick, totalItems, handleId, filteredCol, handleCount, handleProjectDetailsOpen }) => {
  const { isLoading } = useSelector((state) => state.projectDrawer);

  return (
    <>
      <Box sx={{ height: "100vh" }} className="div1">
        {isLoading ? (
          <LoadingComponent height="70vh" />
        ) : (
          <>
            <Table aria-label="simple table" className="myTable">
              <TableHead>
                <TableRow className="custom-header">
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
                        {col.headerName}

                        {col.headerName !== "ACTIONS" && (
                          <Box onClick={() => handleId(col.field)}>
                            <SortingButton handleCount={handleCount} col={col.field} filteredCol={filteredCol} />
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody className="tableBody">
                {myRows.length > 0 ? (
                  myRows.map((row) => {
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
                                <Typography sx={{ color: "#253E5C" }} variant="p">
                                  {row[col?.field] || "Tanzim"}
                                </Typography>
                              </TableCell>
                            );
                          }
                          if (col.field === "benchmark") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="p">
                                  {row[col?.field] || "10 sec"}
                                </Typography>
                              </TableCell>
                            );
                          }
                          if (col.field === "estimated_end_date") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="p">
                                  {row[col?.field] || "20 july 2023"}
                                </Typography>
                              </TableCell>
                            );
                          }
                          if (col.field === "guideline") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="p">
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
                                <CustomButton handleProjectDetailsOpen={handleProjectDetailsOpen} params={row} handleClick={handleClick} handleDelete={handleDelete} />
                              </TableCell>
                            );
                          } else if (col.field === "project_drawer_name") {
                            return (
                              <TableCell onClick={() => handleDetailsPage(row)} sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C", cursor: "grab" }} variant="p">
                                  {row[col?.field]}
                                </Typography>
                              </TableCell>
                            );
                          } else if (col.field === "total_time") {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C", cursor: "grab" }} variant="p">
                                  {row[col?.field] || "3hrs 52 minutes "}
                                </Typography>
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell sx={{ textAlign: "left" }} key={col.id} component="th" scope="row">
                                <Typography sx={{ color: "#253E5C" }} variant="p">
                                  {row[col?.field]}
                                </Typography>
                              </TableCell>
                            );
                          }
                        })}
                      </TableRow>
                    );
                  })
                ) : (
                  <Typography sx={{ textAlign: "center" }} variant="p">
                    No Checked in user found
                  </Typography>
                )}
              </TableBody>
            </Table>
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <PaginationTable pagination={pagination} setPagination={setPagination} handleChangePagination={handleChangePagination} totalItems={totalItems} />
      </Box>
    </>
  );
};

export default ProjectTable2;
