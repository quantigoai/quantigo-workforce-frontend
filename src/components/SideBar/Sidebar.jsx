import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Team from '../Team/Team';
import NdaUpload from '../NdaForproject/NdaUpload';
import Account from '../EditMyProfile/Account/Account';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import DownloadIcon from "@mui/icons-material/Download";
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import UpdateMyDocument from '../UpdateMyDocuments/UpdateMyDocument';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {ForgetPassword} from '../ForgetPassword/ForgetPassword';

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

export default function Sidebar() {
    const [value, setValue] = React.useState(0);

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
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider'}}
                >
                   
                    <Tab icon={<PersonIcon/>} label="Account" {...a11yProps(0)} />
                    <Tab icon={<GroupsIcon/>} label="Team" {...a11yProps(1)} />
               
                    <Tab icon={<SecurityUpdateGoodIcon/>} label="Document update" {...a11yProps(2)} />
                    <Tab icon={<DownloadIcon/>} label="NDA Upload" {...a11yProps(3)} />
                    <Tab icon={<LockOpenIcon/>} label="Password change" {...a11yProps(4)} />
                </Tabs>
                
                <TabPanel value={value} index={0}>
                    <Account />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Team />
                </TabPanel>
                
                <TabPanel value={value} index={2}>
                    <UpdateMyDocument />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <NdaUpload />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div style={{paddingLeft:"80%"}}><ForgetPassword/></div>
                </TabPanel>

            </Box>
        </>
    );
}
