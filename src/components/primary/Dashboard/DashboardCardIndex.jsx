import {Grid} from '@mui/material';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTotalCountData} from '../../../features/slice/dashboardSlice';
import ActiveJobsCard from './DashboardCard/ActiveJobsCard';
import ActiveUser from './DashboardCard/ActiveUser';
import ApprovedRequest from './DashboardCard/ApprovedRequest';
import InActiveRequest from './DashboardCard/InActiveRequest';
import OnGoingProjectDrawer from './DashboardCard/OnGoingProjectDrawer';
import PendingRequest from './DashboardCard/PendingRequest';
import TotalAnnotator from './DashboardCard/TotalAnnotator';
import TotalJobs from './DashboardCard/TotalJobs';
import TotalUser from './DashboardCard/TotalUser';
import DashboardCardForAnnotator from './DashboardCardRole/DashboardCardForAnnotator';
import DashboardCardforDM from './DashboardCardRole/DashboardCardforDM';

const DashboardCardIndex = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalCountData());
  }, []);
  return (
    <>
      <Grid container>
        {user.role === 'project_delivery_lead' ? (
          <DashboardCardforDM />
        ) : user.role === 'level_0_annotator' ||
          user.role === 'level_1_annotator' ||
          user.role === 'level_2_annotator' ||
          user.role === 'level_3_annotator' ||
          user.role === 'reviewer' ? (
          <DashboardCardForAnnotator />
        ) : (
          <>
            <Grid item xs={3} sx={{ paddingRight: '2%' }}>
              <PendingRequest />
            </Grid>
            <Grid item xs={3} sx={{ paddingRight: '2%' }}>
              <ApprovedRequest />
            </Grid>
            <Grid item xs={3} sx={{ paddingRight: '2%' }}>
              <InActiveRequest />
            </Grid>
            <Grid item xs={3}>
              <ActiveUser />
            </Grid>
          </>
        )}
      </Grid>
      {user.role === 'project_delivery_lead' ||
      user.role === 'level_0_annotator' ||
      user.role === 'level_1_annotator' ||
      user.role === 'level_2_annotator' ||
      user.role === 'level_3_annotator' ||
      user.role === 'reviewer' ? (
        <></>
      ) : (
        <>
          <Grid container sx={{ paddingTop: '2%' }}>
            <Grid item xs={3} sx={{ paddingRight: '2%' }}>
              <TotalJobs />
            </Grid>
            <Grid item xs={3} sx={{ paddingRight: '2%' }}>
              <ActiveJobsCard />
            </Grid>
            <Grid item xs={3} sx={{ paddingRight: '2%' }}>
              <TotalAnnotator />
            </Grid>
            <Grid item xs={3}>
              {user.role === 'admin' ? <OnGoingProjectDrawer /> : <TotalUser />}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default DashboardCardIndex;
