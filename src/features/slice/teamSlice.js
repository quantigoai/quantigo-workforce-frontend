import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  team: {},
  teams: [],
  error: "null",
  isCreated: false,
};

export const getAllTeams = createAsyncThunk("resources/teams", async (data) => {
  return axios.get(`${url}/resources/teams`,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});



const teamSlice = createSlice({
  name: "team",
  initialState: initialState,
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
       ;
      });
  },
});

export default teamSlice.reducer;
