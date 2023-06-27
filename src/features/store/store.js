/*
 * File           : store.js
 * Project        : wmpv2
 * Created Date   : Tu 13 Dec 2022 01:22:38
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Dec 13 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import { configureStore } from "@reduxjs/toolkit";

import benchMarkReducer from "../slice/benchMarkSlice";
import courseReducer from "../slice/courseSlice";
import dashboardReducer from "../slice/dashboardSlice";
import dataSetReducer from "../slice/datasetSlice";
import jobReducer from "../slice/jobSlice";
import projectReducer from "../slice/projectByWorkspaceSlice";
import quizReducer from "../slice/quizSlice";
import skillReducer from "../slice/skillSlice";
import teamReducer from "../slice/teamSlice";
import themeReducer from "../slice/themeSlice";
import userReducer from "../slice/userSlice";
import workspaceReducer from "../slice/workSpaceSlice";
import activePathReducer from "../slice/activePathSlice";
import syncServerReducer from "../slice/syncServerSlice";
import temporaryDataReducer from "../slice/temporaryDataSlice";
import notificationReducer from "../slice/notificationSlice";
import projectDirectoryReducer from "../slice/ProjectDirectory";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    job: jobReducer,
    team: teamReducer,
    workspace: workspaceReducer,
    project: projectReducer,
    benchMark: benchMarkReducer,
    dataset: dataSetReducer,
    course: courseReducer,
    quiz: quizReducer,
    dashboard: dashboardReducer,
    skill: skillReducer,
    serverSync: syncServerReducer,
    activePath: activePathReducer,
    tempData: temporaryDataReducer,
    notification: notificationReducer,
    projectDirectory: projectDirectoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
