/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectTable2.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, September 19th 2023, 3:20:38 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Alert, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "swiper/css";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
import PaginationTable from "./PaginationTable";
import DetailsPage from "./ProjectDetailsFull/DetailsPage";
import TableComponent from "./TableComponent";
import "./index.css";

/**
 * @param {object} pagination - pagination object
 * @param {function} setPagination - set pagination
 * @param {function} handleChangePagination - handle change pagination
 * @param {array} myColumn - array of columns
 * @param {array} myRows - array of rows
 * @param {function} handleDelete - handle delete button
 * @param {function} handleClick - handle click on edit button
 * @param {number} totalItems - total number of items
 * @returns {JSX.Element} A table for rendering rows and columns items
 *
 */

const ProjectTable2 = ({
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
  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Box sx={{ height: "100vh" }} className="div1">
        {isLoading ? (
          <LoadingComponent height="50vh" />
        ) : (
          <>
            {pathname === "/allprojects" ? (
              projectDrawers.length > 0 ? (
                <TableComponent
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
              <TableComponent
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
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          width: "97%",
          margin: "auto",
          justifyContent: "flex-end",
        }}
      >
        <PaginationTable
          pagination={pagination}
          setPagination={setPagination}
          handleChangePagination={handleChangePagination}
          totalItems={totalItems}
        />
      </Box>
    </>
  );
};

export default ProjectTable2;
