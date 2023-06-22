/*
 * File           : courseSlice.js
 * Project        : wmpv2
 * Created Date   : We 21 Dec 2022 11:27:57
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Dec 21 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../../helper/lib";
import {calculateProgress} from "../../helper/scoreStore";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  course: {},
  // courseChapters: {},
  courseChapters: [],
  courseChapter: {},
  quizzesResult: [],
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

// validate course
export const validateCourseName = createAsyncThunk(
  "validate/A/course",
  async (data) => {
    try {
      const response = await axios.post(
        `${url}/courses/checkcoursename`,
        data,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data);
    }
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

//delete A Chapter by id
export const deleteAChapterById = createAsyncThunk(
  "/chapter/delete/:id",
  async (id) => {
    return axios.delete(`${url}/coursechapter/${id}`, {
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
      content: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
);

// update a chapter by chapter ID
export const updateAChapterById = createAsyncThunk(
  "/courses/chapter/update/:id",
  async (newData) => {
    const { id, formData } = newData;
    return axios.patch(`${url}/coursechapter/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);


export const enrollACourse = createAsyncThunk(
  "/enroll/course",
  async (courseId) => {
    return axios.patch(
      `${url}/courses/enroll/${courseId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      }
    );
  }
);

// get All chapter from a course

export const getAllChapterFromACourse = createAsyncThunk(
  "course/chapters/:id",
  async (id) => {
    return axios.get(`${url}/coursechapter?rootCourse=${id}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

// get a chapter by ID

export const getAChapterById = createAsyncThunk(
  "course/a/chapter/:id",
  async (id) => {
    return axios.get(`${url}/coursechapter/${id}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

// create Course Chapter

export const createCourseChapter = createAsyncThunk(
  "/createCourse/chapter",
  async (data) => {
    return axios.post(`${url}/coursechapter`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
      content: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
);
// Get quiz results of a coursr
export const getCourseQuizzesResults = createAsyncThunk(
  "/courses/quizzes/results",
  async (courseId) => {
    return axios.get(`${url}/courses/results/${courseId}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
      content: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {
    manuallyUpdateCourse: (state, action) => {
      state.courseChapter = {
        ...state.courseChapter,
        quiz: action.payload,
      };
    },
    manuallySetCourseChapter: (state, action) => {
      state.courseChapter = state.courseChapters[action.payload];
    },

    manuallySetCourseChapterResult: (state, action) => {
      state.courseChapters = state.courseChapters.map((chapter) => {
        if (chapter.quiz.id === action.payload.quiz.id) {
          chapter.score = action.payload.score;
          chapter.scoreAverage = action.payload.scoreAverage;
        }
        return chapter;
      });
    },
  },
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
      .addCase(createCourseChapter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourseChapter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseChapters = state.courseChapters
          ? [...state.courseChapters, action.payload.data.courseChapter]
          : [action.payload.data.courseChapter];
        state.courseChapter = Object.keys(state.courseChapter).length
          ? state.courseChapter
          : action.payload.data.courseChapter;

        // state.courses = [...state.courses, action.payload.data];
      })
      .addCase(createCourseChapter.rejected, (state, action) => {
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
      .addCase(validateCourseName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateCourseName.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(validateCourseName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.data;
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
      .addCase(deleteAChapterById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAChapterById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseChapters = state.courseChapters.filter((chapter) => {
          return chapter._id !== action.payload.data.courseChapter._id;
        });
      })
      .addCase(deleteAChapterById.rejected, (state, action) => {
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
      })
      .addCase(updateAChapterById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAChapterById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseChapter = action.payload.data;
        state.courseChapters = [
          ...state.courseChapters.map((chapter) =>
            chapter._id === action.payload.data._id
              ? action.payload.data
              : chapter
          ),
        ];
      })
      .addCase(updateAChapterById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(enrollACourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(enrollACourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(enrollACourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllChapterFromACourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllChapterFromACourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseChapters = action.payload.data.courseChapters;
        state.courseChapter = action.payload.data.courseChapters
          ? action.payload.data.courseChapters[0]
          : {};
        state.course = {
          ...state.course,
          progress: calculateProgress(action.payload.data.courseChapters),
        };
      })
      .addCase(getAllChapterFromACourse.rejected, (state) => {
        state.isLoading = false;
        state.error = "Login failed";
      })
      .addCase(getAChapterById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAChapterById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseChapter = action.payload.data;
      })
      .addCase(getAChapterById.rejected, (state) => {
        state.isLoading = false;
        state.error = "Login failed";
      })
      .addCase(getCourseQuizzesResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourseQuizzesResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quizzesResult = action.payload.data.results;
      })
      .addCase(getCourseQuizzesResults.rejected, (state) => {
        state.isLoading = false;
        state.error = "Login failed";
      });
  },
});

export const {
  manuallyUpdateCourse,
  manuallySetCourseChapter,
  manuallySetCourseChapterResult,
} = courseSlice.actions;
export default courseSlice.reducer;
