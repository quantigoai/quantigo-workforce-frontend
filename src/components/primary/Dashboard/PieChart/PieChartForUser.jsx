import React from "react";
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import PiechartExaplem from "./PiechartExaplem";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChartForUser = () => {
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
        // display: false,
        color: "black",
        font: {
          size: 24,
          weight: "bold",
        },
      },
    },

    radius: "90%",
  };
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
          "#266AED",
          "#FFAB00",
          "#36B37E",
          "#FF4757",
          "#9747FF",
        ],

        borderWidth: 3,
      },
    ],
  };
  return (
    <>
      {/* <Typography variant="h6">
        <b>Annotators Activity</b>
      </Typography> */}
      <Pie options={options} data={data} />
    </>
  );
};

export default PieChartForUser;
