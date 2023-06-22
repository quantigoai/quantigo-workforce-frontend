import React from "react";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {Pie} from "react-chartjs-2";
import {useSelector} from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartForUser = () => {
  const { activeJobs, takenJobs, totalCountData } = useSelector(
    (state) => state.dashboard
  );
  const data = {
    labels: [
      "Level 0 Annotator",
      "Level 1 Annotator",
      "Level 2 Annotator",
      "Level 3 Annotator",
      "Reviewer",
    ],
    datasets: [
      {
        label: "",
        data: [
          totalCountData.level_0_annotator,
          totalCountData.level_1_annotator,
          totalCountData.level_2_annotator,
          totalCountData.level_3_annotator,
          totalCountData.reviewer,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <Pie data={data} />
    </>
  );
};

export default PieChartForUser;
