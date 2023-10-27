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
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#fff",
          color: "#3C4D6B",
          height: "44px",
          margin: "0",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#fff",
          color: "#3C4D6B",
          padding: "0px 10px",
          margin: "0",
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          padding: "0",
          paddingTop: "0px",
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
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          margin: "0",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        // padding: "0",
        // height: "0px",
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(171, 191, 228)",
          height: "20px",
          width: "20px",
          fontSize: "10px",
          color: "rgb(4, 4, 86)"
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0, // mobile deprecated
      sm: 600, // mobile deprecated
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1920,
    },
  },
});

[lightTheme.breakpoints.between("lg", "xl")].forEach((key) => {
  lightTheme.typography.wpf_p3_semiBold[key] = {
    fontSize: "12px",
  };
});

[lightTheme.breakpoints.up("xxl")].forEach((key) => {
  lightTheme.typography.wpf_p3_semiBold[key] = {
    fontSize: "16px",
  };
  lightTheme.components.MuiTableRow.styleOverrides.root[key] = {
    height: "56px",
  };
});
[lightTheme.breakpoints.between("lg", "xl")].forEach((key) => {
  lightTheme.typography.wpf_p4_semiBold[key] = {
    fontSize: "10px",
  };
});

[lightTheme.breakpoints.up("xxl")].forEach((key) => {
  lightTheme.typography.wpf_p4_semiBold[key] = {
    fontSize: "14px",
  };
});
[lightTheme.breakpoints.between("lg", "xl")].forEach((key) => {
  lightTheme.typography.wpf_p3_medium[key] = {
    fontSize: "10px",
  };
});

[lightTheme.breakpoints.up("xxl")].forEach((key) => {
  lightTheme.typography.wpf_p3_medium[key] = {
    fontSize: "16px",
  };
});

// [lightTheme.breakpoints.up("md")].forEach((key) => {
//   lightTheme.typography.wpf_p4_semiBold[key] = {
//     fontSize: "11px",
//   };
// });

// lightTheme.typography.wpf_p4_semiBold = {
//   [lightTheme.breakpoints.("")]: {
//     fontSize: "14px",
//   },
// };

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
// lightTheme.typography.wpf_p4_semiBold = {
//   [lightTheme.breakpoints.up("lg")]: {
//     fontSize: "12px",
//   },
//   [lightTheme.breakpoints.up("xl")]: {
//     fontSize: "12px",
//   },
// };

// lightTheme.typography.wpf_h5_semiBold = {
//   [lightTheme.breakpoints.up("lg")]: {
//     fontSize: "12px",
//   },
//   [lightTheme.breakpoints.up("xl")]: {
//     fontSize: "12px",
//   },
// };
export default lightTheme;
