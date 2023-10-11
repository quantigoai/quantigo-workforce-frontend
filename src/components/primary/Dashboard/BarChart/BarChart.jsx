/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/BarChart/BarChart.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 28th 2022, 11:58:27 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Box, Grid, TextField, Typography } from "@mui/material";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { chartValues, labelsData } from "../../../../helper/customData";
import DateField from "../DatePicker/DateField";
import DateRangeField from "../DatePicker/DateRangeField";
import DateRangeComponent from "../DatePicker/DateRangeComponent";
import { addDays } from "date-fns";
import { getDashboardData } from "../../../../features/slice/dashboardSlice";
import DateRangeComponentForDashboard from "../DatePicker/DateRangeComponent";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      color: "#091E42",
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 10,
        boxHeight: 7,
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

const BarChart = ({ startDate, setStartDate, endDate, setEndDate, loading }) => {
  const { activeJobs, takenJobs } = useSelector((state) => state.dashboard);
  const [customData, setCustomData] = React.useState({});
  const [isDataUpdate, setIsDataUpdate] = React.useState(true);
  const [dateRange, setDateRange] = useState("");
  const dispatch = useDispatch();
  const [range, setRange] = useState([
    {
      startDate: addDays(new Date(), -15),
      endDate: new Date(),
      key: "selection",
      isRangeSelected: false,
    },
  ]);

  useEffect(() => {
    // setProjectLoading(true);
    const data = {
      startDate: range[0].startDate,
      endDate: range[0].endDate,
    };

    dispatch(getDashboardData(data)).then(() => {
      // setProjectLoading(false);
    });
  }, [range]);

  const handleDateChange = (event) => {
    setDateRange(event.target.value);
  };
  const sampleData = {
    labels: [1, 2, 3, 4, 6, 7, 8, 9],
    datasets: [
      {
        label: "dataset1",
        data: [6, 7, 8, 9, 6, 7, 8, 9],
        backgroundColor: "#B6C9F0",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "dataset2",
        data: [3, 4, 6, 4, 6, 7, 1, 3],
        backgroundColor: "#2E58FF",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };
  useEffect(() => {
    const activeProjectIds = Object.keys(activeJobs);
    const takenProjectIds = Object.keys(takenJobs);
    const uniqueIds = new Set([...activeProjectIds, ...takenProjectIds]);
    const label = labelsData(uniqueIds, activeJobs, takenJobs);
    const { activeJobValues, blockedJobValues } = chartValues(uniqueIds, activeJobs, takenJobs);

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
  }, [activeJobs, takenJobs]);

  return (
    <>
      <Box sx={{ padding: "2%" }}>
        <Grid container>
          <Grid xs={6} sx={{ paddingTop: "1%" }}>
            <Typography variant="wpf_p3_semiBold" sx={{ color: "neutral.750" }}>
              <b>Project based Annotators/Reviewers</b>
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container sx={{ justifyContent: "right" }}>
              {/* <DateRangeField setStartDate={setStartDate} setEndDate={setEndDate} /> */}
              <DateRangeComponentForDashboard setRange={setRange} range={range} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container sx={{ padding: "2%" }}>
          {!isDataUpdate && (
            <Bar
              options={{
                ...options,
                maintainAspectRatio: false,
              }}
              // data={sampleData}
              style={{ height: "250px" }}
              data={customData}
            />
          )}
        </Grid>
      </Box>
    </>
  );
};

export default BarChart;
