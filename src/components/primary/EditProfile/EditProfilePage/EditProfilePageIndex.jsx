import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirstPage from "../../Auth/HowItWorkPage/TabPages/FirstPage";
import { Button, Grid, Paper } from "@mui/material";
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
          // position: "absolute",
          width: "100%",
        }}>
        <Grid item xs={2} sx={{ borderRight: "1px solid #E1E8F5" }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            indicatorColor=""
            // textColor="red"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              height: "80vh",
              width: "220px",
              // borderRight: "1px solid #E1E8F5",
              // borderRight: 1,
              // borderColor: "divider",
              paddingTop: "5%",
              textAlign: "right",
              paddingLeft: "5%",
              // PaddingRight: "5%",
              // border: "1px solid #E1E8F5",
            }}>
            <Tab
              sx={{
                alignItems: "flex-start",
                // border: value === 0 ? "2px solid blue" : "none",
                borderRadius: value === 0 ? "8px" : "none",
                backgroundColor: value === 0 ? "#F4F7FE" : "",

                // padding: value === 0 ? "2%":"",
                // Add other styles as needed
              }}
              label="My Profile"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                alignItems: "flex-start",
                // border: value === 1 ? "2px solid blue" : "none",
                borderRadius: value === 1 ? "8px" : "none",
                backgroundColor: value === 1 ? "#F4F7FE" : "",
                // padding: value === 0 ? "2%":"",
                // Add other styles as needed
              }}
              label="Courses"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                alignItems: "flex-start",
                // border: value === 2 ? "2px solid blue" : "none",
                borderRadius: value === 2 ? "8px" : "none",
                backgroundColor: value === 2 ? "#F4F7FE" : "",
                // padding: value === 0 ? "2%":"",
                // Add other styles as needed
              }}
              label="Password & Security"
              {...a11yProps(2)}
            />
          </Tabs>
          <Box
            sx={{
              justifyContent: "center",
              paddingLeft: "10%",
              paddingBottom: "5%",
            }}>
            <Button sx={{ backgroundColor: "#FFF0F2", color: "#F04438" }}>
              Deactivate Accounts
            </Button>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <TabPanel value={value} index={0}>
            <MyProfileIndex />
          </TabPanel>
          <TabPanel sx={{ position: "absolute" }} value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel sx={{ position: "absolute" }} value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}
