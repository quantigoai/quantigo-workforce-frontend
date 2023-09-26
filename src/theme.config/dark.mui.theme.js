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
import typography from "./typography";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    ...typography,
    fontFamily: ["Inter", "sans-serif"].join(","),
    ...(typography.wf_h6.color = "#fff"),
    ...(typography.wf_h6_xl.color = "#fff"),
    ...(typography.wf_h6_light.color = "#fff"),
    ...(typography.wf_h5.color = "#fff"),
    ...(typography.wf_h5_bold.color = "#fff"),
    ...(typography.wf_h4.color = "#fff"),
    ...(typography.wf_p2_semiBold.color = "#fff"),
    ...(typography.wpf_h1_semiBold.color = "#fff"),
    ...(typography.wpf_h2_semiBold.color = "#fff"),
    ...(typography.wpf_h3_semiBold.color = "#fff"),
    ...(typography.wpf_h4_semiBold.color = "#fff"),
    ...(typography.wpf_h5_semiBold.color = "#fff"),
    ...(typography.wpf_h1_medium.color = "#fff"),
    ...(typography.wpf_h2_medium.color = "#fff"),
    ...(typography.wpf_h3_medium.color = "#fff"),
    ...(typography.wpf_h4_medium.color = "#fff"),
    ...(typography.wpf_h5_medium.color = "#fff"),
    ...(typography.wpf_p1_semiBold.color = "#fff"),
    ...(typography.wpf_p2_semiBold.color = "#fff"),
    ...(typography.wpf_p3_semiBold.color = "#fff"),
    ...(typography.wpf_p4_semiBold.color = "#fff"),
    ...(typography.wpf_p1_medium.color = "#fff"),
    ...(typography.wpf_p2_medium.color = "#fff"),
    ...(typography.wpf_p3_medium.color = "#fff"),
    ...(typography.wpf_p4_medium.color = "#fff"),
    ...(typography.wpf_p1_regular.color = "#fff"),
    ...(typography.wpf_p2_regular.color = "#fff"),
    ...(typography.wpf_p3_regular.color = "#fff"),
    ...(typography.wpf_p4_regular.color = "#fff"),
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
