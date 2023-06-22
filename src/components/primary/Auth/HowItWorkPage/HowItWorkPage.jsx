import React from "react";
import HeaderNav from "../../HomePage/HeaderNav";
import { Box, Grid, Typography, styled } from "@mui/material";
import "../../HomePage/bd.css";
import LayoutUsingTab from "./LayoutUsingTab";
import HDrawer from "./HDrawer";

const HowItWorkPage = () => {
  return (
    <>
      <Box className="container">
        <HeaderNav />
        <>
          <Grid
            container
            item
            xs={12}
            sx={{
              paddingLeft: "4%",
              paddingRight: "2%",
              position: "absolute",
            }}
          >
            <LayoutUsingTab />
          </Grid>
        </>
      </Box>
    </>
  );
};

export default HowItWorkPage;
