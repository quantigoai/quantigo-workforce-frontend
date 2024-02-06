/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableWrapper.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, September 26th 2023, 2:44:14 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import dataBuilder from '../../../shared/CustomTable/dataBuilder';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import DetailsPage from '../ProjectDetailsFull/DetailsPage';
import WPFTable from './WPFTable';

const antRoles = [
  'level_0_annotator',
  'level_1_annotator',
  'level_2_annotator',
  'level_3_annotator',
  'reviewer',
  'trainer',
];
const detailRoles = [
  'delivery_lead', // Delivery Lead
  'project_coordinator',
  'project_delivery_lead', //  Project Delivery Lead
  'project_manager',
  'account_manager',
  'engineering_lead',
  'admin',
];
const TableWrapper = ({
  handleDetailsPage,
  myColumn,
  myRows,
  handleDelete,
  handleClick,
  handleId,
  filteredCol,
  handleProjectDetailsOpen,
  role,
  skillAlert,
  isChildDataLoading,
  handleReject,
  handleOpenNDA,
  setMyRows,
}) => {
  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isWorkHistoryDataLoading, setIsWorkHistoryDataLoading] = useState(true);
  const { projectDirectory, isLoading } = useSelector((state) => state.projectDirectory);
  const stickyFirstColumn = [myColumn[0]];
  const stickyLastColumn = [myColumn[myColumn.length - 1]];
  const columns = myColumn.slice(1, myColumn.length - 1);
  const approvedPaths = ['/allprojects', '/all-users', `/projectDetails/${id}`, '/projectDirectory'];
  const {
    isLoading: usersLoading,
    users: { users },
  } = useSelector((state) => state.user);
  const { isLoading: projectLoading, projectDrawers, usersWorkHistory } = useSelector((state) => state.projectDrawer);

  useEffect(() => {
    if (pathname === '/allprojects') {
      setIsDataLoading(true);
      projectDrawers && projectDrawers.length > 0 && setMyRows(dataBuilder(projectDrawers));
      setData(projectDrawers);
      setIsDataLoading(false);
      setIsWorkHistoryDataLoading(false);
    }
    if (pathname === '/all-users') {
      setIsDataLoading(true);
      users && users.length > 0 && setMyRows(dataBuilder(users));
      setData(users);
      setIsDataLoading(false);
      setIsWorkHistoryDataLoading(false);
    }
    if (pathname === `/projectDetails/${id}`) {
      setIsDataLoading(true);
      setIsWorkHistoryDataLoading(true);
      usersWorkHistory && usersWorkHistory.length > 0 && setMyRows(dataBuilder(usersWorkHistory));
      setData(usersWorkHistory);
      setIsWorkHistoryDataLoading(false);
      setIsDataLoading(false);
    }
    if (pathname === `/projectDirectory`) {
      setIsDataLoading(true);
      projectDirectory && projectDirectory.length > 0 && setMyRows(dataBuilder(projectDirectory));
      setData(projectDirectory);
      setIsDataLoading(false);
      setIsWorkHistoryDataLoading(false);
    }
  }, [pathname, users, projectDrawers, usersWorkHistory, projectDirectory]);

  const renderMainContent = () => {
    if (!usersLoading || !projectLoading || !isWorkHistoryDataLoading || !isLoading) {
      if (approvedPaths.includes(pathname)) {
        if (data && data.length > 0) {
          return (
            <WPFTable
              handleDetailsPage={handleDetailsPage}
              myColumn={myColumn}
              myRows={myRows}
              handleDelete={handleDelete}
              handleClick={handleClick}
              handleId={handleId}
              filteredCol={filteredCol}
              handleProjectDetailsOpen={handleProjectDetailsOpen}
              role={role}
              skillAlert={skillAlert}
              currentlyCheckedInProject={currentlyCheckedInProject}
              stickyFirstColumn={stickyFirstColumn}
              stickyLastColumn={stickyLastColumn}
              columns={columns}
              isChildDataLoading={isChildDataLoading}
              handleReject={handleReject}
              handleOpenNDA={handleOpenNDA}
            />
          );
        } else if (isDataLoading || isWorkHistoryDataLoading) {
          return <LoadingComponent />;
        } else if (data && data.length === 0) {
          let message;
          if (pathname === '/allprojects' && !projectLoading)
            return <Alert severity="error">No available projects data found!</Alert>;
          if (pathname === '/all-users' && !usersLoading)
            return <Alert severity="error">No available users data found!</Alert>;
          if (pathname === '/projectDirectory' && !isLoading)
            return <Alert severity="error">No available projects found!</Alert>;
          if (pathname === `/projectDetails/${id}` && !isWorkHistoryDataLoading) {
            if (antRoles.includes(role)) {
              return <DetailsPage skillAlert={skillAlert} />;
            } else {
              return <Alert severity="error">No available users history data found!</Alert>;
            }
          }
        } else if (role === 'recruitment_manager') {
          const message = 'No Users found!!!';
          return <Alert severity="error">{message}</Alert>;
        } else if (!detailRoles.includes(role)) {
          return <DetailsPage skillAlert={skillAlert} />;
        } else {
          return <Alert severity="error">No data found!</Alert>;
        }
      }
    } else {
      return <LoadingComponent />;
    }
  };

  return <>{renderMainContent()}</>;
};

export default TableWrapper;
