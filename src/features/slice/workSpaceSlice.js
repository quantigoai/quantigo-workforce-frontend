import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../../helper/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

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

export const { resetWorkspaces } = workSpaceSlice.actions;
export default workSpaceSlice.reducer;
