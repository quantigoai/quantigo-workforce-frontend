import { CssBaseline } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import LoadingComponent from "./components/shared/Loading/LoadingComponent";
import { persistor, store } from "./features/store/store";
import "./index.css";
import ThemeProviderWrapper from "./theme.config/ThemeProviderWrapper";

const App = lazy(() => import("./App.jsx"));

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 6500,
  offset: "30px",
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 1500,
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <ThemeProvider theme={theme}> */}
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProviderWrapper>
          <CssBaseline />
          <AlertProvider template={AlertTemplate} {...options}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Suspense fallback={<LoadingComponent />}>
                  <App />
                </Suspense>
              </BrowserRouter>
            </PersistGate>
          </AlertProvider>
        </ThemeProviderWrapper>
      </Provider>
    </React.StrictMode>
    {/* </ThemeProvider> */}
  </>
);
