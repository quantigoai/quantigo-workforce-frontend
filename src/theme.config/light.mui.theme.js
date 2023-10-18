/*
 * Filename: /home/tanzim/workstation/Office/worforce-frontend-new/src/config/theme/light.mui.theme.js
 * Path: /home/tanzim/workstation/Office/worforce-frontend-new
 * Created Date: Tuesday, September 19th 2023, 4:39:26 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { createTheme } from "@mui/material";
import { lightColors } from "./lightColor";
import typography from "./typography";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightColors,
  },
  typography: {
    ...typography,
    // ...(typography.wf_h6.color = "#3C4D6B"),
    // ...(typography.wf_h6_xl.color = "#3C4D6B"),
    // ...(typography.wf_h6_light.color = "#3C4D6B"),
    // ...(typography.wf_h5.color = "#3C4D6B"),
    // ...(typography.wf_h5_bold.color = "#3C4D6B"),
    // ...(typography.wf_h4.color = "#3C4D6B"),
    // ...(typography.wf_p2_semiBold.color = "#3C4D6B"),

    ...(typography.wpf_h1_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h2_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h3_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h4_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h5_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h6_semiBold.color = "#3C4D6B"),
    ...(typography.wpf_h7_semiBold.color = "#3C4D6B"),

    ...(typography.wpf_h1_medium.color = "#3C4D6B"),
    ...(typography.wpf_h2_medium.color = "#3C4D6B"),
    ...(typography.wpf_h3_medium.color = "#3C4D6B"),
    ...(typography.wpf_h4_medium.color = "#3C4D6B"),
    ...(typography.wpf_h5_medium.color = "#3C4D6B"),
    ...(typography.wpf_h6_medium.color = "#3C4D6B"),
    ...(typography.wpf_h7_medium.color = "#3C4D6B"),

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
          borderRadius: "4px",
          flex: "none",
          order: 0,
          border: "1px solid #DADCDF",
          alignSelf: "stretch",
          flexGrow: 0,
          "& .MuiSvgIcon-root": {
            color: "#667085",
            marginRight: "5px",
            cursor: "pointer",
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#fff",
          color: "#3C4D6B",
          height: "40px",
          padding: "10px 16px",
          margin: "0",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "11px",
          fontStyle: "italic",
          marginLeft: "0",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#7D89A3",
        },
      },
    },
    MuiGrid :{
      styleOverrides: {
        root: {
          margin : 0

        },
      },
    }
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

// lightTheme.typography.wf_p2_semiBold = {
//     [lightTheme.breakpoints.up("lg")]: {
//         fontSize: "12px",
//     },
//     [lightTheme.breakpoints.up("xl")]: {
//         fontSize: "14px",
//     },
// };
// lightTheme.typography.wpf_p3_semiBold = {
//   [lightTheme.breakpoints.up("md")]: {
//     ...typography.wpf_p3_semiBold,
//     fontSize: "12px",
//   },
//   [lightTheme.breakpoints.up("xl")]: {
//     fontSize: "14px",
//   },
// };
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
