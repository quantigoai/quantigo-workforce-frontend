import { Box } from "@mui/material";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import "./App.css";
import Routers from "./components/primary/Routers/Routers";
import RoutersLogin from "./components/primary/Routers/RoutersLogin";
import Layout from "./components/shared/Layout/Layout";
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

import CryptoJS from "crypto-js";
import { updateDashboardData } from "./features/slice/dashboardSlice";
import { updateBenchmarkData } from "./features/slice/benchMarkSlice";
import { updateCourseData } from "./features/slice/courseSlice";
import { updateTeamData } from "./features/slice/teamSlice";
import { updateDatasetData } from "./features/slice/datasetSlice";
import { updateWorkSpaceData } from "./features/slice/workSpaceSlice";
import { updateProjectDirectoryData } from "./features/slice/ProjectDirectory";
import { updateQuizData } from "./features/slice/quizSlice";
import { updateProjectData } from "./features/slice/projectByWorkspaceSlice";

const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;
export const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER_URL);

function App() {
  const dispatch = useDispatch();
  const { user: storedUser } = useSelector((state) => state);
  const { activePath } = useSelector((state) => state.activePath);
  const { dashboard } = useSelector((state) => state);
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
      dispatch(deleteBefore15DaysNotifications()).then((res) => {
        dispatch(getAllNotifications());
        dispatch(getLatestNotifications());
        dispatch(getAllUnreadNotifications());
      });
    }
  }, [storedUser.user.role]);

  return (
    <Box className="App">
      {isLoggedIn ? (
        <Layout>
          <Routers />
        </Layout>
      ) : (
        <RoutersLogin />
      )}
    </Box>
  );
}

export default App;
