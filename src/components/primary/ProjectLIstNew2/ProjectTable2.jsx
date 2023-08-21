import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ChipGroup from "../../shared/CustomTable/ChipGroup";
import CustomButton from "../../shared/CustomTable/CustomButton";
import ProjectDrawerStatusChip from "../../shared/FilterField/ProjectDrawerStatusChip";
import "./index.css";
const colStyle = {
  position: "sticky",
  left: 0,
};

const ProjectTable2 = ({ myColumn, myRows, handleDelete, handleClick }) => {
  return (
    <>
      {/* <TableContainer className="div1" component={Paper}> */}
      <Box sx={{ height: "100vh" }} className="div1">
        <Table aria-label="simple table" className="myTable">
          <TableHead>
            <TableRow>
              {myColumn.map((col) => (
                <TableCell
                  sx={
                    (colStyle,
                    {
                      minWidth: col.width || "140px",
                      color: "#7B98BA",
                      textAlign: "center",
                    })
                  }
                  key={col.id}
                >
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {myRows.map((row) => {
              return (
                <TableRow key={row._id}>
                  {myColumn.map((col) => {
                    if (col.field === "project_skills") {
                      return (
                        <TableCell
                          sx={{ textAlign: "center", PaddingX: "20px" }}
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
                          sx={{ textAlign: "center" }}
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
                          sx={{ textAlign: "center" }}
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
        {/* <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",

          mt: 60,
        }}
        >
          <PaginationTable />
        </Box> */}
      </Box>
    </>
  );
};

export default ProjectTable2;
