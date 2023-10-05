/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/AllUserListIndex.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 12:16:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box } from "@mui/material";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import { getAllUsers, setTargetedUser } from "../../../features/slice/userSlice";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
// import TableWrapper from "../ProjectLIstNew2/ExpTable/TableWrapper";
const TableWrapper = React.lazy(() => import("../ProjectLIstNew2/ExpTable/TableWrapper"));

import useAllUsers from "../../../customHooks/useAllUsers";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import useHandleChange from "../ProjectLIstNew2/Hooks/useHandleChange";
import "../ProjectLIstNew2/index.css";
import UserDetailsNewIndex from "../UserListNew/UserDetilasNew/UserDetailsNewIndex";
import UsersFilter from "./UsersFilter";
import UsersHeader from "./UsersHeader";
import "./index.css";
import { fields } from "./tableFields";
import { hubOptions, roleOptions, userStatusOptions } from "./userFilterOptions";
const annotatorRoles = ["level_0_annotator", "level_1_annotator", "level_2_annotator", "level_3_annotator"];
const reviewerRoles = ["reviewer"];

// TODO NEED TO FIX LOADING ISSUE
const AllUserListIndex = ({ action }) => {
  const dispatch = useDispatch();
  const { isLightTheme } = useSelector((state) => state.theme);
  const { users, totalUsers } = useSelector((state) => state.user.users);
  const { isLoading, user } = useSelector((state) => state.user);
  const { role } = user;
  const [prevSkills, setPrevSkills] = useState([]);
  const [prevRoles, setPrevRoles] = useState([]);

  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  const { handleChangeSkill, addSkills, setAddSkills, count, addRoles, handleChangeRoles } = useHandleChange();

  const { filterValue, handleId, filteredCol, handleIsFilter, isFilter, handleChange, handleClearFilter } =
    useAllUsers(setAddSkills);

  const { skills } = useSelector((state) => state.skill);
  
  const arraysAreEqual = (arr1, arr2) => {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }

    // Sort the arrays to ensure order doesn't matter
    arr1.sort();
    arr2.sort();

    // Compare each element of the arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    // If all elements are the same, the arrays are equal
    return true;
  };
  const handleClickAway = () => {
    const skillsId = addSkills.map((skill) => skill._id);

    // ! not call api skills id or role not change

    // * not  call api skills id and role is empty

    // not call api skills id, role any  empty
    if ((skillsId.length || addRoles.length) && (!skillsId.length || !addRoles.length)) {
      // handleChange({}, [], "unchanged");
      if (skillsId.length === 0) {
        handleChange({}, [], "noCall");
      } else {
        handleChange({}, [], "callOne");
        // handleChange({}, skillsId, "null", addRoles);
      }

      if (addRoles.length === 0) {
        console.log("hit addRoles ");
        handleChange({}, [], "noCall");
      } else {
        handleChange({}, [], "callOne");

        // handleChange({}, skillsId, "null", addRoles);
      }
    } else {
      if (skillsId.length && addRoles.length) {
        setPrevSkills(skillsId);
        setPrevRoles(addRoles);

        const currentSkills = addSkills.map((skill) => skill._id);

        const isSkillsSame = arraysAreEqual(prevSkills, currentSkills);
        const isRolesSame = arraysAreEqual(prevRoles, addRoles);
        console.log("🚀 ~ file: AllUserListIndex.jsx:110 ~ handleClickAway ~ isSkillsSame:", isSkillsSame);
        console.log("🚀 ~ file: AllUserListIndex.jsx:116 ~ handleClickAway ~ isRolesSame:", isRolesSame)
        
        addSkills.map((skill) => {
          if (!prevSkills.includes(skill._id)) {
            console.log("changed");
            handleChange({}, skillsId, "callTwo");
          }
        });

        // handleChange({}, skillsId, "null", addRoles);
      } else {
        handleChange({}, skillsId, "noCall");
        handleChange({}, []);
      }

      // both empty  not  call
    }

    if (Object.keys(filterValue).length === 0 && skillsId.length === 0 && addRoles.length === 0) {
      handleChange({}, [], "default");
    }
    // if (skillsId.length > 0) {
    //
    // }
    // if (addRoles.length > 0) {
    // }
  };

  useEffect(() => {
    dispatch(setActivePath("All Users 2"));
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    users && users.length > 0 && setMyRows(dataBuilder(users));
  }, [dispatch, users]);

  useEffect(() => {
    dispatch(getAllUsers({ pagination }));
  }, []);
  //  const
  //   -------------------------------

  const handleClick = (e) => {
    console.log("handleclick");
  };

  const handleDelete = (e) => {
    console.log("🚀 ~ file: AllUserListIndex.jsx:103 ~ handleDelete ~ e:", e);
  };

  const handleUserDetailsOpen = (params) => {
    setSelectedUser(params);
    dispatch(setTargetedUser(params));
    setOpen(true);
  };

  const handleDetailsPage = (e) => {
    console.log("handledetail");
  };

  const handleChangePagination = useCallback(() => {
    dispatch(getAllSkills());
    dispatch(
      getAllUsers({
        pagination,
        filteredData: filterValue,
        ascDescOption: filteredCol,
      })
    );
  }, [dispatch, pagination, filterValue, filteredCol]);

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
        />

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
      </Box>

      <Box className="tableContent">
        <Suspense fallback={<LoadingComponent height={"100%"} />}>
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
          />
        </Suspense>
      </Box>

      <UserDetailsNewIndex open={open} handleProjectDetailsOpen={handleUserDetailsOpen} handleClose={handleClose} />
    </Box>
  );
};

export default AllUserListIndex;
