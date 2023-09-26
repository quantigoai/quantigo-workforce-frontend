import { CssBaseline, ThemeProvider } from "@mui/material";
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
import theme from "./theme.config/mui.theme";

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
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Suspense fallback={<LoadingComponent />}>
                <App />
              </Suspense>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </AlertProvider>
    </React.StrictMode>
  </ThemeProvider>
);
