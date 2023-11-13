/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/LineChart/LineChartDaily.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, January 2nd 2023, 12:28:33 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Grid, Typography} from "@mui/material";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import React from "react";
import LineChartExple from "./LineChartExple";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  plugins: {
    legend: false,
    datalabels: {
      display: false,

      // backgroundColor: "#404040",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#7D89A3", // Change label text color here
      },
      grid: {
        display: true,
      },
    },
    yAxis: {
      ticks: {
        color: "#7D89A3", // Change label text color here
      },
      display: false,
    },
    // y: {
    //   min: 2,
    //   max: 10,
    //   ticks: {
    //     stepSize: 2,
    //     callback: (value) => value + "K",
    //   },
    // },
  },
};
const LineChartDaily = ({ loading }) => {
  return (
    <>
      <Box sx={{ padding: "2%" }}>
        <Grid container>
          <Grid item xs={12} sx={{ paddingTop: "1%" }}>
            <Typography variant="wpf_p3_semiBold" sx={{ color: "neutral.750" }}>
              Hourly Check-ins
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ padding: "2%" }}>
          <LineChartExple loading={loading} />
          {/* <Line options={options} data={customData} /> */}
        </Grid>
      </Box>
    </>
    // <Grid container sx={{ padding: "3%" }}>
    //   {/* {!isDataUpdate && <Line options={options} data={customData} />} */}
    //   <LineChartExple />
    // </Grid>
  );
};

export default LineChartDaily;
