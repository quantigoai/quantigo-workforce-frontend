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

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  error: "null",
  updatedValue: {},
};

export const syncATeam = createAsyncThunk("sync/team", async (data) => {
  const { server_agent, teamId } = data;
  return axios.post(
    `${url}/spv/projects/syncserver/${server_agent}/${teamId}`,
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

// Clear all teams data from state

const syncServerSlice = createSlice({
  name: "syncServer",
  initialState: initialState,
  reducers: {
    resetUpdatedValue: (state) => {
      state.updatedValue = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(syncATeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(syncATeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.updatedValue = action.payload.data;
      })
      .addCase(syncATeam.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetUpdatedValue } = syncServerSlice.actions;
export default syncServerSlice.reducer;
