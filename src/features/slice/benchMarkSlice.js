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

// Quantigo Server
const REACT_QUANTIGO_API_KEY = import.meta.env.VITE_APP_QUANTIGO_SUPERADMIN_KEY;
const urlquantigo = import.meta.env.VITE_APP_QUANTIGOAPI_URL;

// Ag Server

const REACT_AG_API_KEY = import.meta.env.VITE_APP_AG_KEY;
const urlag = import.meta.env.VITE_APP_AGAPI_URL;

const initialState = {
  isLoading: false,
  benchMarks: [],
  benchMark: {},
  projectMetas: [],
  error: "null",
  isCreated: false,
  annotationCalculation: {},
};

export const createBenchMark = createAsyncThunk("/createBenchMark", async (finaldata) => {
  const { data1, server_agent } = finaldata;
  return axios.post(`${url}/benchmark/${server_agent}`, data1, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const getProjectMeta = createAsyncThunk("/public/api/v3/projects", async (id) => {
  return axios.get(`${urlquantigo}/public/api/v3/projects.meta?id=${id}`, {
    headers: {
      "x-api-key": `${REACT_QUANTIGO_API_KEY}`,
    },
  });
});

export const getProjectMetaAg = createAsyncThunk("/public/api/v3/projects/agserver", async (id) => {
  return axios.get(`${urlag}/public/api/v3/projects.meta?id=${id}`, {
    headers: {
      "x-api-key": `${REACT_AG_API_KEY}`,
    },
  });
});

// calculate Annotation
export const calculateAnnotation = createAsyncThunk("spv/annotations/calculateannotation/:datasetId", async (data) => {
  const { datasetId, server_agent } = data;
  return axios.get(`${url}/spv/annotations/calculateannotation/${datasetId}/${server_agent}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//  get All BenchMark
export const getAllBenchMarks = createAsyncThunk("/benchmark", async (data) => {
  const { server_agent } = data;
  return axios.get(`${url}/benchmark/${server_agent}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// update A Benchmark By Id
export const updateABenchMarkById = createAsyncThunk("/benchmark/update", async (bulkData) => {
  const { id, data, server_agent } = bulkData;
  return axios.patch(`${url}/benchmark/${id}/${server_agent}`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//  Delete A BenchMark BY ID
export const deleteABenchMarkById = createAsyncThunk("/benchmarkA/delete", async (id) => {
  return axios.delete(`${url}/benchmark/${id}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//  get A benchMark By Project Id
export const getABenchMarkByProjectId = createAsyncThunk("/get/Abenchmark/projectId", async (finalData) => {
  const { id, category, server_agent } = finalData;
  return axios.get(`${url}/benchmark/project/${id}/${server_agent}?category=${category}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

const benchMarkSlice = createSlice({
  name: "benchMark",
  initialState: initialState,
  reducers: {
    // updateProjectMeta: () => initialState,
    updateBenchmarkData: () => initialState,
    resetProjectMetas: (state) => {
      state.projectMetas = [];
    },
    setBenchMarkLocal: (state, action) => {
      state.benchMark = action.payload;
    },
    resetCalculationData: (state) => {
      state.annotationCalculation = {};
    },
    resetBenchMarkSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBenchMark.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBenchMark.fulfilled, (state, action) => {
        state.isLoading = false;
        state.benchMark = action.payload.data.benchMark;
        state.error = null;
      })
      .addCase(createBenchMark.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProjectMeta.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectMeta.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.projectMetas = action.payload.data;
      })
      .addCase(getProjectMeta.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProjectMetaAg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectMetaAg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.projectMetas = action.payload.data;
      })
      .addCase(getProjectMetaAg.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(calculateAnnotation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(calculateAnnotation.fulfilled, (state, action) => {
        state.error = null;
        state.annotationCalculation = action.payload.data;
        state.isLoading = false;
      })
      .addCase(calculateAnnotation.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getAllBenchMarks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBenchMarks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.benchMarks = action.payload.data.benchMarks;
      })
      .addCase(getAllBenchMarks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getABenchMarkByProjectId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABenchMarkByProjectId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.benchMark = action.payload.data.data;
      })
      .addCase(getABenchMarkByProjectId.rejected, (state) => {
        state.isLoading = false;
        state.benchMark = {};
      })
      .addCase(deleteABenchMarkById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteABenchMarkById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteABenchMarkById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateABenchMarkById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateABenchMarkById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.benchMark = action.payload.data.benchMark;
      })
      .addCase(updateABenchMarkById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetBenchMarkSlice, resetProjectMetas, setBenchMarkLocal, resetCalculationData, updateBenchmarkData } = benchMarkSlice.actions;
export default benchMarkSlice.reducer;
