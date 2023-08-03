import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { realToken } from "../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  workspaces: [],
  error: "null",
  isCreated: false,
};

export const getWorkSpaceById = createAsyncThunk(
  "/resources/workspaces/:id",
  async (data) => {
    const { id, server_agent } = data;
    return axios.get(`${url}/resources/workspaces/${id}/${server_agent}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

const workSpaceSlice = createSlice({
  name: "workspace",
  initialState: initialState,
  reducers: {
    updateWorkSpaceData: () => initialState,
    resetWorkspaces: (state) => {
      state.workspaces = [];
    },
  },
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
      });
  },
});

export const { resetWorkspaces, updateWorkSpaceData } = workSpaceSlice.actions;
export default workSpaceSlice.reducer;
