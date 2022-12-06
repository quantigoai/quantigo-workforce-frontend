import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import {Task} from '../Task/Task';
import SchoolIcon from '@mui/icons-material/School';
import {useSelector} from "react-redux";
import QuizIcon from '@mui/icons-material/Quiz';
import AllUsers from '../AllUsers/AllUsers';
import AdminDashboard from '../Dashboard/AdminDashboard';
import CreateCourse from '../ViewCourses/CreateCourse/CreateCourse';
import CreateQuiz from '../Quiz/CreateQuiz';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import JodCreate from '../Job/JodCreate';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import CreateBenchMark from '../AnnotationCalculate/CreateBenchMark';
import AllJobIndex from '../Job/AllJobIndex';
import {QuizShow} from '../Quiz/QuizShow';

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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AdminDashboardSlidebar() {
  const [value, setValue] = React.useState(0);
  const { user } = useSelector((state) => state);
  const { isLoggedIn } = user;
  // const dispatch = useDispatch();

  const { role } = user.user;
  const { name } = user.user;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <div>
                <Grid container style={{paddingLeft:"5%",paddingTop:"1%",paddingBottom:"1%"}}>
                    <Typography variant='h4' style={{color: "#1974D2"}} >Your Account  </Typography>
                </Grid>
            </div> */}
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', paddingLeft: "0%" }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', width: "15%" }}
        >
          <Tab icon={<DashboardCustomizeIcon />} label="Dashboard" {...a11yProps(0)} />
          {role==="admin" ? 
          <Tab icon={<GroupsIcon />} label="All User" {...a11yProps(1)} />
          :<></>}
          <Tab icon={<SchoolIcon />} label="Course" {...a11yProps(2)} />
          <Tab icon={<NoteAddIcon />} label="Create Course" {...a11yProps(3)} />
          <Tab icon={<QuizIcon />} label="Create Quiz" {...a11yProps(4)} />
          {role === "admin" ?
            <Tab icon={<WorkHistoryIcon />} label="Create Job" {...a11yProps(5)} />
            :
            <Tab icon={<WorkHistoryIcon />} label="Quiz" {...a11yProps(5)} />
          }
          {role === "admin" ?
            <Tab icon={<WorkOutlineTwoToneIcon />} label="Job List" {...a11yProps(6)} />
            :
            <></>
          }
          {role === "admin" ?
            <Tab icon={<WorkOutlineTwoToneIcon />} label="Create Bench Mark" {...a11yProps(7)} />
            :
            <></>
          }
        </Tabs>
        <TabPanel value={value} index={0}>
          <AdminDashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AllUsers />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Task />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CreateCourse />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CreateQuiz />
        </TabPanel>
        
        {role === "admin" ?
          <TabPanel value={value} index={5}>
            <JodCreate />
          </TabPanel>
          :
          <TabPanel value={value} index={5}>
            <QuizShow/>
          </TabPanel>
        }
        <TabPanel value={value} index={6}>
          <AllJobIndex/>

        </TabPanel>
        <TabPanel value={value} index={7}>
          <CreateBenchMark />

        </TabPanel>


      </Box>
    </>
  );
}
