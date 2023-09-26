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
  },
  typography: {
    ...typography,
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
