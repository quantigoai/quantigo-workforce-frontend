/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/BarChart/BarChart.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 28th 2022, 11:58:27 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Grid, Typography } from "@mui/material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { chartValues, labelsData } from "../../../../helper/customData";
import DateField from "../DatePicker/DateField";
import DateRangeField from "../DatePicker/DateRangeField";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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
      // text: "Project Based Jobs",
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
};

const BarChart = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  loading,
}) => {
  const { activeJobs, takenJobs } = useSelector((state) => state.dashboard);
  const [customData, setCustomData] = React.useState({});
  const [isDataUpdate, setIsDataUpdate] = React.useState(true);
  useEffect(() => {
    if (!loading) {
      const activeProjectIds = Object.keys(activeJobs);
      const takenProjectIds = Object.keys(takenJobs);
      const uniqueIds = new Set([...activeProjectIds, ...takenProjectIds]);
      const label = labelsData(uniqueIds, activeJobs, takenJobs);
      // const label = [
      //   "January",
      //   "February",
      //   "March",
      //   "April",
      //   "May",
      //   "June",
      //   "July",
      // ];
      const { activeJobValues, blockedJobValues } = chartValues(
        uniqueIds,
        activeJobs,
        takenJobs
      );

      setCustomData({
        labels: label,
        datasets: [
          {
            label: "Available Jobs",
            data: activeJobValues,

            backgroundColor: "#B6C9F0",
          },
          {
            label: "Active Jobs",
            data: blockedJobValues,
            backgroundColor: "#2E58FF",
          },
        ],
      });
      setIsDataUpdate(false);
    }
  }, [loading]);
  return (
    <>
      {/* //! Fix this in inline  */}
      <Grid container sx={{ padding: "2%" }}>
        <Grid item xs={6}>
          <Typography sx={{ color: "#091E42" }}>
            <b>Project based Annotators/Reviewers</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {/* <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
            <DateField dateValue={startDate} setDateValue={setStartDate} />
          </Grid> */}
          {/* <DateRangeField /> */}
          <DateField dateValue={endDate} setDateValue={setEndDate} />
        </Grid>
      </Grid>

      {/* <Grid container item xs={12} sx={{ padding: "2%" }}>
        <Grid container item xs={12} md={6} lg={6}>
          <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
            <Typography>Project based Annotators/Reviewers</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} lg={6}>
          <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
            <DateField dateValue={startDate} setDateValue={setStartDate} />
          </Grid>
          <Grid item xs={12} md={6} lg={9}>
            <DateField dateValue={endDate} setDateValue={setEndDate} />
          </Grid>
        </Grid>
      </Grid> */}
      <Grid container sx={{ padding: "2%" }}>
        {!isDataUpdate && <Bar options={options} data={customData} />}
      </Grid>
    </>
  );
};

export default BarChart;
