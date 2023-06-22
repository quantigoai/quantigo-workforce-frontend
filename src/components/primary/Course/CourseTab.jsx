import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
  const [filterMyCompleteCourses, setFilterMyCompleteCourses] = React.useState(
    []
  );

  useEffect(() => {
    setFilterMyCourses(
      courses.filter((course) => user.enrolledCourses.includes(course._id))
    );
    setFilterAllCourses(
      courses.filter((course) => {
        return (
          !user.enrolledCourses.includes(course._id) &&
          !user.completedCourses.includes(course._id)
        );
      })
    );
    setFilterMyCompleteCourses(
      courses.filter((course) => user.completedCourses.includes(course._id))
    );
  }, [isLoading, user]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          centered
          sx={{
            width: "100%",
            display: "flex",
          }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="All Course" {...a11yProps(0)} />
          <Tab label="My Course" {...a11yProps(1)} />
          <Tab label="Archived Course" {...a11yProps(2)} />
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
