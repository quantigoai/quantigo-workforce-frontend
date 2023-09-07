import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserInfoIndex from "./UserInfoIndex";
import UserProjectDetails from "./UserProjectDetails";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
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

export default function DetailsTab({ user }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor=""
        //   textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
        sx={{
          borderRadius: "8px",
          backgroundColor: "#E6ECF5",
          padding: "1%",
          minHeight: "36px",
          height: "36px",
        }}>
        <Tab
          sx={{
            borderRadius: value === 0 ? "8px" : "none",
            backgroundColor: value === 0 ? "#FFFFFF" : "",
            minHeight: "36px",
            height: "36px",
          }}
          label="User Info."
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            borderRadius: value === 1 ? "8px" : "none",
            backgroundColor: value === 1 ? "#FFFFFF" : "",
            minHeight: "36px",
            height: "36px",
          }}
          label="Project Details"
          {...a11yProps(1)}
        />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <UserInfoIndex user={user} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <UserProjectDetails />
      </TabPanel>
    </Box>
  );
}
