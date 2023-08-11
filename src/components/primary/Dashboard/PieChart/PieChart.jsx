import React from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const { activeJobs, takenJobs, totalCountData } = useSelector(
    (state) => state.dashboard
  );
  const options = {
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10,
        },
      },
      datalabels: {
        display: true,
        formatter: (value, ctx) => {
          const dataset = ctx.chart.data.datasets[0];
          const total = dataset.data.reduce((prev, curr) => prev + curr);
          const percentage = ((value / total) * 100).toFixed(2); // Calculate percentage
          return `${percentage}%`;
        },
        color: "#FFFFFF",
        // backgroundColor: "#404040",
      },
    },
    radius: "80%",
  };
  const data = {
    labels: ["Available Jobs", "Active Jobs"],
    datasets: [
      {
        label: "",
        data: [totalCountData.totalAvailableJobs, totalCountData.activeJobs],
        backgroundColor: ["#2E58FF", "#B6C9F0"],
        // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Doughnut options={options} data={data} />
      {/* <Pie data={data} sx={{ height: "200px", width: "200px" }} /> */}
    </>
  );
};

export default PieChart;
