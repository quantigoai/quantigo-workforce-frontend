/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectLIstIndex2.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Monday, August 7th 2023, 2:33:07 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Paper, styled } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import useToaster from '../../../customHooks/useToaster';
import { setActivePath } from '../../../features/slice/activePathSlice';
import {
  clearProjectDrawer,
  createProjectDrawer,
  getAllProjectDrawers,
  getMyAvailableProjects,
  updateProjectDrawerById,
} from '../../../features/slice/projectDrawerSlice';
import { getAllSkills } from '../../../features/slice/skillSlice';
import fieldBuilder from '../../shared/CustomTable/fieldBuilder';
import LoadingComponent from '../../shared/Loading/LoadingComponent';
import EditProjectModal from './EditProjectModal';
import {
  fields,
  filterPDR,
  platformCreateOptions,
  platformOptions,
  projectTypeCreateOptions,
  projectTypeOptions,
  statusCreateOptions,
  statusOptions,
} from './FIlterOptions';
import useAllFunc from './Hooks/useAllFunc';
import useHandleChange from './Hooks/useHandleChange';
import useHandleEditChange from './Hooks/useHandleEditChange';
import PaginationTable from './PaginationTable';
import Project2DetailsModal from './Project2Details/Project2DetailsModal';
import ProjectHeader from './ProjectHeader';
import ProjectModal from './ProjectModal';
import ProjectSelectFIlter from './ProjectSelectFIlter';
import './index.css';
// import TableWrapper from "./ExpTable/TableWrapper";
const TableWrapper = React.lazy(() => import('./ExpTable/TableWrapper'));

// test for commit
/**
 * @returns {JSX.Element} A table for rendering rows and columns items in the project list 2 page
 */

export const HeaderBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '116px',
  alignItems: 'center',
});

