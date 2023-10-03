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
import { getAllUsers } from "../../../features/slice/userSlice";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
// import TableWrapper from "../ProjectLIstNew2/ExpTable/TableWrapper";
const TableWrapper = React.lazy(() => import("../ProjectLIstNew2/ExpTable/TableWrapper"));

import { useLocation } from "react-router-dom";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import useAllFunc from "../ProjectLIstNew2/Hooks/useAllFunc";
import "../ProjectLIstNew2/index.css";
import UserDetailsNewIndex from "../UserListNew/UserDetilasNew/UserDetailsNewIndex";
import UsersFilter from "./UsersFilter";
import UsersHeader from "./UsersHeader";
import "./index.css";
import { fields } from "./tableFields";

const annotatorRoles = ["level_0_annotator", "level_1_annotator", "level_2_annotator", "level_3_annotator"];
const reviewerRoles = ["reviewer"];

// TODO NEED TO FIX LOADING ISSUE
const AllUserListIndex = ({ action }) => {
  const dispatch = useDispatch();
  const { isLightTheme } = useSelector((state) => state.theme);
  const { users, totalUsers } = useSelector((state) => state.user.users);
  const { isLoading, user } = useSelector((state) => state.user);
  const { role } = user;

  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setActivePath("All Users 2"));
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    users && users.length > 0 && setMyRows(dataBuilder(users));
  }, [dispatch, users]);

  useEffect(() => {
    dispatch(getAllUsers({ pagination }));
  }, []);

  //   -------------------------------

  const handleClick = (e) => {
    console.log("handleclick");
  };

  const handleDelete = (e) => {
    console.log("🚀 ~ file: AllUserListIndex.jsx:103 ~ handleDelete ~ e:", e);
  };
  const handleProjectDetailsOpen = (params) => {
    setSelectedUser(params);
    setOpen(true);
  };

  const handleDetailsPage = (e) => {
    console.log("handledetail");
  };

  const {
    createProjectOpen,
    detailsProjectOpen,
    handleProjectCreateOpen,
    handleDetailsProjectClose,
    setCreateProjectOpen,
    handleChange,
    handleClearFilter,
    filterValue,
    handleId,
    filteredCol,
    handleIsFilter,
    isFilter,
    setDetailsProjectOpen,
  } = useAllFunc();

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

  // --------------------------------
  return (
    <Box className="projectBox">
      <Box className="projectHeader">
        <UsersHeader
          isFilter={false}
          isLightTheme={isLightTheme}
          handleIsFilter={() => console.log("handleIsFilter")}
          handleProjectCreateOpen={() => console.log("handleProjectCreateOpen")}
        />

        <UsersFilter isFilter={false} isLightTheme={isLightTheme} />
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
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            data={users}
          />
        </Suspense>
      </Box>
      <UserDetailsNewIndex
        user={selectedUser}
        open={open}
        handleProjectDetailsOpen={handleProjectDetailsOpen}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default AllUserListIndex;
