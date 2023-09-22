import { Box } from "@mui/material";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import "./App.css";
import { availableJobsForReviewer, getAllAssignedJob, getAllJobs, getMyJobs } from "./features/slice/jobSlice";
import {
  deleteBefore15DaysNotifications,
  getAllNotifications,
  getAllUnreadNotifications,
  getLatestNotifications,
  setNewNotification,
} from "./features/slice/notificationSlice";
import { setFromPreviousTheme } from "./features/slice/themeSlice";
import { alreadyLogin, updateLoggedInUserManually, updateSingleUserManually } from "./features/slice/userSlice";
import socketHandlers from "./socketHandlers";
// import RoutersLogin from "./components/primary/Routers/RoutersLogin";
const RoutersLogin = lazy(() => import("./components/primary/Routers/RoutersLogin"));
// import Layout from "./components/shared/Layout/Layout";
// const Layout = lazy(() => import("./components/shared/Layout/Layout"));

import CryptoJS from "crypto-js";
import LoadingComponent from "./components/shared/Loading/LoadingComponent";
import useClearReduxData from "./customHooks/useClearReduxData";
import Routers from "./components/primary/Routers/Routers";
// import LayoutNew from "./components/shared/Layout/LayoutNew";
const LayoutNew = lazy(() => import("./components/shared/Layout/LayoutNew"));

const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;
export const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER_URL);

function App() {
  const dispatch = useDispatch();
  const storedUser = useSelector((state) => state.user);
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
  const clearReduxData = useClearReduxData;
  // TODO Need to handle this dynamically
  useEffect(() => {
    clearReduxData(dispatch, activePath);
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
    <>
      {/* <Box className="App"> */}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingComponent />}>
            <LayoutNew>{<Routers /> }</LayoutNew>
          </Suspense>
        ) : (
          <Suspense fallback={<LoadingComponent />}>
            <RoutersLogin />
          </Suspense>
        )}
      {/* </Box> */}
    </>
  );
}

export default App;
