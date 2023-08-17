import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PageinationTable from "./PageinationTable";
import { Box, Typography } from "@mui/material";

const getStatusStyle = (status) => {
  switch (status) {
    case "in-Progress":
      return {
        color: "#2E58FF",
        backgroundColor: "#F4F7FE",
        padding: "4px 12px",
        border: "1px solid #2E58FF1F",
        borderRadius: "32px",
        fontWeight: "500",
      };
    case "hours-added":
      return {
        color: "#F79009",
        backgroundColor: "#FAE4C3",
        padding: "4px 12px",
        border: "1px solid #FAE4C3",
        borderRadius: "32px",
        fontWeight: "500",
      };
    case "completed":
      return {
        color: "#12B76A",
        backgroundColor: "#C4F5DF",
        padding: "4px 12px",
        border: " 1px solid #C4F5DF",
        borderRadius: "32px",
        fontWeight: "500",
      };
    case "not-Started":
      return {
        color: "#3C4D6B",
        backgroundColor: "#F2F6FC",
        padding: "4px 12px",
        border: "1px solid #E6ECF5",
        borderRadius: "32px",
        fontWeight: "500",
      };
    default:
      return {};
  }
};

const ProjectTable2 = ({ myColumn, myRows }) => {
  return (
    <>
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
            {myRows.map((row) => {
              return (
                <TableRow
                  key={row._id}
                  sx={{
                    color:
                      row.project_status === "in-Progress" ? "red" : "green",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  {myColumn.map((col) => {
                    const statusStyle = getStatusStyle(row[col?.field]);
                    return (
                      <TableCell
                        align="middle"
                        sx={
                          {
                            // width: col.width || 140,
                          }
                        }
                        key={col.id}
                        component="th"
                        scope="row"
                      >
                        <Typography sx={statusStyle} variant="p">
                          {" "}
                          {row[col?.field]}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <PageinationTable />
        </Box>
      </TableContainer>
    </>
  );
};

export default ProjectTable2;
