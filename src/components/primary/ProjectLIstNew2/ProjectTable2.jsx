import { Box, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import ChipGroup from "../../shared/CustomTable/ChipGroup";
import CustomButton from "../../shared/CustomTable/CustomButton";
import ProjectDrawerStatusChip from "../../shared/FilterField/ProjectDrawerStatusChip";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import PaginationTable from "./PaginationTable";
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
const ProjectTable2 = ({
  pagination,
  setPagination,
  handleChangePagination,
  myColumn,
  myRows,
  handleDelete,
  handleClick,
  totalItems,
}) => {
  const { isLoading } = useSelector((state) => state.projectDrawer);
  return (
    <>
      <Box sx={{ height: "100vh" }} className="div1">
        {isLoading ? (
          <LoadingComponent height="70vh" />
        ) : (
          <Table aria-label="simple table" className="myTable">
            <TableHead>
              <TableRow className="custom-header">
                {myColumn.map((col) => (
                  <TableCell
                    sx={{
                      minWidth: col.width || "140px",
                      color: "#7B98BA",
                      textAlign: "left",
                      // fontSize: "14px",
                    }}
                    key={col.id}
                  >
                    <Box sx={{ display: "flex", justifyContent: "start" }}>
                      {col.headerName}
                      <Box
                        sx={{
                          lineHeight: 0,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          sx={{
                            minWidth: "30px",
                            padding: "15%",
                            lineHeight: 0,
                            color: "#7B98BA",
                          }}
                        >
                          <i className="ri-arrow-up-s-fill"></i>
                        </Button>
                        <Button
                          sx={{ padding: 0, lineHeight: 0, color: "#7B98BA" }}
                        >
                          <i className="ri-arrow-down-s-fill"></i>
                        </Button>
                      </Box>
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {myRows.map((row) => {
                return (
                  <TableRow className="tableRow" key={row._id}>
                    {myColumn.map((col) => {
                      if (col.field === "project_skills") {
                        return (
                          <TableCell
                            sx={{ textAlign: "left" }}
                            key={col.id}
                            component="th"
                            scope="row"
                          >
                            <ChipGroup value={row[col?.field]} />
                          </TableCell>
                        );
                      }
                      if (col.field === "project_status") {
                        return (
                          <TableCell
                            sx={{ textAlign: "left" }}
                            key={col.id}
                            component="th"
                            scope="row"
                          >
                            <ProjectDrawerStatusChip value={row[col?.field]} />
                          </TableCell>
                        );
                      } else if (col.field === "ACTIONS") {
                        return (
                          <TableCell key={col.id} component="th" scope="row">
                            <CustomButton
                              params={row}
                              handleClick={handleClick}
                              handleDelete={handleDelete}
                            />
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            sx={{ textAlign: "left" }}
                            key={col.id}
                            component="th"
                            scope="row"
                          >
                            <Typography sx={{ color: "#253E5C" }} variant="p">
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
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
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
    </>
  );
};

export default ProjectTable2;
