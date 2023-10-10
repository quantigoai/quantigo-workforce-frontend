import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Box,
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
  TableSortLabel,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getProjectByDirectory } from "../../features/slice/ProjectDirectorySlice";
import { setActivePath } from "../../features/slice/activePathSlice";
import CreateProjectDirectory from "./CreateProjectDirectory/CreateProjectDirectory";
import UpdateProjectDirectory from "./CreateProjectDirectory/UpdateProjectDirectory";
import ProjectDirectoryDeleteModal from "./ProjectDirectoryDeleteModal";
import ProjectDirectoryDetailsIndex from "./ProjectDirectoryDetails/ProjectDirectoryDetailsIndex";
import SearchProjectDirectory from "./ProjectDirectoryFilter/SearchProjectDirectory";
import useToaster from "../../customHooks/useToaster";

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
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
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
  const user = useSelector((state) => state.user);
  const { role } = user.user;
  const [projectDirectorys, setProjectDirectory] = useState([]);
  const dispatch = useDispatch();
  const { projectDirectory, isLoading } = useSelector((state) => state.projectDirectory);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const alert = useAlert();

  const toast = useToaster();
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [industryType, setIndustryType] = useState("");
  const [clientAliasFilter, setClientAliasesFilter] = useState("");
  const [dataTypeFilter, setDataTypeFilter] = useState("");
  const [pDRFilter, setPDRFilter] = useState("");
  const [annotationFilter, setAnnotationFilter] = useState("");
  const [platformFieldFilter, setPlatformFieldFilter] = useState("");
  const [projectTypeFieldFilter, setProjectTypeFieldFilter] = useState("");
  const [actionItemsFieldFilter, setActionItemsFieldFilter] = useState("");
  const [qaCheckPointFieldFilter, setQaCheckPointFieldFilter] = useState("");
  const [objBenchMarkFieldFilter, setObjBenchMarkFieldFilter] = useState("");
  const [imgBenchMarkFieldFilter, setImgBenchMarkFieldFilter] = useState("");
  const [deletionFieldFilter, setDeletionFieldFilter] = useState("");
  const [toolTypeFieldFilter, setToolTypeFieldFilter] = useState("");
  const [qAField, setQAFilter] = useState(false);
  const [qAFieldFilter, setQAFieldFilter] = useState("");
  const [qABenchmarkFieldFilter, setQABenchmarkFieldFilter] = useState("");
  const [judgementTimeFieldFilter, setJudgementTimeFieldFilter] = useState("");
  const [skipImageFieldFilter, setSkipImageFieldFilter] = useState("");
  const [imageLoadingFieldFilter, setImageLoadingFieldFilter] = useState("");
  const [objectSavingTimeFieldFilter, setobjectSavingTimeFieldFilter] = useState("");
  const [videoWatchTimeFieldFilter, setVideoWatchTimeFieldFilter] = useState("");
  const [taggingBenchMarkFieldFilter, setTaggingBenchMarkFieldFilter] = useState("");
  const [date, setDate] = useState("");

  const [pdrSetFilter, setPdrSetFilter] = useState(false);
  const [Client_AliasSetFilter, setClient_AliasSetFilter] = useState(false);
  const [annotationSetFilter, setAnnotationSetFilter] = useState(false);
  const [platformField, setPlatformField] = useState(false);
  const [industrySetFilter, setIndustrySetFilter] = useState(false);
  const [toolTypeField, setToolTypeFilter] = useState(false);
  const [projectTypeField, setProjectTypeFilter] = useState(false);
  const [actionItemsField, setActionItemsFilter] = useState(false);
  const [qaCheckPointField, setQaCheckPointFilter] = useState(false);
  const [objBenchMarkField, setObjBenchMarkFilter] = useState(false);
  const [imageBenchMarkField, setImageBenchMarkFilter] = useState(false);
  const [tagingBenchMarkField, setTagingBenchMarkFilter] = useState(false);
  const [skipImageField, setSkipImageFilter] = useState(false);
  const [imageLoadingField, setImageLoadingFilter] = useState(false);
  const [objectSavingTimeFilter, setObjectSavingTimeFilter] = useState(false);
  const [videoWatchTimeFilter, setVideoWatchTimeFilter] = useState(false);
  const [DeletionField, setDeletionFilter] = useState(false);
  const [judgementTimeFilter, setJudgementTimeFilter] = useState(false);
  const [qABenchmarkField, setQABenchmarkField] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorE2(null);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMenuItemClick = (e) => {
    if (e === "PDR") {
      setPdrSetFilter(true);
    }
    if (e === "QA") {
      setQAFilter(true);
    }
    if (e === "QA_Benchmark") {
      setQABenchmarkField(true);
    }
    if (e === "Judgement_Time") {
      setJudgementTimeFilter(true);
    }
    if (e === "Skip_Image") {
      setSkipImageFilter(true);
    }
    if (e === "Image_Loading") {
      setImageLoadingFilter(true);
    }
    if (e === "Object_Saving_Time") {
      setObjectSavingTimeFilter(true);
    }
    if (e === "Video_Watch_Time") {
      setVideoWatchTimeFilter(true);
    }
    if (e === "Deletion") {
      setDeletionFilter(true);
    }
    if (e === "Tagging_Benchmark") {
      setTagingBenchMarkFilter(true);
    }
    if (e === "Img_Benchmark") {
      setImageBenchMarkFilter(true);
    }
    if (e === "Obj_Benchmark") {
      setObjBenchMarkFilter(true);
    }
    if (e === "QA_Check_Points") {
      setQaCheckPointFilter(true);
    }
    if (e === "Action_Items") {
      setActionItemsFilter(true);
    }
    if (e === "Project_Type") {
      setProjectTypeFilter(true);
    }
    if (e === "Tool_Type") {
      setToolTypeFilter(true);
    }
    if (e === "Platform") {
      setPlatformField(true);
    }
    if (e === "Client_Alias") {
      setClient_AliasSetFilter(true);
    }
    if (e === "Industry") {
      setIndustrySetFilter(true);
    }
    if (e === "Annotation") {
      setAnnotationSetFilter(true);
    }
    setAnchorEl(null);
  };
  const handleFilterProjectDirectory = () => {
    const data = {
      ...(industryType ? { industryType: industryType } : {}),
      ...(clientAliasFilter ? { clientAliasFilter: clientAliasFilter } : {}),
      ...(dataTypeFilter ? { dataTypeFilter: dataTypeFilter } : {}),
      ...(actionItemsFieldFilter ? { actionItemsFieldFilter: actionItemsFieldFilter } : {}),
      ...(qAFieldFilter ? { qAFieldFilter: qAFieldFilter } : {}),
      ...(qABenchmarkFieldFilter ? { qABenchmarkFieldFilter: qABenchmarkFieldFilter } : {}),
      ...(judgementTimeFieldFilter ? { judgementTimeFieldFilter: judgementTimeFieldFilter } : {}),
      ...(skipImageFieldFilter ? { skipImageFieldFilter: skipImageFieldFilter } : {}),
      ...(imageLoadingFieldFilter ? { imageLoadingFieldFilter: imageLoadingFieldFilter } : {}),
      ...(objectSavingTimeFieldFilter ? { objectSavingTimeFieldFilter: objectSavingTimeFieldFilter } : {}),
      ...(videoWatchTimeFieldFilter ? { videoWatchTimeFieldFilter: videoWatchTimeFieldFilter } : {}),
      ...(toolTypeFieldFilter ? { toolTypeFieldFilter: toolTypeFieldFilter } : {}),
      ...(deletionFieldFilter ? { deletionFieldFilter: deletionFieldFilter } : {}),
      ...(platformFieldFilter ? { platformFieldFilter: platformFieldFilter } : {}),
      ...(projectTypeFieldFilter ? { projectTypeFieldFilter: projectTypeFieldFilter } : {}),
      ...(annotationFilter ? { annotationFilter: annotationFilter } : {}),
      ...(pDRFilter ? { pdr: pDRFilter } : {}),
      ...(qaCheckPointFieldFilter ? { qaCheckPointFieldFilter: qaCheckPointFieldFilter } : {}),
      ...(imgBenchMarkFieldFilter ? { imgBenchMarkFieldFilter: imgBenchMarkFieldFilter } : {}),
      ...(taggingBenchMarkFieldFilter ? { taggingBenchMarkFieldFilter: taggingBenchMarkFieldFilter } : {}),
      ...(objBenchMarkFieldFilter ? { objBenchMarkFieldFilter: objBenchMarkFieldFilter } : {}),
      ...(date ? { date } : {}),
    };
    dispatch(getProjectByDirectory(data)).then((action) => {
      if (action.payload.status === 200) {
        setProjectDirectory(action.payload.data);
      }
    });
  };
  const handleResetProjectDirectory = () => {
    setVideoWatchTimeFieldFilter("");
    setPlatformFieldFilter("");
    setProjectTypeFieldFilter("");
    setActionItemsFieldFilter("");
    setObjBenchMarkFieldFilter("");
    setImgBenchMarkFieldFilter("");
    setDeletionFieldFilter("");
    setToolTypeFieldFilter("");
    setQAFieldFilter("");
    setQABenchmarkFieldFilter("");
    setJudgementTimeFieldFilter("");
    setSkipImageFieldFilter("");
    setImageLoadingFieldFilter("");
    setobjectSavingTimeFieldFilter("");
    setTaggingBenchMarkFieldFilter("");
    setIndustryType("");
    setClientAliasesFilter("");
    setDataTypeFilter("");
    setPDRFilter("");
    setAnnotationFilter("");
    setQAFilter(false);
    setPdrSetFilter(false);
    setQABenchmarkField(false);
    setJudgementTimeFilter(false);
    setSkipImageFilter(false);
    setImageLoadingFilter(false);
    setObjectSavingTimeFilter(false);
    setVideoWatchTimeFilter(false);
    setDeletionFilter(false);
    setTagingBenchMarkFilter(false);
    setImageBenchMarkFilter(false);
    setObjBenchMarkFilter(false);
    setQaCheckPointFilter(false);
    setActionItemsFilter(false);
    setProjectTypeFilter(false);
    setToolTypeFilter(false);
    setPlatformField(false);
    setClient_AliasSetFilter(false);
    setIndustrySetFilter(false);
    setAnnotationSetFilter(false);
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
  const [orderSortTimeLimit, setOrderSortTimeLimit] = React.useState(true);
  const createSortHandler = () => {};
  const [arrayList, setArrayList] = useState(projectDirectory);
  const sortArray = (property, ascending = orderSortTimeLimit) => {
    const sortedArray = [...projectDirectory];
    sortedArray.sort((a, b) => {
      const sortOrder = ascending ? 1 : -1;
      return a[property] > b[property] ? sortOrder : -sortOrder;
    });
    setArrayList(sortedArray);
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
    Object.values(entry).some((val) => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase()))
  );

  const skeletonCount = 5;
  const skeletonArray = Array.from({ length: skeletonCount }, (_, index) => index + 1);

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
                {role === "admin" || role == "project_manager" ? (
                  <>
                    <CreateProjectDirectory />
                  </>
                ) : (
                  <></>
                )}
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
              platformFieldFilter={platformFieldFilter}
              setPlatformFieldFilter={setPlatformFieldFilter}
              projectTypeFieldFilter={projectTypeFieldFilter}
              setProjectTypeFieldFilter={setProjectTypeFieldFilter}
              actionItemsFieldFilter={actionItemsFieldFilter}
              setActionItemsFieldFilter={setActionItemsFieldFilter}
              qaCheckPointFieldFilter={qaCheckPointFieldFilter}
              setQaCheckPointFieldFilter={setQaCheckPointFieldFilter}
              objBenchMarkFieldFilter={objBenchMarkFieldFilter}
              setObjBenchMarkFieldFilter={setObjBenchMarkFieldFilter}
              imgBenchMarkFieldFilter={imgBenchMarkFieldFilter}
              setImgBenchMarkFieldFilter={setImgBenchMarkFieldFilter}
              taggingBenchMarkFieldFilter={taggingBenchMarkFieldFilter}
              setTaggingBenchMarkFieldFilter={setTaggingBenchMarkFieldFilter}
              deletionFieldFilter={deletionFieldFilter}
              setDeletionFieldFilter={setDeletionFieldFilter}
              toolTypeFieldFilter={toolTypeFieldFilter}
              setToolTypeFieldFilter={setToolTypeFieldFilter}
              skipImageFieldFilter={skipImageFieldFilter}
              setSkipImageFieldFilter={setSkipImageFieldFilter}
              imageLoadingFieldFilter={imageLoadingFieldFilter}
              setImageLoadingFieldFilter={setImageLoadingFieldFilter}
              objectSavingTimeFieldFilter={objectSavingTimeFieldFilter}
              setobjectSavingTimeFieldFilter={setobjectSavingTimeFieldFilter}
              videoWatchTimeFieldFilter={videoWatchTimeFieldFilter}
              setVideoWatchTimeFieldFilter={setVideoWatchTimeFieldFilter}
              qAFieldFilter={qAFieldFilter}
              setQAFieldFilter={setQAFieldFilter}
              judgementTimeFieldFilter={judgementTimeFieldFilter}
              setJudgementTimeFieldFilter={setJudgementTimeFieldFilter}
              qABenchmarkFieldFilter={qABenchmarkFieldFilter}
              setQABenchmarkFieldFilter={setQABenchmarkFieldFilter}
              setQAFilter={setQAFilter}
              qAField={qAField}
              pdrSetFilter={pdrSetFilter}
              Client_AliasSetFilter={Client_AliasSetFilter}
              annotationSetFilter={annotationSetFilter}
              platformField={platformField}
              industrySetFilter={industrySetFilter}
              toolTypeField={toolTypeField}
              actionItemsField={actionItemsField}
              projectTypeField={projectTypeField}
              qaCheckPointField={qaCheckPointField}
              objBenchMarkField={objBenchMarkField}
              imageBenchMarkField={imageBenchMarkField}
              tagingBenchMarkField={tagingBenchMarkField}
              skipImageField={skipImageField}
              imageLoadingField={imageLoadingField}
              objectSavingTimeFilter={objectSavingTimeFilter}
              videoWatchTimeFilter={videoWatchTimeFilter}
              DeletionField={DeletionField}
              judgementTimeFilter={judgementTimeFilter}
              qABenchmarkField={qABenchmarkField}
              handleMenuItemClick={handleMenuItemClick}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
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
            {isLoading ? (
              <>
                <Grid container sx={{ paddingTop: "0%" }}>
                  {" "}
                  <Box sx={{ width: "100%" }}>
                    {skeletonArray.map((item) => (
                      <>
                        <Box key={item}>
                          <Skeleton height={40} />
                          <Skeleton animation="wave" height={40} />
                          <Skeleton animation={false} height={40} />
                        </Box>
                      </>
                    ))}
                  </Box>
                </Grid>
              </>
            ) : projectDirectory.length === 0 ? (
              <>
                <Grid container sx={{ paddingTop: "0%", justifyContent: "center" }}>
                  {" "}
                  <Typography variant="h6" sx={{ justifyItems: "center" }}>
                    Project not found
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                {" "}
                <TableContainer>
                  <Table aria-label="simple table" sx={{ border: "1px solid #DADCDF" }}>
                    {/* TODO : Convert this in a separate component  */}
                    <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                      <TableRow>
                        <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                          SL
                        </TableCell>
                        <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Project Name
                        </TableCell>

                        <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Client Alias
                        </TableCell>

                        <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Industry
                        </TableCell>

                        <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Tool Type
                        </TableCell>
                        <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Project Type
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}
                          // direction={orderSortTimeLimit ? "asc" : "dsc"}
                          // onClick={() => createSortHandler()}
                          // onClick={() => sortArray("PDR")}
                        >
                          <TableSortLabel
                            direction={orderSortTimeLimit ? "asc" : "dsc"}
                            // onClick={() => sortArray("PDR")}
                          >
                            PDR
                          </TableSortLabel>
                        </TableCell>
                        {role === "admin" || role == "project_manager" ? (
                          <>
                            {" "}
                            <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                              Action
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                        {role === "admin" || role == "project_manager" ? (
                          <>
                            {" "}
                            <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                              Update
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                        <TableCell align="center" sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Details
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : filtered
                      ).map((item, i) => (
                        <TableRow key={item._id}>
                          <TableCell align="center"> {page * rowsPerPage + i + 1}</TableCell>
                          <TableCell align="center">{item.Project_Name}</TableCell>

                          <TableCell align="center">{item.Client_Alias}</TableCell>

                          <TableCell align="center">{item.Industry}</TableCell>

                          <TableCell align="center">{item.Tool_Type}</TableCell>
                          <TableCell align="center">{item.Project_Type}</TableCell>

                          <TableCell align="center">{item.PDR}</TableCell>
                          {role === "admin" || role == "project_manager" ? (
                            <>
                              <TableCell align="center">
                                <ProjectDirectoryDeleteModal item={item} />
                              </TableCell>
                            </>
                          ) : (
                            <></>
                          )}

                          {role === "admin" || role == "project_manager" ? (
                            <>
                              <TableCell align="center">
                                <UpdateProjectDirectory item={item} />
                              </TableCell>
                            </>
                          ) : (
                            <></>
                          )}

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
