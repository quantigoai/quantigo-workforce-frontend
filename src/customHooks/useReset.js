/*
 * File           : useReset.js
 * Project        : wmpfrontv2
 * Created Date   : Th 07 Sep 2023 11:44:42
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

import {resetProjectDirectorySlice, updateProjectDirectoryData} from "../features/slice/ProjectDirectorySlice";
import {resetBenchMarkSlice, updateBenchmarkData} from "../features/slice/benchMarkSlice";
import {resetCourseSlice, updateCourseData} from "../features/slice/courseSlice";
import {resetDashboardSlice, updateDashboardData} from "../features/slice/dashboardSlice";
import {resetDataSetSlice, updateDatasetData} from "../features/slice/datasetSlice";
import {resetJobSlice, updateJobData} from "../features/slice/jobSlice";
import {resetNotificationSlice} from "../features/slice/notificationSlice";
import {resetProjectByWorkspaceSlice, updateProjectData} from "../features/slice/projectByWorkspaceSlice";
import {resetProjectDrawerSlice} from "../features/slice/projectDrawerSlice";
import {resetQuizSlice, updateQuizData} from "../features/slice/quizSlice";
import {resetSkillSlice, updateSkillData} from "../features/slice/skillSlice";
import {resetSyncServerSlice} from "../features/slice/syncServerSlice";
import {resetTeamSlice, updateTeamData} from "../features/slice/teamSlice";
import {resetTemporaryDataSlice} from "../features/slice/temporaryDataSlice";
import {resetUserSlice} from "../features/slice/userSlice";
import {resetWorkspaceSlice, updateWorkSpaceData} from "../features/slice/workSpaceSlice";

export default function useReset(dispatch, role, activePath = "/") {
    if (role === "admin") {
        dispatch(resetUserSlice());
        dispatch(resetProjectDirectorySlice());
        dispatch(resetBenchMarkSlice());
        dispatch(resetCourseSlice());
        dispatch(resetDashboardSlice());
        dispatch(resetDataSetSlice());
        dispatch(resetJobSlice());
        dispatch(resetNotificationSlice());
        dispatch(resetProjectByWorkspaceSlice());
        dispatch(resetProjectDrawerSlice());
        dispatch(resetQuizSlice());
        dispatch(resetSkillSlice());
        dispatch(resetSyncServerSlice());
        dispatch(resetTeamSlice());
        dispatch(resetTemporaryDataSlice());
        dispatch(resetWorkspaceSlice());
    }

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
