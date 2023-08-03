import { Box } from "@mui/material";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import "./App.css";
import Routers from "./components/primary/Routers/Routers";
import {
  availableJobsForReviewer,
  getAllAssignedJob,
  getAllJobs,
  getMyJobs,
  updateJobData,
} from "./features/slice/jobSlice";
import {
  deleteBefore15DaysNotifications,
  getAllNotifications,
  getAllUnreadNotifications,
  getLatestNotifications,
  setNewNotification,
} from "./features/slice/notificationSlice";
import { setFromPreviousTheme } from "./features/slice/themeSlice";
import {
  alreadyLogin,
  updateLoggedInUserManually,
  updateSingleUserManually,
} from "./features/slice/userSlice";
import socketHandlers from "./socketHandlers";
// import RoutersLogin from "./components/primary/Routers/RoutersLogin";
const RoutersLogin = lazy(() =>
  import("./components/primary/Routers/RoutersLogin")
);
// import Layout from "./components/shared/Layout/Layout";
const Layout = lazy(() => import("./components/shared/Layout/Layout"));

import CryptoJS from "crypto-js";
import LoadingComponent from "./components/shared/Loading/LoadingComponent";
import { updateProjectDirectoryData } from "./features/slice/ProjectDirectory";
import { updateBenchmarkData } from "./features/slice/benchMarkSlice";
import { updateCourseData } from "./features/slice/courseSlice";
import { updateDashboardData } from "./features/slice/dashboardSlice";
import { updateDatasetData } from "./features/slice/datasetSlice";
import { updateProjectData } from "./features/slice/projectByWorkspaceSlice";
import { updateQuizData } from "./features/slice/quizSlice";
import { updateSkillData } from "./features/slice/skillSlice";
import { updateTeamData } from "./features/slice/teamSlice";
import { updateWorkSpaceData } from "./features/slice/workSpaceSlice";

const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;
export const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER_URL);

function App() {
  const dispatch = useDispatch();
  const { user: storedUser } = useSelector((state) => state);
  const { activePath } = useSelector((state) => state.activePath);
  const { isLoggedIn } = storedUser;

  const tokenCheck = () => {
    const existedToken = Cookies.get("token");
    if (existedToken) {
      var bytes = CryptoJS.AES.decrypt(existedToken, jwtSecret);
      var originalToken = bytes.toString(CryptoJS.enc.Utf8);
      var decoded = jwt_decode(originalToken);
      const { _id } = decoded;
      return _id;
    }
  };

  useEffect(() => {
    if (tokenCheck()) {
      dispatch(alreadyLogin(tokenCheck()));
    }
    dispatch(setFromPreviousTheme());
  }, []);

  useEffect(() => {
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
  }, [activePath]);

  useEffect(() => {
    socketHandlers({
      socket,
      dispatch,
      storedUser,
      setNewNotification,
      updateLoggedInUserManually,
      updateSingleUserManually,
      getAllJobs,
      getMyJobs,
      availableJobsForReviewer,
      getAllAssignedJob,
    });
  }, [dispatch, storedUser.user.role]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(deleteBefore15DaysNotifications()).then(() => {
        dispatch(getAllNotifications());
        dispatch(getLatestNotifications());
        dispatch(getAllUnreadNotifications());
      });
    }
  }, [storedUser.user.role]);

  return (
    <Box className="App">
      {isLoggedIn ? (
        <Suspense fallback={<LoadingComponent />}>
          <Layout>
            <Routers />
          </Layout>
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingComponent />}>
          <RoutersLogin />
        </Suspense>
      )}
    </Box>
  );
}

export default App;
