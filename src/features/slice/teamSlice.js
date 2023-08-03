/*
 * File           : jobSlice.js
 * Project        : wmpv2
 * Created Date   : We 14 Dec 2022 12:09:50
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Dec 14 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;


const initialState = {
  isLoading: false,
  team: {},
  teams: [],
  error: "null",
  isCreated: false,
};

export const getAllTeams = createAsyncThunk("resources/teams", async ({server_agent}) => {
  return axios.get(`${url}/resources/teams/${server_agent}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Clear all teams data from state

const teamSlice = createSlice({
  name: "team",
  initialState: initialState,
  reducers: {
    updateTeamData: () => initialState,
    resetTeams: (state) => {
      state.teams = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.teams = action.payload.data.data.teams;
      })
      .addCase(getAllTeams.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetTeams ,updateTeamData } = teamSlice.actions;
export default teamSlice.reducer;
