import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  job: {},
  jobs: [],
  myJobs: [],
  assignedJob :[],
  error: "null",
  isCreated: false,
};
// All Courses get request
export const getAllJobs = createAsyncThunk("job/getAlljobs", async (data) => {
  return axios.get(`${url}/jobs?isActive=true`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
//  create   Job 
export const createJob = createAsyncThunk("job/createAjob", async (data) => {
  return axios.post(`${url}/jobs`,data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Take A job
export const takeAjob = createAsyncThunk("/assignedjobs/create/:id", async (id) => {
  return axios.post(`${url}/assignedjobs/create/${id}`,{}, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//  submit a job
export const submitAJob = createAsyncThunk("job/assignedjobs/submitjob/:id", async (id) => {
  return axios.patch(`${url}/assignedjobs/submitjob/${id}`,{}, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const getMyJobs = createAsyncThunk("assignedjobs/getmyjobs", async (data) => {
  return axios.get(`${url}/assignedjobs/getmyjobs`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// get all assigned jobs
export const getAllAssignedJob = createAsyncThunk("/assignedjobs/", async (data) => {
  return axios.get(`${url}/assignedjobs/`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});



// Update Reviewer Status

export const updateReviewerStatus = createAsyncThunk("assignedjobs/updatereviewstatus/:id", async (data) => {
  return axios.patch(`${url}/assignedjobs/updatereviewstatus/${data.id}`, data.data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Assign Job to A User reassigned
export const assignedJobToAUser = createAsyncThunk("assignedjobs/reassigned", async (data) => {
  console.log(data)
  return axios.post(`${url}/assignedjobs/reassigned`,data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});


// pause And resume A job

export const pauseResumeJobs = createAsyncThunk("assignedjobs/changestatus", async (data) => {
  console.log(data)
  return axios.patch(`${url}/assignedjobs/changestatus`,data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});



const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.jobs = action.payload.data;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.isLoading = false;
       ;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        console.log(action)
        state.isLoading = false;
        state.error = null;
        state.job = action.payload.data;
        
        
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        
      })
      .addCase(takeAjob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(takeAjob.fulfilled, (state, action) => {
        // console.log("sdasdasdasdasdasd", state)
        state.isLoading = false;
        state.error = null;
        state.job.jobs = state.job.jobs.filter( (job) => job._id !== action.payload.data.data.assignedJob._id ) 
        state.myJobs = [...state.myJobs, action.payload.data.data.assignedJob];
        
        
      })
      .addCase(takeAjob.rejected, (state, action) => {
        state.isLoading = false;
        
      })
      .addCase(getMyJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.myJobs = action.payload.data.data.assignedJobs;
      })
      .addCase(getMyJobs.rejected, (state) => {
        state.isLoading = false;
       ;
      })
      .addCase(submitAJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitAJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.myJobs = [...state.myJobs.filter((myJob)=> myJob._id !== action.payload.data.data.assignedJob._id), action.payload.data.data.assignedJob ];
        
        
      })
      .addCase(submitAJob.rejected, (state, action) => {
        state.isLoading = false;
        
      })
      .addCase(updateReviewerStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateReviewerStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.myJobs = state.myJobs.filter((job) => job._id !== action.payload.data.data._id ) 
        
      })
      .addCase(updateReviewerStatus.rejected, (state, action) => {
        state.isLoading = false;
        
      })
      .addCase(getAllAssignedJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAssignedJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.assignedJob = action.payload.data.data.assignedJobs;
      })
      .addCase(getAllAssignedJob.rejected, (state) => {
        state.isLoading = false;
       ;
      })
      .addCase(assignedJobToAUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(assignedJobToAUser.fulfilled, (state, action) => {
       state.isLoading = false;
        state.error = null;
        // state.job.jobs = state.job.jobs.filter( (job) => job._id !== action.payload.data.data.assignedJob._id ) 
        // state.myJobs = [...state.myJobs, action.payload.data.data.assignedJob];
        
        
      })
      .addCase(assignedJobToAUser.rejected, (state, action) => {
        state.isLoading = false;
        
      })
      .addCase(pauseResumeJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(pauseResumeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
    
        
      })
      .addCase(pauseResumeJobs.rejected, (state, action) => {
        state.isLoading = false;
        
      });
  },
});

export default jobSlice.reducer;
