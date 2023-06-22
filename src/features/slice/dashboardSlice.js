/*
 * File           : dashboardSlice.js
 * Project        : wmpv2
 * Created Date   : Th 29 Dec 2022 12:13:26
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Dec 29 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../../helper/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  activeJobs: [],
  takenJobs: [],
  projectBasedData: {},
  totalCountData: [],
  weeklyData: {},
  hourlyData: {},
  error: "null",
};

export const getDashboardData = createAsyncThunk("dashboard", async (data) => {
  const { startDate, endDate } = data;
  return axios.get(
    `${url}/dashboard?startDate=${startDate}&endDate=${endDate}`,
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

export const getDashboardDataWeekly = createAsyncThunk(
  "dashboard/weekly",
  async () => {
    return axios.get(`${url}/dashboard/weeklydata`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

export const getDashboardDataHourly = createAsyncThunk(
  "dashboard/hourly",
  async () => {
    return axios.get(`${url}/dashboard/hourlydata`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

// total count Data

export const getTotalCountData = createAsyncThunk(
  "total/Count/data",
  async () => {
    return axios.get(`${url}/dashboard/totalcountdata`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activeJobs = action.payload.data.activeJobsData;
        state.takenJobs = action.payload.data.blockedJobsData;
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getDashboardDataWeekly.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDashboardDataWeekly.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weeklyData = action.payload.data.data;
      })
      .addCase(getDashboardDataWeekly.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getDashboardDataHourly.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDashboardDataHourly.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hourlyData = action.payload.data.data;
      })
      .addCase(getDashboardDataHourly.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getTotalCountData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTotalCountData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalCountData = action.payload.data;
      })
      .addCase(getTotalCountData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
