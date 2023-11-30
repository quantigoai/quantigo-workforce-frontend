import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirstPage from "./TabPages/FirstPage";
import SettingUpAccountPage from "./TabPages/SettingUpAccountPage";
import ThirdPageProfileSetup from "./TabPages/ThirdPageProfileSetup";
import FourthPageCourse from "./TabPages/FourthPageCourse";
import FifthPageJob from "./TabPages/FifthPageJob";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function LayoutUsingTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMobile = window.innerWidth <= 600;
  return (
    <>
      <Tabs
        orientation="vertical"
        // orientation={isMobile ? "horizontal" : "vertical"} // Use horizontal tabs for mobile, vertical for others
       
        // orientation="horizontal"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          height: "86vh",
          width: "230px",
          borderRight: "1px solid #E1E8F5",
          // borderRight: 1,
          borderColor: "divider",
          paddingTop: "1%",

          textAlign: "left",
        }}>
        <Tab
          sx={{
            width: "290px",
            color: "#828894",
            alignItems: "flex-start",
      
          }}
       
          label={
            <Typography variant="wpf_p3_medium_3" sx={{ textTransform: "none" }}>
              What is QAI Workforce
            </Typography>
          }
          {...a11yProps(0)}
        />
        <Tab
          sx={{ width: "290px", color: "#828894", alignItems: "flex-start" }}
          label={
            <Typography variant="wpf_p3_medium_3" sx={{ textTransform: "none" }}>
              Setting up account
            </Typography>
          }
          {...a11yProps(1)}
        />

        <Tab
          sx={{ width: "290px", color: "#828894", alignItems: "flex-start" }}
          label={
            <Typography variant="wpf_p3_medium_3" sx={{ textTransform: "none" }}>
              Profile Setup
            </Typography>
          }
          {...a11yProps(2)}
        />
        <Tab
          sx={{ width: "290px", color: "#828894", alignItems: "flex-start" }}
          label={
            <Typography variant="wpf_p3_medium_3" sx={{ textTransform: "none" }}>
              Course
            </Typography>
          }
          {...a11yProps(3)}
        />
        <Tab
          sx={{ width: "290px", color: "#828894", alignItems: "flex-start" }}
          label={
            <Typography variant="wpf_p3_medium_3" sx={{ textTransform: "none" }}>
              Job
            </Typography>
          }
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel sx={{ position: "absolute" }} value={value} index={0}>
        <>
          <FirstPage />
        </>
      </TabPanel>
      <TabPanel sx={{ position: "absolute" }} value={value} index={1}>
        <SettingUpAccountPage />
      </TabPanel>
      <TabPanel sx={{ position: "absolute" }} value={value} index={2}>
        <ThirdPageProfileSetup />
      </TabPanel>
      <TabPanel sx={{ position: "absolute" }} value={value} index={3}>
        <FourthPageCourse />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FifthPageJob />
      </TabPanel>
    </>
  );
}
