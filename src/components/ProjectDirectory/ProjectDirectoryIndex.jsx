/* eslint-disable no-prototype-builtins */
import { Box } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  clearProjectDirectory,
  createProjectDirectory,
  deleteProjectDirectory,
  getProjectByDirectory,
  getProjectSyncFunction,
  setCurrentProjectDirectory,
  updateProjectDirectory,
} from '../../features/slice/ProjectDirectorySlice.js';
import { setActivePath } from '../../features/slice/activePathSlice';
import { setProjectDirectoryFilter } from '../../features/slice/temporaryDataSlice';
// /ProjectLIstNew2/ExpTable/TableWrapper
import useToaster from '../../customHooks/useToaster.jsx';
import TableWrapper from '../primary/ProjectLIstNew2/ExpTable/TableWrapper.jsx';
import { projectDirectoryField } from '../primary/ProjectLIstNew2/FIlterOptions';
import PaginationTable from '../primary/ProjectLIstNew2/PaginationTable';
import { HeaderBox, TablePaper } from '../primary/ProjectLIstNew2/ProjectLIstIndex2';
import fieldBuilder from '../shared/CustomTable/fieldBuilder';
import LoadingComponent from '../shared/Loading/LoadingComponent.jsx';
import CreateProjectDirectoryModal from './CreateProjectDirectoryModal.jsx';
import ProjectDirectoryDetailsModal from './ProjectDirectoryDetailsModal';
import ProjectDirectoryEditModal from './ProjectDirectoryEditModal';
import ProjectDirectoryHeader from './ProjectDirectoryHeader.jsx';
// const menuFilter = [
//   { item: 'PDR', value: 'PDR', isFieldShow: false },
//   { item: 'Manual Creation', value: 'manual_Creation' },
//   { item: 'Correction', value: 'correction' },
//   { item: 'Deletion', value: 'deletion' },
//   { item: 'Object Assessment', value: 'object_Assessment' },
//   { item: 'Manual Tagging', value: 'manual_Tagging' },
//   { item: 'Tag Correction', value: 'tag_Correction' },
//   { item: 'Tag Deletion', value: 'tag_Deletion' },
//   { item: 'Tag Check Review', value: 'tag_Check_Review' },
//   { item: 'Cloning Manual Object', value: 'cloning_Manual_Object' },
//   { item: 'Clone Correction', value: 'clone_Correction' },
//   { item: 'Review', value: 'review' },
//   { item: 'Tag Check QA', value: 'tag_Check_QA' },
//   { item: 'Image Assessment', value: 'image_Assessment' },
//   { item: 'Video Assessment', value: 'video_Assessment' },
//   { item: 'Categorization', value: 'categorization' },
// ];
const ProjectDirectoryIndex = () => {
  const user = useSelector((state) => state.user);
  const { role } = user.user;
  const [projectDirectorys, setProjectDirectory] = useState([]);
  const [menuFilter, setMenuFilter] = useState([
    { title: 'PDR', value: 'PDR', isFieldShow: false, isValue: '' },
    { title: 'Manual Creation', value: 'manual_Creation', isFieldShow: false, isValue: '' },
    { title: 'Correction', value: 'correction', isFieldShow: false, isValue: '' },
    { title: 'Deletion', value: 'deletion', isFieldShow: false, isValue: '' },
    {
      title: 'Object Assessment',
      value: 'object_Assessment',
      isFieldShow: false,
      isValue: '',
    },
    { title: 'Manual Tagging', value: 'manual_Tagging', isFieldShow: false, isValue: '' },
    { title: 'Tag Correction', value: 'tag_Correction', isFieldShow: false, isValue: '' },
    { title: 'Tag Deletion', value: 'tag_Deletion', isFieldShow: false, isValue: '' },
    {
      title: 'Tag Check Review',
      value: 'tag_Check_Review',
      isFieldShow: false,
      isValue: '',
    },
    {
      title: 'Cloning Manual Object',
      value: 'cloning_Manual_Object',
      isFieldShow: false,
      isValue: '',
    },
    {
      title: 'Clone Correction',
      value: 'clone_Correction',
      isFieldShow: false,
      isValue: '',
    },
    { title: 'Review', value: 'review', isFieldShow: false, isValue: '' },
    { title: 'Tag Check QA', value: 'tag_Check_QA', isFieldShow: false, isValue: '' },
    {
      title: 'Image Assessment',
      value: 'image_Assessment',
      isFieldShow: false,
      isValue: '',
    },
    {
      title: 'Video Assessment',
      value: 'video_Assessment',
      isFieldShow: false,
      isValue: '',
    },
    { title: 'Categorization', value: 'categorization', isFieldShow: false, isValue: '' },
  ]);
  const dispatch = useDispatch();
  const { projectDirectory, isLoading } = useSelector((state) => state.projectDirectory);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const toast = useToaster();
  const [filterData, setFilterData] = useState({});
  console.log('🚀 ~ ProjectDirectoryIndex ~ filterData:', filterData);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [industryType, setIndustryType] = useState('');
  const [projectDirectoryRemove, setProjectDirectoryRemove] = useState([]);
  // ______________________________________values

  const [clientAliasFilter, setClientAliasesFilter] = useState('');
  const [dataType, setDataType] = useState('');
  const [pDRFilter, setPDRFilter] = useState('');
  const [annotationFilter, setAnnotationFilter] = useState('');
  const [platformFieldFilter, setPlatformFieldFilter] = useState('');
  const [projectTypeFieldFilter, setProjectTypeFieldFilter] = useState('');
  const [actionItemsFieldFilter, setActionItemsFieldFilter] = useState('');
  const [qaCheckPointFieldFilter, setQaCheckPointFieldFilter] = useState('');
  const [objBenchMarkFieldFilter, setObjBenchMarkFieldFilter] = useState('');
  const [imgBenchMarkFieldFilter, setImgBenchMarkFieldFilter] = useState('');
  const [deletionFieldFilter, setDeletionFieldFilter] = useState('');
  const [toolTypeFieldFilter, setToolTypeFieldFilter] = useState('');
  const [qAField, setQAFilter] = useState(false);
  const [qAFieldFilter, setQAFieldFilter] = useState('');
  const [qABenchmarkFieldFilter, setQABenchmarkFieldFilter] = useState('');
  const [judgementTimeFieldFilter, setJudgementTimeFieldFilter] = useState('');
  const [skipImageFieldFilter, setSkipImageFieldFilter] = useState('');
  const [imageLoadingFieldFilter, setImageLoadingFieldFilter] = useState('');
  const [objectSavingTimeFieldFilter, setobjectSavingTimeFieldFilter] = useState('');
  const [videoWatchTimeFieldFilter, setVideoWatchTimeFieldFilter] = useState('');
  const [taggingBenchMarkFieldFilter, setTaggingBenchMarkFieldFilter] = useState('');
  const [date, setDate] = useState('');
  const [labelingTool, setLablelingTool] = useState('');
  // const [dataType, setDataType] = useState('');
  const [guideline, setGuideline] = useState('');
  const [pdl, setPdl] = useState('');
  const [dl, setDl] = useState('');
  const [dcr, setDcr] = useState('');
  const [pcr, setPcr] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  // ______________________________________fields
  qAField;
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
  const [labelingToolFilter, setLablelingToolFilter] = useState(false);
  const [dataTypeFilter, setDataTypeFilter] = useState(false);
  const [guidelineFilter, setGuidelineFilter] = useState(false);
  const [pdlFilter, setPdlFilter] = useState(false);
  const [dlFilter, setDlFilter] = useState(false);
  const [dcrFilter, setDcrFilter] = useState(false);
  const [pcrFilter, setPcrFilter] = useState(false);
  const [completionDateFilter, setCompletionDataFilter] = useState(false);

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
  // console.table(menuFilter);

  const handleMenuItemClick = (value) => {
    setMenuFilter((menuFilter) => {
      const updatedMenu = menuFilter.map((filter) => {
        if (filter.value === value) {
          return { ...filter, isFieldShow: !filter.isFieldShow };
        }
        return filter;
      });
      return updatedMenu;
    });

    setAnchorEl(null);
  };
  const handleValue = (value, itemVal) => {
    setMenuFilter((menuFilter) => {
      const updatedMenu = menuFilter.map((filter) => {
        if (filter.value === itemVal) {
          return { ...filter, isValue: value };
        }
        return filter;
      });
      return updatedMenu;
    });
  };
  const handleFilterProjectDirectory = () => {
    // const filteredData = {
    //   ...(industryType ? { industry: industryType } : {}),
    //   ...(clientAliasFilter ? { client_Alias: clientAliasFilter } : {}),
    //   ...(actionItemsFieldFilter ? { action_Items: actionItemsFieldFilter } : {}),
    //   ...(qAFieldFilter ? { QA: qAFieldFilter } : {}),
    //   ...(qABenchmarkFieldFilter ? { QA_Benchmark: qABenchmarkFieldFilter } : {}),
    //   ...(judgementTimeFieldFilter ? { judgement_Time: judgementTimeFieldFilter } : {}),
    //   ...(skipImageFieldFilter ? { skip_Image: skipImageFieldFilter } : {}),
    //   ...(imageLoadingFieldFilter ? { image_Loading: imageLoadingFieldFilter } : {}),
    //   ...(objectSavingTimeFieldFilter ? { object_Saving_Time: objectSavingTimeFieldFilter } : {}),
    //   ...(videoWatchTimeFieldFilter ? { video_Watch_Time: videoWatchTimeFieldFilter } : {}),
    //   ...(toolTypeFieldFilter ? { tool_Type: toolTypeFieldFilter } : {}),
    //   ...(deletionFieldFilter ? { deletion: deletionFieldFilter } : {}),
    //   ...(platformFieldFilter ? { platform: platformFieldFilter } : {}),
    //   ...(projectTypeFieldFilter ? { project_Type: projectTypeFieldFilter } : {}),
    //   ...(annotationFilter ? { annotation: annotationFilter } : {}),
    //   ...(pDRFilter ? { PDR: pDRFilter } : {}),
    //   ...(qaCheckPointFieldFilter ? { QA_Check_Points: qaCheckPointFieldFilter } : {}),
    //   ...(imgBenchMarkFieldFilter ? { img_Benchmark: imgBenchMarkFieldFilter } : {}),
    //   ...(taggingBenchMarkFieldFilter ? { tagging_Benchmark: taggingBenchMarkFieldFilter } : {}),
    //   ...(objBenchMarkFieldFilter ? { obj_Benchmark: objBenchMarkFieldFilter } : {}),
    //   ...(labelingTool ? { labeling_Tool: labelingTool } : {}),
    //   ...(dataType ? { data_Type: dataType } : {}),
    //   ...(guideline ? { guideline: guideline } : {}),
    //   ...(pdl ? { PDL: pdl } : {}),
    //   ...(dl ? { DL: dl } : {}),
    //   ...(dcr ? { DCR: dcr } : {}),
    //   ...(pcr ? { PCR: pcr } : {}),
    //   ...(completionDate ? { completion_Date: completionDate } : {}),
    //   // ...(date ? { date } : {}),
    // };
    const filterDataArr = menuFilter.filter((item) => item.isValue);
    const filterDataObj = {};

    for (const item of filterDataArr) {
      filterDataObj[item.value] = item.isValue;
    }

    const data = {
      // filteredData,
      filterDataObj,
      search,
      pagination,
      ascDescOption: ascDesc,
    };
    console.log('🚀 ~ handleFilterProjectDirectory ~ data:', data);
    setFilterData(filterDataObj);
    dispatch(getProjectByDirectory(data)).then((action) => {
      if (action.payload.status === 200) {
        setProjectDirectory(action.payload.data);
      }
    });
  };
  const handleResetProjectDirectory = () => {
    setVideoWatchTimeFieldFilter('');
    setPlatformFieldFilter('');
    setProjectTypeFieldFilter('');
    setActionItemsFieldFilter('');
    setObjBenchMarkFieldFilter('');
    setImgBenchMarkFieldFilter('');
    setDeletionFieldFilter('');
    setToolTypeFieldFilter('');
    setQAFieldFilter('');
    setQABenchmarkFieldFilter('');
    setJudgementTimeFieldFilter('');
    setSkipImageFieldFilter('');
    setImageLoadingFieldFilter('');
    setobjectSavingTimeFieldFilter('');
    setTaggingBenchMarkFieldFilter('');
    setIndustryType('');
    setClientAliasesFilter('');
    setLablelingTool('');
    setDataTypeFilter('');
    setPDRFilter('');
    setAnnotationFilter('');
    setDataType('');
    setGuideline('');
    setPdl('');
    setDl('');
    setDcr('');
    setPcr('');
    setCompletionDate('');
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
    setLablelingToolFilter(false);
    setDataTypeFilter(false);
    setGuidelineFilter(false);
    setPdlFilter(false);
    setDlFilter(false);
    setDcrFilter(false);
    setPcrFilter(false);
    setCompletionDataFilter(false);
    setFilterData({});
    const data = {
      filterData,
      search,
      pagination,
      ascDescOption: ascDesc,
    };
    dispatch(getProjectByDirectory(data)).then((action) => {
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
  const { projectDirectoryFilter } = useSelector((state) => state.tempData);

  const { pathname } = useLocation();
  const [isDeleted, setIsDeleted] = useState(false);
  const [ascDesc, setAscDesc] = useState({});
  const [search, setSearch] = useState('');
  const [openReject, setOpenReject] = React.useState(false);
  const [isSyncLoading, setIsSyncLoading] = useState(false);
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
    dispatch(setCurrentProjectDirectory(e._id));
    setOpenProjectModalEdit(true);
  };
  const handleDelete = (e) => {
    setIsDeleted(false);
    dispatch(deleteProjectDirectory(e._id)).then((action) => {
      if (action.error?.message) {
        toast.trigger(action.error?.message, 'error');
      } else {
        toast.trigger(action.payload.data.message, 'success');
        setIsDeleted(true);
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
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('');
    searchRef.current.value = '';
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
    dispatch(
      getProjectByDirectory({
        pagination,
        ascDescOption: ascDesc,
      })
    ); //TODO CHECK THIS LATER
  };
  useEffect(() => {
    if (pathname === '/projectDirectory') {
      setAscDesc(projectDirectoryFilter?.ascDescOption);
      setSearch(projectDirectoryFilter?.search);
      searchRef.current.value = projectDirectoryFilter?.search || '';
    }
  }, []);
  useEffect(() => {
    dispatch(
      setProjectDirectoryFilter({
        search,
        ascDescOption: ascDesc,
      })
    );
  }, [search, ascDesc]);

  useEffect(() => {
    dispatch(setActivePath('Project Directory'));
    dispatch(clearProjectDirectory());
  }, []);

  useLayoutEffect(() => {
    setIsDataLoading(true);
    dispatch(
      getProjectByDirectory({
        filteredData: filterData,
        search,
        pagination,
        ascDescOption: ascDesc,
      })
    ).then((action) => {
      setMyColumn(fieldBuilder(projectDirectoryField, handleClick, handleDelete));
      setIsChildDataLoading(false);
      setIsDataLoading(false);
    });
  }, [pagination, search, isDeleted, ascDesc]);

  //TODO CHECK THIS LATER

  const handleGetSync = async () => {
    await toast.responsePromise(
      getProjectSyncFunction(),
      setIsSyncLoading,
      {
        initialMessage: 'project directory is syncing ...',
        inPending: () => {
          setOpenReject(false);
        },
        afterSuccess: (data) => {
          setOpenReject(false);
          dispatch(
            getProjectByDirectory({
              filteredData: filterData,
              search,
              pagination,
              ascDescOption: ascDesc,
            })
          );
        },
        afterError: () => {
          setOpenReject(false);
        },
      },
      'forProjectDirectory'
    );
    // dispatch(getProjectSync()).then((action) => {
    //   setIsSyncLoading(true);
    //   if (action.payload.status === 200) {
    //     toast.trigger(action.payload.data, "success");
    //     setIsSyncLoading(false);
    //   } else {
    //     toast.trigger(action.payload.data, "error");
    //     setIsSyncLoading(false);
    //   }
    // });
  };

  const onSubmit = (data) => {
    dispatch(createProjectDirectory(data)).then((action) => {
      if (action.error?.message) {
        toast.trigger(action.error?.message, 'error');
      } else {
        toast.trigger(action.payload.data.message, 'success');
        handleClose();
        reset();
      }
    });
  };
  const onSubmitEdit = (data) => {
    projectDirectoryRemove.map((p) => {
      data[p.value] = '';
    });

    const finalData = {
      data,
      id: projectDirectorySingle._id,
    };

    dispatch(updateProjectDirectory(finalData)).then((action) => {
      if (action.error?.message) {
        toast.trigger(action.error?.message, 'error');
      } else {
        toast.trigger(action.payload.data.message, 'success');
        setOpenProjectModalEdit(false);
        handleClose();
        reset();
      }
    });
  };

  const handleAscDesc = (field) => {
    setAscDesc((prev) => {
      const updatedData = { ...prev };
      if (prev?.hasOwnProperty(field)) {
        if (prev[field] === 'asc') {
          return {
            ...prev,
            [field]: 'desc',
          };
        } else {
          delete updatedData[field];
          return updatedData;
        }
      }
      return {
        ...prev,
        [field]: 'asc',
      };
    });
  };

  return (
    <Box className="content">
      <HeaderBox sx={{ backgroundColor: '' }}>
        <ProjectDirectoryHeader
          handleGetSync={handleGetSync}
          isSyncLoading={isSyncLoading}
          setProjectDirectoryRemove={setProjectDirectoryRemove}
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
          setDataType={setDataType}
          dataType={dataType}
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
          labelingTool={labelingTool}
          setLablelingTool={setLablelingTool}
          guideline={guideline}
          setGuideline={setGuideline}
          pdl={pdl}
          setPdl={setPdl}
          dl={dl}
          setDl={setDl}
          dcr={dcr}
          setDcr={setDcr}
          pcr={pcr}
          setPcr={setPcr}
          completionDate={completionDate}
          setCompletionData={setCompletionDate}
          labelingToolFilter={labelingToolFilter}
          setLablelingToolFilter={setLablelingToolFilter}
          dataTypeFilter={dataTypeFilter}
          setDataTypeFilter={setDataTypeFilter}
          guidelineFilter={guidelineFilter}
          setGuidelineFilter={setGuidelineFilter}
          pdlFilter={pdlFilter}
          setPdlFilter={setPdlFilter}
          dlFilter={dlFilter}
          setDlFilter={setDlFilter}
          dcrFilter={dcrFilter}
          setDcrFilter={setDcrFilter}
          pcrFilter={pcrFilter}
          setPcrFilter={setPcrFilter}
          completionDateFilter={completionDateFilter}
          setCompletionDataFilter={setCompletionDataFilter}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          role={role}
          handleCreateModal={handleCreateModal}
          menuFilter={menuFilter}
          handleValue={handleValue}
        />
      </HeaderBox>

      <Box className="contentBody">
        <TablePaper sx={{ backgroundColor: '' }}>
          {isDataLoading ? (
            <LoadingComponent height={'80vh'} />
          ) : (
            <TableWrapper
              role={role}
              handleDetailsPage={handleDetailsPage}
              handleClick={handleClick}
              handleDelete={handleDelete}
              myColumn={myColumn}
              myRows={myRows}
              pagination={pagination}
              setPagination={setPagination}
              handleId={handleAscDesc}
              filteredCol={ascDesc}
              handleProjectDetailsOpen={handleProjectDetailsOpen}
              isChildDataLoading={isChildDataLoading}
              setIsChildDataLoading={setIsChildDataLoading}
              setMyRows={setMyRows}
            />
          )}

          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            // setFilterValue={setFilterValue}
            setFilteredCol={setAscDesc}
          />
        </TablePaper>
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
          setProjectDirectoryRemove={setProjectDirectoryRemove}
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
