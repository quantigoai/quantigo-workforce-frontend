/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/AllUserListIndex.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 12:16:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Paper } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import { getAllUsers, setTargetedUser, updateAUserById } from "../../../features/slice/userSlice";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
// import TableWrapper from "../ProjectLIstNew2/ExpTable/TableWrapper";
const TableWrapper = React.lazy(() => import("../ProjectLIstNew2/ExpTable/TableWrapper"));

import { useForm } from "react-hook-form";
import useAllUsers from "../../../customHooks/useAllUsers";
import useToaster from "../../../customHooks/useToaster";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import useHandleChange from "../ProjectLIstNew2/Hooks/useHandleChange";
import PaginationTable from "../ProjectLIstNew2/PaginationTable";
import "../ProjectLIstNew2/index.css";
import UserDetailsNewIndex from "../UserListNew/UserDetilasNew/UserDetailsNewIndex";
import AcceptModal from "../Users/NdaAccept/AcceptModal";
import NdaRejectModal from "../Users/NdaAccept/NdaRejectModal";
import UsersFilter from "./UsersFilter";
import UsersHeader from "./UsersHeader";
import "./index.css";
import { fields } from "./tableFields";
import { hubOptions, roleOptions, userStatusOptions } from "./userFilterOptions";

// TODO NEED TO FIX LOADING ISSUE
const AllUserListIndex = ({ action }) => {
  const dispatch = useDispatch();
  const { isLightTheme } = useSelector((state) => state.theme);
  const { users, totalUsers } = useSelector((state) => state.user.users);
  const { isLoading, user } = useSelector((state) => state.user);
  const { role } = user;
  const [openModal, setOpenModal] = useState(false);
  const [prevSkills, setPrevSkills] = useState([]);
  const [prevRoles, setPrevRoles] = useState([]);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [openAccepet, setOpenAccepet] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const toast = useToaster();
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  const {
    handleChangeSkill,
    addSkills,
    setAddSkills,
    count,
    addRoles,
    handleChangeRoles,
    setAddRoles,
    search,
    setSearch,
  } = useHandleChange();

  const searchRef = React.useRef(null);
  const clearSearch = () => {
    setSearch("");
    searchRef.current.value = "";
  };

  const { filterValue, handleId, filteredCol, handleIsFilter, isFilter, handleChange, handleClearFilter } = useAllUsers(
    setAddSkills,
    setAddRoles,
    setPrevSkills,
    setPrevRoles,
    clearSearch
  );

  const { skills } = useSelector((state) => state.skill);

  const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    arr1.sort();
    arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  };

  const handleClickAway = () => {
    const skillsId = addSkills.map((skill) => skill._id);

    const isSkillsSame = arraysAreEqual(prevSkills, skillsId);

    const isRolesSame = arraysAreEqual(prevRoles, addRoles);

    setPrevSkills(skillsId);
    setPrevRoles(addRoles);

    if (!isSkillsSame) {
      handleChange({}, skillsId, addRoles, isSkillsSame, isRolesSame);
    } else if (!isRolesSame) {
      handleChange({}, skillsId, addRoles, isSkillsSame, isRolesSame);
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(setActivePath("All Users 2"));
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    users && users.length > 0 && setMyRows(dataBuilder(users));
  }, [dispatch, users]);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isChildDataLoading, setIsChildDataLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(getAllUsers({ pagination })).then(() => setIsDataLoading(false));
  }, []);

  const handleClick = (e) => {
    console.log("handleclick");
  };

  const handleDelete = (e) => {};

  const handleUserDetailsOpen = (params) => {
    console.log("handledetail");
    setSelectedUser(params);
    dispatch(setTargetedUser(params));
    setOpen(true);
  };

  const handleDetailsPage = (e) => {
    console.log("handledetail");
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Reject Nda
  const handleReject = (params) => {
    console.log(params);
    setSelectedUser(params);
    setOpenModal(true);
  };
  const onSubmit = (data) => {
    const finalData = {
      id: selectedUser._id,
      varifiedData: {
        isVerified: false,
        rejectionCause: data.rejectionCause,
      },
    };
    dispatch(updateAUserById(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger("Reject  NDA", "success");
        setOpenAccepet(false);
        setOpenModal(false);
      } else {
        toast.trigger("Failed to Reject  NDA", "error");
      }
    });
    handleClose();
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpenAccepet(false);
    setOpenModal(false);
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
        toast.trigger("User Verified successfully", "success");
        setOpenAccepet(false);
        setOpenModal(false);
      } else {
        toast.trigger("User not Verified ", "error");
      }
    });
  };

  const handleChangePagination = useCallback(() => {
    setIsChildDataLoading(true);
    dispatch(
      getAllUsers({
        pagination,
        filteredData: filterValue,
        ascDescOption: filteredCol,
        search,
      })
    ).then(() => {
      setIsChildDataLoading(false);
    });
  }, [dispatch, pagination, filterValue, filteredCol, search]);

  const skillsOptions = skills.map((skill) => ({ value: skill._id, label: skill.name }));

  // --------------------------------
  return (
    <Box className="projectBox">
      <Box className="projectHeader">
        <UsersHeader
          isFilter={false}
          isLightTheme={isLightTheme}
          handleIsFilter={handleIsFilter}
          handleProjectCreateOpen={() => console.log("handleProjectCreateOpen")}
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
          searchRef={searchRef}
          clearSearch={clearSearch}
        />

        {/* <motion.Box animate={{ x: 100 }}> */}
        {/* <motion.div animate={{ x: 100 }}> */}
        <UsersFilter
          isFilter={isFilter}
          isLightTheme={isLightTheme}
          role={role}
          handleChange={handleChange}
          handleClearFilter={handleClearFilter}
          filterValue={filterValue}
          roleOptions={roleOptions}
          hubOptions={hubOptions}
          skillOptions={skillsOptions}
          userStatusOptions={userStatusOptions}
          handleChangeSkill={handleChangeSkill}
          addSkills={addSkills}
          count={count}
          handleClickAway={handleClickAway}
          addRoles={addRoles}
          handleChangeRoles={handleChangeRoles}
        />
        {/* </motion.div> */}
      </Box>

      <Box className="tableContent">
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
              pagination={pagination}
              setPagination={setPagination}
              handleChangePagination={handleChangePagination}
              totalItems={totalUsers}
              handleId={handleId}
              filteredCol={filteredCol}
              handleProjectDetailsOpen={handleUserDetailsOpen}
              data={users}
              isChildDataLoading={isChildDataLoading}
              setIsChildDataLoading={setIsChildDataLoading}
              handleReject={handleReject}
              handleOpenNDA={handleOpenNDA}
            />
          )}
          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            handleChangePagination={handleChangePagination}
            totalItems={totalUsers}
          />
        </Paper>
      </Box>

      <UserDetailsNewIndex
        role={role}
        open={open}
        handleProjectDetailsOpen={handleUserDetailsOpen}
        handleClose={handleClose}
      />
      <NdaRejectModal openModal={openModal} handleClose={handleCloseModal} register={register} onSubmit={onSubmit} />
      <AcceptModal open={openAccepet} handleClose={handleCloseModal} handleAccept={handleAccept} user={selectedUser} />
    </Box>
  );
};

export default AllUserListIndex;
