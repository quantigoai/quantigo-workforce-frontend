import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ChangeInfoIndex from "./ChangeInfoIndex";
import UserInfoIndex from "./UserInfoIndex";
import ContactInfoDetailsIndex from "./ContactInfoDetailsIndex";
import EducationInfoDetails from "./EducationInfoDetails";
import VerificationInfoDetails from "./VerificationInfoDetails";
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
    "aria-controls": `full-width-tabpanel-${index}`,
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
          backgroundColor: "background.paper",
          width: "100%",
          height: "100%",
          "&::-webkit-scrollbar": {
            width: "0",
          },
          overflowY: "hidden",
          // backgroundColor: "blue",
        }}
      >
        <Box
          sx={{
            padding: "%",
            backgroundColor: "background.paper",
            // backgroundColor: "red",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor=""
            variant="fullWidth"
            sx={{
              borderRadius: "8px",
              backgroundColor: "neutral.N600",
              padding: "1%",
              minHeight: "36px",
              height: "45px",
            }}
          >
            <Tab
              sx={{
                borderRadius: value === 0 ? "8px" : "none",
                backgroundColor: value === 0 ? "neutral.N000" : "",
                minHeight: "30px",
                height: "30px",
              }}
              label={
                <Typography
                  sx={{ textTransform: "none" }}
                  variant="wpf_p3_semiBold"
                  color={value === 0 ? "primary.B200" : "neutral.700"}
                >
                  Personal Info.
                </Typography>
              }
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                borderRadius: value === 1 ? "8px" : "none",
                backgroundColor: value === 1 ? "neutral.N000" : "",
                minHeight: "30px",
                height: "30px",
              }}
              label={
                <Typography
                  sx={{ textTransform: "none" }}
                  variant="wpf_p3_semiBold"
                  color={value === 1 ? "primary.B200" : "neutral.700"}
                >
                  Contact Info
                </Typography>
              }
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                borderRadius: value === 2 ? "8px" : "none",
                backgroundColor: value === 2 ? "neutral.N000" : "",
                minHeight: "30px",
                height: "30px",
              }}
              label={
                <Typography
                  sx={{ textTransform: "none" }}
                  variant="wpf_p3_semiBold"
                  color={value === 2 ? "primary.B200" : "neutral.700"}
                >
                  Education Info
                </Typography>
              }
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                borderRadius: value === 3 ? "8px" : "none",
                backgroundColor: value === 3 ? "neutral.N000" : "",
                minHeight: "30px",
                height: "30px",
              }}
              label={
                <Typography
                  sx={{ textTransform: "none" }}
                  variant="wpf_p3_semiBold"
                  color={value === 3 ? "primary.B200" : "neutral.700"}
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
            overflowY: "scroll",
            // backgroundColor: "black",
            height: "90%",
            padding: "1% 0%",
            "&::-webkit-scrollbar": {
              width: "0",
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
          <ChangeInfoIndex role={role} user={user} handleSetRole={handleSetRole} handleSetStatus={handleSetStatus} />
        </Box>
      </Box>
    </>
  );
};

export default UserInfoTabIndex;
