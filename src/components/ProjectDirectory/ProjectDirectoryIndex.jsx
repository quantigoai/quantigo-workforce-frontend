import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getProjectByDirectory } from "../../features/slice/ProjectDirectory";
import { setActivePath } from "../../features/slice/activePathSlice";
import CreateProjectDirectory from "./CreateProjectDirectory/CreateProjectDirectory";
import UpdateProjectDirectory from "./CreateProjectDirectory/UpdateProjectDirectory";
import ProjectDirectoryDeleteModal from "./ProjectDirectoryDeleteModal";
import ProjectDirectoryDetailsIndex from "./ProjectDirectoryDetails/ProjectDirectoryDetailsIndex";
import SearchProjectDirectory from "./ProjectDirectoryFilter/SearchProjectDirectory";

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
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const ProjectDirectoryIndex = () => {
  const [projectDirectorys, setProjectDirectory] = useState([]);
  const dispatch = useDispatch();
  const { projectDirectory } = useSelector((state) => state.projectDirectory);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const alert = useAlert();
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [industryType, setIndustryType] = useState("");
  const [clientAliasFilter, setClientAliasesFilter] = useState("");
  const [dataTypeFilter, setDataTypeFilter] = useState("");
  const [pDRFilter, setPDRFilter] = useState("");
  const [annotationFilter, setAnnotationFilter] = useState("");
  const [date, setDate] = useState("");
  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorE2(null);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClose = () => {};

  const handleFilterProjectDirectory = () => {
    const data = {
      ...(industryType ? { industryType: industryType } : {}),
      ...(clientAliasFilter ? { clientAliasFilter: clientAliasFilter } : {}),
      ...(dataTypeFilter ? { dataTypeFilter: dataTypeFilter } : {}),
      ...(annotationFilter ? { annotationFilter: annotationFilter } : {}),
      ...(pDRFilter ? { pdr: pDRFilter } : {}),
      ...(date ? { date } : {}),
    };
    dispatch(getProjectByDirectory(data)).then((action) => {
      if (action.payload.status === 200) {
        setProjectDirectory(action.payload.data);
      }
    });
  };
  const handleResetProjectDirectory = () => {
    setIndustryType("");
    setClientAliasesFilter("");
    setDataTypeFilter("");
    setPDRFilter("");
    setAnnotationFilter("");
    dispatch(getProjectByDirectory()).then((action) => {
      if (action.payload.status === 200) {
        setProjectDirectory(action.payload.data);
      }
    });
  };
  //   paggination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    dispatch(setActivePath("Project Directory"));
    dispatch(getProjectByDirectory()).then((action) => {
      if (action.payload.status === 200) {
        setProjectDirectory(action.payload.data);
      }
    });
  }, []);
  const filtered = projectDirectory.filter((entry) =>
    Object.values(entry).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleClick = (link) => {
    window.open(link);
  };
  const skeletonCount = 5;
  const skeletonArray = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1
  );

  return (
    <>
      <Box sx={{ paddingBottom: "1%" }}>
        <Grid container>
          <Grid
            item
            xs={7}
            sx={{
              marginLeft: "0%",
              display: "flex",
            }}
            container
          >
            <Typography variant="h4" style={{ color: "#090080" }}>
              Projects Directory
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              textAlign: "right",
              justifyContent: "end",
              paddingLeft: "0%",
            }}
          >
            <Grid container>
              <Grid item xs={6}>
                <Grid
                  container
                  sx={{
                    textAlign: "right",
                    justifyContent: "end",
                    paddingLeft: "0%",
                  }}
                >
                  {/* //! need to moved */}
                  {/* <Box>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        // width: "40%",
                        height: "45px",
                        backgroundColor: "#2D58FF",
                        color: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "#FF9A45",
                          color: "#1D1D1D",
                        },
                        borderRadius: "2px",
                      }}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          justifyContent: "center",
                        }}>
                        Sync project Directory
                      </Box>
                    </Button>
                  </Box> */}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <CreateProjectDirectory />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Paper>
          <Grid
            container
            style={{
              paddingTop: "1%",
              paddingLeft: "1%",
              paddingRight: "3%",
              paddingBottom: "0%",
            }}
          >
            <SearchProjectDirectory
              placeholder="Search "
              handleClickFilter={handleClickFilter}
              handleCloseFilter={handleCloseFilter}
              anchorE2={anchorE2}
              setIndustryType={setIndustryType}
              handleFilterProjectDirectory={handleFilterProjectDirectory}
              handleResetProjectDirectory={handleResetProjectDirectory}
              industryType={industryType}
              handleChange={handleChange}
              setClientAliasesFilter={setClientAliasesFilter}
              clientAliasFilter={clientAliasFilter}
              setPDRFilter={setPDRFilter}
              pDRFilter={pDRFilter}
              setDataTypeFilter={setDataTypeFilter}
              dataTypeFilter={dataTypeFilter}
              setAnnotationFilter={setAnnotationFilter}
              annotationFilter={annotationFilter}
            />
          </Grid>
          <Grid
            container
            style={{
              paddingTop: "1%",
              paddingLeft: "1%",
              paddingRight: "3%",
              // paddingBottom: "3%",
            }}
          >
            {projectDirectory.length === 0 ? (
              <>
                <Grid container sx={{ paddingTop: "0%" }}>
                  {" "}
                  <Box sx={{ width: "100%" }}>
                    {skeletonArray.map((item) => (
                      <>
                        {" "}
                        <Skeleton height={40} />
                        <Skeleton animation="wave" height={40} />
                        <Skeleton animation={false} height={40} />
                      </>
                    ))}
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                {" "}
                <TableContainer>
                  <Table
                    aria-label="simple table"
                    sx={{ border: "1px solid #DADCDF" }}
                  >
                    {/* TODO : Convert this in a separate component  */}
                    <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          SL
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Project Timeline
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Client Alias
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Project Name
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Industry Type
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Annotation Type
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Data Type
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          PDR
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Action
                        </TableCell>
                        {/* <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Update
                        </TableCell> */}
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                        >
                          Details
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
                          <TableCell align="center">{item.Sl_No}</TableCell>
                          <TableCell align="center">
                            {item.Project_Timeline}
                          </TableCell>

                          <TableCell align="center">
                            {item.Client_Alias}
                          </TableCell>
                          <TableCell align="center">
                            {item.Project_Name}
                          </TableCell>
                          <TableCell align="center">
                            {item.Industry_Type}
                          </TableCell>

                          <TableCell align="center">
                            {item.Annotation_Type}
                          </TableCell>
                          <TableCell align="center">{item.Data_Type}</TableCell>

                          <TableCell align="center">{item.PDR}</TableCell>

                          <TableCell align="center">
                            <ProjectDirectoryDeleteModal item={item} />
                          </TableCell>
                          {/* <TableCell align="center">
                            <UpdateProjectDirectory item={item} />
                          </TableCell> */}
                          <TableCell align="center">
                            <ProjectDirectoryDetailsIndex item={item} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Grid>
        </Paper>
      </Box>

      <Box>
        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid container sx={{ justifyContent: "right", paddingRight: "3%" }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={projectDirectory.length}
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

export default ProjectDirectoryIndex;
