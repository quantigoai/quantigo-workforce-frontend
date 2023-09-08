/*
 * File           : mui.theme.js
 * Project        : wmpfrontv2
 * Created Date   : Fr 08 Sep 2023 02:47:41
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Sep 08 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    wf_h6: {
      //used in dashboard card
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    wf_h6_xl: {
      //used in dashboard card
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
    },

    wf_h6_light: {
      //used in dashboard card
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    wf_h5: {
      //used in left side bar
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    wf_h5_bold: {
      //used in left side bar
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    wf_h4: {
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "30px",
      letterSpacing: "0em",
      textAlign: "left",
    },
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
      xs: 360,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme.typography.wf_h6 = {
  [theme.breakpoints.up("lg")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "14px",
  },
};

export default theme;
