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

import {createTheme} from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography,
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          // background: "#F8F8F8",
          background: "#",
          borderRadius: "4px",
          flex: "none",
          order: 0,
          border: "1px solid #DADCDF",
          alignSelf: "stretch",
          flexGrow: 0,
          padding: "0px",
          "& .MuiSvgIcon-root": {
            // color: "rgba(45, 88, 255, 1)",
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
});


theme.typography.wpf_p3_semiBold = {
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "14px",
  },
};
theme.typography.wpf_p4_semiBold = {
  [theme.breakpoints.up("lg")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "12px",
  },
};

theme.typography.wpf_h5_semiBold = {
  [theme.breakpoints.up("lg")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "42px",
  },
};

export default theme;
