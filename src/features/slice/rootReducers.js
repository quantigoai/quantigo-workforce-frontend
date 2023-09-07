/*
 * File           : rootReducers.js
 * Project        : wmpfrontv2
 * Created Date   : Mo 31 Jul 2023 11:39:04
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Mon Jul 31 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import projectDirectoryReducer from "../slice/ProjectDirectorySlice";
import activePathReducer from "../slice/activePathSlice";
import benchMarkReducer from "../slice/benchMarkSlice";
import courseReducer from "../slice/courseSlice";
import dashboardReducer from "../slice/dashboardSlice";
import dataSetReducer from "../slice/datasetSlice";
import jobReducer from "../slice/jobSlice";
import notificationReducer from "../slice/notificationSlice";
import projectReducer from "../slice/projectByWorkspaceSlice";
import quizReducer from "../slice/quizSlice";
import skillReducer from "../slice/skillSlice";
import syncServerReducer from "../slice/syncServerSlice";
import teamReducer from "../slice/teamSlice";
import temporaryDataReducer from "../slice/temporaryDataSlice";
import themeReducer from "../slice/themeSlice";
import userReducer from "../slice/userSlice";
import workspaceReducer from "../slice/workSpaceSlice";
import projectDrawerReducer from "./projectDrawerSlice";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["auth", "skill"],
};

const rootReducers = combineReducers({
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
  projectDrawer: projectDrawerReducer,
});

export { rootPersistConfig, rootReducers };
