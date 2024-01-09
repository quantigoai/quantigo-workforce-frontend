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
import { darkColors } from "./darkColor";
import typography from "./typography";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkColors,
  },
  typography: {
    ...typography,
    fontFamily: ["Inter", "sans-serif"].join(","),
    // ...(typography.wf_h6.color = "#fff"),
    // ...(typography.wf_h6_xl.color = "#fff"),
    // ...(typography.wf_h6_light.color = "#fff"),
    // ...(typography.wf_h5.color = "#fff"),
    // ...(typography.wf_h5_bold.color = "#fff"),
    // ...(typography.wf_h4.color = "#fff"),
    // ...(typography.wf_p2_semiBold.color = "#fff"),

    ...(typography.wpf_h1_semiBold.color = "#fff"),
    ...(typography.wpf_h2_semiBold.color = "#fff"),
    ...(typography.wpf_h3_semiBold.color = "#fff"),
    ...(typography.wpf_h4_semiBold.color = "#fff"),
    ...(typography.wpf_h5_semiBold.color = "#fff"),
    ...(typography.wpf_h6_semiBold.color = "#fff"),
    ...(typography.wpf_h7_semiBold.color = "#fff"),

    ...(typography.wpf_h1_medium.color = "#fff"),
    ...(typography.wpf_h2_medium.color = "#fff"),
    ...(typography.wpf_h3_medium.color = "#fff"),
    ...(typography.wpf_h4_medium.color = "#fff"),
    ...(typography.wpf_h5_medium.color = "#fff"),
    ...(typography.wpf_h6_medium.color = "#fff"),
    ...(typography.wpf_h7_medium.color = "#fff"),

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
    ...(typography.wpf_p5_regular.color = "#fff"),
  },
  text: {
    primary: "#f8f8f8", // Primary text color
    secondary: "#fff", // Secondary text color
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
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Inter",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#fff",
          height: "44px",
          margin: "0",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#1e1e1e",
          color: "#fff",
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
          fontFamily: "Inter",
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
          color: "#fff",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
          pt: 0,
          "& .MuiGrid-item": {
            margin: 0,
            pt: 0,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
          margin: "0",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Inter",
          padding: "0px 0px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
          marginLeft: "0px !important",
        },
        docked: {
          marginLeft: "0px !important",
        },
      },
    },
    MuiStack: {
      styleOverrides: {},
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          // backgroundColor: "rgb(171, 191, 228)",
          backgroundColor: "gray",
          height: "20px",
          width: "20px",
          fontSize: "10px",
          color: "#fff",
        },
      },
    },
  
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1920,
    },
  },
});

[darkTheme.breakpoints.between("lg", "xl")].forEach((key) => {
  darkTheme.typography.wpf_h1_Bold[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h2_Bold[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h3_Bold[key] = {
    fontSize: "30px",
  };
  darkTheme.typography.wpf_h4_Bold[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h5_Bold[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h6_Bold[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h7_Bold[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_h1_semiBold[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h2_semiBold[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h3_semiBold[key] = {
    fontSize: "30px",
  };
  darkTheme.typography.wpf_h4_semiBold[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h5_semiBold[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h6_semiBold[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h7_semiBold[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_h1_medium[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h2_medium[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h3_medium[key] = {
    fontSize: "30px",
  };
  darkTheme.typography.wpf_h4_medium[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h5_medium[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h6_medium[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h7_medium[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_h1_regular[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h2_regular[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h3_regular[key] = {
    fontSize: "30px",
  };
  darkTheme.typography.wpf_h4_regular[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h5_regular[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h6_regular[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h7_regular[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_h8_regular[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_p1_semiBold[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p2_semiBold[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p3_semiBold[key] = {
    fontSize: "12px",
  };
  darkTheme.typography.wpf_p4_semiBold[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_p4_semiBold_2[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_p1_medium[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p2_medium[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p3_medium[key] = {
    fontSize: "12px",
  };
  darkTheme.typography.wpf_p3_medium_2[key] = {
    fontSize: "12px",
  };
  darkTheme.typography.wpf_p3_medium_3[key] = {
    fontSize: "12px",
  };
  darkTheme.typography.wpf_p4_medium[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_p5_medium[key] = {
    fontSize: "8px",
  };
  darkTheme.typography.wpf_p1_regular[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p2_regular[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p3_regular[key] = {
    fontSize: "12px",
  };
  darkTheme.typography.wpf_p4_regular[key] = {
    fontSize: "10px",
  };
  darkTheme.typography.wpf_p5_regular[key] = {
    fontSize: "8px",
  };
});

[darkTheme.breakpoints.up("xxl")].forEach((key) => {
  darkTheme.typography.wpf_h1_Bold[key] = {
    fontSize: "42px",
  };
  darkTheme.typography.wpf_h2_Bold[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h3_Bold[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h4_Bold[key] = {
    fontSize: "26px",
  };
  darkTheme.typography.wpf_h5_Bold[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h6_Bold[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h7_Bold[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h1_semiBold[key] = {
    fontSize: "42px",
  };
  darkTheme.typography.wpf_h2_semiBold[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h3_semiBold[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h4_semiBold[key] = {
    fontSize: "26px",
  };
  darkTheme.typography.wpf_h5_semiBold[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h6_semiBold[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h7_semiBold[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h1_medium[key] = {
    fontSize: "42px",
  };
  darkTheme.typography.wpf_h2_medium[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h3_medium[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h4_medium[key] = {
    fontSize: "26px",
  };
  darkTheme.typography.wpf_h5_medium[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h6_medium[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h7_medium[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h1_regular[key] = {
    fontSize: "42px",
  };
  darkTheme.typography.wpf_h2_regular[key] = {
    fontSize: "38px",
  };
  darkTheme.typography.wpf_h3_regular[key] = {
    fontSize: "34px",
  };
  darkTheme.typography.wpf_h4_regular[key] = {
    fontSize: "26px",
  };
  darkTheme.typography.wpf_h5_regular[key] = {
    fontSize: "22px",
  };
  darkTheme.typography.wpf_h6_regular[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_h7_regular[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_h8_regular[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p1_semiBold[key] = {
    fontSize: "20px",
  };
  darkTheme.typography.wpf_p2_semiBold[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_p3_semiBold[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p4_semiBold[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p4_semiBold_2[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p1_medium[key] = {
    fontSize: "20px",
  };
  darkTheme.typography.wpf_p2_medium[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_p3_medium[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p3_medium_2[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p3_medium_3[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p4_medium[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p5_medium[key] = {
    fontSize: "12px",
  };
  darkTheme.typography.wpf_p1_regular[key] = {
    fontSize: "20px",
  };
  darkTheme.typography.wpf_p2_regular[key] = {
    fontSize: "18px",
  };
  darkTheme.typography.wpf_p3_regular[key] = {
    fontSize: "16px",
  };
  darkTheme.typography.wpf_p4_regular[key] = {
    fontSize: "14px",
  };
  darkTheme.typography.wpf_p5_regular[key] = {
    fontSize: "12px",
  };
  // --- component
  darkTheme.components.MuiTableRow.styleOverrides.root[key] = {
    height: "56px",
  };
});

export default darkTheme;
