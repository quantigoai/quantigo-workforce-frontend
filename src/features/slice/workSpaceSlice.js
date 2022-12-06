import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  workspaces : [],
  error: "null",
  isCreated: false,
};

export const getWorkSpaceById = createAsyncThunk("/resources/workspaces/:id", async (id) => {
  return axios.get(`${url}/resources/workspaces/${id}`,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});



const workSpaceSlice = createSlice({
  name: "workspace",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWorkSpaceById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkSpaceById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.workspaces = action.payload.data.data.workspace;
      })
      .addCase(getWorkSpaceById.rejected, (state) => {
        state.isLoading = false;
       ;
      });
  },
});

export default workSpaceSlice.reducer;
