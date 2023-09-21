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
import { updateQuizData } from "../features/slice/quizSlice";
import { updateSkillData } from "../features/slice/skillSlice";
import { updateTeamData } from "../features/slice/teamSlice";
import { updateWorkSpaceData } from "../features/slice/workSpaceSlice";

export default function useClearReduxData(dispatch, activePath) {
  if (activePath === "All Users") {
    dispatch(updateDashboardData());
    dispatch(updateJobData());
    dispatch(updateBenchmarkData());
    dispatch(updateCourseData());
    dispatch(updateTeamData());
    dispatch(updateDatasetData());
    dispatch(updateWorkSpaceData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateQuizData());
    dispatch(updateProjectData());
  }
  if (activePath === "Project Directory") {
    dispatch(updateDashboardData());
    dispatch(updateJobData());
    dispatch(updateBenchmarkData());
    dispatch(updateCourseData());
    dispatch(updateTeamData());
    dispatch(updateDatasetData());
    dispatch(updateWorkSpaceData());
    dispatch(updateQuizData());
    dispatch(updateProjectData());
    dispatch(updateSkillData());
  }
  if (activePath === "Sync Server") {
    dispatch(updateDashboardData());
    dispatch(updateJobData());
    dispatch(updateBenchmarkData());
    dispatch(updateCourseData());
    dispatch(updateTeamData());
    dispatch(updateDatasetData());
    dispatch(updateWorkSpaceData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateQuizData());
    dispatch(updateProjectData());
    dispatch(updateSkillData());
  }
  if (activePath === "Benchmark") {
    dispatch(updateDashboardData());
    dispatch(updateJobData());
    dispatch(updateCourseData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateQuizData());
    dispatch(updateSkillData());
  }
  if (activePath === "Jobs") {
    dispatch(updateDashboardData());
    dispatch(updateBenchmarkData());
    dispatch(updateCourseData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateQuizData());
  }
  if (activePath === "Course") {
    dispatch(updateDashboardData());
    dispatch(updateJobData());
    dispatch(updateBenchmarkData());
    dispatch(updateTeamData());
    dispatch(updateDatasetData());
    dispatch(updateWorkSpaceData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateProjectData());
  }
  if (activePath === "Projects") {
    dispatch(updateDashboardData());
    dispatch(updateJobData());
    dispatch(updateBenchmarkData());
    dispatch(updateCourseData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateQuizData());
  }
  if (activePath === "Skill") {
    dispatch(updateDashboardData());
    dispatch(updateJobData());
    dispatch(updateBenchmarkData());
    dispatch(updateCourseData());
    dispatch(updateTeamData());
    dispatch(updateDatasetData());
    dispatch(updateWorkSpaceData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateQuizData());
    dispatch(updateProjectData());
  }
  if (activePath === "Dashboard") {
    dispatch(updateJobData());
    dispatch(updateBenchmarkData());
    dispatch(updateCourseData());
    dispatch(updateTeamData());
    dispatch(updateDatasetData());
    dispatch(updateWorkSpaceData());
    dispatch(updateProjectDirectoryData());
    dispatch(updateQuizData());
    dispatch(updateProjectData());
  }
}

// const allPath = []
// const allowedPath = {
//   "All Users": ["All Users"],

// }
// export default function useClearReduxData(dispatch, activePath, allpath, allowedPath) {
//   // Check if the activePath is in the allowedPath configuration
//   const isAllowed = Object.values(allowedPath).some((paths) => paths.includes(activePath));

//   if (!isAllowed) {
//     // Dispatch updates if the activePath is not in the allowedPath
//     const updatesToDispatch = [
//       updateDashboardData(),
//       updateJobData(),
//       updateBenchmarkData(),
//       updateCourseData(),
//       updateTeamData(),
//       updateDatasetData(),
//       updateWorkSpaceData(),
//       updateProjectDirectoryData(),
//       updateQuizData(),
//       updateProjectData(),
//       updateSkillData(),
//     ];

//     updatesToDispatch.forEach((update) => {
//       dispatch(update);
//     });
//   }
// }
