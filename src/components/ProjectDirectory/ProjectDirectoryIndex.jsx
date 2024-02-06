/* eslint-disable no-prototype-builtins */
import { Box } from '@mui/material';
import React, { useEffect, useLayoutEffect } from 'react';
import { clearProjectDirectory, getProjectByDirectory } from '../../features/slice/ProjectDirectorySlice.js';
import { setActivePath } from '../../features/slice/activePathSlice';
import { setProjectDirectoryFilter } from '../../features/slice/temporaryDataSlice';
// /ProjectLIstNew2/ExpTable/TableWrapper
import TableWrapper from '../primary/ProjectLIstNew2/ExpTable/TableWrapper.jsx';
import { projectDirectoryField } from '../primary/ProjectLIstNew2/FIlterOptions';
import PaginationTable from '../primary/ProjectLIstNew2/PaginationTable';
import { HeaderBox, TablePaper } from '../primary/ProjectLIstNew2/ProjectLIstIndex2';
import fieldBuilder from '../shared/CustomTable/fieldBuilder';
import LoadingComponent from '../shared/Loading/LoadingComponent.jsx';
import CreateProjectDirectoryModal from './CreateProjectDirectoryModal.jsx';
import ProjectDirectoryDetailsModal from './ProjectDirectoryDetailsModal';
import ProjectDirectoryEditModal from './ProjectDirectoryEditModal';
import ProjectDirectoryHeader from './ProjectDirectoryHeader.jsx';
import useProjectDirectoryMange from './useProjectDirectoryMange.jsx';

const ProjectDirectoryIndex = () => {
  const {
    role,
    dispatch,
    menuFilter,
    filterData,
    anchorE2,
    setProjectDirectoryRemove,
    anchorEl,
    setAnchorEl,
    handleSubmit,
    openModal,
    openProjectModalEdit,
    setOpenProjectModalEdit,
    openProjectModalDetails,
    myColumn,
    setMyColumn,
    isDataLoading,
    setIsDataLoading,
    isChildDataLoading,
    setIsChildDataLoading,
    myRows,
    setMyRows,
    projectDirectorySingle,
    pagination,
    setPagination,
    projectDirectoryFilter,
    pathname,
    isDeleted,
    ascDesc,
    setAscDesc,
    search,
    setSearch,
    isSyncLoading,
    searchRef,
    handleClickFilter,
    handleCloseFilter,
    handleMenuItemClick,
    handleValue,
    handleFilterProjectDirectory,
    handleResetProjectDirectory,
    handleEditClose,
    handleCreateModal,
    handleClose,
    handleClick,
    handleDelete,
    handleDetailsPage,
    handleProjectDetailsOpen,
    handleDetailsProjectDirectoryClose,
    handleSearch,
    clearSearch,
    handleGetSync,
    onSubmit,
    onSubmitEdit,
    handleAscDesc,
  } = useProjectDirectoryMange();

  useEffect(() => {
    if (pathname === '/projectDirectory') {
      setAscDesc(projectDirectoryFilter?.ascDescOption);
      setSearch(projectDirectoryFilter?.search);
      searchRef.current.value = projectDirectoryFilter?.search || '';
    }
  }, []);

  useEffect(() => {
    dispatch(
      setProjectDirectoryFilter({
        search,
        ascDescOption: ascDesc,
      })
    );
  }, [search, ascDesc]);

  useEffect(() => {
    dispatch(setActivePath('Project Directory'));
    dispatch(clearProjectDirectory());
  }, []);

  useLayoutEffect(() => {
    setIsDataLoading(true);
    dispatch(
      getProjectByDirectory({
        filteredData: filterData,
        search,
        pagination,
        ascDescOption: ascDesc,
      })
    ).then((action) => {
      setMyColumn(fieldBuilder(projectDirectoryField, handleClick, handleDelete));
      setIsChildDataLoading(false);
      setIsDataLoading(false);
    });
  }, [pagination, search, isDeleted, ascDesc]);

  //TODO CHECK THIS LATER

  return (
    <Box className="content">
      <HeaderBox sx={{ backgroundColor: '' }}>
        <ProjectDirectoryHeader
          handleGetSync={handleGetSync}
          setProjectDirectoryRemove={setProjectDirectoryRemove}
          isSyncLoading={isSyncLoading}
          search={search}
          searchRef={searchRef}
          clearSearch={clearSearch}
          handleSearch={handleSearch}
          handleClickFilter={handleClickFilter}
          anchorE2={anchorE2}
          handleCloseFilter={handleCloseFilter}
          handleFilterProjectDirectory={handleFilterProjectDirectory}
          handleResetProjectDirectory={handleResetProjectDirectory}
          handleMenuItemClick={handleMenuItemClick}
          role={role}
          handleCreateModal={handleCreateModal}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          menuFilter={menuFilter}
          handleValue={handleValue}
        />
      </HeaderBox>

      <Box className="contentBody">
        <TablePaper sx={{ backgroundColor: '' }}>
          {isDataLoading ? (
            <LoadingComponent height={'80vh'} />
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
              handleId={handleAscDesc}
              filteredCol={ascDesc}
              handleProjectDetailsOpen={handleProjectDetailsOpen}
              isChildDataLoading={isChildDataLoading}
              setIsChildDataLoading={setIsChildDataLoading}
              setMyRows={setMyRows}
            />
          )}

          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            // setFilterValue={setFilterValue}
            setFilteredCol={setAscDesc}
          />
        </TablePaper>
      </Box>

      {openModal && (
        <CreateProjectDirectoryModal
          openModal={openModal}
          handleClose={handleClose}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        />
      )}

      {openProjectModalEdit && (
        <ProjectDirectoryEditModal
          item={projectDirectorySingle}
          handleEditClose={handleEditClose}
          openProjectModalEdit={openProjectModalEdit}
          setOpenProjectModalEdit={setOpenProjectModalEdit}
          onSubmitEdit={onSubmitEdit}
          setProjectDirectoryRemove={setProjectDirectoryRemove}
        />
      )}
      {openProjectModalDetails && (
        <ProjectDirectoryDetailsModal
          openProjectModalDetails={openProjectModalDetails}
          item={projectDirectorySingle}
          handleDetailsProjectDirectoryClose={handleDetailsProjectDirectoryClose}
        />
      )}
    </Box>
  );
};

export default ProjectDirectoryIndex;
