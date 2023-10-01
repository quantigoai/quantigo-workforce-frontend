/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableWrapper.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, September 26th 2023, 2:44:14 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Alert, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import PaginationTable from "../PaginationTable";
import DetailsPage from "../ProjectDetailsFull/DetailsPage";
import WPFPagination from "./WPFPagination/WPFPagination";
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
  isLoading,
}) => {
  // const { usersWorkHistory, isLoading, projectDrawers } = useSelector((state) => state.projectDrawer);
  const { isLightTheme } = useSelector((state) => state.theme);

  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  const location = useLocation();
  const { pathname } = location;

  const stickyFirstColumn = [myColumn[0]];
  const stickyLastColumn = [myColumn[myColumn.length - 1]];
  const columns = myColumn.slice(1, myColumn.length - 1);
  const [isColumSet, setIsColumnSet] = useState(false);
  const approvedPaths = ["/allprojects", "/all-users"];

  useEffect(() => {
    if (stickyFirstColumn.length > 0 && stickyLastColumn.length > 0 && columns.length > 0) {
      setIsColumnSet(true);
    }
  }, []);

  return (
    <>
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
        {/* <Box className="mainTableBox"> */}
        {isLoading && isColumSet ? (
          <LoadingComponent height="100%" />
        ) : (
          <>
            {approvedPaths.includes(pathname) ? (
              // projectDrawers.length > 0 ? (
              data.length > 0 ? (
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
                />
              ) : role !== "admin" ? (
                <DetailsPage skillAlert={skillAlert} />
              ) : (
                <Alert Alert severity="error">
                  No Users history found for this project!
                </Alert>
              )
            ) : // usersWorkHistory.length > 0 ? (
            data.length > 0 ? (
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
              />
            ) : role !== "admin" ? (
              <DetailsPage skillAlert={skillAlert} />
            ) : (
              // TODO Dynamically sent a message for alert
              <Alert Alert severity="error">
                No Users history found for this projects!
              </Alert>
            )}
          </>
        )}
        {/* </Box> */}
        <PaginationTable
          pagination={pagination}
          setPagination={setPagination}
          handleChangePagination={handleChangePagination}
          totalItems={totalItems}
        />
        {/* <WPFPagination
          pagination={pagination}
          setPagination={setPagination}
          handleChangePagination={handleChangePagination}
          totalItems={totalItems}
        /> */}
      </Paper>
    </>
  );
};

export default TableWrapper;
