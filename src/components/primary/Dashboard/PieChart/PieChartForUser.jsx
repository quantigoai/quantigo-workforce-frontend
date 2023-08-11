import React from "react";
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import PiechartExaplem from "./PiechartExaplem";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

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
      title: {
        display: true,
        text: "Annotators Activity",
        align: "start",
        font: {
          size: 20,
        },
        color: "#091E42",
        padding: {
          top: 25,
          left: 30,
          // bottom: 30,
        },
      },
      datalabels: {
        display: true,
        formatter: (value, ctx) => {
          const dataset = ctx.chart.data.datasets[0];
          const total = dataset.data.reduce((prev, curr) => prev + curr);
          const percentage = ((value / total) * 100).toFixed(2); // Calculate percentage
          return percentage === "0.00" ? "" : `${percentage}%`;
        },
        color: "#FFFFFF",
        // backgroundColor: "#404040",
      },
    },

    radius: "80%",
  };
  return (
    <>
      <Pie options={options} data={data} />
      {/* <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: "#091E42" }}>
            <b>Annotators Activity</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Pie options={options} data={data} />
        </Grid>
      </Grid> */}
      {/* <Typography variant="h6">
        <b>Annotators Activity</b>
      </Typography> */}
      {/*  */}
    </>
  );
};

export default PieChartForUser;
