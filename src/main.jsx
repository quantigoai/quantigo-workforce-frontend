import { CssBaseline } from "@mui/material";
import React, { Suspense, lazy } from "react";
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

const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
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
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Suspense fallback={<LoadingComponent />}>
                <App />
                <ToastContainer {...toastOptions} />
              </Suspense>
            </BrowserRouter>
          </PersistGate>
        </ThemeProviderWrapper>
      </Provider>
    </React.StrictMode>
  </>
);
