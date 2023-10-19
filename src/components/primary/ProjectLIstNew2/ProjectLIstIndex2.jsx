/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectLIstIndex2.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Monday, August 7th 2023, 2:33:07 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Paper} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import {setActivePath} from "../../../features/slice/activePathSlice";
import {
    createProjectDrawer,
    deleteProjectDrawerById,
    getAllProjectDrawers,
    setCurrentProjectDrawer,
    updateProjectDrawerById,
} from "../../../features/slice/projectDrawerSlice";
import {getAllSkills} from "../../../features/slice/skillSlice";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
import EditProjectModal from "./EditProjectModal";
import useToaster from "../../../customHooks/useToaster";
import LoadingComponent from "../../shared/Loading/LoadingComponent";
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
import PaginationTable from "./PaginationTable";
import Project2DetailsModal from "./Project2Details/Project2DetailsModal";
import ProjectHeader from "./ProjectHeader";
import ProjectModal from "./ProjectModal";
import ProjectSelectFIlter from "./ProjectSelectFIlter";
import "./index.css";
// import TableWrapper from "./ExpTable/TableWrapper";
const TableWrapper = React.lazy(() => import("./ExpTable/TableWrapper"));

// test for commit
/**
 * @returns {JSX.Element} A table for rendering rows and columns items in the project list 2 page
 */

const ProjectLIstIndex2 = () => {
  const dispatch = useDispatch();
  const { isLightTheme } = useSelector((state) => state.theme);
  const { skills } = useSelector((state) => state.skill);
  const { projectDrawers, projectDrawer, total, error } = useSelector((state) => state.projectDrawer);
  const { role } = useSelector((state) => state.user.user);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isChildDataLoading, setIsChildDataLoading] = useState(false);
  const navigate = useNavigate();
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [setAnnotatorPlatform] = useState();
  const [detailProject, setDetailProject] = useState({});
  const toast = useToaster();
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

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

  const handleProjectDetailsOpen = (project) => {
    setDetailsProjectOpen(true);
    setDetailProject(project);
  };

  const handleChangePagination = useCallback(() => {
    setIsChildDataLoading(true);
    dispatch(
      getAllProjectDrawers({
        pagination,
        filteredData: filterValue,
        ascDescOption: filteredCol,
      })
    ).then(() => {
      setIsChildDataLoading(false);
    });
  }, [dispatch, pagination, filterValue, filteredCol]);

  const { handleChangeSkill, addSkills, setAddSkills, count } = useHandleChange();

  const handleCreateProjectClose = () => {
    setCreateProjectOpen(false);
    setAddSkills([]);
  };

  //create and edit project submit

  const { handleEditSkill, filteredSkillInfo, editCount, prevSkills, editSkills, isEdit, setIsEdit } =
    useHandleEditChange();

  const handleEditProjectClose = () => {
    setEditModalOpen(false);
    setIsEditModal(false);
  };

  const handleDelete = (e) => {
    dispatch(deleteProjectDrawerById(e.id))
      .then((action) => {
        if (action.payload.status === 200) {
          toast.trigger(action.payload.data.message, "success");
        }
      })
      .catch(() => {
        toast.trigger(error, "error");
      });
  };
  const handleClick = (e) => {
    dispatch(setCurrentProjectDrawer(e.id));
    setEditModalOpen(true);
    setIsEdit(true);
    setIsEditModal(true);
  };
  // const handleDelete = (e) => {};
  // const handleClick = (e) => {
  //   console.log("handleclick");
  // };

  const skillId = addSkills?.map((skill) => skill._id);

  const onSubmit = (data) => {
    if (isEditModal) {
      const newData = {
        ...data,
        project_skills: filteredSkillInfo,
      };
      const allData = { id: projectDrawer._id, data: newData };
      dispatch(updateProjectDrawerById(allData)).then((action) => {
        if (action.error?.message) {
          toast.trigger(action.error?.message, "error");
        }
        if (action.payload?.status === 200) {
          toast.trigger(action.payload.data.message, "success");

          setEditModalOpen(false);
        }
      });
    } else {
      const newData = { ...data, project_skills: skillId };

      dispatch(createProjectDrawer(newData)).then((action) => {
        if (action.error) {
          toast.trigger(action.error.message, "error");
        }
        if (action.payload?.status === 201) {
          toast.trigger(action.payload.data.message, "success");
          setCreateProjectOpen(false);
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

  useEffect(() => {
    dispatch(setActivePath("All Projects"));
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    projectDrawers && projectDrawers.length > 0 && setMyRows(dataBuilder(projectDrawers));
  }, [dispatch, projectDrawers]);

  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(getAllProjectDrawers({ pagination })).then(() => setIsDataLoading(false));
  }, []);

  return (
    <>
      <Box className="projectBox">
        {/* TODO Filter functionality need to be checked for last page  */}
        <Box className="projectHeader">
          <ProjectHeader
            isFilter={false}
            isLightTheme={isLightTheme}
            handleIsFilter={handleIsFilter}
            // handleProjectCreateOpen={() => console.log("handleProjectCreateOpen")}
            handleProjectCreateOpen={() => setCreateProjectOpen(true)}
            // handleSearch={handleSearch}
            // setSearch={setSearch}
            // search={search}
            // searchRef={searchRef}
            // clearSearch={clearSearch}
          />

          <ProjectSelectFIlter
            isFilter={isFilter}
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

        <Box className="tableContent">
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
            {isDataLoading ? (
              <LoadingComponent />
            ) : (
              <TableWrapper
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
                data={projectDrawers}
                isChildDataLoading={isChildDataLoading}
                setIsChildDataLoading={setIsChildDataLoading}
              />
            )}

            <PaginationTable
              pagination={pagination}
              setPagination={setPagination}
              handleChangePagination={handleChangePagination}
              totalItems={total}
            />
          </Paper>
        </Box>

        {detailsProjectOpen && (
          <Box>
            <Project2DetailsModal
              projectDrawer={detailProject}
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
