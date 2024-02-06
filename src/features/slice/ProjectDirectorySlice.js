/*
 * File           : ProjectDirectorySlice.js
 * Project        : wmpfrontv2
 * Created Date   : Th 28 Dec 2023 12:52:02
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Dec 28 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { realToken } from '../../helper/lib';

// const url = "https://centralprojectdirectory.as.r.appspot.com";
const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  projectDirectory: [],
  projectDirectorySingle: {},
  directoryMeta: {},
  totalDirectory: 0,
  error: null,
  isCreated: false,
};

export const getProjectByDirectory = createAsyncThunk('/project/directory', async (data) => {
  const { search, pagination, ascDescOption, filteredData } = data;

  let query = `limit=${pagination.pageSize}&skip=${pagination.currentPage * pagination.pageSize}`;
  if (search) {
    query += `&search=${search}`;
  }
  const filterOptions = filteredData && Object.keys(filteredData);
  if (filterOptions) {
    filterOptions.map((f) => (query += `&${f}=${filteredData[f]}`));
  }

  if (ascDescOption) {
    const ascDescOptions = ascDescOption && Object.keys(ascDescOption);
    ascDescOptions.map((ad) => (query += `&sortBy=${ad}:${ascDescOption[ad]}`));
  }
  try {
    return axios.get(`${url}/project-directory/get-all-projects?${query}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
});
export const filterProjectByDirectory = createAsyncThunk('/project/filterDirectory', async (data) => {
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
  try {
    return axios.get(`${url}/api/ProjectList/filter/${query}`);
  } catch (error) {
    throw new Error(error);
  }
});

// export const filterProjectDirBySearch = createAsyncThunk("/project/search", async (data) => {
//   let query = `?query=${data}&skip=1&limit=20`;
//   try {
//     return await axios.get(`${url}/api/search/${query}`);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

//  type Select
export const getType = createAsyncThunk('/project/Directory/Type', async (type) => {
  try {
    return await axios.get(`${url}/project-directory/filter-type?type=${type}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Industry type
export const getIndustryType = createAsyncThunk('/project/IndustryType', async () => {
  try {
    return await axios.get(`${url}/api/Industry_Types/`);
  } catch (error) {
    throw new Error(error);
  }
});

// Client Aliases
export const getClientAliases = createAsyncThunk('/project/Client/Aliases', async () => {
  try {
    return axios.get(`${url}/api/Client_Aliases/`);
  } catch (error) {
    throw new Error(error);
  }
});
// get sync
export const getProjectSync = createAsyncThunk('/project/Client/sync', async () => {
  try {
    return axios.get(`${url}/project-directory/sync-project`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
});
export const getProjectSyncFunction = async () => {
  try {
    return axios.get(`${url}/project-directory/sync-project`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

// create Project Directory
export const createProjectDirectory = createAsyncThunk('Project/Directory/create', async (data) => {
  try {
    return await axios.post(`${url}/project-directory/create-project`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// update Project Directory

export const updateProjectDirectory = createAsyncThunk('Project/Directory/update', async (finalData) => {
  const { data, id } = finalData;

  try {
    return axios.patch(`${url}/project-directory/update-project/${id}`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const getProjectDirectoryById = createAsyncThunk('Project/Directory/update', async (id) => {
  try {
    return axios.get(`${url}/project-directory/get-project/${id}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Delete project
export const deleteProjectDirectory = createAsyncThunk('delete/project/directory', async (id) => {
  try {
    return axios.delete(`${url}/project-directory/delete-project/${id}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
});

const ProjectDirectory = createSlice({
  name: 'projectDirectory',
  initialState: initialState,
  reducers: {
    updateProjectDirectoryData: () => initialState,
    resetProjects: (state) => {
      state.projectDirectory = [];
    },
    resetProjectDirectorySlice: () => {
      return initialState;
    },
    setCurrentProjectDirectory: (state, action) => {
      state.projectDirectorySingle = state.projectDirectory.find((p) => p._id === action.payload);
    },
    clearProjectDirectory: (state) => {
      state.projectDirectorySingle = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectByDirectory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectByDirectory.fulfilled, (state, action) => {
        state.projectDirectory = action.payload.data.projectDirectory;
        state.directoryMeta = action.payload.data.meta;
        if (action.payload.data?.filteredTotalCount === 0) {
          state.totalDirectory = action.payload.data.filteredTotalCount;
        } else if (action.payload.data?.filteredTotalCount) {
          state.totalDirectory = action.payload.data.filteredTotalCount;
        } else {
          state.totalDirectory = action.payload.data.count;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProjectByDirectory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(filterProjectByDirectory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterProjectByDirectory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectDirectory = action.payload.data;
        state.error = null;
      })
      .addCase(filterProjectByDirectory.rejected, (state) => {
        state.isLoading = false;
      })
      // .addCase(filterProjectDirBySearch.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(filterProjectDirBySearch.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.projectDirectory = action.payload.data;
      //   state.error = null;
      // })
      // .addCase(filterProjectDirBySearch.rejected, (state) => {
      //   state.isLoading = false;
      // })
      .addCase(deleteProjectDirectory.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteProjectDirectory.fulfilled, (state, action) => {
        state.projectDirectory = [
          ...state.projectDirectory.filter((item) => item._id !== action.payload.data.projectDirectory._id),
        ];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteProjectDirectory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getType.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getType.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getType.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getIndustryType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIndustryType.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getIndustryType.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProjectSync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectSync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProjectSync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getClientAliases.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClientAliases.fulfilled, (state) => {
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
        state.projectDirectory = [...state.projectDirectory, action.payload.data.projectDirectory];
        state.error = null;
      })
      .addCase(createProjectDirectory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProjectDirectory.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProjectDirectory.fulfilled, (state, action) => {
        state.projectDirectory = state.projectDirectory.map((item) => {
          if (item._id !== action.payload.data.projectDirectory._id) {
            return item;
          } else {
            return action.payload.data.projectDirectory;
          }
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateProjectDirectory.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const {
  resetProjectDirectorySlice,
  updateProjectDirectoryData,
  setCurrentProjectDirectory,
  clearProjectDirectory,
} = ProjectDirectory.actions;
export default ProjectDirectory.reducer;
