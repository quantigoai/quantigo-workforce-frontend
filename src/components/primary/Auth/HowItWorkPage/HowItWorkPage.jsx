import { Box, Grid } from "@mui/material";
import React from "react";
import HeaderNav from "../../HomePage/HeaderNav";
import "../../HomePage/bd.css";
import LayoutUsingTab from "./LayoutUsingTab";

const HowItWorkPage = () => {
  return (
    <>
      <Box className="containerhowItWork" sx={{ backgroundColor: "#FFFFFF", }}>
        <HeaderNav />
        <>
          <Grid
            container
            item
            xs={12}
            sx={{
              borderTop: "1px solid #E1E8F5",
              backgroundColor: "#FFFFFF",
             
              paddingLeft: "4%",
              paddingRight: "2%",
              position: "absolute",
            }}>
            <LayoutUsingTab />
          </Grid>
        </>
      </Box>
    </>
  );
};

export default HowItWorkPage;
