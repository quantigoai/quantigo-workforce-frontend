import { Box } from '@mui/material';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAllUsersFunc from '../../../customHooks/useAllUsersFunc';
import useToaster from '../../../customHooks/useToaster';
import { setActivePath } from '../../../features/slice/activePathSlice';
import { getAllSkills } from '../../../features/slice/skillSlice';
import {
  getAllUsers,
  updateAUserById,
} from '../../../features/slice/userSlice';
import fieldBuilder from '../../shared/CustomTable/fieldBuilder';
import LoadingComponent from '../../shared/Loading/LoadingComponent';
import TableWrapper from '../ProjectLIstNew2/ExpTable/TableWrapper';
import useHandleChange from '../ProjectLIstNew2/Hooks/useHandleChange';
import PaginationTable from '../ProjectLIstNew2/PaginationTable';
import { HeaderBox, TablePaper } from '../ProjectLIstNew2/ProjectLIstIndex2';
import UserDetailsNewIndex from '../UserListNew/UserDetilasNew/UserDetailsNewIndex';
import AcceptModal from '../Users/NdaAccept/AcceptModal';
import NdaRejectModal from '../Users/NdaAccept/NdaRejectModal';
import UsersFilter from './UsersFilter';
import UsersHeader from './UsersHeader';
import { fields } from './tableFields';
import {
  hubOptions,
  roleOptionsAdmin,
  userStatusOptions,
} from './userFilterOptions';

const AllUserListIndex2 = () => {
  const dispatch = useDispatch();
  const userSearchRef = useRef(null);
  const { register } = useForm();
  const toast = useToaster();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const {
    handleChangeSkill,
    addSkills,
    setAddSkills,
    count,
    setCount,
    addRoles,
    handleChangeRoles,
    setAddRoles,
    skillCount,
    setSkillCount,
  } = useHandleChange();

  const {
    search,
    setSearch,
    isDataLoading,
    isChildDataLoading,
    openModal,
    myColumn,
    myRows,
    selectedUser,
    open,
    openAccepet,
    rejectionCause,
    pagination,
    setIsDataLoading,
    setIsChildDataLoading,
    setOpenModal,
    setMyColumn,
    setMyRows,
    setOpen,
    setOpenAccepet,
    setRejectionCause,
    setPagination,
    handleClose,
    clearSearch,
    handleClickAway,
    handleRejectCause,
    handleDelete,
    handleClick,
    handleDetailsPage,
    handleUserDetailsOpen,
    handleSearch,
    handleReject,
    handleCloseModal,
    handleOpenNDA,
    handleAccept,
    skillsOptions,
    filterValue,
    handleId,
    filteredCol,
    handleIsFilter,
    isFilter,
    handleChange,
    handleClearFilter,
    goBackHandle,
    isComplete,
  } = useAllUsersFunc({
    userSearchRef,
    addSkills,
    addRoles,
    setAddSkills,
    setAddRoles,
    setCount,
    setSkillCount,
  });

  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(setActivePath('All Users'));
  }, []);

  useLayoutEffect(() => {
    setIsDataLoading(true);

    if (isComplete) {
      dispatch(
        getAllUsers({
          pagination,
          filteredData: filterValue,
          ascDescOption: filteredCol,
          search,
        }),
      )
        .then((res) => {
          setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
          setIsDataLoading(false);
        })
        .catch((err) => {
          setIsDataLoading(false);
        });
    }
  }, [pagination, search, filterValue, filteredCol]);

  const onSubmit = (data) => {
    const finalData = {
      id: selectedUser._id,
      varifiedData: {
        isVerified: false,
        rejectionCause: rejectionCause,
      },
    };
    dispatch(updateAUserById(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger(
          'The user verification process has been rejected.',
          'success',
        );
        setOpenAccepet(false);
        setOpenModal(false);
        setRejectionCause('');
      } else {
        toast.trigger(
          'Failed to reject user verification. Please try again.',
          'error',
        );
      }
    });
    handleClose();
    setOpen(false);
  };

  return (
    <Box className="content">
      <HeaderBox sx={{ backgroundColor: '' }}>
        <UsersHeader
          isFilter={isFilter}
          handleIsFilter={handleIsFilter}
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
          userSearchRef={userSearchRef}
          clearSearch={clearSearch}
        />
        {isComplete && (
          <UsersFilter
            isFilter={isFilter}
            role={user.role}
            handleChange={handleChange}
            handleClearFilter={handleClearFilter}
            filterValue={filterValue}
            roleOptions={roleOptionsAdmin}
            // roleOptions={
            //   user.role === 'admin'
            //     ? roleOptionsAdmin
            //     : roleOptionsRecruitment_manager
            // }
            hubOptions={hubOptions}
            skillOptions={skillsOptions}
            userStatusOptions={userStatusOptions}
            handleChangeSkill={handleChangeSkill}
            addSkills={addSkills}
            count={count}
            skillCount={skillCount}
            handleClickAway={handleClickAway}
            addRoles={addRoles}
            handleChangeRoles={handleChangeRoles}
          />
        )}
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
              handleProjectDetailsOpen={handleUserDetailsOpen}
              setMyRows={setMyRows}
              isChildDataLoading={isChildDataLoading}
              setIsChildDataLoading={setIsChildDataLoading}
              handleReject={handleReject}
              handleOpenNDA={handleOpenNDA}
            />
          )}
          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
          />
        </TablePaper>
      </Box>
      <UserDetailsNewIndex
        role={user.role}
        open={open}
        handleProjectDetailsOpen={handleUserDetailsOpen}
        handleClose={handleClose}
      />
      <NdaRejectModal
        openModal={openModal}
        handleClose={handleCloseModal}
        register={register}
        onSubmit={onSubmit}
        handleRejectCause={handleRejectCause}
        rejectionCause={rejectionCause}
      />
      <AcceptModal
        open={openAccepet}
        handleClose={handleCloseModal}
        handleAccept={handleAccept}
        user={selectedUser}
      />
    </Box>
  );
};

export default AllUserListIndex2;
