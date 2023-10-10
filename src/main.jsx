import { CssBaseline } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import LoadingComponent from "./components/shared/Loading/LoadingComponent";
import { persistor, store } from "./features/store/store";
import "./index.css";
import ThemeProviderWrapper from "./theme.config/ThemeProviderWrapper";
const App = lazy(() => import("./App.jsx"));

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 4500,
  offset: "30px",
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 150,
  },
};

const toastOptions = {
  position: "bottom-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProviderWrapper>
          <CssBaseline />
          <AlertProvider template={AlertTemplate}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Suspense fallback={<LoadingComponent />}>
                  <App />
                  <ToastContainer {...toastOptions} />
                </Suspense>
              </BrowserRouter>
            </PersistGate>
          </AlertProvider>
        </ThemeProviderWrapper>
      </Provider>
    </React.StrictMode>
  </>
);
