import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ProcessCard from "./ProcessCard";
import processList from "./ProcessLIst";
import ProcessCard2 from "./ProcessCard2";

const CongratulationStepProcess = () => {
  const paperstyle = {
    backgroundColor: "neutral.N000",
    padding: ".5%",
    // width: "100%",
    // height: "100%",
    borderRadius: "8px",
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          // height: "100%",
          borderRadius: "8px",
          // backgroundColor: "neutral.N000",
        }}
      >
        <Paper
          elevation={0}
          style={{
            backgroundColor: "neutral.N000",
            padding: ".5%",
            // width: "100%",
            // height: "100%",
            borderRadius: "8px",
          }}
        >
          <Box sx={{ padding: "1%" }}>
            <Grid container>
              <Typography variant="wpf_h4_semiBold">Quantigo Workforce Process</Typography>
            </Grid>
            <Grid container>
              <Typography variant="wpf_p3_regular" sx={{ color: "neutral.N300" }}>
                Lorem ipsum dolor sit amet consectetur. Libero faucibus dui faucibus et. Nisi amet viverra egestas vel
                urna eu hendrerit. Mauris urna id dictum tortor. Vulputate vitae turpis duis sit. Id eleifend tincidunt
                integer vitae scelerisque.
              </Typography>
            </Grid>
          </Box>
          <Box sx={{ padding: "1%" }}>
            <Grid container spacing={4}>
              {processList.map((item) => (
                <Grid key={item._id} item xs={12} sm={6} md={3} gap={1}>
                  {/* <ProcessCard item={item} /> */}
                  <ProcessCard2 item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default CongratulationStepProcess;
