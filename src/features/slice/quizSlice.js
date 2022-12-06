import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {realToken} from "../lib/lib";

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  quiz: {},
  quizs: [],
  error: "null",
  isCreated: false,
};
export const createAQuiz = createAsyncThunk("/quizzes", async (data) => {
  return axios.post(`${url}/quizzes`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
// get all Quiz
export const getAllQuiz = createAsyncThunk("courses", async (data) => {
  return axios.get(`${url}/quizzes`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
// get a quiz By Course Id

export const getAQuizById = createAsyncThunk("/quizzes/:id", async (id) => {
  return axios.get(`${url}/quizzes/${id}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// update a Question Answer
export const updateQuizQA = createAsyncThunk(
  "/quiz/update/quizId/questionId",
  async (data) => {
    const { quizId, questionId, formData } = data;
    return axios.patch(`${url}/quizzes/${quizId}/${questionId}`, formData, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

// Update Quiz by ID
export const updateQuizById = createAsyncThunk(
  "/quizzes/update/:id",
  async (bulkData) => {
    const { id, data } = bulkData;
    return axios.patch(`${url}/quizzes/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createAQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        //   state.quizs =[...state.quizs, action.payload.data]
      })
      .addCase(createAQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quizs = action.payload.data;
      })
      .addCase(getAllQuiz.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAQuizById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAQuizById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quiz = action.payload.data;
      })
      .addCase(getAQuizById.rejected, (state, action) => {
        state.isLoading = false;
        state.quiz = {};
        state.error = action.error.message;
      })
      .addCase(updateQuizQA.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuizQA.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
      })
      .addCase(updateQuizQA.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateQuizById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuizById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.quiz = action.payload.data.data;
        state.quizs = state.quizs.map((quiz) => {
          if (quiz._id === action.payload.data.data._id) {
            return action.payload.data;
          }
          return quiz;
        });
      })
      .addCase(updateQuizById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;
