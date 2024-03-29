import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToaster from './useToaster.jsx';
import { useForm } from 'react-hook-form';
import {
  clearProjectDirectory,
  createProjectDirectory,
  deleteProjectDirectory,
  getProjectByDirectory,
  getProjectSyncFunction,
  setCurrentProjectDirectory,
  updateProjectDirectory,
} from '../features/slice/ProjectDirectorySlice.js';
import { useLocation } from 'react-router-dom';
import { filters } from '../components/ProjectDirectory/MenuFIlter.js';

const useProjectDirectoryManage = () => {
  const user = useSelector((state) => state.user);
  const { role } = user.user;
  const [projectDirectorys, setProjectDirectory] = useState([]);
  const [menuFilter, setMenuFilter] = useState(filters);
  const dispatch = useDispatch();
  const toast = useToaster();
  const [filterData, setFilterData] = useState({});
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [projectDirectoryRemove, setProjectDirectoryRemove] = useState([]);
  const [projectDirectoryBenchmarkAddItems, setProjectDirectoryBenchmarkAddItems] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorE2(null);
  };

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
    const filterDataArr = menuFilter.filter((item) => item.isValue);
    const filterDataObj = {};

    for (const item of filterDataArr) {
      filterDataObj[item.value] = item.isValue;
    }
    setFilterData(filterDataObj);

    const data = {
      filteredData: filterDataObj,
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
  const handleResetProjectDirectory = () => {
    setMenuFilter((menuFilter) => {
      const updatedMenu = menuFilter.map((filter) => {
        return { ...filter, isValue: '', isFieldShow: false };
      });
      return updatedMenu;
    });
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

  //new design states

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
    projectDirectoryBenchmarkAddItems.map((p) => {
      data[p.value] = p.defaultValue;
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

  return {
    user,
    role,
    dispatch,
    projectDirectorys,
    setProjectDirectory,
    menuFilter,
    setMenuFilter,
    filterData,
    setFilterData,
    anchorE2,
    setAnchorE2,
    projectDirectoryRemove,
    setProjectDirectoryRemove,
    anchorEl,
    setAnchorEl,
    register,
    handleSubmit,
    openModal,
    setOpenModal,
    openProjectModalEdit,
    setOpenProjectModalEdit,
    openProjectModalDetails,
    setOpenProjectModalDetails,
    myColumn,
    setMyColumn,
    isDataLoading,
    setIsDataLoading,
    isChildDataLoading,
    setIsChildDataLoading,
    myRows,
    setMyRows,
    projectDirectorySingle,
    pagination,
    setPagination,
    projectDirectoryFilter,
    pathname,
    isDeleted,
    setIsDeleted,
    ascDesc,
    setAscDesc,
    search,
    setSearch,
    openReject,
    setOpenReject,
    isSyncLoading,
    setIsSyncLoading,
    searchRef,
    handleClickFilter,
    handleCloseFilter,
    handleMenuItemClick,
    handleValue,
    handleFilterProjectDirectory,
    handleResetProjectDirectory,
    handleEditClose,
    handleCreateModal,
    handleClose,
    handleClick,
    handleDelete,
    handleDetailsPage,
    handleProjectDetailsOpen,
    handleDetailsProjectDirectoryClose,
    handleSearch,
    clearSearch,
    handleGetSync,
    onSubmit,
    onSubmitEdit,
    handleAscDesc,
    setProjectDirectoryBenchmarkAddItems,
  };
};

export default useProjectDirectoryManage;
