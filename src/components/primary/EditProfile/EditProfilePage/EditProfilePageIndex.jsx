import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";
import ActivateAccount from "./ActivateAccount";
import MyCoursesIndex from "./MyCourses/MyCoursesIndex";
import MyProfileIndex from "./MyProfile/MyProfileIndex";
import PasswordChangeIndex from "./PasswordChange/PasswordChangeIndex";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
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
          }}
        >
          <Grid
            container
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          >
            <Grid
              item
              xs={2.5}
              xl={2}
              sx={{ borderRight: "1px solid #E1E8F5", display: "flex", flexDirection: "column", paddingTop: "1%" }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                indicatorColor=""
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  height: "100%",
                  width: "95%",
                  paddingTop: "5%",
                  textAlign: "right",
                  paddingLeft: "5%",
                }}
              >
                <Tab
                  sx={{
                    alignItems: "flex-start",
                    borderRadius: value === 0 ? "8px" : "none",
                    backgroundColor: value === 0 ? "primary.B008" : "",
                  }}
                  label={
                    <Typography
                      sx={{ textTransform: "none" }}
                      variant="wpf_p3_semiBold"
                      color={value === 0 ? "primary.B200" : "neutral.700"}
                    >
                      My Profile
                    </Typography>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    alignItems: "flex-start",
                    borderRadius: value === 1 ? "8px" : "none",
                    backgroundColor: value === 1 ? "primary.B008" : "",
                  }}
                  label={
                    <Typography
                      sx={{ textTransform: "none" }}
                      variant="wpf_p3_semiBold"
                      color={value === 1 ? "primary.B200" : "neutral.700"}
                    >
                      Courses
                    </Typography>
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    alignItems: "flex-start",
                    borderRadius: value === 2 ? "8px" : "none",
                    backgroundColor: value === 2 ? "primary.B008" : "",
                  }}
                  label={
                    <Typography
                      sx={{ textTransform: "none" }}
                      variant="wpf_p3_semiBold"
                      color={value === 2 ? "primary.B200" : "neutral.700"}
                    >
                      Password & Security
                    </Typography>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
              <Box sx={{ marginTop: "auto" }}>
                <Grid container sx={{ justifyContent: "center", paddingBottom: "4%" }}>
                  <ActivateAccount />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={9.5} xl={10} sx={{ height: "100%", backgroundColor: "" }}>
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
