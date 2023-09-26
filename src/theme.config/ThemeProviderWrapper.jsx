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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/slice/themeSlice";
import darkTheme from "./dark.mui.theme";
import lightTheme from "./light.mui.theme";

const ThemeProviderWrapper = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
  const { isLightTheme } = useSelector((state) => state.theme);

  const toggleDarkMode = () => {
    // setIsDarkMode((prevMode) => !prevMode);
    isLightTheme ? dispatch(setTheme(false)) : dispatch(setTheme(false));
  };

  return (
    // <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>{children(isDarkMode, toggleDarkMode)}</ThemeProvider>
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>{children}</ThemeProvider>
  );
};

export default ThemeProviderWrapper;
