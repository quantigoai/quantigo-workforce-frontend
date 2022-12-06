import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  course: {},
  courses: [],
  error: "null",
  isCreated: false,
};
// All Courses get request
export const getAllCourses = createAsyncThunk("courses", async (data) => {
  return axios.get(`${url}/courses`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
export const getACourseByID = createAsyncThunk("course/:id", async (id) => {
  return axios.get(`${url}/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (data) => {
    return axios.post(`${url}/courses`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
      content: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
);

// Delate a course by Id
export const deleteACourseById = createAsyncThunk(
  "/courses/delete/:id",
  async (id) => {
    return axios.delete(`${url}/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);
// Update A Course 

export const updateACourseById = createAsyncThunk(
  "/courses/update/:id",
  async (data) => {
    const { id, formData } = data;
    return axios.patch(`${url}/courses/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
      // content: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = [...state.courses, action.payload.data];
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload.data;
      })
      .addCase(getAllCourses.rejected, (state) => {
        state.isLoading = false;
        state.error = "Login failed";
      })
      .addCase(getACourseByID.pending, (state) => {
        state.isLoading = true;
        state.course = {};
      })
      .addCase(getACourseByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.course = action.payload.data;
      })
      .addCase(getACourseByID.rejected, (state) => {
        state.isLoading = false;
        state.error = "Login failed";
      })
      .addCase(deleteACourseById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteACourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = [
          ...state.courses.filter(
            (course) => course._id !== action.payload.data._id
          ),
        ];
      })
      .addCase(deleteACourseById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateACourseById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateACourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.course = action.payload.data;
        state.error = null;
        state.courses = [...state.courses, action.payload.data];
      })
      .addCase(updateACourseById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
