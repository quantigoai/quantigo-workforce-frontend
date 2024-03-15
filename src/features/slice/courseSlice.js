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
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { realToken } from '../../helper/lib';
import { calculateProgress } from '../../helper/scoreStore';

const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: true,
  course: {},
  // courseChapters: {},
  courseChapters: [],
  courseChapter: {},
  courseMeta: {},
  archivedCourseMeta: {},
  total: 0,
  quizzesResult: [],
  isEnrollAble: true,
  enrolmentMessage: '',
  courses: [],
  myCourses: [],
  myArchivedCourses: [],
  error: 'null',
  isCreated: false,
};
// All Courses get request
export const getAllCourses = createAsyncThunk('courses', async (data) => {
  const { level, search, filter } = data;
  try {
    let query = '';
    if (level) {
      query += `level=${level}`;
    }
    if (search) {
      query += `&search=${search}`;
    }
    const filterOptions = filter && Object.keys(filter);
    if (filterOptions) {
      filterOptions.map((f) => (query += `&${f}=${filter[f]}`));
    }
    return await axios.get(`${url}/courses?${query}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// All Courses New

export const getAllCoursesNew = createAsyncThunk('coursesNew', async (data) => {
  const { filter, search } = data;

  try {
    let query = '';

    if (search) {
      query += `search=${search}`;
    }
    const filterOptions = filter && Object.keys(filter);
    if (filterOptions) {
      // query += `&${filter}=${search}`;
      filterOptions.map((f) => (query += `&${f}=${filter[f]}`));
    }
    return await axios.get(`${url}/courses/get-all-courses?${query}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const getMyCourses = createAsyncThunk('myCourses', async (data) => {
  const { filter, search, pagination } = data;

  try {
    let query = `limit=${pagination.pageSize}&skip=${
      pagination.currentPage * pagination.pageSize
    }`;
    if (pagination) {
      query = `limit=${pagination.pageSize}`;
    }

    if (search) {
      query += `&search=${search}`;
    }
    const filterOptions = filter && Object.keys(filter);
    if (filterOptions) {
      // query += `&${filter}=${search}`;
      filterOptions.map((f) => (query += `&${f}=${filter[f]}`));
    }
    return await axios.get(`${url}/courses/get-my-enrolled-course?${query}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const getCoursesCount = createAsyncThunk('coursesCount', async () => {
  try {
    return await axios.get(`${url}/courses/get-all-courses-count`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const getArchivedCourses = createAsyncThunk(
  'archivedCourses',
  async (data) => {
    const { filter, search, pagination } = data;
    try {
      let query = `limit=${pagination.pageSize}&skip=${
        pagination.currentPage * pagination.pageSize
      }`;

      if (search) {
        query += `search=${search}`;
      }
      const filterOptions = filter && Object.keys(filter);
      if (filterOptions) {
        // query += `&${filter}=${search}`;
        filterOptions.map((f) => (query += `&${f}=${filter[f]}`));
      }
      return await axios.get(`${url}/courses/get-my-archived-course?${query}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

// all course series
export const getAllCourseSeries = createAsyncThunk(
  'course/get-all-courses-series/:id',
  async (id) => {
    try {
      return await axios.get(`${url}/courses/get-all-courses-series/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

// all course series
export const getAllRelatedCourses = createAsyncThunk(
  'course/getAll-Related-Courses/:id',
  async (id) => {
    try {
      return await axios.get(`${url}/courses/get-all-related-courses/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const getACourseByID = createAsyncThunk('course/:id', async (id) => {
  try {
    return await axios.get(`${url}/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const createCourse = createAsyncThunk(
  'courses/createCourse',
  async (data) => {
    try {
      return await axios.post(`${url}/courses`, data, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
        content: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

// validate course
export const validateCourseName = createAsyncThunk(
  'validate/A/course',
  async (data) => {
    try {
      const response = await axios.post(
        `${url}/courses/checkcoursename`,
        data,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
);

// Delate a course by Id
export const deleteACourseById = createAsyncThunk(
  '/courses/delete/:id',
  async (id) => {
    try {
      return await axios.delete(`${url}/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

//delete A Chapter by id
export const deleteAChapterById = createAsyncThunk(
  '/chapter/delete/:id',
  async (id) => {
    try {
      return await axios.delete(`${url}/coursechapter/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);
// Update A Course

export const updateACourseById = createAsyncThunk(
  '/courses/update/:id',
  async (data) => {
    const { id, formData } = data;
    try {
      return await axios.patch(`${url}/courses/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
        content: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

// update a chapter by chapter ID
export const updateAChapterById = createAsyncThunk(
  '/courses/chapter/update/:id',
  async (newData) => {
    const { id, formData } = newData;
    try {
      return await axios.patch(`${url}/coursechapter/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const enrollACourse = createAsyncThunk(
  '/enroll/course',
  async (courseId) => {
    try {
      return await axios.patch(
        `${url}/courses/enroll/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

// get All chapter from a course

export const getAllChapterFromACourse = createAsyncThunk(
  'course/chapters/:id',
  async (id) => {
    try {
      return await axios.get(`${url}/coursechapter?rootCourse=${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

// get a chapter by ID

export const getAChapterById = createAsyncThunk(
  'course/a/chapter/:id',
  async (id) => {
    try {
      return await axios.get(`${url}/coursechapter/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);
export const getAllReviewForCourseId = createAsyncThunk(
  '/review/course/:courseId/:id',
  async (id) => {
    try {
      return await axios.get(`${url}/review/course/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);
// create Course Chapter

export const createCourseChapter = createAsyncThunk(
  '/createCourse/chapter',
  async (data) => {
    try {
      return await axios.post(`${url}/coursechapter`, data, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
        content: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);
// Get quiz results of a coursr
export const getCourseQuizzesResults = createAsyncThunk(
  '/courses/quizzes/results',
  async (courseId) => {
    try {
      return await axios.get(`${url}/courses/results/${courseId}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
        content: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const createCourseReview = createAsyncThunk(
  'courses/CourseReview',
  async (FinalData) => {
    const { id, data } = FinalData;
    try {
      return await axios.post(`${url}/review/create/${id}`, data, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

const courseSlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {
    updateCourseData: () => initialState,
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

    resetCourseSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.courses = [...state.courses, action.payload.data.course];
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createCourseChapter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourseChapter.fulfilled, (state, action) => {
        state.courseChapters = state.courseChapters
          ? [...state.courseChapters, action.payload.data.courseChapter]
          : [action.payload.data.courseChapter];
        state.courseChapter = action.payload.data.courseChapter;
        state.isLoading = false;
      })
      .addCase(createCourseChapter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.courses = action.payload.data.courses;
        state.isLoading = false;
      })
      .addCase(getAllCourses.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllCoursesNew.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoursesNew.fulfilled, (state, action) => {
        state.courses = action.payload.data.courses;
        state.isLoading = false;
      })
      .addCase(getAllCoursesNew.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMyCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyCourses.fulfilled, (state, action) => {
        state.myCourses = action.payload.data.enrolledCourses;
        state.courseMeta = action.payload.data.meta;
        state.total = action.payload.data.total;
        state.isLoading = false;
      })
      .addCase(getCoursesCount.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCoursesCount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoursesCount.fulfilled, (state, action) => {
        // state.courses = action.payload.data.enrolledCourses;
        state.isLoading = false;
      })
      .addCase(getMyCourses.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getArchivedCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArchivedCourses.fulfilled, (state, action) => {
        state.myArchivedCourses = action.payload.data.archivedCourses;
        state.archivedCourseMeta = action.payload.data.meta;
        state.total = action.payload.data.total;
        state.isLoading = false;
      })
      .addCase(getArchivedCourses.rejected, (state, action) => {
        state.isLoading = false;
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
        state.course = {};
        state.isLoading = true;
      })
      .addCase(getACourseByID.fulfilled, (state, action) => {
        state.course = action.payload.data.course;
        state.enrolmentMessage = action.payload.data.enrolmentMessage;
        state.isEnrollAble = action.payload.data.isEnrollAble;
        state.isLoading = false;
      })
      .addCase(getACourseByID.rejected, (state) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getAllCourseSeries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourseSeries.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getAllCourseSeries.rejected, (state) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getAllRelatedCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRelatedCourses.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getAllRelatedCourses.rejected, (state) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteACourseById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteACourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = [
          ...state.courses.filter(
            (course) => course._id !== action.payload.data.course._id,
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
        state.courseChapters = state.courseChapters.filter((chapter) => {
          return chapter._id !== action.payload.data.courseChapter._id;
        });
        state.isLoading = false;
      })
      .addCase(deleteAChapterById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateACourseById.pending, (state) => {
        state.isLoading = true;
      })
      // TODO check if this is working
      .addCase(updateACourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.course = action.payload.data.course;
        state.error = null;
        state.courses = [...state.courses, action.payload.data.course];
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
        state.courseChapter = action.payload.data.courseChapter;
        state.courseChapters = [
          ...state.courseChapters.map((chapter) =>
            chapter._id === action.payload.data.courseChapter._id
              ? action.payload.data.courseChapter
              : chapter,
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
        state.courseChapters = action.payload.data.courseChapters;
        state.courseChapter = action.payload.data.courseChapters
          ? action.payload.data.courseChapters[0]
          : {};
        state.course = {
          ...state.course,
          progress: calculateProgress(action.payload.data.courseChapters),
        };
        state.isLoading = false;
      })
      .addCase(getAllChapterFromACourse.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Login failed';
      })
      .addCase(getAChapterById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAChapterById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseChapter = action.payload.data.courseChapter;
      })
      .addCase(getAChapterById.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Login failed';
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
        state.error = 'Login failed';
      })
      .addCase(createCourseReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourseReview.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createCourseReview.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllReviewForCourseId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllReviewForCourseId.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getAllReviewForCourseId.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  resetCourseSlice,
  manuallyUpdateCourse,
  manuallySetCourseChapter,
  manuallySetCourseChapterResult,
  updateCourseData,
} = courseSlice.actions;
export default courseSlice.reducer;
