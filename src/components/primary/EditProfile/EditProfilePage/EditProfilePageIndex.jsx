import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirstPage from "../../Auth/HowItWorkPage/TabPages/FirstPage";
import { Button, Grid, Paper } from "@mui/material";
import MyProfileIndex from "./MyProfile/MyProfileIndex";
import ActivateAccount from "./ActivateAccount";
import MyCoursesIndex from "./MyCourses/MyCoursesIndex";
import PasswordChangeIndex from "./PasswordChange/PasswordChangeIndex";
import { useSelector } from "react-redux";

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
  const { isLightTheme } = useSelector((state) => state.theme);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ padding: "1%", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "neutral.N000",
            // backgroundColor:"red"
          }}>
          <Grid
            container
            sx={{
              // borderTop: "1px solid #E1E8F5",
              // backgroundColor: "neutral.N000",
              // position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}>
            <Grid item xs={2} sx={{ borderRight: "1px solid #E1E8F5", display: "flex", flexDirection: "column" }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                indicatorColor=""
                // textColor="red"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  height: "100%",
                  width: "95%",
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
                  label={
                    <Typography
                      sx={{ textTransform: "none" }}
                      variant="wpf_p3_semiBold"
                      color={value === 0 ? "primary.B200" : "neutral.700"}>
                      My Profile
                    </Typography>
                  }
                  // label="My Profile"
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
                  label={
                    <Typography
                      sx={{ textTransform: "none" }}
                      variant="wpf_p3_semiBold"
                      color={value === 1 ? "primary.B200" : "neutral.700"}>
                      Courses
                    </Typography>
                  }
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
                  label={
                    <Typography
                      sx={{ textTransform: "none" }}
                      variant="wpf_p3_semiBold"
                      color={value === 2 ? "primary.B200" : "neutral.700"}>
                      Password & Security
                    </Typography>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
              <Box sx={{ marginTop: "auto" }}>
                <Grid container sx={{ justifyContent: "center", paddingBottom: "3%" }}>
                  <ActivateAccount />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={10} sx={{  height: "100%" }}>
              <Box>
                <TabPanel value={value} index={0}>
                  <MyProfileIndex />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <MyCoursesIndex />
                </TabPanel>
                <TabPanel sx={{ position: "absolute" }} value={value} index={2}>
                  <PasswordChangeIndex />
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
