/*
 * File           : ThemeProviderWrapper.js
 * Project        : worforce-frontend-new
 * Created Date   : Tu 19 Sep 2023 11:11:13
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Sep 19 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import darkTheme from "./dark.mui.theme";
import lightTheme from "./light.mui.theme";

const ThemeProviderWrapper = ({ children }) => {
  const { isLightTheme } = useSelector((state) => state.theme);

  return (
    // <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>{children(isDarkMode, toggleDarkMode)}</ThemeProvider>
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>{children}</ThemeProvider>
  );
};

export default ThemeProviderWrapper;
