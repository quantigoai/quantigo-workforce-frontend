import React, { useRef } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { Box } from "@mui/material";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineChartExple = () => {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        // label: "",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        fill: true,
        // backgroundColor: "rgba(51, 153, 255,0.1)",
        // backgroundColor: "linear-gradient(to right, #ff0000, #00ff00)",
        tension: 0.6,
        borderColor: "#266AED",
        pointRadius: 0,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(51, 153, 255,0.1)");
          gradient.addColorStop(0.5, "rgba(51, 153, 255,0.1)");
          gradient.addColorStop(1, "rgba(250,174,50,0)");
          return gradient;
        },
      },
    ],
  });
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
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#7D89A3", // Change label text color here
        },
        display: true,
        border: {
          display: false,
        },
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
  return (
    <Box  sx={{ width: "100%" }}>
      <Line options={options} data={data}>
        Hello
      </Line>
    </Box>
  );
};

export default LineChartExple;
