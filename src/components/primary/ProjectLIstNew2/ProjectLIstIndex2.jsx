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
import { Box, Grid, IconButton, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import { setActivePath } from "../../../features/slice/activePathSlice";
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
  { field: "project_alias" },
  { field: "project_platform" },
  { field: "project_batch", width: 100 },
  { field: "project_status", renderCell: "chip" },
  { field: "project_skills", width: 360, renderCell: "skills-chip" },
  { field: "pdr", width: 140 },
  {
    field: "Actions",
    renderCell: "button",
  },
];

import CustomTable from "../../shared/CustomTable/CustomTable";
import EditProjectModal from "./EditProjectModal";
import ProjectModal from "./ProjectModal";

const ProjectLIstIndex2 = () => {
  const CustomFilterIcon = styled(SortIcon)({
    color: "#266AED",
    background: "#EFF3FE",
    borderRadius: "8px",
    padding: "10px",
  });

  const {isLoading, projectDrawer, projectDrawers, total, error } = useSelector(
    (state) => state.projectDrawer
  );

  const dispatch = useDispatch();
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSipaginationModeze: 10,
  });
  useEffect(() => {
    dispatch(setActivePath("All Projects2"));
    dispatch(getAllProjectDrawers({ paginationModel }));
  }, [paginationModel]);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);

  const alert = useAlert();

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (e) => {
    dispatch(setCurrentProjectDrawer(e.id));
    setOpen(true);
  };

  const handleDelete = (e) => {
    dispatch(deleteProjectDrawerById(e.row.id))
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

  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "40%" }}>
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
              justifyContent: "space-around",
              width: "40%",
              alignItems: "center",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "250px",
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
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
            </Paper>
            <IconButton
              sx={{ p: "0px", background: "#F4F7FE" }}
              aria-label="menu"
              //   onClick={handleClickFilter}
            >
              <CustomFilterIcon />
            </IconButton>

            <Box>
              <ProjectModal />
            </Box>
          </Box>
        </Box>
        <EditProjectModal
          // handleOpen={handleOpen}
          open={open}
          handleClick={handleClick}
          handleClose={handleClose}
          projectDrawer={projectDrawer}
        />

        <Box
          sx={{
            width: "100%",
            mt: "40px",
            position: "absolute",
          }}
        >
          <CustomTable
            myColumn={myColumn}
            myRows={myRows}
            totalCount={total}
            paginationModel={paginationModel}
            setPaginationModel={setPaginationModel}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProjectLIstIndex2;
