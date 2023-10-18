import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomCard from "./CustomCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CourseTab({ filterCourses, isLoading }) {
  const [value, setValue] = React.useState(0);
  const { courses } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  const [filterAllCourses, setFilterAllCourses] = React.useState([]);
  const [filterMyCourses, setFilterMyCourses] = React.useState([]);
  const [filterMyCompleteCourses, setFilterMyCompleteCourses] = React.useState([]);

  useEffect(() => {
    setFilterMyCourses(courses.filter((course) => user.enrolledCourses.includes(course._id)));
    setFilterAllCourses(
      courses.filter((course) => {
        return !user.enrolledCourses.includes(course._id) && !user.completedCourses.includes(course._id);
      })
    );
    setFilterMyCompleteCourses(courses.filter((course) => user.completedCourses.includes(course._id)));
  }, [isLoading, user]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          sx={{
            paddingX: "1%",
          }}
          indicatorColor=""
          value={value}
          onChange={handleChange}
        >
          {" "}
          <Tab
            sx={{
              borderRadius: "8px",
              backgroundColor: value === 0 ? "primary.B200" : "neutral.N000",
              minHeight: "36px",
              height: "36px",
              mr: 2,
              ml: 1,
            }}
            label={
              <Typography
                sx={{ textTransform: "none" }}
                variant="wpf_p4_semiBold"
                color={value === 0 ? "#fff" : "neutral.700"}
              >
                All Courses
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              borderRadius: "8px",
              backgroundColor: value === 1 ? "primary.B200" : "neutral.N000",
              minHeight: "36px",
              height: "36px",
            }}
            label={
              <Typography
                sx={{ textTransform: "none" }}
                variant="wpf_p4_semiBold"
                color={value === 1 ? "#fff" : "neutral.700"}
              >
                My Courses
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              borderRadius: "8px",
              backgroundColor: value === 2 ? "primary.B200" : "neutral.N000",
              minHeight: "36px",
              height: "36px",
              ml: 2,
            }}
            label={
              <Typography
                sx={{ textTransform: "none" }}
                variant="wpf_p4_semiBold"
                color={value === 2 ? "#fff" : "neutral.700"}
              >
                Archive Courses
              </Typography>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {filterAllCourses.map((course) => (
            <Grid key={course._id} item xs={12} sm={6} md={3} gap={1}>
              <CustomCard course={course} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          {filterMyCourses.map((course) => (
            <Grid key={course._id} item xs={12} sm={6} md={3} gap={1}>
              <CustomCard course={course} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={4}>
          {filterMyCompleteCourses.map((course) => (
            <Grid key={course._id} item xs={12} sm={6} md={3} gap={1}>
              <CustomCard course={course} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
