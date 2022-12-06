import {configureStore} from "@reduxjs/toolkit";

import userReducer from "../slice/userSlice";
import themeReducer from "../slice/themeSlice";
import courseSlice from "../slice/courseSlice";
import jobSlice from "../slice/jobSlice";

import teamSlice from "../slice/teamSlice";
import workSpaceSlice from "../slice/workSpaceSlice";
import projectByWorkspaceSlice from "../slice/projectByWorkspaceSlice";
import dataSetSlice from "../slice/dataSetSlice";
import benchMarkSlice from "../slice/benchMarkSlice";
import quizSlice from "../slice/quizSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseSlice,
    job: jobSlice,
    quiz: quizSlice,
    team: teamSlice,
    workspace : workSpaceSlice,
    project : projectByWorkspaceSlice,
    dataset : dataSetSlice,
    benchMark : benchMarkSlice,
   
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
