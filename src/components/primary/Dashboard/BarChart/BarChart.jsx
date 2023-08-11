/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/BarChart/BarChart.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 28th 2022, 11:58:27 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Box, Grid, TextField, Typography } from "@mui/material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
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
      color: "#091E42",
      position: "bottom",
      labels: {
        color: "#091E42",
        // usePointStyle: true,
        // pointStyle: "circle",
        boxWidth: 10,
        // borderRadius: 28,
        pointStyleWidth: 20,
      },
    },
    datalabels: {
      display: false,

      // backgroundColor: "#404040",
    },
    title: {
      display: true,
      // text: "Project Based Jobs",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#7D89A3", // Change label text color here
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      border: {
        display: false,
      },
      ticks: {
        color: "#7D89A3",
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
  const [dateRange, setDateRange] = useState("");

  const handleDateChange = (event) => {
    setDateRange(event.target.value);
  };
  const sampleData = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "dataset1",
        data: [1, 2, 3, 4],
        backgroundColor: "#B6C9F0",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "dataset2",
        data: [1, 2, 5, 4],
        backgroundColor: "#2E58FF",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };
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
      <Box sx={{ padding: "2%" }}>
        <Grid container>
          <Grid xs={6} sx={{ paddingTop: "1%" }}>
            <Typography variant="h6" sx={{ color: "#091E42" }}>
              <b>Project based Annotators/Reviewers</b>
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container sx={{ justifyContent: "right" }}>
              <DateRangeField
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container sx={{ padding: "2%" }}>
          {!isDataUpdate && <Bar options={options} data={sampleData} />}
        </Grid>
      </Box>
    </>
    // <>
    //   {/* //! Fix this in inline  */}
    //   <Grid container sx={{ padding: "0%" }}>
    //     <Grid item xs={6}>
    //       <Typography sx={{ color: "#091E42" }}>
    //         <b>Project based Annotators/Reviewers</b>
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={6}>
    //       {/* <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
    //         <DateField dateValue={startDate} setDateValue={setStartDate} />
    //       </Grid> */}
    //       <Grid container sx={{ justifyContent: "right" }} >
    //         <DateRangeField />
    //       </Grid>

    //       {/* <TextField
    //         label="Date Range"
    //         type="text"
    //         value={dateRange}
    //         onChange={handleDateChange}
    //         placeholder="YYYY-MM-DD to YYYY-MM-DD"
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //       /> */}
    //       {/* <DateField dateValue={endDate} setDateValue={setEndDate} /> */}
    //     </Grid>
    //   </Grid>

    //   {/* <Grid container item xs={12} sx={{ padding: "2%" }}>
    //     <Grid container item xs={12} md={6} lg={6}>
    //       <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
    //         <Typography>Project based Annotators/Reviewers</Typography>
    //       </Grid>
    //     </Grid>
    //     <Grid container item xs={12} md={6} lg={6}>
    //       <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
    //         <DateField dateValue={startDate} setDateValue={setStartDate} />
    //       </Grid>
    //       <Grid item xs={12} md={6} lg={9}>
    //         <DateField dateValue={endDate} setDateValue={setEndDate} />
    //       </Grid>
    //     </Grid>
    //   </Grid> */}
    //   {/* <Grid container sx={{ padding: "2%" }}>
    //     {!isDataUpdate && <Bar options={options} data={sampleData} />}
    //   </Grid> */}
    // </>
  );
};

export default BarChart;
