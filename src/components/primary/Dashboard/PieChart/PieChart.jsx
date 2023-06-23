import React from "react";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {Pie} from "react-chartjs-2";
import {useSelector} from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const { activeJobs, takenJobs, totalCountData } = useSelector(
    (state) => state.dashboard
  );
  const data = {
    labels: ["Available Jobs", "Active Jobs"],
    datasets: [
      {
        label: "",
        data: [totalCountData.totalAvailableJobs, totalCountData.activeJobs],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Pie data={data} sx={{ height: "200px", width: "200px" }} />
    </>
  );
};

export default PieChart;
