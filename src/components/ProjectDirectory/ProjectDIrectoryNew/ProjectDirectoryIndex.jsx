import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Box, Grid, IconButton, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import {
  clearProjectDirectory,
  createProjectDirectory,
  deleteProjectDirectory,
  filterProjectByDirectory,
  filterProjectDirBySearch,
  getProjectByDirectory,
  setCurrentProjectDirectory,
  updateProjectDirectory,
} from "../../../features/slice/ProjectDirectorySlice";
import { setActivePath } from "../../../features/slice/activePathSlice";
import TableWrapper from "../../primary/ProjectLIstNew2/ExpTable/TableWrapper";
import { projectDirectoryField } from "../../primary/ProjectLIstNew2/FIlterOptions";
import { HeaderBox, TablePaper } from "../../primary/ProjectLIstNew2/ProjectLIstIndex2";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import CreateProjectDirectoryModal from "../CreateProjectDirectory/CreateProjectDirectoryModal";
import SearchProjectDirectory from "../ProjectDirectoryFilter/SearchProjectDirectory";
import ProjectDirectoryHeader from "../ProjectDirectoryHeader/ProjectDirectoryHeader";
import ProjectDirectoryDetailsModal from "./ProjectDirectoryDetailsModal";
import ProjectDirectoryEditModal from "./ProjectDirectoryEditModal";
// import ProjectDirectoryDetailsModal from "./ProjectDirectoryDetailsModal";

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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
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
    dispatch(filterProjectByDirectory(data)).then((action) => {
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

  // const filtered = projectDirectory.filter((entry) =>
  //   Object.values(entry).some((val) => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase()))
  // );
  // const skeletonCount = 5;
  // const skeletonArray = Array.from({ length: skeletonCount }, (_, index) => index + 1);

  //new design states
  const { register, handleSubmit, reset } = useForm();
  const [openModal, setOpenModal] = useState(false);
  const [openProjectModalEdit, setOpenProjectModalEdit] = useState(false);
  const [openProjectModalDetails, setOpenProjectModalDetails] = useState(false);
  const [myColumn, setMyColumn] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isChildDataLoading, setIsChildDataLoading] = useState(false);
  const [myRows, setMyRows] = useState([]);
  const { projectDirectorySingle } = useSelector((state) => state.projectDirectory);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const [search, setSearch] = useState("");
  const searchRef = React.useRef(null);
  const handleEditClose = () => {
    setOpenProjectModalEdit(false);
    // dispatch(clearProjectDirectory());
  };
  const handleCreateModal = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
    reset();
  };
  const handleClick = (e) => {
    dispatch(setCurrentProjectDirectory(e.id));
    setOpenProjectModalEdit(true);
  };
  const handleDelete = (e) => {
    dispatch(deleteProjectDirectory(e.id)).then((action) => {
      if (action?.payload?.status === 200) {
        toast.trigger("Successfully Deleted Project Directory", "success");
      } else {
        toast.trigger("Project Directory do not Delete", "error");
      }
    });
  };

  const handleDetailsPage = (project) => {};
  const handleProjectDetailsOpen = (project) => {
    dispatch(setCurrentProjectDirectory(project.id));
    setOpenProjectModalDetails(true);
  };

  const handleDetailsProjectDirectoryClose = () => {
    setOpenProjectModalDetails(false);
    dispatch(clearProjectDirectory());
  };

  const handleSearch = (e) => {
    // setPagination((prevPagination) => ({
    //   ...prevPagination,
    //   currentPage: 0,
    // }));
    setSearch(e.target.value);
    dispatch(filterProjectDirBySearch(e.target.value));
  };

  const clearSearch = () => {
    setSearch("");
    searchRef.current.value = "";
    dispatch(getProjectByDirectory());
  };

  useEffect(() => {
    setIsDataLoading(true);
    dispatch(setActivePath("Project Directory"));
    dispatch(clearProjectDirectory());
    dispatch(getProjectByDirectory()).then((action) => {
      setMyColumn(fieldBuilder(projectDirectoryField, handleClick, handleDelete));
      setIsChildDataLoading(false);
      setIsDataLoading(false);
    });
  }, []);

  const onSubmit = (data) => {
    dispatch(createProjectDirectory(data)).then((action) => {
      if (action.payload.status === 200) {
        setOpenModal(false);
        toast.trigger("Successfully created Project Directory", "success");
        reset();
      } else {
        toast.trigger("Project Directory do not create", "error");
        reset();
      }
    });
  };
  const onSubmitEdit = (data) => {
    data._id = projectDirectorySingle._id;
    const finalData = {
      data,
      id: projectDirectorySingle._id,
    };
    dispatch(updateProjectDirectory(finalData)).then((action) => {
      if (action?.payload?.status === 200) {
        setOpenProjectModalEdit(false);
        toast.trigger("Successfully Updated Project Directory", "success");
      } else {
        toast.trigger("Project Directory can not Updated", "error");
      }
    });
  };
  return (
    <Box>
      <Box sx={{ paddingBottom: "1%" }}>
        <HeaderBox sx={{ backgroundColor: "" }}>
          <ProjectDirectoryHeader
            search={search}
            setSearch={setSearch}
            searchRef={searchRef}
            handleClickFilter={handleClickFilter}
            handleSearch={handleSearch}
            clearSearch={clearSearch}
            anchorE2={anchorE2}
            handleCloseFilter={handleCloseFilter}
            setIndustryType={setIndustryType}
            handleFilterProjectDirectory={handleFilterProjectDirectory}
            handleResetProjectDirectory={handleResetProjectDirectory}
            industryType={industryType}
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
            role={role}
            handleCreateModal={handleCreateModal}
          />
        </HeaderBox>
      </Box>
      <Box>
        <Box className="contentBody">
          <TablePaper sx={{ backgroundColor: "" }}>
            {isDataLoading ? (
              <LoadingComponent />
            ) : (
              <TableWrapper
                role={role}
                handleDetailsPage={handleDetailsPage}
                handleClick={handleClick}
                handleDelete={handleDelete}
                myColumn={myColumn}
                myRows={myRows}
                // pagination={pagination}
                // setPagination={setPagination}
                // handleId={handleId}
                // filteredCol={filteredCol}
                handleProjectDetailsOpen={handleProjectDetailsOpen}
                isChildDataLoading={isChildDataLoading}
                setIsChildDataLoading={setIsChildDataLoading}
                setMyRows={setMyRows}
              />
            )}

            {/* <PaginationTable
                      pagination={pagination}
                      setPagination={setPagination}
                      setFilterValue={setFilterValue}
                      setFilteredCol={setFilteredCol}
                    /> */}
          </TablePaper>
        </Box>
      </Box>
      {openModal && (
        <CreateProjectDirectoryModal
          openModal={openModal}
          handleClose={handleClose}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        />
      )}

      {openProjectModalEdit && (
        <ProjectDirectoryEditModal
          item={projectDirectorySingle}
          handleEditClose={handleEditClose}
          openProjectModalEdit={openProjectModalEdit}
          setOpenProjectModalEdit={setOpenProjectModalEdit}
          onSubmitEdit={onSubmitEdit}
        />
      )}
      {openProjectModalDetails && (
        <ProjectDirectoryDetailsModal
          openProjectModalDetails={openProjectModalDetails}
          item={projectDirectorySingle}
          handleDetailsProjectDirectoryClose={handleDetailsProjectDirectoryClose}
        />
      )}
    </Box>
  );
};

export default ProjectDirectoryIndex;
