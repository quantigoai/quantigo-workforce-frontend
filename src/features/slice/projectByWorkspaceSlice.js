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
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { realToken } from "../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;
const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  projects: [],
  error: "null",
  isCreated: false,
};

export const getProjectByWorkSpace = createAsyncThunk(
  "/resources/projects/:id",
  async (data) => {
    const { id, server_agent } = data;
    return axios.get(`${url}/resources/projects/${id}/${server_agent}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

// update project Status by project Id
export const updateAProjectById = createAsyncThunk(
  "update/project/statue",
  async (finalData) => {
    const { id, data, server_agent } = finalData;
    return axios.patch(
      `${url}/spv/projects/updateprojectstatus/${id}/${server_agent}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      }
    );
  }
);

const projectByWorkspaceSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    updateProjectData: () => initialState,
    resetProjects: (state) => {
      state.projects = [];
    },
  },
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
      })
      .addCase(updateAProjectById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.projects = state.projects.filter(
        //   (project) => project._id !== action.payload.data.data._id
        // );
        state.projects = state.projects.map((pr) => {
          if (pr._id === action.payload.data.data._id) {
            return action.payload.data.data;
          }
          return pr;
        });
      })
      .addCase(updateAProjectById.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong";
      });
  },
});
export const { resetProjects, updateProjectData } =
  projectByWorkspaceSlice.actions;
export default projectByWorkspaceSlice.reducer;
