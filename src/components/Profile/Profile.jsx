import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,} from "recharts";
import {useSelector} from "react-redux";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const workType = [
  { type: "Week", number: 3 },
  { type: "Month", number: 20 },
  { type: "Overall", number: 103 },
];

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Box sx={{ padding: "20px 50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="h6"> {user.role === "level_1_annotator"
                      ? "Level 1 Annotator"
                      : user.role === "level_2_annotator"
                      ? "Level 2 Annotator"
                      : user.role}</Typography>
          <Typography variant="h6"> Completed Annotation : 34</Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            src="https://img.freepik.com/premium-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg?w=2000"
            alt="profile"
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </Grid>
        <Grid container spacing={4} sx={{ py: "40px" }}>
          {workType.map((item) => (
            <Grid item xs={4} key={item.type}>
              <Card variant="outlined">
                <CardContent sx={{ background: "#2e58ff", color: "white" }}>
                  <Typography sx={{ fontSize: 20 }} color="silver" gutterBottom>
                    Work in {item.type}
                  </Typography>
                  <Typography variant="h2" component="div">
                    {item.number}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid sx={{ py: "40px" }}>
          <BarChart
            width={1250}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
