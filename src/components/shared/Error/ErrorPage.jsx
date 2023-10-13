/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Error/ErrorPage.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, December 26th 2022, 11:12:57 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../shared/CustomSvgIcons/wired-lineal-1140-error.json";

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

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box style={ContentBox}>
      <Grid xs={12}>
        <Paper elevation={0} sx={paperStyle}>
          <Grid container>
            <Grid xs={3} sx={{ paddingLeft: "2%" }}>
              <Lottie animationData={error} {...lottieOptions} />;
            </Grid>
            <Grid xs={9}>
              <Grid xs={10}>
                <Typography variant="wpf_h1_semiBold" color={"error.800"}>
                  Oops, something went wrong!
                </Typography>
                <br />
                <br />
                <Typography variant="wpf_p2_regular">
                  It seems that the page you're looking for either doesn't exist or is still under development. Please
                  check the URL or try again later. In the meantime, you can return to our homepage or{" "}
                  {
                    <Link blank={true} href="https://discord.gg/YarPssHr6y">
                      contact our support team
                    </Link>
                  }{" "}
                  for assistance. We apologize for any inconvenience.
                </Typography>
              </Grid>
              <Grid xs={12}>
                {/* <Typography variant="caption" sx={{ color: "#969CAF" }}>
                      Lorem ipsum dolor sit amet consectetur. Senectus placerat
                      metus sit massa urna non tristique. Faucibus arcu faucibus
                      id odio enim egestas.
                    </Typography> */}
              </Grid>
              <Grid xs={12} sx={{ paddingTop: "5%" }}>
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                  sx={{
                    backgroundColor: "#2D58FF",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#FF9A45",
                      color: "#1D1D1D",
                    },
                    borderRadius: "1px",
                    width: "173px",
                    height: "40px",
                  }}
                >
                  Back to HomePage
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default ErrorPage;
