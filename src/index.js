import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./features/store/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  select: {
    height: "58px",
    background: "#000",
  },

  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#F8F8F8",
          borderRadius: "4px",
          flex: "none",
          order: 0,
          border: "1px solid #DADCDF",
          alignSelf: "stretch",
          flexGrow: 0,
          "& .MuiSvgIcon-root": {
            color: "rgba(45, 88, 255, 1)",
            marginRight: "10px",
            cursor: "pointer",
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 600,
          color: "##969CAF",
          width: "100%",
          "& .Mui-selected": {
            color: "#2D58FF",
          },
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 6500,
  offset: "30px",
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 1500,
  },
};

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </AlertProvider>
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
