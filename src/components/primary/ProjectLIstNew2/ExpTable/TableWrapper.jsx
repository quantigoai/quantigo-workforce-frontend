/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableWrapper.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, September 26th 2023, 2:44:14 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
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
}) => {
  const { usersWorkHistory, isLoading, projectDrawers } = useSelector((state) => state.projectDrawer);
    const { isLightTheme } = useSelector((state) => state.theme);

  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  const location = useLocation();
  const { pathname } = location;

  const stickyFirstColumn = [myColumn[0]];
  const stickyLastColumn = [myColumn[myColumn.length - 1]];
  const columns = myColumn.slice(1, myColumn.length - 1);
  const [isColumSet, setIsColumnSet] = useState(false);

  useEffect(() => {
    if (stickyFirstColumn.length > 0 && stickyLastColumn.length > 0 && columns.length > 0) {
      setIsColumnSet(true);
    }
  }, []);

  return (
    <>
      {/* <Box className="mainTableBox"> */}
      {isLoading && isColumSet ? (
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
    </>
  );
};

export default TableWrapper;
