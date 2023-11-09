/*
 * File           : useAllUsersFunc.js
 * Project        : wmpfrontv2
 * Created Date   : Tu 07 Nov 2023 11:44:09
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Nov 07 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAllSkills } from '../features/slice/skillSlice';
import { setTargetedUser, updateAUserById } from '../features/slice/userSlice';
import { arraysAreEqual } from '../helper/helper';
import useToaster from './useToaster';

const useAllUsersFunc = ({
  setSearch,
  searchRef,
  addSkills,
  addRoles,
  setAddSkills,
  setAddRoles,
}) => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const [filterValue, setFilterValue] = useState({});
  const dispatch = useDispatch();
  const [downLoadExportOpen, setDownloadExportOpen] = useState(false);
  const [detailsUserOpen, setDetailsUserOpen] = useState(false);

  const [filteredCol, setFilteredCol] = useState({});
  const [isFilter, setIsFilter] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isChildDataLoading, setIsChildDataLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [prevSkills, setPrevSkills] = useState([]);
  const [prevRoles, setPrevRoles] = useState([]);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = useState(false);
  const [openAccepet, setOpenAccepet] = useState(false);
  const [rejectionCause, setRejectionCause] = useState('');
  const toast = useToaster();
  // const { handleChange } = useAllUsers();
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   if (searchParams.get("page") !== null) {
  //     if (searchParams.get("page") - 1 !== pagination.currentPage) {
  //       console.log("page :", searchParams.get("page"));
  //       console.log("useEffect");
  //       console.log(pagination);
  //       setPagination((prevPagination) => ({
  //         ...prevPagination,
  //         currentPage: searchParams.get("page") - 1,
  //       }));
  //     }
  //   }
  // }, [searchParams.get("page")]);
  const clearSearch = () => {
    setSearch('');
    setIsDataLoading(true);
    searchRef.current.value = '';
  };
  const handleClickAway = () => {
    const skillsId = addSkills.map((skill) => skill._id);

    const isSkillsSame = arraysAreEqual(prevSkills, skillsId);

    const roleValue = addRoles.map((role) => role.value);

    const isRolesSame = arraysAreEqual(prevRoles, roleValue);

    setPrevSkills(skillsId);
    setPrevRoles(roleValue);

    if (!isSkillsSame) {
      handleChange({}, skillsId, roleValue, isSkillsSame, isRolesSame);
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: 0,
      }));
    } else if (!isRolesSame) {
      handleChange({}, skillsId, roleValue, isSkillsSame, isRolesSame);
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: 0,
      }));
    } else {
      return;
    }
  };

  const handleRejectCause = (e) => {
    setRejectionCause(e.target.value);
  };
  const handleDelete = (e) => {};
  const handleClick = (e) => {};
  const handleDetailsPage = (e) => {};
  const handleUserDetailsOpen = (params) => {
    setSelectedUser(params);
    dispatch(setTargetedUser(params));
    setOpen(true);
  };

  const goBackHandle = () => {
    // if (searchParams.get('page') !== null) {
    //   if (searchParams.get('page') - 1 !== pagination.currentPage) {
    //     console.log('hit');
    //     console.log(pagination);
    //     console.log("🚀 ~ file: useAllUsersFunc.js:126 ~ setPagination ~ searchParams.get('page'):", searchParams.get('page'))
    //     setPagination((prevPagination) => ({
    //       ...prevPagination,
    //       currentPage: searchParams.get('page') - 1,
    //     }));
    //     console.log(pagination);
    //   }
    // }
  };

  const handleSearch = (e) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
    setSearch(e.target.value);
  };

  // Reject Nda
  const handleReject = (params) => {
    setSelectedUser(params);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenAccepet(false);
    setOpenModal(false);
    setRejectionCause('');
  };
  // accept NDA
  const handleOpenNDA = (params) => {
    setSelectedUser(params);
    setOpenAccepet(true);
  };
  const handleAccept = () => {
    const data = {
      id: selectedUser._id,
      varifiedData: {
        isVerified: true,
      },
    };
    dispatch(updateAUserById(data)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger('User has been verified successfully.', 'success');
        setOpenAccepet(false);
        setOpenModal(false);
      } else {
        toast.trigger(
          'Failed to verify the user, please try again later.',
          'error',
        );
      }
    });
  };

  // -------------------------

  const handleDownloadExport = () => {
    setDownloadExportOpen(true), dispatch(getAllSkills());
  };
  // const handleUserDetailsOpen = () => {
  //   setDetailsUserOpen(true);
  // };

  const handleUserDetailsClose = () => {
    setDetailsUserOpen(false);
  };

  const handleChange = (
    event,
    skillsId = [],
    addRoles = [],
    isSkillsSame = true,
    isRolesSame = true,
  ) => {
    if (!isSkillsSame) {
      const field = 'skills';
      const value = skillsId;
      const filteredData = { ...filterValue };
      filteredData[field] = value;
      setFilterValue(filteredData);
    } else if (!isRolesSame) {
      const field = 'role';
      const value = addRoles;
      const filteredData = { ...filterValue };
      filteredData[field] = value;
      setFilterValue(filteredData);
    } else {
      const field = event.target.name;
      const value = event.target.value;
      const filteredData = { ...filterValue };
      filteredData[field] = value;
      setFilterValue(filteredData);
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: 0,
      }));
    }
  };

  const defaultState = {
    // role: "",
    // hub: "",
  };

  const handleClearFilter = () => {
    setFilterValue(defaultState);
    setFilteredCol({});
    setAddSkills([]);
    setAddRoles([]);
    setPrevSkills([]);
    setPrevRoles([]);
    clearSearch();
  };

  // setFilteredCol((prev) => {
  //   if (Object.prototype.hasOwnProperty.call(prev, field)) {
  //     if (prev[field] === "asc") {

  const handleId = (field) => {
    setFilteredCol((prev) => {
      // eslint-disable-next-line no-prototype-builtins
      if (prev.hasOwnProperty(field)) {
        if (prev[field] === 'asc') {
          return {
            ...prev,
            [field]: 'desc',
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
        [field]: 'asc',
      };
    });
  };

  const handleIsFilter = () => {
    setIsFilter(!isFilter);
  };

  return {
    isDataLoading,
    isChildDataLoading,
    openModal,
    prevSkills,
    prevRoles,
    myColumn,
    myRows,
    selectedUser,
    open,
    openAccepet,
    rejectionCause,
    pagination,
    setIsDataLoading,
    setIsChildDataLoading,
    setOpenModal,
    setPrevSkills,
    setPrevRoles,
    setMyColumn,
    setMyRows,
    setSelectedUser,
    setOpen,
    setOpenAccepet,
    setRejectionCause,
    setPagination,
    handleClose,
    clearSearch,
    handleClickAway,
    handleRejectCause,
    handleDelete,
    handleClick,
    handleDetailsPage,
    handleUserDetailsOpen,
    handleSearch,
    handleReject,
    handleCloseModal,
    handleOpenNDA,
    handleAccept,
    // -------------------------
    filterValue,
    handleId,
    filteredCol,
    handleIsFilter,
    isFilter,
    handleChange,
    handleClearFilter,
    goBackHandle,
  };
};

export default useAllUsersFunc;
