import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import DownloadIcon from "@mui/icons-material/Download";
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Userdetails from '../AdminTasklog/Userdetails';
import {useDispatch, useSelector} from "react-redux";
import AllUsers from '../AllUsers/AllUsers';

import JodCreate from '../Job/JodCreate';
import DelivaryDashboard from '../Dashboard/DelivaryDashboard';
import CreateBenchMark from '../AnnotationCalculate/CreateBenchMark';
import CalculateAnnotation from '../AnnotationCalculate/CalculateAnnotation';
import AllJobIndex from '../Job/AllJobIndex';
import ShowBenchMark from '../AnnotationCalculate/ShowBenchMark';

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

export default function DelivaryDashboardSlider() {
    const [value, setValue] = React.useState(0);
    const [action, setAction] = React.useState("")
    const { user } = useSelector((state) => state);
    const { isLoggedIn } = user;
    const dispatch = useDispatch();

    const { role } = user.user;
    const { name } = user.user;
    const handleChange = (event, newValue) => {
        if (newValue === 2) {
            setAction("annotator")
        } else if (newValue === 3) {
            setAction("reviewer")
        }
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
                sx={{ flexGrow: 0, bgcolor: 'background.paper', display: 'flex' }}
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
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Task Log" {...a11yProps(1)} />
                    <Tab icon={<PersonIcon />} label="Annotator List" {...a11yProps(2)} />
                    <Tab icon={<PersonIcon />} label="Reviewer List" {...a11yProps(3)} />

                    <Tab icon={<RequestQuoteIcon />} label="Job List" {...a11yProps(4)} />
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Job Create" {...a11yProps(5)} />
                    <Tab icon={<DownloadIcon />} label="Create BenchMark" {...a11yProps(6)} />
                    <Tab icon={<DownloadIcon />} label="Calculate Annotation" {...a11yProps(7)} />
                    <Tab icon={<DownloadIcon />} label="Show BenchMark" {...a11yProps(8)} />
                    
                </Tabs>
                <TabPanel value={value} index={0}>
                    <DelivaryDashboard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Userdetails />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AllUsers action={action} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <AllUsers action={action} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <AllJobIndex />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <JodCreate />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <CreateBenchMark />
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <CalculateAnnotation />
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <ShowBenchMark/>
                </TabPanel>
               

            </Box>
        </>
    );
}
