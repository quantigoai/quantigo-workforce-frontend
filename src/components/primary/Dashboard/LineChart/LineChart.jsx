/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/LineChart/LineChart.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 29th 2022, 12:11:52 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Grid} from "@mui/material";
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
import React, {useEffect} from "react";
import {Line} from "react-chartjs-2";
import {useSelector} from "react-redux";
import {daysAndMonths} from "../../../../helper/dateConverter";

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
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Weekly Job Statistics",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (val) {
          return Number.isInteger(val) ? val : null;
        },
      },
    },
  },
  // scales: {
  //   y: {
  //     type: "linear",
  //     display: true,
  //     position: "left",
  //   },
  //   y1: {
  //     type: "linear",
  //     display: true,
  //     position: "right",
  //     grid: {
  //       drawOnChartArea: false,
  //     },
  //   },
  // },
};

const LineChart = ({ loading }) => {
  const { weeklyData } = useSelector((state) => state.dashboard);
  const [customData, setCustomData] = React.useState({});
  const [isDataUpdate, setIsDataUpdate] = React.useState(true);
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
            yAxisID: "y",
          },
          {
            label: "Submitted job",
            data: [...completedJobsData.reverse()],
            borderColor: "#009900",
            backgroundColor: "#66FF66",
            yAxisID: "y",
          },
          {
            label: "Failed jobs",
            data: [...failedJobsData.reverse()],
            borderColor: "#FF3333",
            backgroundColor: "#FF6666",
            yAxisID: "y",
          },
        ],
      };

      setCustomData(data);
      setIsDataUpdate(false);
    }
  }, [loading]);
  return (
    <>
      <Grid container sx={{ padding: "3%" }}>
        {!isDataUpdate && <Line options={options} data={customData} />}
      </Grid>
    </>
  );
};

export default LineChart;
