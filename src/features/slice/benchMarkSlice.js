import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const REACT_SUPERVISLY_API_KEY=process.env.REACT_APP_KEY

const urlsuper =process.env.REACT_APP_SUPERVISLYAPL_URL;

const initialState={
    isLoading: false,
    benchMarks:[],
    prjectMetas:[],
    error: "null",
    isCreated: false,  
};


export const createBenchMark =createAsyncThunk("/createBenchMark", async (data)=>{
    return axios.post(`${url}/benchmark`,data,{
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
});

export const getProjectMeta =createAsyncThunk("/public/api/v3/projects",async(id)=>{
   
    return axios.get(`${urlsuper}/public/api/v3/projects.meta?id=${id}`,{
        headers:{
           "x-api-key" : `${REACT_SUPERVISLY_API_KEY}`,
        },
    });
});

// calculate Annotation
export const calculateAnnotation = createAsyncThunk("spv/annotations/calculateannotation/:datasetId",async(datasetId)=>{
   
  return axios.get(`${url}/spv/annotations/calculateannotation/${datasetId}`,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//  get All BenchMark
export const getAllBenchMarks =createAsyncThunk("/benchmark",async()=>{

 return axios.get(`${url}/benchmark`,{
   headers: {
     Authorization: `Bearer ${realToken()}`,
   },
 });
});

// update A Benchmark By Id
export const updateABenchMarkById =createAsyncThunk("/benchmark/update",async(data,id)=>{

  return axios.patch(`${url}/benchmark/${id}`,data,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
 });

//  Delete A BenchMark BY ID

export const deleteABenchMarkById =createAsyncThunk("/benchmarkA/delete",async(id)=>{

  return axios.delete(`${url}/benchmark/${id}`,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
 });

//  get A benchMark By Project Id
export const getABenchMarkByProjectId =createAsyncThunk("/get/Abenchmark/projectId",async(id)=>{

  return axios.get(`${url}/benchmark/project/${id}`,{
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
 });



const jobSlice = createSlice({
    name: "benchMark",
    initialState: initialState,
    extraReducers: (builder) => {
      builder
      .addCase(createBenchMark.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBenchMark.fulfilled, (state, action) => {
    
        state.isLoading = false;
        state.error = null;
        state.benchMark= action.payload.data;
        
      })
      .addCase(createBenchMark.rejected, (state, action) => {
        state.isLoading = false;
        
      })
      .addCase(getProjectMeta.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectMeta.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.prjectMetas = action.payload.data;

      })
      .addCase(getProjectMeta.rejected, (state) => {
        state.isLoading = false;
       ;
      })
      .addCase(calculateAnnotation.pending, (state) => {
        state.isLoading = true;

      })
      .addCase(calculateAnnotation.fulfilled, (state, action) => {
        
        state.error = null;
        state.benchMarks = action.payload.data;
        state.isLoading = false;
      })
      .addCase(calculateAnnotation.rejected, (state) => {
        state.isLoading = false;
       ;
      })

      .addCase(getAllBenchMarks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBenchMarks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        
      })
      .addCase(getAllBenchMarks.rejected, (state) => {
        state.isLoading = false;
       ;
      })
      .addCase(getABenchMarkByProjectId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABenchMarkByProjectId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.benchMark =action.payload.data.data
        
      })
      .addCase(getABenchMarkByProjectId.rejected, (state) => {
        state.isLoading = false;
       ;
      })
      .addCase(deleteABenchMarkById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteABenchMarkById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
    
        
      })
      .addCase(deleteABenchMarkById.rejected, (state) => {
        state.isLoading = false;
       ;
      })
      ;
    },
  });
  
  export default jobSlice.reducer;
  