/*
 * Filename: /home/tanzim/workstation/Office/worforce-frontend-new/src/config/theme/light.mui.theme.js
 * Path: /home/tanzim/workstation/Office/worforce-frontend-new
 * Created Date: Tuesday, September 19th 2023, 4:39:26 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { createTheme } from "@mui/material";
import typography from "./typography";

const lightTheme = createTheme({
  // ...theme,
  palette: {
    mode: "light",
    text: {
      primary: "#3C4D6B", // Primary text color
      secondary: "#3C4D6B", // Primary text color
    },
  },
  typography: {
    ...typography,
    ...(typography.wf_h6.color = "#3C4D6B"),
    ...(typography.wf_h6_xl.color = "#3C4D6B"),
    ...(typography.wf_h6_light.color = "#3C4D6B"),
    ...(typography.wf_h5.color = "#3C4D6B"),
    ...(typography.wf_h5_bold.color = "#3C4D6B"),
    ...(typography.wf_h4.color = "#3C4D6B"),
    ...(typography.wf_p2_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h1_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h2_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h3_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h4_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h5_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h1_medium.color = "#3C4D6B"),
    ...(typography.wpf_h2_medium.color = "#3C4D6B"),
    ...(typography.wpf_h3_medium.color = "#3C4D6B"),
    ...(typography.wpf_h4_medium.color = "#3C4D6B"),
    ...(typography.wpf_h5_medium.color = "#3C4D6B"),
    ...(typography.wpf_p1_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_p2_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_p3_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_p4_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_p1_medium.color = "#3C4D6B"),
    ...(typography.wpf_p2_medium.color = "#3C4D6B"),
    ...(typography.wpf_p3_medium.color = "#3C4D6B"),
    ...(typography.wpf_p4_medium.color = "#3C4D6B"),
    ...(typography.wpf_p1_regular.color = "#3C4D6B"),
    ...(typography.wpf_p2_regular.color = "#3C4D6B"),
    ...(typography.wpf_p3_regular.color = "#3C4D6B"),
    ...(typography.wpf_p4_regular.color = "#3C4D6B"),
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
    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundColor: "#F2F6FC",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#fff",
          color: "#3C4D6B",
        },
      },
    },
  },
});

lightTheme.typography.wf_h6 = {
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "12px",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "14px",
  },
};

lightTheme.typography.wf_p2_semiBold = {
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "12px",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "14px",
  },
};
lightTheme.typography.wpf_p3_semiBold = {
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "14px",
  },
};
lightTheme.typography.wpf_p4_semiBold = {
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "12px",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "12px",
  },
};

// lightTheme.typography.wpf_h5_semiBold = {
//   [lightTheme.breakpoints.up("lg")]: {
//     fontSize: "12px",
//   },
//   [lightTheme.breakpoints.up("xl")]: {
//     fontSize: "12px",
//   },
// };
export default lightTheme;
