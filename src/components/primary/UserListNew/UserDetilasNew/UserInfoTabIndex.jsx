import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import ChangeInfoIndex from './ChangeInfoIndex';
import ContactInfoDetailsIndex from './ContactInfoDetailsIndex';
import EducationInfoDetails from './EducationInfoDetails';
import UserInfoIndex from './UserInfoIndex';
import VerificationInfoDetails from './VerificationInfoDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const UserInfoTabIndex = ({
  user,
  role,
  handleSetRole,
  handleSetStatus,
  skillSet,
  handleChangeSkills,
  setIsEditSkill,
  isEditSkill,
}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          width: '100%',
          height: '100%',
          '&::-webkit-scrollbar': {
            width: '0',
          },
          overflowY: 'hidden',
        }}
      >
        <Box
          sx={{
            padding: '%',
            height: '20%',
            overflow: 'auto',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor=""
            variant="fullWidth"
            sx={{
              borderRadius: '8px',
              backgroundColor: 'neutral.N600',
              padding: '1%',
              minHeight: {
                lg: '32px',
                xl: '36px',
                xxl: '36px',
              },
              height: {
                lg: '38px',
                xl: '45px',
                xxl: '45px',
              },
            }}
          >
            <Tab
              sx={{
                borderRadius: value === 0 ? '8px' : 'none',
                backgroundColor: value === 0 ? 'neutral.N000' : '',
                minHeight: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '30px',
                },
                height: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '90%',
                  xxl: '30px',
                },
              }}
              label={
                <Typography
                  sx={{ textTransform: 'none' }}
                  variant="wpf_p3_semiBold"
                  color={value === 0 ? 'primary.B200' : 'neutral.700'}
                >
                  Personal Info
                </Typography>
              }
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                borderRadius: value === 1 ? '8px' : 'none',
                backgroundColor: value === 1 ? 'neutral.N000' : '',
                minHeight: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '30px',
                },
                height: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '30px',
                },
              }}
              label={
                <Typography
                  sx={{ textTransform: 'none' }}
                  variant="wpf_p3_semiBold"
                  color={value === 1 ? 'primary.B200' : 'neutral.700'}
                >
                  Contact Info
                </Typography>
              }
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                borderRadius: value === 2 ? '8px' : 'none',
                backgroundColor: value === 2 ? 'neutral.N000' : '',
                minHeight: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '30px',
                },
                height: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '30px',
                },
              }}
              label={
                <Typography
                  sx={{ textTransform: 'none' }}
                  variant="wpf_p3_semiBold"
                  color={value === 2 ? 'primary.B200' : 'neutral.700'}
                >
                  Education Info
                </Typography>
              }
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                borderRadius: value === 3 ? '8px' : 'none',
                backgroundColor: value === 3 ? 'neutral.N000' : '',
                minHeight: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '30px',
                },
                height: {
                  lg: '26px',
                  xl: '30px',
                  xxl: '30px',
                },
              }}
              label={
                <Typography
                  sx={{ textTransform: 'none' }}
                  variant="wpf_p3_semiBold"
                  color={value === 3 ? 'primary.B200' : 'neutral.700'}
                >
                  Verification Info
                </Typography>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>

        <Box
          sx={{
            height: {
              lg: '415px',
              xl: '405px',
              xxl: '500px',
            },
            overflow: 'auto',
            // height: "0%",
            padding: '0% 0%',
            '&::-webkit-scrollbar': {
              width: '0',
            },
          }}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <UserInfoIndex
              user={user}
              handleSetRole={handleSetRole}
              handleSetStatus={handleSetStatus}
              skillSet={skillSet}
              handleChangeSkills={handleChangeSkills}
              setIsEditSkill={setIsEditSkill}
              isEditSkill={isEditSkill}
            />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ContactInfoDetailsIndex
              user={user}
              handleSetRole={handleSetRole}
              handleSetStatus={handleSetStatus}
              skillSet={skillSet}
              handleChangeSkills={handleChangeSkills}
              setIsEditSkill={setIsEditSkill}
              isEditSkill={isEditSkill}
            />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <EducationInfoDetails
              user={user}
              handleSetRole={handleSetRole}
              handleSetStatus={handleSetStatus}
              skillSet={skillSet}
              handleChangeSkills={handleChangeSkills}
              setIsEditSkill={setIsEditSkill}
              isEditSkill={isEditSkill}
            />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <VerificationInfoDetails
              user={user}
              handleSetRole={handleSetRole}
              handleSetStatus={handleSetStatus}
              skillSet={skillSet}
              handleChangeSkills={handleChangeSkills}
              setIsEditSkill={setIsEditSkill}
              isEditSkill={isEditSkill}
            />
          </TabPanel>
          <ChangeInfoIndex
            role={role}
            user={user}
            handleSetRole={handleSetRole}
            handleSetStatus={handleSetStatus}
          />
        </Box>
      </Box>
    </>
  );
};

export default UserInfoTabIndex;
