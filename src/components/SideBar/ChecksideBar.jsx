import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import {useDispatch, useSelector} from "react-redux";
import AdminDashboard from '../Dashboard/AdminDashboard';

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

export default function ChecksideBar() {
    const [value, setValue] = React.useState(0);
    const { user } = useSelector((state) => state);
    const { isLoggedIn } = user;
    const dispatch = useDispatch();

    const { role } = user.user;
    const { name } = user.user;
    console.log(user);
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
                sx={{ flexGrow: 0, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab icon={<DashboardCustomizeIcon />} label="Dashboard" {...a11yProps(0)} />
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Task Log" {...a11yProps(1)} />
                    <Tab icon={<PersonIcon />} label="Annotator List" {...a11yProps(2)} />
                    <Tab icon={<PersonIcon />} label="Reviewer List" {...a11yProps(3)} />

                    <Tab icon={<RequestQuoteIcon />} label="Job List" {...a11yProps(4)} />
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Job Create" {...a11yProps(5)} />
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Job Create" {...a11yProps(6)} />
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Job Create" {...a11yProps(7)} />
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Job Create" {...a11yProps(8)} />
                    <Tab icon={<SecurityUpdateGoodIcon />} label="Job Create" {...a11yProps(9)} />
                    {/* <Tab icon={<DownloadIcon />} label="NDA Upload" {...a11yProps(5)} /> */}

                </Tabs>
                <TabPanel value={value} index={0}>
                  <AdminDashboard/>
                </TabPanel>
                <TabPanel value={value} index={1}>

                </TabPanel>
                <TabPanel value={value} index={2}>

                </TabPanel>
                <TabPanel value={value} index={3}>

                </TabPanel>
                <TabPanel value={value} index={4}>

                </TabPanel>
                <TabPanel value={value} index={5}>

                </TabPanel>



            </Box>
        </>
    );
}
