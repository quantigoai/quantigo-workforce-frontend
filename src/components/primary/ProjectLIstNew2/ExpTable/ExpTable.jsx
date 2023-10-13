import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,} from "@mui/material";
import React, {useState} from "react";
import "swiper/css";
import "./exp.css";

const stickyFirstColumn = [{ id: "name", label: "Name", minWidth: 170 }];
const stickyLastColumn = [
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const columns = [
  { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 300 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

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
  createData("Mexico", "MX", 126577691, 23, 343, 4545, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const ExpTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          overflow: "auto",
        }}
      >
        <TableContainer
          sx={{
            height: "90%",
            backgroundColor: "green",
          }}
        >
          <Table
            sx={{
              height: "100%",
              backgroundColor: "yellow",
            }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead
              sx={{
                padding: "6px",
                border: "2px solid red",
                zIndex: "1000",
              }}
            >
              <TableRow>
                {stickyFirstColumn.map((column) => (
                  <TableCell
                    // className="stickyHeader"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{
                      //   border: "2px solid red",
                      position: "fixed",
                      top: "auto",
                      zIndex: "1001",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                {columns.map((column) => (
                  <TableCell
                    className="stickyHeader"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                {stickyLastColumn.map((column) => (
                  <TableCell
                    className="rightStickyColumn"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                padding: "6px",
                height: "100%",
                backgroundColor: "green",
              }}
            >
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow
                    sx={
                      {
                        //   height: "10vh",
                      }
                    }
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    {stickyFirstColumn.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          sx={{
                            minWidth: column.minWidth,
                          }}
                          className="leftStickyColumn"
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number" ? column.format(value) : value}
                        </TableCell>
                      );
                    })}

                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number" ? column.format(value) : value}
                        </TableCell>
                      );
                    })}

                    {stickyLastColumn.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell className="rightStickyColumn" key={column.id} align={column.align}>
                          {column.format && typeof value === "number" ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default ExpTable;
