/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/ComingSoon/ComingSoon.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 8:46:49 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Error/ErrorPage.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, December 26th 2022, 11:12:57 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import comingSoon from "../../../assets/images/pages/coming-soon.png";
const ContentBox = { padding: "2%", height: "100%" };

const paperStyle = {
  backgroundColor: "neutral.N000",
  padding: "3%",
  height: "86vh",
  borderRadius: "2px",
};

const lottieOptions = {
  loop: true,
  style: {
    height: 180,
  },
};

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <Box style={ContentBox}>
      <Grid item xs={12}>
        <Paper elevation={0} sx={paperStyle}>
          <Grid container>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={comingSoon} alt="Error Page" />
            </Grid>

            <Grid
              xs={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mx: "auto",
                p: 4,
              }}
            >
              <Typography variant="wpf_h4_semiBold" color={"gray.600"}>
                Coming Soon!
              </Typography>
              <br />
              <Typography variant="wpf_p2_regular" color={"gray.700"}>
                It seems that the page you're looking for is still under development. Please try again later.
              </Typography>
              <br />
              <Button
                onClick={() => navigate("/")}
                sx={{
                  width: "142px",
                  height: "40px",
                  padding: "10px, 24px, 10px, 24px",
                  borderRadius: "8px",
                  gap: "8px",
                  border: "1px solid #FFAB0029",
                  boxShadow: "0px 24px 60px -16px #00000014",
                  backgroundColor: "#2E58FF",

                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#2D58FF",
                    color: "#ddd",
                  },
                }}
              >
                Back to Home
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default ComingSoon;
