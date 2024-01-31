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

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { roleOptionsAdmin } from '../components/primary/AllUsers/userFilterOptions';
import { getAllSkills } from '../features/slice/skillSlice';
import { setUserFilter } from '../features/slice/temporaryDataSlice';
import { setTargetedUser, updateAUserById, updateAUserByIdFunction } from '../features/slice/userSlice';
import { arraysAreEqual } from '../helper/helper';
import useToaster from './useToaster';

const useAllUsersFunc = ({
  userSearchRef,
  addSkills,
  setCount,
  addRoles,
  setAddSkills,
  setAddRoles,
  setSkillCount,
}) => {
  const [search, setSearch] = useState('');

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
  const { pathname } = useLocation();
  const { userFilter } = useSelector((state) => state.tempData);
  const [isComplete, setIsComplete] = useState(false);
  const { skills, isLoading } = useSelector((state) => state.skill);
  const [isSyncLoading, setIsSyncLoading] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  useEffect(() => {
    if (pathname === '/all-users') {
      setFilteredCol(userFilter?.ascDescOption);
      setFilterValue(userFilter?.filteredData);
      setSearch(userFilter?.search);
      userSearchRef.current.value = userFilter?.search || '';
      setIsComplete(true);
    }
  }, []);

  useEffect(() => {
    if (pathname === '/all-users') {
      if (isComplete) {
        const isValueExists = filterValue && Object.keys(filterValue).some((key) => filterValue[key] !== '');
        if (filterValue) {
          if (filterValue.skills && filterValue.skills?.length > 0) {
            const value = filterValue.skills.map((skill) => {
              return skills.find((s) => s._id === skill)?.name;
            });
            const selectedSkills = filterValue.skills.map((skill) => {
              return skills.find((s) => s._id === skill);
            });
            setAddSkills(selectedSkills);

            filterValue.skills.length && setSkillCount(filterValue.skills.length - 1);
            setAddSkills((s) => {
              return typeof selectedSkills === 'string' ? value.split(',') : selectedSkills;
            });
          }
          if (filterValue.role && filterValue.role?.length > 0) {
            const updatedRoleOptions = filterValue.role.map((role) => {
              return roleOptionsAdmin.find((r) => r.value === role);
            });
            setAddRoles(updatedRoleOptions);
            setCount(updatedRoleOptions.length);
          }
        }

        isValueExists && setIsFilter(true);
        dispatch(
          setUserFilter({
            filteredData: filterValue,
            ascDescOption: filteredCol,
            search,
          })
        );
      }
    }
  }, [filterValue, filteredCol, search, isLoading]);
  // const { handleChange } = useAllUsers();
  const handleClose = () => setOpen(false);

  const clearSearch = () => {
    setSearch('');
    setIsDataLoading(true);
    userSearchRef.current.value = '';
  };
  const handleClickAway = () => {
    const skillsId = addSkills.map((skill) => skill?._id);

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

  const goBackHandle = () => {};

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
  const handleAccept = async () => {
    const data = {
      id: selectedUser._id,
      varifiedData: {
        isVerified: true,
      },
    };
    await toast.responsePromise(updateAUserByIdFunction(data), setIsSyncLoading, {
      initialMessage: 'User Verification Process is Updating...',
      inPending: () => {
        setOpenReject(false);
        setIsSyncLoading(true);
        setOpenAccepet(false);
        setOpenModal(false);
      },
      afterSuccess: (data) => {
        setOpenReject(false);
        setIsSyncLoading(false);
      },
      afterError: (data) => {
        setOpenReject(false);
        setIsSyncLoading(false);
      },
    });
    // dispatch(updateAUserById(data)).then((action) => {
    //   if (action.payload?.status === 200) {
    //     toast.trigger('User has been verified successfully.', 'success');
    //     setOpenAccepet(false);
    //     setOpenModal(false);
    //   } else {
    //     toast.trigger(
    //       'Failed to verify the user, please try again later.',
    //       'error',
    //     );
    //   }
    // });
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

  const handleChange = (event, skillsId = [], addRoles = [], isSkillsSame = true, isRolesSame = true) => {
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

  const handleId = (field) => {
    setFilteredCol((prev) => {
      const updatedData = { ...prev };
      // eslint-disable-next-line no-prototype-builtins
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
    isComplete,
    search,
    setSearch,
  };
};

export default useAllUsersFunc;
