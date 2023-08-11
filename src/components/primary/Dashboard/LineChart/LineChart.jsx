/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/LineChart/LineChart.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 29th 2022, 12:11:52 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
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
import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { daysAndMonths } from "../../../../helper/dateConverter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 10,
      },
    },
    datalabels: {
      display: false,

      // backgroundColor: "#404040",
    },
    title: {
      display: true,
      // text: "Project Based Jobs",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (val) {
          return Number.isInteger(val) ? val : null;
        },
      },
    },
  },
};

const LineChart = ({ loading }) => {
  const { weeklyData } = useSelector((state) => state.dashboard);
  const [customData, setCustomData] = React.useState({});
  const [isDataUpdate, setIsDataUpdate] = React.useState(true);
  const sampleData = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "Active job",
        data: [1, 2, 3, 4, 3, 7, 7],
        backgroundColor: "#A2D2FF",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Submitted job",
        data: [1, 2, 3, 4, 3, 7, 7],
        backgroundColor: "#B7E4C7",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Failed jobs",
        data: [1, 2, 3, 4, 3, 7, 7],
        backgroundColor: "#FF8FA3",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  useEffect(() => {
    if (!loading) {
      const chartLabels = [...weeklyData.dateArray];

      const labels = [];
      chartLabels.map((item) => {
        const { day, month, dateNumber } = daysAndMonths(item);

        return labels.push(`${day}, ${month} ${dateNumber}`);
      });

      const takenJobsData = [];
      const completedJobsData = [];
      const failedJobsData = [];
      for (let i = 0; i < chartLabels.length; i++) {
        takenJobsData.push(weeklyData.takenJobs[chartLabels[i]]);
        completedJobsData.push(weeklyData.completedJobs[chartLabels[i]]);
        failedJobsData.push(weeklyData.failedJobs[chartLabels[i]]);
      }

      const data = {
        labels: labels.reverse(),

        datasets: [
          {
            label: "Active job",
            data: [...takenJobsData],
            borderColor: "#3399FF",
            backgroundColor: "#0066CC",
          },
          {
            label: "Submitted job",
            data: [...completedJobsData.reverse()],
            borderColor: "#009900",
            backgroundColor: "#66FF66",
          },
          {
            label: "Failed jobs",
            data: [...failedJobsData.reverse()],
            borderColor: "#FF3333",
            backgroundColor: "#FF6666",
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
            <Typography variant="h6" sx={{ color: "#091E42" }}>
              <b>Weekly Job Statistics</b>
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ padding: "2%" }}>
          {!isDataUpdate && <Bar options={options} data={sampleData} />}
        </Grid>
      </Box>
      {/* <Grid container sx={{ padding: "2%" }}>
        {!isDataUpdate && <Bar options={options} data={sampleData} />}
      </Grid> */}
    </>
  );
};

export default LineChart;
