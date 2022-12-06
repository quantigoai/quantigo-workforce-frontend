import {Avatar, Grid, Paper, Typography} from '@mui/material'
import {curveCardinal} from 'd3-shape';
import React from 'react';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import {Area, AreaChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const cardinal = curveCardinal.tension(0.2);

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];
  

const UserDashBoard = () => {
    const teamicondiv = { paddingLeft: "5%", paddingTop: "1%" }
    const paperstyle = { paddingTop: "3%", width: 700, height: 300, borderRadius: 10, margin: "0px auto" }
    const paperstyle2 = { paddingTop: '3%', width: 400, height: 300, borderRadius: 10, margin: "0px auto" }
    const headergrid = { paddingTop: " 10px 0px", borderRadius: 10, backgroundColor: "#5F71F1", height: 100 }
  return (
    <>
      <div style={{ background: '#F5F7F9',width: 1450 ,height: 600 }}>
      <Grid container style={teamicondiv}>
                    <Grid xs={1}>
                    <Avatar sx={{ bgcolor: "#D3ECFA" }}>
                        <DashboardCustomizeIcon style={{ color: "#1974D2" }}/>
                        {/* <RequestQuoteIcon style={{ color: "#1974D2" }} /> */}
                        </Avatar>
                    </Grid>
                    <Grid xs={1}>
                        <Typography variant='h5' style={{ color: "#1974D2" }} >Dashboard</Typography>
                    </Grid>
                    <Grid xs={7}></Grid>
                    {/* <Grid xs={3}>
                        <Button variant="contained">Update Billing </Button>
                    </Grid> */}
                </Grid>
                <Grid container>
                    <Grid xs={8}>
                    <div style={{ paddingLeft: "2%",paddingTop :"5%" }}>
                    <Paper elevation={2} style={paperstyle} >
                    <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
                    </Paper>
                        </div>
                    </Grid>
                    <Grid xs={4}>
                    <div style={{ paddingLeft: "0%",paddingTop :"9%" }}>
                    <Paper elevation={2} style={paperstyle2} >
                    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data2}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
                    </Paper>
                    </div>
                    </Grid>
                </Grid>
                
      </div>
    </>
  )
}

export default UserDashBoard