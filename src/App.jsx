import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import "./App.css";
import Routers from "./components/primary/Routers/Routers";
import LoadingComponent from "./components/shared/Loading/LoadingComponent";
import useClearReduxData from "./customHooks/useClearReduxData";
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
const RoutersLogin = lazy(() => import("./components/primary/Routers/RoutersLogin"));

const LayoutNew = lazy(() => import("./components/shared/Layout/LayoutNew"));

const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;
export const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER_URL);

function App() {
  const dispatch = useDispatch();
  const storedUser = useSelector((state) => state.user);
  const { isLoading, user, isLoggedIn } = useSelector((state) => state.user);
  const { activePath } = useSelector((state) => state.activePath);
  // const { isLoggedIn } = user;

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
    if (user) {
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
    }
  }, [dispatch, user.role]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(deleteBefore15DaysNotifications()).then(() => {
        dispatch(getAllNotifications());
        dispatch(getLatestNotifications());
        dispatch(getAllUnreadNotifications());
      });
    }
  }, [user.role]);

  return (
    <>
      {isLoading && !isLoading ? (
        <LoadingComponent />
      ) : isLoggedIn ? (
        <Suspense fallback={<LoadingComponent />}>
          <LayoutNew>{<Routers />}</LayoutNew>
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingComponent />}>
          <RoutersLogin />
        </Suspense>
      )}
    </>
  );
}

export default App;
