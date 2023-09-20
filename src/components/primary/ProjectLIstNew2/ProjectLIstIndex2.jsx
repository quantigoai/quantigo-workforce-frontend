/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectLIstIndex2.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Monday, August 7th 2023, 2:33:07 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Grid, IconButton, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useCallback, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  createProjectDrawer,
  deleteProjectDrawerById,
  getAllProjectDrawers,
  setCurrentProjectDrawer,
  updateProjectDrawerById,
} from "../../../features/slice/projectDrawerSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
import EditProjectModal from "./EditProjectModal";
import {
  fields,
  filterPDR,
  platformCreateOptions,
  platformOptions,
  projectTypeCreateOptions,
  projectTypeOptions,
  statusCreateOptions,
  statusOptions,
} from "./FIlterOptions";
import useAllFunc from "./Hooks/useAllFunc";
import useHandleChange from "./Hooks/useHandleChange";
import useHandleEditChange from "./Hooks/useHandleEditChange";
import Project2DetailsModal from "./Project2Details/Project2DetailsModal";
import ProjectModal from "./ProjectModal";
import ProjectSelectFIlter from "./ProjectSelectFIlter";
import ProjectTable2 from "./ProjectTable2";
import "./index.css";

// test for commit
/**
 * @returns {JSX.Element} A table for rendering rows and columns items in the project list 2 page
 */

