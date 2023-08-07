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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  deleteProjectDrawerById,
  getAllProjectDrawers,
} from "../../../features/slice/projectDrawerSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import CustomTable from "../../shared/CustomTable/CustomTable";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
import CreateProjectDrawer from "./CreateProjectDrawer";
import "./index.css";

const fields = [
  { field: "project_drawer_name", width: 200 },
  { field: "project_alias" },
  { field: "project_platform" },
  { field: "project_batch" },
  { field: "project_status", renderCell: "chip", cellClassName: "test" },
  { field: "project_skills" },
  { field: "pdr" },
  {
    field: "Actions",
    renderCell: "button",
  },
];

import ProjectModal from "./ProjectModal";
const ProjectLIstIndex2 = () => {
  const CustomFilterIcon = styled(SortIcon)({
    color: "#266AED",
    background: "#EFF3FE",
    borderRadius: "8px",
    padding: "10px",
  });

  const { projectDrawers } = useSelector((state) => state.projectDrawer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePath("All Projects2"));
    dispatch(getAllProjectDrawers());
  }, []);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);

  const handleClick = (e) => {
    console.log("🚀 ~ file: ProjectLIstIndex2.jsx:44 ~ handleClick ~ e:", e);
  };

  const handleDelete = (e) => {
    dispatch(deleteProjectDrawerById(e.row.id));
  };

  useEffect(() => {
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    setMyRows(dataBuilder(projectDrawers));
  }, [projectDrawers]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
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
            <CreateProjectDrawer />
          </Box>
          <Box>
            <ProjectModal />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: "40px" }}>
        <CustomTable myColumn={myColumn} myRows={myRows} />
      </Box>
    </>
  );
};

export default ProjectLIstIndex2;
