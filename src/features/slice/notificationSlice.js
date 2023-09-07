/*
 * File           : syncServerSlice.js
 * Project        : wmpv2
 * Created Date   : Th 30 Mar 2023 11:05:44
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Mar 30 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { realToken } from "../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  notifications: [],
  latestUnreadNotifications: [],
  allUnreadNotifications: [],
  error: null,
};

export const getAllNotifications = createAsyncThunk("notification/getall", async () => {
  return axios.get(`${url}/notifications`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const getAllUnreadNotifications = createAsyncThunk("notification/getAllUnread", async () => {
  return axios.get(`${url}/notifications/unread`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const getLatestNotifications = createAsyncThunk("notification/getLatest", async () => {
  return axios.get(`${url}/notifications/latest-unread`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const readLatestNotification = createAsyncThunk("notification/readLatest", async (notificationsId) => {
  return axios.post(
    `${url}/notifications/read-latest`,
    { notificationsId },
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

export const readAllNotification = createAsyncThunk("notification/readAll", async () => {
  return axios.post(
    `${url}/notifications/read-all`,
    {},
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

export const deleteBefore15DaysNotifications = createAsyncThunk("notification/deleteBefore15Days", async () => {
  return axios.delete(`${url}/notifications/delete-before-15days`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Clear all teams data from state

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    readAllNotifications: (state) => {
      state.notifications = [];
    },
    setNewNotification: (state, action) => {
      state.notifications = [action.payload, ...state.notifications];
      state.latestUnreadNotifications = [action.payload, ...state.latestUnreadNotifications];
      state.allUnreadNotifications = [action.payload, ...state.allUnreadNotifications];
    },
    resetNotificationSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.notifications = [...action.payload.data];
      })
      .addCase(getAllNotifications.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getLatestNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLatestNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.latestUnreadNotifications = [...action.payload.data];
      })
      .addCase(getLatestNotifications.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllUnreadNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUnreadNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allUnreadNotifications = [...action.payload.data];
      })
      .addCase(getAllUnreadNotifications.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(readLatestNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(readLatestNotification.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(readLatestNotification.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(readAllNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(readAllNotification.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(readAllNotification.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBefore15DaysNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBefore15DaysNotifications.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteBefore15DaysNotifications.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetNotificationSlice, readAllNotifications, setNewNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
