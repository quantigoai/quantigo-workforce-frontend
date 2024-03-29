import {Box} from '@mui/material';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ApproveProjectPaymentButton from './ApproveProjectPaymentButton';
import DateRangeComponent from './DateRangePicker/DateRangeComponent';
import DetailChartarButton from './DetailChartarButton';
import DetailsButton from './DetailsButton';
import DetailsUploadHourBUtton from './DetailsUploadHourBUtton';
import DownloadEffectiveHours from './DownloadEffectiveHours';

const ProjectDetailsButton = ({
  range,
  setRange,
  value,
  handleProjectDetailsOpen,
  role,
}) => {
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const { project_status } = projectDrawer;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [project_status]);

  return isLoading ? (
    <Box>loading......</Box>
  ) : (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
      {project_status === 'not-Started' && (
        <Box>
          <DetailsButton
            role={role}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
          />
        </Box>
      )}
      {project_status === 'in-Progress' && (
        <>
          {<DateRangeComponent range={range} setRange={setRange} />}

          <DetailsButton
            role={role}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
          />
          {/* /TODO Fixed typo *} */}
          <DetailChartarButton role={role} />
        </>
      )}
      {project_status === 'completed' && (
        <>
          {<DetailsUploadHourBUtton value={project_status} role={role} />}

          {/* {role !== 'project_coordinator' && role !== 'delivery_lead' && ( */}
          <DetailsButton
            role={role}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
          />
          {/* )} */}
          <DetailChartarButton role={role} />
        </>
      )}
      {project_status === 'hours-added' && (
        <>
          {/* {(role !== "project_coordinator" || role !== "project_delivery_lead" || role !== "project_manager") && ( */}
          <DetailsUploadHourBUtton value={project_status} role={role} />
          {/* )} */}
          <DetailsButton
            role={role}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
          />
          {/* <DetailChartarButton role={role} /> */}
          {role !== 'project_coordinator' && role !== 'delivery_lead' && (
            <DownloadEffectiveHours />
          )}
          <DetailChartarButton role={role} />
        </>
      )}
      {project_status === 'hours-approved' && (
        <>
          {/* <DetailsUploadHourBUtton value={value} role={role} /> */}
          {role !== 'project_coordinator' && role !== 'delivery_lead' && (
            <ApproveProjectPaymentButton role={role} />
          )}
          <DetailsButton
            role={role}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
          />
          <DownloadEffectiveHours />
          <DetailChartarButton role={role} />
        </>
      )}

      {project_status === 'payment-done' && (
        <>
          <DetailsButton
            role={role}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
          />
          <DownloadEffectiveHours />
          <DetailChartarButton role={role} />
        </>
      )}
    </Box>
  );
};

export default ProjectDetailsButton;
