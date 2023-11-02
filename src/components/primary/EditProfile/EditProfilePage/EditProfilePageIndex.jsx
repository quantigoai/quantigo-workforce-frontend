import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";
import ActivateAccount from "./ActivateAccount";
import MyProfileIndex from "./MyProfile/MyProfileIndex";
import PasswordChangeIndex from "./PasswordChange/PasswordChangeIndex";
import MyprofileIndexNew from "./MyProfile/MyprofileIndexNew";
import MyCoursesIndex from "./MyCourses/MyCoursesIndex";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {value === index && (
        <Box
          sx={{
            p: 2,
            pb: 0,
            height: "100% ",
            width: "100%",
          }}
        >
          {children}
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
      <Box
        sx={{
          height: "100%",
          display: "flex",
          width: "100%",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "neutral.N000",
            // backgroundColor: "blue",
          }}
        >
          <Grid
            container
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              // padding: "16px",
            }}
          >
            <Grid
              item
              xs={2.5}
              lg={3}
              xxl={2}
              xl={2.5}
              sx={{
                borderRight: "1px solid #E1E8F5",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "16px",
       
              }}
            >
              <Tabs
                orientation="vertical"
                // variant="scrollable"
                indicatorColor=""
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  height: {
                    lg: "95%",
                    xl: "92%",
                    xxl: "92%",
                  },
                  width: "100%",
                  textAlign: "right",
                }}
              >
                <Tab
                  sx={{
                    alignItems: "flex-start",
                    borderRadius: value === 0 ? "8px" : "none",
                    backgroundColor: value === 0 ? "primary.B008" : "",
                    height: value === 0 ? "40px" : "",
                    // backgroundColor:"red"
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
                    height: value === 1 ? "40px" : "",
                  }}
                  label={
                    <Typography
                      sx={{ textTransform: "none" }}
                      variant="wpf_p3_semiBold"
                      color={value === 1 ? "primary.B200" : "neutral.700"}
                    >
                      Skills
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

              <Box
                sx={{
                  height: {
                   lg: "5%",
                   xl: "8%",
                   xxl: "8%",
                  },
                  // height: "100%",
                  display: "flex",
                  alignItems: "end",
                  alignContent: "center",
                  justifyContent: "center",
                  
                }}
              >
                <ActivateAccount />
              </Box>
            </Grid>

            <Grid
              item
              xs={9.5}
              lg={9}
              xxl={10}
              xl={9.5}
              sx={{
                height: "100%",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <TabPanel
                  value={value}
                  index={0}
                  sx={{
                    height: "100%",
                  }}
                >
                  <MyprofileIndexNew />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  {/* <PasswordChangeIndex /> */}
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
