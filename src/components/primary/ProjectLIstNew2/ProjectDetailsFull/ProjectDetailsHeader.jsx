import {Box, Typography} from '@mui/material';
import {useSelector} from 'react-redux';
import {statusCreateOptions} from '../FIlterOptions';
import CheckINOutButton from './CheckInOutButton';
import ProjectDetailSelect from './ProjectDetailSelect';
import ProjectDetailsButton from './ProjectDetailsButton';

const ProjectDetailsHeader = ({
  value,
  setValue,
  handleChange,
  projectDrawer,
  handleProjectDetailsOpen,
  handleDetailButton,
  handleCheckInButton,
  isDisable,
  handleCheckOutButton,
  checkOutDisable,
  role,
  handleOpen,
  range,
  setRange,
  usersWorkHistoryCount,
  isAvailable,
  setIsAvailable,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Box
      className="contentHeader"
      sx={{
        backgroundColor: 'neutral.N000',
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'Center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="wpf_p1_semiBold"
            color={isLightTheme ? '#091E42' : 'white'}
            sx={{ fontSize: { lg: '12px', xl: '18px', xxl: '18px' } }}
          >
            {projectDrawer.project_drawer_name}{' '}
          </Typography>

          <Box sx={{ ml: 0 }}>
            <ProjectDetailSelect
              defaultVal={projectDrawer.project_status}
              value={value}
              setValue={setValue}
              options={statusCreateOptions}
              handleChange={handleChange}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            {/* TODO set the role  */}
            {role === 'admin' ||
            role === 'account_manager' ||
            role === 'project_delivery_lead' ||
            role === 'project_coordinator' ||
            role === 'project_manager' ||
            role == 'delivery_lead' ? (
              <ProjectDetailsButton
                range={range}
                setRange={setRange}
                role={role}
                value={value}
                handleProjectDetailsOpen={handleProjectDetailsOpen}
              />
            ) : role === 'level_0_annotator' ||
              role === 'level_1_annotator' ||
              role === 'level_2_annotator' ||
              role === 'level_3_annotator' ||
              role === 'reviewer' ? (
              <CheckINOutButton
                usersWorkHistoryCount={usersWorkHistoryCount}
                handleOpen={handleOpen}
                handleProjectDetailsOpen={handleProjectDetailsOpen}
                checkOutDisable={checkOutDisable}
                handleCheckOutButton={handleCheckOutButton}
                isDisable={isDisable}
                handleCheckInButton={handleCheckInButton}
                handleDetailButton={handleDetailButton}
                isAvailable={isAvailable}
                setIsAvailable={setIsAvailable}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetailsHeader;
