import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://centralprojectdirectory.as.r.appspot.com";
// const url = import.meta.env.VITE_APP_SERVER_URL;
// const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  projectDirectory: [],
  error: "null",
  isCreated: false,
};

export const getProjectByDirectory = createAsyncThunk(
  "/project/directory",
  async (data) => {
    const {
      industryType,
      clientAliasFilter,
      dataTypeFilter,
      annotationFilter,
      pdr,
      platformFieldFilter,
      projectTypeFieldFilter,
      actionItemsFieldFilter,
      qaCheckPointFieldFilter,
      taggingBenchMarkFieldFilter,
      imgBenchMarkFieldFilter,
      objBenchMarkFieldFilter,
      deletionFieldFilter,
      toolTypeFieldFilter,
      videoWatchTimeFieldFilter,
      objectSavingTimeFieldFilter,
      imageLoadingFieldFilter,
      skipImageFieldFilter,
      qAFieldFilter,
      qABenchmarkFieldFilter,
      judgementTimeFieldFilter,
    } = data || {};
    let query = ``;
    if (data) {
      query += `?`;
    }
    if (industryType) {
      query += `&Industry=${industryType}`;
    }
    if (judgementTimeFieldFilter) {
      query += `&Judgement_Time=${judgementTimeFieldFilter}`;
    }
    if (qABenchmarkFieldFilter) {
      query += `&QA_Benchmark=${qABenchmarkFieldFilter}`;
    }
    if (qAFieldFilter) {
      query += `&QA=${qAFieldFilter}`;
    }
    if (skipImageFieldFilter) {
      query += `&Skip_Image=${skipImageFieldFilter}`;
    }
    if (imageLoadingFieldFilter) {
      query += `&Image_Loading=${imageLoadingFieldFilter}`;
    }
    if (objectSavingTimeFieldFilter) {
      query += `&Object_Saving_Time=${objectSavingTimeFieldFilter}`;
    }
    if (videoWatchTimeFieldFilter) {
      query += `&Video_Watch_Time=${videoWatchTimeFieldFilter}`;
    }
    if (toolTypeFieldFilter) {
      query += `&Tool_Type=${toolTypeFieldFilter}`;
    }
    if (deletionFieldFilter) {
      query += `&Deletion=${deletionFieldFilter}`;
    }
    if (objBenchMarkFieldFilter) {
      query += `&Obj_Benchmark=${objBenchMarkFieldFilter}`;
    }
    if (imgBenchMarkFieldFilter) {
      query += `&Img_Benchmark=${imgBenchMarkFieldFilter}`;
    }
    if (taggingBenchMarkFieldFilter) {
      query += `&Tagging_Benchmark=${taggingBenchMarkFieldFilter}`;
    }
    if (actionItemsFieldFilter) {
      query += `&Action_Items=${actionItemsFieldFilter}`;
    }
    if (qaCheckPointFieldFilter) {
      query += `&QA_Check_Points=${qaCheckPointFieldFilter}`;
    }
    if (projectTypeFieldFilter) {
      query += `&Project_Type=${projectTypeFieldFilter}`;
    }
    if (platformFieldFilter) {
      query += `&Platform=${platformFieldFilter}`;
    }
    if (clientAliasFilter) {
      query += `&Client_Alias=${clientAliasFilter}`;
    }
    if (dataTypeFilter) {
      query += `&Data_Type=${dataTypeFilter}`;
    }
    if (annotationFilter) {
      query += `&Annotation=${annotationFilter}`;
    }
    if (pdr) {
      query += `&PDR=${pdr}`;
    }
    return axios.get(`${url}/api/ProjectList${query}`);
  }
);

//  type Select
export const getType = createAsyncThunk(
  "/project/Directory/Type",
  async (type) => {
    return axios.get(`${url}/api/ProjectList/Type/${type}`);
  }
);

// Industry type
export const getIndustryType = createAsyncThunk(
  "/project/IndustryType",
  async () => {
    return axios.get(`${url}/api/Industry_Types/`);
  }
);

// Client Aliases
export const getClientAliases = createAsyncThunk(
  "/project/Client/Aliases",
  async () => {
    return axios.get(`${url}/api/Client_Aliases/`);
  }
);
// create Project Directory
export const createProjectDirectory = createAsyncThunk(
  "Project/Directory/create",
  async (data) => {
    return axios.post(`${url}/api/ProjectList/`, data);
  }
);

// update Project Directory

export const updateProjectDirectory = createAsyncThunk(
  "Project/Directory/update",
  async (finalData) => {
    const { data, id } = finalData;
    return axios.patch(`${url}/api/ProjectList/${id}/update`, data);
  }
);

// Delete project
export const deleteProjectDirectory = createAsyncThunk(
  "delete/project/directory",
  async (id) => {
    return axios.delete(`${url}/api/ProjectList/remove?id=${id}`);
  }
);

const ProjectDirectory = createSlice({
  name: "projectDirectory",
  initialState: initialState,
  reducers: {
    updateProjectDirectoryData: () => initialState,
    resetProjects: (state) => {
      state.projectDirectory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectByDirectory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectByDirectory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectDirectory = action.payload.data;
        state.error = null;
      })
      .addCase(getProjectByDirectory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteProjectDirectory.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteProjectDirectory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectDirectory = [
          ...state.projectDirectory.filter(
            (item) => item.Project_Name !== action.payload.data.Project_Name
          ),
        ];
        state.error = null;
      })
      .addCase(deleteProjectDirectory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getType.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getType.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getIndustryType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIndustryType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getIndustryType.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getClientAliases.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClientAliases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getClientAliases.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createProjectDirectory.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(createProjectDirectory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectDirectory = [
          ...state.projectDirectory,
          action.payload.data,
        ];
        state.error = null;
      })
      .addCase(createProjectDirectory.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateProjectDirectory.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProjectDirectory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectDirectory = state.projectDirectory.map((item) => {
          if (item._id !== action.payload.data._id) {
            return item;
          } else {
            return action.payload.data;
          }
        });
        state.error = null;
      })
      .addCase(updateProjectDirectory.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const { updateProjectDirectoryData } = ProjectDirectory.actions;
export default ProjectDirectory.reducer;
