import { Box, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

export const FieldBox = ({ children }) => {
  const path = useLocation();
  const { pathname } = path;
  const defineGrid = (pathname) => {
    switch (pathname) {
      case "/projectDirectory":
        return 3.85;
      case "/allprojects":
        return 5.85;

      default:
        return 12;
    }
  };
  return (
    <Grid item xs={defineGrid(pathname)}>
      <Box
        sx={{
          width: "100%",
          px: 0,

          height: {
            lg: "72px",
            xl: "82px",
            xxl: "85px",
          },
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};
