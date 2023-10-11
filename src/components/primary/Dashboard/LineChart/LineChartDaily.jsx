/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/LineChart/LineChartDaily.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, January 2nd 2023, 12:28:33 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Grid, Typography } from "@mui/material";
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
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { weeklyConver } from "../../../../helper/weeklyConver";
import { capitalizeAllwordAndSlic } from "../../../../helper/capitalizeAllwordAndSlic.js";
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
  const { hourlyData } = useSelector((state) => state.dashboard);
  const [customData, setCustomData] = useState({});
  const [isDataUpdate, setIsDataUpdate] = React.useState(true);

  useEffect(() => {
    const takenJobsData = [];
    if (!loading) {
      const labels = Object.keys(hourlyData?.hourJobs);
      const finalLabel = [];

      labels.forEach((label) => {
        takenJobsData.push(hourlyData.hourJobs[label]);
        const { weekly } = weeklyConver(label);

        const weeklydate = capitalizeAllwordAndSlic(weekly[0]);
        return finalLabel.push(`${weeklydate} ${weekly[2]} ${weekly[3]}`);
      });

      const data = {
        labels: finalLabel.reverse(),

        datasets: [
          {
            label: "Active job",
            data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58, 10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 61, 73],
            // data: [...takenJobsData.reverse()],
            // data: [0, 1, 1, 2, 3, 4, 5],
            borderColor: "#3399FF",
            // fill: true,
            // backgroundColor: "yellow",
            // tension: 0.5,
            fill: true,
            backgroundColor: "#DDE8FB",
            tension: 0.6,
          },
        ],
      };

      setCustomData(data);
      setIsDataUpdate(false);
    }
  }, [loading]);
  return (
    <>
      <Box sx={{ padding: "2%" }}>
        <Grid container>
          <Grid xs={12} sx={{ paddingTop: "1%" }}>
            <Typography variant="wpf_p3_semiBold" sx={{ color: "neutral.750" }}>
              <b>Hourly Check-ins</b>
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ padding: "2%" }}>
          <LineChartExple />
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
