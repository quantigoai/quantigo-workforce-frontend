/*
 * File           : datasetSlice.js
 * Project        : wmpv2
 * Created Date   : Tu 20 Dec 2022 02:03:01
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Dec 20 2022
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
  datasets: [],
  error: "null",
  isCreated: false,
};

export const getDataSetByProjectID = createAsyncThunk(
  "/resources/datasets/:id",
  async (data) => {
    const { id, server_agent } = data;
    return axios.get(`${url}/resources/datasets/${id}/${server_agent}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);
export const downloadMappingSheet = createAsyncThunk(
  "/download/mapping/sheet",
  async (data) => {
    const { server_agent, teamId, WorkSpaceId, projectId, datasetId } = data;
    return axios.get(
      `${url}/spv/datasets/mappingsheet/${server_agent}/${teamId}/${WorkSpaceId}/${projectId}/${datasetId}`,
      {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      }
    );
  }
);

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
      })
      .addCase(downloadMappingSheet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(downloadMappingSheet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(downloadMappingSheet.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default dataSetSlice.reducer;