const ProjectLIstIndex2 = () => {
  const { skills } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [annotatorPlatform, setAnnotatorPlatform] = useState();

  const alert = useAlert();
  const {
    createProjectOpen,
    detailsProjectOpen,
    handleProjectCreateOpen,
    handleProjectDetailsOpen,
    handleDetailsProjectClose,
    setCreateProjectOpen,
    handleChange,
    handleClearFilter,
    filterValue,
    handleId,
    filteredCol,
    handleIsFilter,
    isFilter,
  } = useAllFunc();

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const { projectDrawers, projectDrawer, total, error } = useSelector((state) => state.projectDrawer);
  const { role } = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(setActivePath("All Projects2"));
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    setMyRows(dataBuilder(projectDrawers));
  }, [projectDrawers]);

  const handleChangePagination = useCallback(() => {
    dispatch(getAllSkills());
    dispatch(
      getAllProjectDrawers({
        pagination,
        filteredData: filterValue,
        ascDescOption: filteredCol,
      })
    );
  }, [dispatch, pagination, filterValue, filteredCol]);
  const { handleChangeSkill, addSkills, setAddSkills, count } = useHandleChange();
  const handleCreateProjectClose = () => {
    setCreateProjectOpen(false);
    setAddSkills([]);
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
  //create and edit project submit

  const { handleEditSkill, filteredSkillInfo, editCount, prevSkills, editSkills, isEdit, setIsEdit } =
    useHandleEditChange();

  const handleEditProjectClose = () => {
    setEditModalOpen(false);
    setIsEditModal(false);
  };

  const handleClick = (e) => {
    dispatch(setCurrentProjectDrawer(e.id));
    setEditModalOpen(true);
    setIsEdit(true);
    setIsEditModal(true);
  };

  const skillId = editSkills?.map((skill) => skill._id);

  const onSubmit = (data) => {
    console.log("🚀 ~ file: ProjectLIstIndex2.jsx:139 ~ onSubmit ~ data:", data);
    if (isEditModal) {
      const newData = {
        ...data,
        project_skills: filteredSkillInfo,
      };
      const allData = { id: projectDrawer._id, data: newData };
      dispatch(updateProjectDrawerById(allData)).then((action) => {
        if (action.error?.message) {
          alert.show(action.error?.message, { type: "error" });
        }
        if (action.payload?.status === 200) {
          alert.show(action.payload.data.message, { type: "success" });

          setEditModalOpen(false);
        }
      });
    } else {
      const newData = { ...data, project_skills: skillId };
      console.log("🚀 ~ file: ProjectLIstIndex2.jsx:157 ~ onSubmit ~ newData:", newData);

      dispatch(createProjectDrawer(newData)).then((action) => {
        if (action.error) {
          alert.show(action.error.message, { type: "error" });
        }
        if (action.payload?.status === 201) {
          alert.show(action.payload.data.message, { type: "success" });
          setCreateProjectOpen(false);
          setAddSkills([]);
        }
      });
    }
  };

  const handleDetailsPage = (data) => {
    const myData = {
      id: data._id,
    };
    dispatch(setCurrentProjectDrawer(myData.id));
    navigate(`/projectDetails/${myData.id}`);
  };

  const handleChangeAnnotatorFilter = (event) => {
    const {
      target: { value },
    } = event;
    setAnnotatorPlatform(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Box className="projectBox">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              background: "#FFFFFF",
              borderBottom: "1px solid #E6ECF5",
              borderTop: "1px solid #E6ECF5",
            }}>
            <Box sx={{ width: "30%", padding: "12px 35px" }}>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  paddingX: "10px",
                }}>
                <CommonHeader title="Projects" customButton="Create User" />
              </Grid>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 20px",
              }}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "240px",
                  background: "#F4F7FE",
                  border: "1px solid #EFF3FE",
                  borderRadius: "8px",
                  outline: "none",
                  boxShadow: "none",
                }}>
                <IconButton disabled type="button" sx={{ p: "5px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 0, flex: 1 }} placeholder="Search" />
              </Paper>
              <IconButton
                onClick={handleIsFilter}
                sx={{
                  px: "5px 0px",
                  background: "#F4F7FE",
                  mx: 2,
                  borderRadius: "8px",
                }}
                aria-label="menu">
                <i style={{ color: "#266AED" }} className="ri-filter-3-line"></i>
              </IconButton>
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#2E58FF",
                  "&:hover": {
                    background: "#244EF5",
                  },
                }}
                variant="contained"
                onClick={handleProjectCreateOpen}>
                Create Project
              </Button>
            </Box>
          </Box>
          {/* {isFilter && ( */}
          {
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                width: "100%",
                paddingY: "10px",
                visibility: isFilter ? "visible" : "hidden",
                // display: isFilter ? "block" : "none",
              }}>
              <ProjectSelectFIlter
                handleChangeAnnotatorFilter={handleChangeAnnotatorFilter}
                role={role}
                filterPDR={filterPDR}
                platformOptions={platformOptions}
                statusOptions={statusOptions}
                projectTypeOptions={projectTypeOptions}
                handleChange={handleChange}
                handleClearFilter={handleClearFilter}
                filterValue={filterValue}
                skills={skills}
                onSubmit={onSubmit}
              />
            </Box>
          }
        </Box>

        <Box
          sx={{
            width: "100%",
            mt: "10px",
            height: "100%",
          }}>
          <ProjectTable2
            role={role}
            handleDetailsPage={handleDetailsPage}
            handleClick={handleClick}
            handleDelete={handleDelete}
            myColumn={myColumn}
            myRows={myRows}
            pagination={pagination}
            setPagination={setPagination}
            handleChangePagination={handleChangePagination}
            totalItems={total}
            handleId={handleId}
            filteredCol={filteredCol}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
          />
        </Box>

        {detailsProjectOpen && (
          <Box>
            <Project2DetailsModal
              detailsProjectOpen={detailsProjectOpen}
              handleProjectDetailsOpen={handleProjectDetailsOpen}
              handleDetailsProjectClose={handleDetailsProjectClose}
            />
          </Box>
        )}
        {editModalOpen && (
          <Box sx={{ width: "100%" }}>
            <EditProjectModal
              projectDrawer={projectDrawer}
              editModalOpen={editModalOpen}
              handleClick={handleClick}
              setEditModalOpen={setEditModalOpen}
              handleEditProjectClose={handleEditProjectClose}
              platformCreateOptions={platformCreateOptions}
              projectTypeCreateOptions={projectTypeCreateOptions}
              statusCreateOptions={statusCreateOptions}
              isEditModal={isEditModal}
              isEdit={isEdit}
              handleEditSkill={handleEditSkill}
              editCount={editCount}
              editSkills={editSkills}
              prevSkill={prevSkills}
              skills={skills}
              onSubmit={onSubmit}
            />
          </Box>
        )}

        {createProjectOpen && (
          <Box>
            <ProjectModal
              createProjectOpen={createProjectOpen}
              handleProjectCreateOpen={handleProjectCreateOpen}
              handleCreateProjectClose={handleCreateProjectClose}
              setCreateProjectOpen={setCreateProjectOpen}
              platformCreateOptions={platformCreateOptions}
              projectTypeCreateOptions={projectTypeCreateOptions}
              statusCreateOptions={statusCreateOptions}
              handleChangeSkill={handleChangeSkill}
              count={count}
              onSubmit={onSubmit}
              addSkills={addSkills}
              skills={skills}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProjectLIstIndex2;
