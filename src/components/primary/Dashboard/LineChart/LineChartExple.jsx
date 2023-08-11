import React from "react";
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
        backgroundColor: "#DDE8FB",
        tension: 0.6,
        borderColor: "#3399FF",
        // // backgroundColor: "#47536B",
        // borderColor: "#266AED",
        // // backgroundShadowColor: "#266AED",
        // tension: 0.6,
        // fill: true,
        // // pointStyle: "rect",
        // // pointBorderColor: "blue",
        // // pointBackgroundColor: "#fff",
        // showLine: true,
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
        grid: {
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
    <div className="App" style={{ width: "800px", height: "100%" }}>
      <Line options={options} data={data}>
        Hello
      </Line>
    </div>
  );
};

export default LineChartExple;
