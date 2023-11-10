import {Box} from '@mui/material';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFullDetailsProject from '../../../../customHooks/useFullDetailsProject';
import useToaster from '../../../../customHooks/useToaster';
import {getMyWorkHistoryById, getUsersWorkHistoryById,} from '../../../../features/slice/projectDrawerSlice';
import dataBuilder from '../../../shared/CustomTable/dataBuilder';
import fieldBuilder from '../../../shared/CustomTable/fieldBuilder';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import {singleDetailsFields} from '../FIlterOptions';
import useAllFunc from '../Hooks/useAllFunc';
import useHandleChange from '../Hooks/useHandleChange';
import PaginationTable from '../PaginationTable';
import Project2DetailsModal from '../Project2Details/Project2DetailsModal';
import {HeaderBox, TablePaper} from '../ProjectLIstIndex2';
import CheckOutModal from './CheckOutModal';
import ProjectDetailsHeader from './ProjectDetailsHeader';

const TableWrapper = React.lazy(() => import('../ExpTable/TableWrapper'));

const FullProjectDetails = () => {
  const { currentlyCheckedInProject, skills } = useSelector(
    (state) => state.user.user,
  );
  const { isLoading, projectDrawer, usersWorkHistory, usersWorkHistoryCount } =
    useSelector((state) => state.projectDrawer);
  const { role } = useSelector((state) => state.user.user);
  const toast = useToaster();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleChangeSkill, addSkills, setAddSkills, count } =
    useHandleChange();

  const {
    detailsProjectOpen,
    handleProjectDetailsOpen,
    handleDetailsProjectClose,
    handleId,
    filteredCol,
  } = useAllFunc({ addSkills });
  const {
    id,
    open,
    skillAlert,
    isDataLoading,
    isChildDataLoading,
    isDisable,
    isAvailable,
    checkOutDisable,
    isLoadingDetails,
    detailCol,
    detailRow,
    value,
    setOpen,
    setSkillAlert,
    setIsDataLoading,
    setIsChildDataLoading,
    setIsDisable,
    setIsAvailable,
    setCheckOutDisable,
    setIsLoadingDetails,
    setDetailCol,
    setDetailRow,
    setValue,
    pagination,
    setPagination,
    handleOpen,
    handleClose,
    handleChange,
    handleDetailButton,
    handleCheckInButton,
    handleCheckOutButton,
    range,
    setRange,
  } = useFullDetailsProject();

  useEffect(() => {
    setIsLoadingDetails(false);
    if (!isLoadingDetails) {
      setDetailCol(fieldBuilder(singleDetailsFields));
      setDetailRow(dataBuilder(usersWorkHistory));

      // user  currentlyCheckedInProject field not available
      if (!currentlyCheckedInProject || currentlyCheckedInProject === null) {
        setIsDisable(false);
      }
      // user  currentlyCheckedInProject field match with id

      if (currentlyCheckedInProject) {
        setIsDisable(true);
        if (id === currentlyCheckedInProject) {
          setCheckOutDisable(false);
        } else {
          setCheckOutDisable(true);
        }
      }
    }
  }, [
    usersWorkHistory,
    currentlyCheckedInProject,
    pagination,
    id,
    isLoadingDetails,
  ]);

  // TODO Need to solve this issue
  useEffect(() => {
    setIsChildDataLoading(true);
    if (
      role === 'admin' ||
      role === 'account_manager' ||
      role === 'project_delivery_lead' ||
      role === 'project_coordinator' ||
      role === 'delivery_lead' ||
      role === 'project_manager'
    ) {
      if (range[0].startDate.getTime() !== range[0].endDate.getTime()) {
        setIsDataLoading(true);
        dispatch(
          getUsersWorkHistoryById({
            pagination,
            ascDescOption: filteredCol,
            id: projectDrawer._id,
            range,
          }),
        ).then(() => {
          setIsChildDataLoading(false);
          setIsDataLoading(false);
        });
      } else {
        dispatch(
          getUsersWorkHistoryById({
            pagination,
            ascDescOption: filteredCol,
            id: projectDrawer._id,
          }),
        ).then(() => {
          setIsChildDataLoading(false);
          setIsDataLoading(false);
        });
      }
    } else {
      dispatch(
        getMyWorkHistoryById({
          pagination,
          ascDescOption: filteredCol,
          id: projectDrawer._id,
        }),
      ).then(() => {
        setIsChildDataLoading(false);
        setIsDataLoading(false);
      });
    }
  }, [role, range, pagination, filteredCol, projectDrawer._id]);

  return (
    <Box className="content">
      <HeaderBox>
        {/* {!isLoadingDetails && detailRow.length > 0 && ( */}
        {/* {!isLoading && ( */}
        {/* //TODO AUTOMATED CHECKOUT FROM BACKEND ON PROJECT STATUS CHANGE */}
        <ProjectDetailsHeader
          usersWorkHistoryCount={usersWorkHistoryCount}
          range={range}
          setRange={setRange}
          handleOpen={handleOpen}
          role={role}
          handleProjectDetailsOpen={handleProjectDetailsOpen}
          value={value}
          setValue={setValue}
          handleChange={handleChange}
          projectDrawer={projectDrawer}
          isDisable={isDisable}
          checkOutDisable={checkOutDisable}
          handleDetailButton={handleDetailButton}
          handleCheckInButton={handleCheckInButton}
          isAvailable={isAvailable}
          setIsAvailable={setIsAvailable}
        />
        {/* )} */}
      </HeaderBox>

      <Box className="contentBody">
        <TablePaper>
          {isDataLoading ? (
            <LoadingComponent />
          ) : (
            <TableWrapper
              role={role}
              myColumn={detailCol}
              myRows={detailRow}
              pagination={pagination}
              setPagination={setPagination}
              handleId={handleId}
              skillAlert={skillAlert}
              filteredCol={filteredCol}
              handleProjectDetailsOpen={handleProjectDetailsOpen}
              isChildDataLoading={isChildDataLoading}
              setIsChildDataLoading={setIsChildDataLoading}
              setMyRows={setDetailRow}
            />
            // <></>
          )}

          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            // handleChangePagination={handleChangePagination}
            // totalItems={usersWorkHistoryCount}
          />
        </TablePaper>
      </Box>

      <Box>
        <CheckOutModal
          projectDrawer={projectDrawer}
          handleCheckOutButton={handleCheckOutButton}
          open={open}
          handleClose={handleClose}
        />
      </Box>
      {detailsProjectOpen && (
        <Box>
          <Project2DetailsModal
            projectDrawer={projectDrawer}
            detailsProjectOpen={detailsProjectOpen}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            handleDetailsProjectClose={handleDetailsProjectClose}
          />
        </Box>
      )}
    </Box>
  );
};

export default FullProjectDetails;
