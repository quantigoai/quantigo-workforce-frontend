/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableWrapper.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, September 26th 2023, 2:44:14 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import React from "react";
import WPFTable from "./WPFTable";
import DetailsPage from "../ProjectDetailsFull/DetailsPage";
import { Alert } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";

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
}) => {
      const { usersWorkHistory, isLoading, projectDrawers } = useSelector((state) => state.projectDrawer);
      const { isLightTheme } = useSelector((state) => state.theme);

      const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
      const location = useLocation();
      const { pathname } = location;

    
  return (
    <>
      {/* <Box className="mainTableBox"> */}
        {isLoading ? (
          <LoadingComponent height="100%" />
        ) : (
          <>
            {pathname === "/allprojects" ? (
              projectDrawers.length > 0 ? (
                <WPFTable
                  pagination={pagination}
                  handleDetailsPage={handleDetailsPage}
                  setPagination={setPagination}
                  handleChangePagination={handleChangePagination}
                  myColumn={myColumn}
                  myRows={myRows}
                  handleDelete={handleDelete}
                  handleClick={handleClick}
                  totalItems={totalItems}
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
                <Alert Alert severity="error">
                  No Users history found for this project!
                </Alert>
              )
            ) : usersWorkHistory.length > 0 ? (
              <WPFTable
                pagination={pagination}
                handleDetailsPage={handleDetailsPage}
                setPagination={setPagination}
                handleChangePagination={handleChangePagination}
                myColumn={myColumn}
                myRows={myRows}
                handleDelete={handleDelete}
                handleClick={handleClick}
                totalItems={totalItems}
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
              <Alert Alert severity="error">
                No Users history found for this project!
              </Alert>
            )}
          </>
        )}
      {/* </Box> */}

      {/* <Box
        sx={{
          backgroundColor: isLightTheme ? "#fff" : "#1c1c1c",
        }}
        className="pagination"
      >
        <PaginationTable
          pagination={pagination}
          setPagination={setPagination}
          handleChangePagination={handleChangePagination}
          totalItems={totalItems}
        />
      </Box> */}
    </>
  );
};

export default TableWrapper;
