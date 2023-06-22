import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    SvgIcon,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
} from "@mui/material";
import {useTheme} from "@emotion/react";
import React, {useState} from "react";
import {useOutletContext} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {capitalizeFirstLetter} from "../../helper/capitalizeFirstWord";

const paperStyle = {
  padding: "0px 0px",
  width: "100%",
  height: "100%",
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const BenchMarkTable = ({ benchMarks }) => {
  const [handleDetails] = useOutletContext();
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  //   paggination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filtered = benchMarks.filter((entry) =>
    Object.values(entry).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(search.toLowerCase())
    )
  );

  // const 
  return (
    <>
      <Box>
        <Box>
          <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
            <Grid
              container
              style={{
                paddingTop: "2%",
                paddingLeft: "3%",
                paddingRight: "3%",
                paddingBottom: "0%",
              }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search a BenchMark"
                variant="outlined"
                onChange={handleChange}
              />
              {/* TODO Move this to a separate component */}
            </Grid>
            <Grid
              container
              style={{
                paddingTop: "2%",
                paddingLeft: "3%",
                paddingRight: "3%",
                paddingBottom: "3%",
              }}>
              <TableContainer>
                <Table
                  aria-label="simple table"
                  sx={{ border: "1px solid #DADCDF" }}>
                  {/* TODO : Convert this in a separate component  */}
                  <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        SL
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Name
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Created By
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Team
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Workspace
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Project
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Category
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Server
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#969CAF", fontSize: "20px" }}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? filtered.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filtered
                    ).map((item, i) => (
                      <TableRow key={item._id}>
                        <TableCell align="center">
                          {page * rowsPerPage + i + 1}
                        </TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">
                          {item.createdBy?.qaiUserName}
                        </TableCell>
                        <TableCell align="center">{item.teamName}</TableCell>
                        <TableCell align="center">
                          {item.workspaceName}
                        </TableCell>
                        <TableCell align="center">{item.projectName}</TableCell>
                        <TableCell align="center">
                          {capitalizeFirstLetter(item.category)}
                        </TableCell>
                        <TableCell align="center">
                          {capitalizeFirstLetter(item.server_agent)}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() => handleDetails(item)}
                            fullWidth
                            sx={{
                              "&:hover": {
                                backgroundColor: "#FF9A45",
                                color: "#1D1D1D",
                              },
                            }}
                            variant="outlined"
                            color="primary">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Paper>
        </Box>
      </Box>

      {/* This is for pagination */}
      {/* TODO Need to move in a separate component */}
      <Box>
        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid container sx={{ justifyContent: "right", paddingRight: "3%" }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={benchMarks.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default BenchMarkTable;
