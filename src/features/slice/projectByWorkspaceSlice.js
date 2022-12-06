import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  projects:[],
  error: "null",
  isCreated: false,
};

export const getProjectByWorkSpace = createAsyncThunk("/resources/projects/:id", async (id) => {
  return axios.get(`${url}/resources/projects/${id}`,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});



const projectByWorkspaceSlice = createSlice({
  name: "project",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProjectByWorkSpace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectByWorkSpace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.projects = action.payload.data.data.project;
      })
      .addCase(getProjectByWorkSpace.rejected, (state) => {
        state.isLoading = false;
       ;
      });
  },
});

export default projectByWorkspaceSlice.reducer;
