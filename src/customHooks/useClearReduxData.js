/*
 * File           : useClearReduxData.js
 * Project        : wmpfrontv2
 * Created Date   : Th 07 Sep 2023 02:02:11
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Sep 07 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { updateProjectDirectoryData } from "../features/slice/ProjectDirectorySlice";
import { updateBenchmarkData } from "../features/slice/benchMarkSlice";
import { updateCourseData } from "../features/slice/courseSlice";
import { updateDashboardData } from "../features/slice/dashboardSlice";
import { updateDatasetData } from "../features/slice/datasetSlice";
import { updateJobData } from "../features/slice/jobSlice";
import { updateProjectData } from "../features/slice/projectByWorkspaceSlice";
import { clearProjectDrawerData } from "../features/slice/projectDrawerSlice";
import { updateQuizData } from "../features/slice/quizSlice";
import { updateSkillData } from "../features/slice/skillSlice";
import { updateTeamData } from "../features/slice/teamSlice";
import { updateWorkSpaceData } from "../features/slice/workSpaceSlice";

export default function useClearReduxData(dispatch, activePath, id = null) {
  const dispatchFunctions = [
    updateProjectDirectoryData,
    updateBenchmarkData,
    updateCourseData,
    updateDashboardData,
    updateDatasetData,
    updateJobData,
    updateProjectData,
    updateQuizData,
    updateSkillData,
    updateTeamData,
    updateWorkSpaceData,
    clearProjectDrawerData,
  ];

  const allPath = [
    "All Users 2",
    "All Projects 2",
    "Project Directory",
    "Sync Server",
    "Benchmark",
    "Jobs",
    "Course",
    "Projects",
    "Skill",
    "Dashboard",
    "All Projects2",
  ];

  const allowedPath = {
    updateDashboardData: ["Dashboard"], //clear
    updateJobData: ["Jobs"],
    updateBenchmarkData: ["Benchmark"],
    updateCourseData: ["Course"],
    updateTeamData: ["Benchmark", "Jobs", "Projects"],
    updateDatasetData: ["Benchmark", "Jobs", "Projects"],
    updateWorkSpaceData: ["Benchmark", "Jobs", "Projects"],
    updateProjectDirectoryData: ["Project Directory"],
    updateQuizData: ["Course"],
    updateProjectData: ["Benchmark", "Jobs", "Projects"],
    updateSkillData: ["All Users", "Jobs", "Course", "Projects", "Skill", "Dashboard", "All Projects2"],
    clearProjectDrawerData: [],
  };
  const allowedPathKeys = Object.keys(allowedPath);

  if (allPath.includes(activePath)) {
    allowedPathKeys.forEach((key) => {
      if (!allowedPath[key].includes(activePath)) {
        switch (key) {
          case "updateProjectDirectoryData":
            dispatch(updateProjectDirectoryData());
            break;
          case "updateBenchmarkData":
            dispatch(updateBenchmarkData());
            break;
          case "updateCourseData":
            dispatch(updateCourseData());
            break;
          case "updateDashboardData":
            dispatch(updateDashboardData());
            break;
          case "updateDatasetData":
            dispatch(updateDatasetData());
            break;
          case "updateJobData":
            dispatch(updateJobData());
            break;
          case "updateProjectData":
            dispatch(updateProjectData());
            break;
          case "updateQuizData":
            dispatch(updateQuizData());
            break;
          case "updateSkillData":
            dispatch(updateSkillData());
            break;
          case "updateTeamData":
            dispatch(updateTeamData());
            break;
          case "updateWorkSpaceData":
            dispatch(updateWorkSpaceData());
            break;
          case "clearProjectDrawerData":
            dispatch(clearProjectDrawerData());
            break;
          default:
            break;
        }
      }
    });
  }
}
