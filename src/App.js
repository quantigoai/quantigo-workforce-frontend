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
  getAllJobs,
  getMyJobs,
  removeSingleJobFromAvailable,
} from "./features/slice/jobSlice";
import {
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

const CryptoJS = require("crypto-js");

const jwtSecret = process.env.REACT_APP_JWT_SECRET;
export const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL);

function App() {
  const dispatch = useDispatch();
  const { user: storedUser } = useSelector((state) => state);
  const { isLoggedIn } = storedUser;
  const { _id, role } = storedUser.user;
  const tokenCheck = () => {
    const existedToken = Cookies.get("token");
    if (existedToken) {
      var bytes = CryptoJS.AES.decrypt(existedToken, jwtSecret);
      var originalToken = bytes.toString(CryptoJS.enc.Utf8);
      var decoded = jwt_decode(originalToken);
      const { _id, name } = decoded;
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
    const handleNotification = (notification) => {
      if (
        notification.notificationFor.includes(storedUser.user.role) ||
        notification.notificationForUserIds.includes(storedUser.user._id)
      ) {
        dispatch(setNewNotification(notification));
      }
    };

    const handleUserNotification = (notification, user) => {
      storedUser.user._id === user._id &&
        dispatch(updateLoggedInUserManually(user));
      if (
        notification.notificationFor.includes(storedUser.user.role) ||
        notification.notificationForUserIds.includes(storedUser.user._id)
      ) {
        dispatch(setNewNotification(notification));
      }
    };

    const handleAntNotification = (notification, project) => {
      if (
        project.activeHub.includes(storedUser.user.hub) &&
        notification.notificationFor.includes(storedUser.user.role)
      ) {
        dispatch(setNewNotification(notification));
        dispatch(getAllJobs());
      }
    };

    const handleRMNotification = (notification, user) => {
      dispatch(updateSingleUserManually({ user }));
      if (
        notification.notificationFor.includes(storedUser.user.role) ||
        notification.notificationForUserIds.includes(storedUser.user._id)
      ) {
        dispatch(setNewNotification(notification));
      }
    };
    const handleReviewerNotification = (notification, job) => {
      if (
        notification.notificationFor.includes(storedUser.user.role) ||
        notification.notificationForUserIds.includes(storedUser.user._id)
      ) {
        dispatch(setNewNotification(notification));
        dispatch(getMyJobs());
      }
    };

    const handleAnnotatorNotification = (notification, job) => {
      if (
        notification.notificationFor.includes(storedUser.user.role) ||
        notification.notificationForUserIds.includes(storedUser.user._id)
      ) {
        dispatch(setNewNotification(notification));
        dispatch(getMyJobs());
      }
    };

    const handleJobTakersNotification = (notification, job) => {
      if (
        notification.notificationFor.includes(storedUser.user.role) ||
        notification.notificationForUserIds.includes(storedUser.user._id)
      ) {
        dispatch(removeSingleJobFromAvailable(job));
      }
    };

    const customUserData = { _id, role };
    socket.emit("customUserData", customUserData);
    socket.on("notification", handleNotification);
    socket.on("approvedUser", handleUserNotification);
    socket.on("rejectUser", handleUserNotification);
    socket.on("uploadNDAOrDocuments", handleRMNotification);
    socket.on("updateUserRole", handleUserNotification);
    socket.on("addUserSkills", handleUserNotification);
    socket.on("removeUserSkills", handleUserNotification);
    socket.on("blockUser", handleUserNotification);
    socket.on("unBlockUser", handleUserNotification);
    socket.on("updateProjectPriority", handleAntNotification);
    socket.on("updateProjectHub", handleAntNotification);
    socket.on("updateProjectStatus", handleAntNotification);
    socket.on("takeJobReviewer", handleReviewerNotification);
    socket.on("takeJobAnnotator", handleJobTakersNotification);
    socket.on("reviewOnJobAccept", handleAnnotatorNotification);
    socket.on("reviewOnJobReject", handleAnnotatorNotification);
    socket.on("reviewOnJobRejectFinal", handleAnnotatorNotification);
    socket.on("submitJob", handleReviewerNotification);
    socket.on("jobTimeOutAnnotator", handleAnnotatorNotification);
    socket.on("jobTimeOutReviewer", handleReviewerNotification);
    socket.on("enrollCourseStudent", handleNotification);
    socket.on("courseCompleteUser", handleNotification);
    socket.on("benchmarkCreate", handleNotification);
    socket.on("benchMarkUpdate", handleNotification);
    socket.on("jobBlockAnnotator", handleUserNotification);

    return () => {
      socket.off("notification", handleNotification);
      socket.off("approvedUser", handleUserNotification);
      socket.off("rejectUser", handleUserNotification);
      socket.off("uploadNDAOrDocuments", handleRMNotification);
      socket.off("updateUserRole", handleUserNotification);
      socket.off("addUserSkills", handleUserNotification);
      socket.off("removeUserSkills", handleUserNotification);

      socket.off("blockUser", handleUserNotification);
      socket.off("unBlockUser", handleUserNotification);

      socket.off("updateProjectPriority", handleAntNotification);
      socket.off("updateProjectHub", handleAntNotification);
      socket.off("updateProjectStatus", handleAntNotification);

      socket.off("takeJobReviewer", handleReviewerNotification);
      socket.off("reviewOnJobAccept", handleAnnotatorNotification);
      socket.off("reviewOnJobReject", handleAnnotatorNotification);
      socket.off("reviewOnJobRejectFinal", handleAnnotatorNotification);
      socket.off("submitJob", handleReviewerNotification);
      socket.off("jobTimeOutAnnotator", handleAnnotatorNotification);
      socket.off("jobTimeOutReviewer", handleReviewerNotification);
      socket.off("enrollCourseStudent", handleNotification);
      socket.off("courseCompleteUser", handleNotification);
      socket.off("benchmarkCreate", handleNotification);
      socket.off("benchMarkUpdate", handleNotification);
      socket.off("jobBlockAnnotator", handleUserNotification);
    };
  }, [dispatch, storedUser.user.role]);

  useEffect(() => {
    dispatch(getAllNotifications());
    dispatch(getLatestNotifications());
    dispatch(getAllUnreadNotifications());
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
