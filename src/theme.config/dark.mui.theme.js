/*
 * File           : dark.mui.theme.js
 * Project        : worforce-frontend-new
 * Created Date   : Tu 19 Sep 2023 04:39:52
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

import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  text: {
    primary: "#f8f8f8", // Primary text color
    secondary: "#fff", // Secondary text color
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#1e1e1e",
          color: "#fff",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "blue",
        },
      },
    },
  },
});

export default darkTheme;
