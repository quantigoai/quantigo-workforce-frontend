import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirstPage from "../../Auth/HowItWorkPage/TabPages/FirstPage";
import { Grid, Paper } from "@mui/material";
import MyProfileIndex from "./MyProfile/MyProfileIndex";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function EditProfilePageIndex() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        sx={{
          // borderTop: "1px solid #E1E8F5",
          backgroundColor: "#FFFFFF",
          position: "absolute",
          width: "95%",
        }}>
        {" "}
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            height: "80vh",
            width: "230px",
            borderRight: "1px solid #E1E8F5",
            // borderRight: 1,
            borderColor: "divider",
            paddingTop: "1%",
            textAlign: "left",
          }}>
          <Tab label="My Profile" {...a11yProps(0)} />
          <Tab label="Courses" {...a11yProps(1)} />
          <Tab label="Password " {...a11yProps(2)} />
        </Tabs>
        <TabPanel sx={{ position: "absolute" }} value={value} index={0}>
          <MyProfileIndex />
        </TabPanel>
        <TabPanel sx={{ position: "absolute" }} value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel sx={{ position: "absolute" }} value={value} index={2}>
          Item Three
        </TabPanel>
      </Grid>
    </>
  );
}
