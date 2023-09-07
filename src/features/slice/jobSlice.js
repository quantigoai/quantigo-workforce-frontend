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

const REACT_SUPERVISLY_API_KEY = import.meta.env.VITE_APP_QUANTIGO_SUPERADMIN_KEY;
const urlsuper = import.meta.env.VITE_APP_QUANTIGOAPI_URL;

// Ag server
const REACT_AG_API_KEY = import.meta.env.VITE_APP_AG_KEY;
const urlag = import.meta.env.VITE_APP_AGAPI_URL;

const initialState = {
  isLoading: false,
  job: {},
  jobs: [],
  totalJobs: 0,
  myJobs: [],
  assignedJob: [],
  error: "",
  isCreated: false,
};
// All Courses get request
// TODO Handle the limit in dynamic way
export const getAllJobs = createAsyncThunk("job/getAlljobs", async (data) => {
  const { limit, skip, status, annotator, reviewerId, attemptLeft, projectIdFilter, skills, timeLimit, date } = data || {};
  let query = `isActive=true&sortBy=createdAt:desc&sortBy=title:asc`;

  if (status) {
    query += `&status=${status}`;
  }
  if (timeLimit) {
    query += `&sortBy=timeLimit:${timeLimit}`;
  }
  if (projectIdFilter) {
    query += `&projectId=${projectIdFilter}`;
  }
  if (limit) {
    query += `&limit=${limit}`;
  } else {
    query += `&limit=10`;
  }
  if (skip) {
    query += `&skip=${skip}`;
  } else {
    query += `&skip=0`;
  }
  if (annotator) {
    query += `&annotator=${annotator}`;
  }
  if (reviewerId) {
    query += `&reviewerId=${reviewerId}`;
  }
  if (attemptLeft) {
    query += `&attemptLeft=${attemptLeft}`;
  }
  if (skills) {
    for (let x in skills) {
      query += `&skills=${skills[x]}`;
    }
  }
  if (date) {
    query += `&createdAt=${date}`;
  }
  return axios.get(`${url}/jobs?${query}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//  create   Job
export const createJob = createAsyncThunk("job/createAjob", async (data) => {
  return axios.post(`${url}/jobs`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// video Job create

// TODO handle all slice similar this way for catch error
export const videoJobCreate = createAsyncThunk("jobs/videojobs", async (data) => {
  try {
    const response = await axios.post(`${url}/jobs/videojobs`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Take A job
export const takeAjob = createAsyncThunk("/assignedjobs/create/:id", async (id) => {
  return axios.post(
    `${url}/assignedjobs/create/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

//  submit a job
export const submitAJob = createAsyncThunk("job/assignedjobs/submitjob/:id", async (id) => {
  return axios.patch(
    `${url}/assignedjobs/submitjob/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

// get a job info by Id

export const getAjobInfoById = createAsyncThunk("/get/A/job/info/by/id", async (data) => {
  const { server_agent, id } = data;
  if (server_agent === "quantigo") {
    return axios.get(`${urlsuper}/public/api/v3/jobs.info?id=${id}`, {
      headers: {
        "x-api-key": `${REACT_SUPERVISLY_API_KEY}`,
      },
    });
  } else {
    return axios.get(`${urlag}/public/api/v3/jobs.info?id=${id}`, {
      headers: {
        "x-api-key": `${REACT_AG_API_KEY}`,
      },
    });
  }
});

export const getMyJobs = createAsyncThunk("assignedjobs/getmyjobs", async (data) => {
  const { status, annotator, reviewerId, attemptLeft, date } = data || {};
  //  let query = `isActive=true&sortBy=createdAt:desc`;
  let query = `sortBy=createdAt:desc`;

  if (status) {
    query += `&status=${status}`;
  }
  if (annotator) {
    query += `&annotator=${annotator}`;
  }
  if (reviewerId) {
    query += `&reviewerId=${reviewerId}`;
  }
  if (attemptLeft) {
    query += `&attemptLeft=${attemptLeft}`;
  }
  if (date) {
    query += `&createdAt=${date}`;
  }

  return axios.get(`${url}/assignedjobs/getmyjobs?${query}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// get Available jobs for reviewer
export const availableJobsForReviewer = createAsyncThunk("available/job/reviewer", async () => {
  return axios.get(`${url}/assignedjobs/reviewer-available-jobs`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// get all assigned jobs
export const getAllAssignedJob = createAsyncThunk("/assignedjobs/", async (data) => {
  const { status, annotator, reviewerId, attemptLeft, date } = data || {};
  let query = `sortBy=createdAt:desc`;
  if (status) {
    query += `&status=${status}`;
  }
  if (annotator) {
    query += `&annotator=${annotator}`;
  }
  if (reviewerId) {
    query += `&reviewerId=${reviewerId}`;
  }
  if (attemptLeft) {
    query += `&attemptLeft=${attemptLeft}`;
  }
  if (date) {
    query += `&createdAt=${date}`;
  }
  return axios.get(`${url}/assignedjobs?${query}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// add user to a Team
export const addUserToATeam = createAsyncThunk("assignedjobs/addusertoteam", async (bulkData) => {
  const { id, role } = bulkData;
  return axios.post(
    `${url}/qaiusers/addToTeam/${id}`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});
// add default reviewer to a Team
export const addDefaultReviewer = createAsyncThunk("assignedjobs/addDefaultReviewer", async (bulkData) => {
  const { id, role } = bulkData;
  return axios.post(
    `${url}/qaiusers/addDefaultReviewer/${id}`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

// add default annotator to a Team
export const addDefaultAnnotator = createAsyncThunk("assignedjobs/addDefaultAnnotator", async (bulkData) => {
  const { id, role } = bulkData;
  return axios.post(
    `${url}/qaiusers/addDefaultAnnotator/${id}`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
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
  return axios.post(`${url}/assignedjobs/reassigned`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Pause And resume A job
export const pauseResumeJobs = createAsyncThunk("assignedjobs/changestatus", async (data) => {
  return axios.patch(`${url}/assignedjobs/changestatus`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Change Supervisely Status while redirect to job link
export const superJobSetStatus = createAsyncThunk("/public/api/v3/jobs-set/status", async (id) => {
  return axios.get(`${urlsuper}/public/api/v3/jobs.set-status?id=${id}&status=in_progress`, {
    headers: {
      "x-api-key": `${REACT_SUPERVISLY_API_KEY}`,
    },
  });
});

// Check Job Expiration time
export const checkJobExpiration = createAsyncThunk("job/checkJobExpiration", async (id) => {
  return axios.post(
    `${url}/assignedjobs/checkexpiration/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

// take a job for reviewer

export const takeJobForReviewer = createAsyncThunk("job/take/reviewer", async (data) => {
  const { jobId, assignedJobId } = data;
  return axios.post(
    `${url}/assignedjobs/takejob-reviewer/${jobId}/${assignedJobId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});

//  get Video Id

export const getVideoId = createAsyncThunk("/get/video/Id", async (id) => {
  try {
    return await axios.get(`${urlag}/public/api/v3/videos.list?datasetId=${id}`, {
      headers: {
        "x-api-key": `${REACT_AG_API_KEY}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    updateJobData: () => initialState,
    removeSingleJobFromAvailable: (state, action) => {
      state.jobs = state.jobs.filter((job) => job._id !== action.payload._id);
    },
    resetJobSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.jobs = action.payload.data.data;
        state.totalJobs = action.payload.data.total;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(availableJobsForReviewer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(availableJobsForReviewer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.jobs = action.payload.data.data;
        state.totalJobs = action.payload.data.count;
      })
      .addCase(availableJobsForReviewer.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = [...state.jobs, ...action.payload.data.jobs];
        state.error = null;
      })
      .addCase(createJob.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(videoJobCreate.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(videoJobCreate.fulfilled, (state, action) => {
        if (action.payload.status !== 204) {
          state.jobs = [...state.jobs, ...action.payload.data.jobs];
        }
        state.isLoading = false;
      })
      // TODO handle all slice similar this way for catch error
      .addCase(videoJobCreate.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(takeAjob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(takeAjob.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.status !== 204 && action.payload.status !== 205) {
          state.jobs = state.jobs.filter((job) => job._id !== action.payload.data.data.assignedJob.job.id);
          state.myJobs = [action.payload.data.data.assignedJob, ...state.myJobs];
        }
      })
      .addCase(takeAjob.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(takeJobForReviewer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(takeJobForReviewer.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.status === 200) {
          state.jobs = state.jobs.filter((item) => item.job.id._id !== action.payload.data.assignedJob.job.id);
          state.myJobs = [action.payload.data.assignedJob, ...state.myJobs];
        }
      })
      .addCase(takeJobForReviewer.rejected, (state) => {
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
      })
      .addCase(submitAJob.pending, (state) => {
        state.isLoading = true;
      })
      // TODO : State not update properly after submission
      .addCase(submitAJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.myJobs = [action.payload.data.data.assignedJob, ...state.myJobs.filter((myJob) => myJob._id !== action.payload.data.data.assignedJob._id)];
      })
      .addCase(submitAJob.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateReviewerStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateReviewerStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.status !== 204) {
          // (job) => job._id !== action.payload.data.data._id
          state.myJobs = state.myJobs.map((job) => {
            if (job._id !== action.payload.data.data._id) {
              return job;
            } else {
              return action.payload.data.data;
            }
          });
        }
      })
      .addCase(updateReviewerStatus.rejected, (state) => {
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
      })
      .addCase(assignedJobToAUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(assignedJobToAUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        // state.job.jobs = state.job.jobs.filter( (job) => job._id !== action.payload.data.data.assignedJob._id )
        // state.myJobs = [...state.myJobs, action.payload.data.data.assignedJob];
      })
      .addCase(assignedJobToAUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(pauseResumeJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(pauseResumeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.assignedJob = state.assignedJob.map((job) => (job._id === action.payload.data[0]._id ? action.payload.data[0] : job));
      })
      .addCase(pauseResumeJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addUserToATeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserToATeam.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUserToATeam.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDefaultReviewer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDefaultReviewer.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDefaultReviewer.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDefaultAnnotator.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDefaultAnnotator.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDefaultAnnotator.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(superJobSetStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(superJobSetStatus.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(superJobSetStatus.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAjobInfoById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAjobInfoById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAjobInfoById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(checkJobExpiration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkJobExpiration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myJobs = state.myJobs.map((jobs) => {
          if (jobs._id === action.payload.data.data.assignedJob._id) {
            return action.payload.data.data.assignedJob;
          }
          return jobs;
        });
        state.error = null;
      })
      .addCase(checkJobExpiration.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getVideoId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideoId.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getVideoId.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export const { resetJobSlice, removeSingleJobFromAvailable, updateJobData } = jobSlice.actions;
export default jobSlice.reducer;
