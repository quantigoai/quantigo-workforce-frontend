/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableWrapper.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, September 26th 2023, 2:44:14 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Alert } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import DetailsPage from "../ProjectDetailsFull/DetailsPage";
import WPFTable from "./WPFTable";

const TableWrapper = ({
  pagination,
  handleDetailsPage,
  setPagination,
  handleChangePagination,
  myColumn,
  myRows,
  handleDelete,
  handleClick,
  totalItems,
  handleId,
  filteredCol,
  handleProjectDetailsOpen,
  role,
  skillAlert,
  data,
  isChildDataLoading,
  setIsChildDataLoading,
  handleReject,
  handleOpenNDA,
}) => {
  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  const location = useLocation();
  const { pathname } = location;

  const stickyFirstColumn = [myColumn[0]];
  const stickyLastColumn = [myColumn[myColumn.length - 1]];
  const columns = myColumn.slice(1, myColumn.length - 1);
  const approvedPaths = ["/allprojects", "/all-users"];

  const renderMainContent = () => {
    if (approvedPaths.includes(pathname)) {
      if (data && data.length > 0) {
        return (
          <WPFTable
            handleDetailsPage={handleDetailsPage}
            myColumn={myColumn}
            myRows={myRows}
            handleDelete={handleDelete}
            handleClick={handleClick}
            handleId={handleId}
            filteredCol={filteredCol}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            role={role}
            skillAlert={skillAlert}
            currentlyCheckedInProject={currentlyCheckedInProject}
            stickyFirstColumn={stickyFirstColumn}
            stickyLastColumn={stickyLastColumn}
            columns={columns}
            isChildDataLoading={isChildDataLoading}
            handleReject={handleReject}
            handleOpenNDA={handleOpenNDA}
          />
        );
      } else if (data && data.length === 0) {
        const message = "No available data found!";
        return <Alert severity="error">{message}</Alert>;
      } else if (role === "recruitment_manager") {
        const message = "No Users found!!!";
        return <Alert severity="error">{message}</Alert>;
      } else if (role !== "admin" && role !== "account_manager") {
        return <DetailsPage skillAlert={skillAlert} />;
      } else {
        return <Alert severity="error">No data found!</Alert>;
      }
    } else {
      if (isChildDataLoading) {
        return <LoadingComponent />;
      } else if (data && data.length > 0) {
        return (
          <WPFTable
            handleDetailsPage={handleDetailsPage}
            myColumn={myColumn}
            myRows={myRows}
            handleDelete={handleDelete}
            handleClick={handleClick}
            handleId={handleId}
            filteredCol={filteredCol}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            role={role}
            skillAlert={skillAlert}
            currentlyCheckedInProject={currentlyCheckedInProject}
            stickyFirstColumn={stickyFirstColumn}
            stickyLastColumn={stickyLastColumn}
            columns={columns}
            isChildDataLoading={isChildDataLoading}
            handleReject={handleReject}
            handleOpenNDA={handleOpenNDA}
          />
        );
      } else if (data && data.length === 0) {
        const message = "No Users history found for this projects!";
        return <Alert severity="error">{message}</Alert>;
      } else if (role === "recruitment_manager") {
        const message = "No Users history found for this projects!";
        return <Alert severity="error">{message}</Alert>;
      } else if (role !== "admin" && role !== "account_manager") {
        return <DetailsPage skillAlert={skillAlert} />;
      } else {
        return null;
      }
    }
  };

  return <>{renderMainContent()}</>;
};

export default TableWrapper;
