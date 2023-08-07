import React from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import {  Doughnut, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

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
    },
    radius: "90%",
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
