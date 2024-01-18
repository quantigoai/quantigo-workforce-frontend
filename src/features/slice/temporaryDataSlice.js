/*
 * File           : temporaryDataSlice.js
 * Project        : wmpv2
 * Created Date   : Tu 04 Apr 2023 12:26:07
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Apr 04 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  temporaryData: {},
  temporaryDatas: [],
  userFilter: {},
  projectDrawerFilter: {},
  projectDirectoryFilter: {},
  workHistoryFilter: {},
  error: "null",
};

export const updateTemporaryData = createAsyncThunk("resources/temporaryDatas", async (data) => {
  return axios.post(`${url}/courses/temporaryDataRouter/`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const deleteTemporaryData = createAsyncThunk("resources/temporaryDatas/delete", async (data) => {
  const { id, chapterNo } = data;
  return axios.delete(
    `${url}/courses/temporaryDataRouter/${id}/${chapterNo}`,

    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

export const clearTemporaryData = createAsyncThunk("resources/temporaryDatas/clear", async (data) => {
  return axios.post(`${url}/courses/temporaryDataRouter/cleartemporaryData`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Clear all temporaryDatas data from state

const temporaryDataSlice = createSlice({
  name: "temporaryData",
  initialState: initialState,
  reducers: {
    resetTemporaryDatas: (state) => {
      state.temporaryDatas = [];
    },
    resetTemporaryDataSlice: () => {
      return initialState;
    },
    setUserFilter: (state, action) => {
      state.userFilter = action.payload;
    },
    clearUserFilter: (state) => {
      state.userFilter = {};
    },
    setProjectDrawerFilter: (state, action) => {
      state.projectDrawerFilter = action.payload;
    },
    clearProjectDrawerFilter: (state) => {
      state.projectDrawerFilter = {};
    },
    setProjectDirectoryFilter: (state, action) => {
      state.projectDirectoryFilter = action.payload;
    },
    clearProjectDirectoryFilter: (state) => {
      state.projectDirectoryFilter = {};
    },
    setWorkHistoryFilter: (state, action) => {
      state.workHistoryFilter = action.payload;
    },
    clearWorkHistoryFilter: (state) => {
      state.workHistoryFilter = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTemporaryData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTemporaryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTemporaryData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTemporaryData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTemporaryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTemporaryData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(clearTemporaryData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearTemporaryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(clearTemporaryData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  resetTemporaryDataSlice,
  resetTemporaryDatas,
  setUserFilter,
  clearUserFilter,
  setProjectDrawerFilter,
  setProjectDirectoryFilter,
  clearProjectDirectoryFilter,
  clearProjectDrawerFilter,
  setWorkHistoryFilter,
  clearWorkHistoryFilter,
} = temporaryDataSlice.actions;

export default temporaryDataSlice.reducer;
