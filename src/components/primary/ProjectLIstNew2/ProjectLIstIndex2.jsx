/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectLIstIndex2.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Monday, August 7th 2023, 2:33:07 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { Box, Button, Grid, IconButton, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import {
  deleteProjectDrawerById,
  getAllProjectDrawers,
  setCurrentProjectDrawer,
} from "../../../features/slice/projectDrawerSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
import "./index.css";

const fields = [
  { field: "project_drawer_name", width: 200 },
  { field: "project_alias", width: 200 },
  { field: "project_platform" },
  { field: "project_batch", width: 150 },
  { field: "project_status", renderCell: "chip" },
  { field: "project_skills", width: 530, renderCell: "skills-chip" },
  { field: "pdr", width: 100 },
  { field: "createdBy", width: 150 },
  {
    field: "ACTIONS",
    renderCell: "button",
    width: 80,
  },
];

import EditProjectModal from "./EditProjectModal";
import ProjectModal from "./ProjectModal";
import ProjectTable2 from "./ProjectTable2";

/**
 * @returns {JSX.Element} A table for rendering rows and columns items in the project list 2 page
 */
const ProjectLIstIndex2 = () => {
  const CustomFilterIcon = styled(SortIcon)({
    color: "#266AED",
    background: "#EFF3FE",
    borderRadius: "8px",
    padding: "10px",
  });
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const { projectDrawers, projectDrawer, total, error } = useSelector(
    (state) => state.projectDrawer
  );

  const dispatch = useDispatch();

  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const alert = useAlert();
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [createProjectOpen, setCreateProjectOpen] = React.useState(false);
  const handleProjectCreateOpen = () => setCreateProjectOpen(true);

  const handleCreateProjectClose = () => {
    setCreateProjectOpen(false);
  };

  const handleEditProjectClose = () => {
    setEditModalOpen(false);
  };

  const handleClick = (e) => {
    dispatch(setCurrentProjectDrawer(e.id));
    setEditModalOpen(true);
  };

  const handleDelete = (e) => {
    dispatch(deleteProjectDrawerById(e.id))
      .then((action) => {
        if (action.payload.status === 200) {
          alert.show(action.payload.data.message, { type: "success" });
        }
      })
      .catch(() => {
        alert.show(error, { type: "error" });
      });
  };

  useEffect(() => {
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    setMyRows(dataBuilder(projectDrawers));
  }, [projectDrawers]);

  const handleChangePagination = useCallback(() => {
    dispatch(getAllProjectDrawers({ pagination }));
  }, [dispatch, pagination]);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Grid
              container
              sx={{
                paddingBottom: "0%",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <CommonHeader title="Projects" customButton="Create User" />
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // width: "30%",
              alignItems: "center",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "240px",
                background: "#F4F7FE",
              }}
            >
              <IconButton
                disabled
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 0, flex: 1 }} placeholder="Search" />
            </Paper>
            <IconButton
              sx={{ px: "15px", background: "#F4F7FE" }}
              aria-label="menu"
              //   onClick={handleClickFilter}
            >
              <CustomFilterIcon />
            </IconButton>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                background: "#2E58FF",
              }}
              variant="contained"
              onClick={handleProjectCreateOpen}
            >
              Create Project
            </Button>

            {createProjectOpen && (
              <Box>
                <ProjectModal
                  createProjectOpen={createProjectOpen}
                  handleProjectCreateOpen={handleProjectCreateOpen}
                  handleCreateProjectClose={handleCreateProjectClose}
                  setCreateProjectOpen={setCreateProjectOpen}
                />
              </Box>
            )}
          </Box>
        </Box>
        {editModalOpen && (
          <Box sx={{ width: "100%" }}>
            <EditProjectModal
              projectDrawer={projectDrawer}
              editModalOpen={editModalOpen}
              handleClick={handleClick}
              setEditModalOpen={setEditModalOpen}
              handleEditProjectClose={handleEditProjectClose}
            />
          </Box>
        )}

        <Box
          sx={{
            width: "100%",
            mt: "40px",
          }}
        >
          {/* <CustomTable
            myColumn={myColumn}
            myRows={myRows}
            totalCount={total}
            paginationModel={paginationModel}
            setPaginationModel={setPaginationModel}
            isLoading={isLoading}
          /> */}

          <ProjectTable2
            handleClick={handleClick}
            handleDelete={handleDelete}
            myColumn={myColumn}
            myRows={myRows}
            pagination={pagination}
            setPagination={setPagination}
            handleChangePagination={handleChangePagination}
            totalItems={total}
          />
          {/* <ProjectTable2Old /> */}
        </Box>
      </Box>
    </>
  );
};

export default ProjectLIstIndex2;
