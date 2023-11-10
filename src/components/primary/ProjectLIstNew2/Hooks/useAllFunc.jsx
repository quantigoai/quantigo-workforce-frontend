/* eslint-disable no-prototype-builtins */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSkills } from "../../../../features/slice/skillSlice";
import {
  deleteProjectDrawerById,
  getAllProjectDrawers,
  setCurrentProjectDrawer,
} from "../../../../features/slice/projectDrawerSlice";
import useToaster from "../../../../customHooks/useToaster";
import { useNavigate } from "react-router-dom";

const useAllFunc = ({ addSkills, setAddSkills, count, handleClearAllSkills, setIsEdit, searchRef, setIsDeleted }) => {
  const { skills } = useSelector((state) => state.skill);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isChildDataLoading, setIsChildDataLoading] = useState(false);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [detailProject, setDetailProject] = useState({});
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const [search, setSearch] = useState("");
  const [filterValue, setFilterValue] = useState({});
  const dispatch = useDispatch();
  const [createProjectOpen, setCreateProjectOpen] = React.useState(false);
  const [detailsProjectOpen, setDetailsProjectOpen] = React.useState(false);
  const [annotatorPlatform, setAnnotatorPlatform] = useState("");
  const [checked, setChecked] = useState(false);
  const [filteredCol, setFilteredCol] = useState({});
  const [isFilter, setIsFilter] = useState(false);
  const toast = useToaster();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.projectDrawer);
  const handleDetailsProjectClose = () => {
    setDetailsProjectOpen(false);
  };

  const handleProjectCreateOpen = () => {
    setCreateProjectOpen(true);
    dispatch(getAllSkills());
  };
  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const filteredData = { ...filterValue };
    filteredData[field] = value;
    setFilterValue(filteredData);
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
  };
  const defaultState = {
    pdr: "",
    project_platform: "",
    project_type: "",
    project_status: "",
  };

  const handleClearFilter = () => {
    setFilterValue(defaultState);
    setFilteredCol({});
    setChecked(false);
    setAnnotatorPlatform("");
  };

  const handleId = (field) => {
    setFilteredCol((prev) => {
      if (prev.hasOwnProperty(field)) {
        if (prev[field] === "asc") {
          return {
            ...prev,
            [field]: "desc",
          };
        } else {
          delete prev[field];
          return {
            ...prev,
          };
        }
      }
      return {
        ...prev,
        [field]: "asc",
      };
    });
  };

  const handleIsFilter = () => {
    setIsFilter(!isFilter);
  };
  const handleProjectDetailsOpen = (project) => {
    setDetailsProjectOpen(true);
    setDetailProject(project);
  };
  const handleDelete = (e) => {
    setIsDeleted(false);
    dispatch(deleteProjectDrawerById(e.id))
      .then((action) => {
        if (action.payload.status === 200) {
          toast.trigger(action.payload.data.message, "success");
          setIsDeleted(true);
        }
      })
      .catch(() => {
        toast.trigger(error, "error");
      });
  };
  const handleCreateProjectClose = () => {
    setAddSkills([]);
    setCreateProjectOpen(false);
  };

  const handleEditProjectClose = () => {
    handleClearAllSkills();
    setIsEdit(false);
    setEditModalOpen(false);
    setIsEditModal(false);
  };

  const handleClick = (e) => {
    dispatch(setCurrentProjectDrawer(e.id));
    setEditModalOpen(true);
    setIsEdit(true);
    setIsEditModal(true);
  };

  const skillId = addSkills?.map((skill) => skill?._id);

  const handleDetailsPage = (data) => {
    const myData = {
      id: data._id,
    };
    dispatch(setCurrentProjectDrawer(myData.id));
    navigate(`/projectDetails/${myData.id}`);
  };
  const handleSearch = (e) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
    searchRef.current.value = "";
  };
  const handleChangeAnnotatorFilter = (event) => {
    const {
      target: { value },
    } = event;
    setAnnotatorPlatform(value);
    setChecked(false);
  };

  const handleChangeCheck = (event) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
    setChecked(event.target.checked);
  };

  // let [searchParams, setSearchParams] = useSearchParams();
  // useLayoutEffect(() => {
  //   if (searchParams.get('page') !== null) {
  //     if (searchParams.get('page') - 1 !== pagination.currentPage) {
  //       console.log('page :', searchParams.get('page'));
  //       console.log('useEffect');
  //       console.log(pagination);
  //       setPagination((prevPagination) => ({
  //         ...prevPagination,
  //         currentPage: searchParams.get('page') - 1,
  //       }));
  //     }
  //   }
  // }, [searchParams.get('page')]);
  return {
    createProjectOpen,
    annotatorPlatform,
    checked,
    setChecked,
    setAnnotatorPlatform,
    detailsProjectOpen,
    handleProjectCreateOpen,
    handleProjectDetailsOpen,
    handleDetailsProjectClose,
    setCreateProjectOpen,
    setDetailsProjectOpen,
    handleChange,
    handleClearFilter,
    filterValue,
    handleId,
    filteredCol,
    handleIsFilter,
    isFilter,
    search,
    setSearch,
    isDataLoading,
    isChildDataLoading,
    myColumn,
    myRows,
    isEditModal,
    editModalOpen,
    detailProject,
    pagination,
    skills,
    setIsDataLoading,
    setIsChildDataLoading,
    setMyColumn,
    setMyRows,
    setIsEditModal,
    setEditModalOpen,
    setDetailProject,
    setPagination,
    handleDelete,
    handleCreateProjectClose,
    handleEditProjectClose,
    handleClick,
    skillId,
    handleDetailsPage,
    handleSearch,
    clearSearch,
    handleChangeAnnotatorFilter,
    handleChangeCheck,
  };
};

export default useAllFunc;