export const TablePaper = styled(Paper)({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '8px',
  border: '0px 0px 1px 0px',
  boxShadow: '0px 1px 3px 0px #09008014',
});
const ProjectLIstIndex2 = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toast = useToaster();
  const searchRef = React.useRef(null);
  const { projectDrawer, total, error, projectMeta } = useSelector(
    (state) => state.projectDrawer,
  );
  const {
    handleChangeSkill,
    addSkills,
    setAddSkills,
    count,
    skillCount,
    setSkillCount,
  } = useHandleChange();

  const [isDeleted, setIsDeleted] = useState(false);

  const {
    handleClearAllSkills,
    handleEditSkill,
    filteredSkillInfo,
    editCount,
    prevSkills,
    editSkills,
    isEdit,
    setIsEdit,
  } = useHandleEditChange();
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
    search,
    setSearch,
    setDetailsProjectOpen,
    annotatorPlatform,
    checked,
    setChecked,
    setAnnotatorPlatform,
    isDataLoading,
    isChildDataLoading,
    myColumn,
    myRows,
    isEditModal,
    editModalOpen,
    detailProject,
    pagination,
    skills,
    setIsDataLoading,
    setIsChildDataLoading,
    setMyColumn,
    setMyRows,
    setIsEditModal,
    setEditModalOpen,
    setDetailProject,
    setPagination,
    handleDelete,
    handleProjectDetailsOpen,
    handleCreateProjectClose,
    handleEditProjectClose,
    handleClick,
    skillId,
    handleDetailsPage,
    handleSearch,
    clearSearch,
    handleChangeAnnotatorFilter,
    handleChangeCheck,
    setFilterValue,
    setFilteredCol,
    isComplete,
  } = useAllFunc({
    addSkills,
    setAddSkills,
    searchRef,
    handleClearAllSkills,
    setIsEdit,
    setIsDeleted,
  });

  const onSubmit = (data) => {
    if (isEditModal) {
      const newData = {
        ...data,
        project_skills: filteredSkillInfo,
        relevantDocuments: data.relevantDocuments.filter(
          (doc) => doc.documentName !== '' || doc.documentUrl !== '',
        ),
      };
      const allData = { id: projectDrawer._id, data: newData };
      dispatch(updateProjectDrawerById(allData)).then((action) => {
        if (action.error?.message) {
          toast.trigger(action.error?.message, 'error');
        }
        if (action.payload?.status === 200) {
          toast.trigger(action.payload.data.message, 'success');
          handleClearAllSkills();
          setEditModalOpen(false);
          setIsEditModal(false);
        }
      });
    } else {
      const newData = {
        ...data,
        project_skills: skillId,
        relevantDocuments: data.relevantDocuments.filter(
          (doc) => doc.documentName !== '' || doc.documentUrl !== '',
        ),
      };
      dispatch(createProjectDrawer(newData)).then((action) => {
        if (action.error) {
          toast.trigger(action.error.message, 'error');
        }
        if (action.payload?.status === 201) {
          toast.trigger(action.payload.data.message, 'success');
          handleCreateProjectClose();
          dispatch(
            getAllProjectDrawers({
              pagination,
              filteredData: filterValue,
              ascDescOption: filteredCol,
              search,
            }),
          ).then((res) => {
            setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
            setIsDataLoading(false);
          });
        }
      });
    }
  };

  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(setActivePath('All Projects'));
    dispatch(clearProjectDrawer());
  }, []);
  const path = useLocation();
  const { pathname, search: searchParams } = path;

  useLayoutEffect(() => {
    setIsDataLoading(true);
    if (checked) {
      isComplete &&
        dispatch(
          getMyAvailableProjects({
            pagination,
            annotatorPlatform,
            filteredData: filterValue,
            ascDescOption: filteredCol,
            search,
          }),
        ).then(() => {
          setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
          setIsChildDataLoading(false);
          setIsDataLoading(false);
        });
    } else {
      isComplete &&
        dispatch(
          getAllProjectDrawers({
            pagination,
            filteredData: filterValue,
            ascDescOption: filteredCol,
            search,
          }),
        ).then((res) => {
          setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
          setIsDataLoading(false);
        });
    }
  }, [
    pagination,
    search,
    filterValue,
    filteredCol,
    isDeleted,
    pathname,
    searchParams,
    isComplete,
    checked,
  ]);

  return (
    <>
      <Box className="content">
        {/* TODO Filter functionality need to be checked for last page  */}
        <HeaderBox sx={{ backgroundColor: '' }}>
          <ProjectHeader
            isFilter={isFilter}
            role={user.role}
            handleIsFilter={handleIsFilter}
            handleProjectCreateOpen={() => setCreateProjectOpen(true)}
            handleSearch={handleSearch}
            setSearch={setSearch}
            search={search}
            searchRef={searchRef}
            clearSearch={clearSearch}
          />

          <ProjectSelectFIlter
            isFilter={isFilter}
            handleChangeAnnotatorFilter={handleChangeAnnotatorFilter}
            role={user.role}
            handleChangeCheck={handleChangeCheck}
            checked={checked}
            filterPDR={filterPDR}
            platformOptions={platformOptions}
            statusOptions={statusOptions}
            projectTypeOptions={projectTypeOptions}
            handleChange={handleChange}
            handleClearFilter={handleClearFilter}
            filterValue={filterValue}
            skills={skills}
            onSubmit={onSubmit}
            annotatorPlatform={annotatorPlatform}
          />
        </HeaderBox>

        <Box className="contentBody">
          <TablePaper sx={{ backgroundColor: '' }}>
            {isDataLoading ? (
              <LoadingComponent />
            ) : (
              <TableWrapper
                role={user.role}
                handleDetailsPage={handleDetailsPage}
                handleClick={handleClick}
                handleDelete={handleDelete}
                myColumn={myColumn}
                myRows={myRows}
                pagination={pagination}
                setPagination={setPagination}
                handleId={handleId}
                filteredCol={filteredCol}
                handleProjectDetailsOpen={handleProjectDetailsOpen}
                isChildDataLoading={isChildDataLoading}
                setIsChildDataLoading={setIsChildDataLoading}
                setMyRows={setMyRows}
              />
            )}

            <PaginationTable
              pagination={pagination}
              setPagination={setPagination}
              setFilterValue={setFilterValue}
              setFilteredCol={setFilteredCol}
            />
          </TablePaper>
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
          <Box sx={{ width: '100%' }}>
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
              count={skillCount}
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
