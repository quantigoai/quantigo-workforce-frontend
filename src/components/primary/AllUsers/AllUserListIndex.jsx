/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/AllUserListIndex.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 12:16:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import { getAllUsers } from "../../../features/slice/userSlice";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import useAllFunc from "../ProjectLIstNew2/Hooks/useAllFunc";
import "../ProjectLIstNew2/index.css";
import AllUsersTable from "./AllUsersTable";
import UsersFilter from "./UsersFilter";
import UsersHeader from "./UsersHeader";
import "./index.css";

const annotatorRoles = ["level_0_annotator", "level_1_annotator", "level_2_annotator", "level_3_annotator"];
const reviewerRoles = ["reviewer"];

const AllUserListIndex = ({ action }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const { users, totalUsers } = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user);
  const { role } = user.user;
  const url = import.meta.env.VITE_APP_SERVER_URL;
  const location = useLocation();

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

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(setActivePath("All Users 2"));
    if (action === "annotator") {
      dispatch(
        getAllUsers({
          role: annotatorRoles,
          limit: pagination.pageSize,
          skip: pagination.pageSize * pagination.currentPage,
        })
      );
    } else if (role === "recruitment_manager" || role === "trainer" || action === "recruitment_manager") {
      dispatch(
        getAllUsers({
          role: [...annotatorRoles, ...reviewerRoles],
          limit: pagination.pageSize,
          skip: pagination.pageSize * pagination.currentPage,
        })
      );
    } else if (action === "reviewer") {
      dispatch(
        getAllUsers({
          role: reviewerRoles,
          limit: pagination.pageSize,
          skip: pagination.pageSize * pagination.currentPage,
        })
      );
    } else {
      dispatch(
        getAllUsers({
          limit: pagination.pageSize,
          skip: pagination.pageSize * pagination.currentPage,
        })
      );
    }
    dispatch(getAllSkills());
  }, [action, role, dispatch, pagination.currentPage, pagination.pageSize]);

  //   -------------------------------
  const { isLightTheme } = useSelector((state) => state.theme);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  
  const handleClick = (e) => {
    console.log("🚀 ~ file: AllUserListIndex.jsx:101 ~ handleClick ~ e:", e);
  };

  const handleDelete = (e) => {
    console.log("🚀 ~ file: AllUserListIndex.jsx:103 ~ handleDelete ~ e:", e);
  };
  
  const handleDetailsPage = (e) => {};

  const handleProjectDetailsOpen = (e) => {};
  const handleChangePagination = (e) => {};
  // --------------------------------
  return (
    <Box className="projectBox">
      <Box className="projectHeader">
        <UsersHeader
          isFilter={isFilter}
          isLightTheme={isLightTheme}
          handleIsFilter={handleIsFilter}
          handleProjectCreateOpen={handleProjectCreateOpen}
        />

        <UsersFilter isFilter={isFilter} isLightTheme={isLightTheme} />
      </Box>
      <Box className="tableContent">
        {!isLoading && users && users.length > 0 ? (
          <AllUsersTable
            handleClick={handleClick}
            handleDelete={handleDelete}
            myColumn={myColumn}
            setMyColumn={setMyColumn}
            myRows={myRows}
            handleId={handleId}
            setMyRows={setMyRows}
            pagination={pagination}
            filteredCol={filteredCol}
            setPagination={setPagination}
            handleDetailsPage={handleDetailsPage}
            handleChangePagination={handleChangePagination}
            total={totalUsers}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            data={users}
          />
        ) : (
          <LoadingComponent height="100%" />
        )}
      </Box>
    </Box>
  );
};

export default AllUserListIndex;
