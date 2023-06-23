/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Dashboard/BarChart/BarChart.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 28th 2022, 11:58:27 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Grid, Typography} from "@mui/material";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import React, {useEffect} from "react";
import {Bar} from "react-chartjs-2";
import {useSelector} from "react-redux";
import {chartValues, labelsData} from "../../../../helper/customData";
import DateField from "../DatePicker/DateField";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Project Based Jobs",
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
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Active Jobs",
            data: blockedJobValues,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      });
      setIsDataUpdate(false);
    }
  }, [loading]);
  return (
    <>
      {/* //! Fix this in inline  */}
      <Grid container item xs={12} sx={{ padding: "2%" }}>
        <Grid container item xs={12} md={6} lg={6}>
          <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
            <Typography>Start Date</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={9}>
            <DateField dateValue={startDate} setDateValue={setStartDate} />
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} lg={6}>
          <Grid item xs={12} md={6} lg={3} sx={{ paddingTop: "2%" }}>
            <Typography>End Date</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={9}>
            <DateField dateValue={endDate} setDateValue={setEndDate} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "2%" }}>
        {!isDataUpdate && <Bar options={options} data={customData} />}
      </Grid>
    </>
  );
};

export default BarChart;
