/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/LineChart/LineChartDaily.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, January 2nd 2023, 12:28:33 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
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
import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {useSelector} from "react-redux";
import {weeklyConver} from "../../../../helper/weeklyConver";
import {capitalizeAllwordAndSlic} from "../../../../helper/capitalizeAllwordAndSlic.js";

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

  stacked: true,
  plugins: {
    title: {
      display: true,
      text: "Hourly Job Statistics",
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
            data: [...takenJobsData.reverse()],
            // data: [0, 1, 1, 2, 3, 4, 5],
            borderColor: "#3399FF",
            backgroundColor: "#0066CC",
            tension: 0.5,
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

export default LineChartDaily;
