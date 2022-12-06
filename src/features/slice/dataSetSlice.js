import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
 datasets:[],
  error: "null",
  isCreated: false,
};

export const getDataSetByProjectID = createAsyncThunk("/resources/datasets/:id", async (id) => {
  return axios.get(`${url}/resources/datasets/${id}`,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});



const dataSetSlice = createSlice({
  name: "dataset",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataSetByProjectID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataSetByProjectID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.datasets = action.payload.data.data.dataset;
      })
      .addCase(getDataSetByProjectID.rejected, (state) => {
        state.isLoading = false;
       ;
      });
  },
});

export default dataSetSlice.reducer;
