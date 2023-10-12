/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Home/Home.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, October 4th 2023, 1:49:02 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Paper, Stack} from "@mui/material";
import React from "react";
import StepperGuide from "./StepperGuide";

const Home = () => {
  return (
    <Box className="rootChild">
      <Paper className="mainBox">
        <Stack
          direction="row"
          gap={5}
          sx={{
            paddingX: "30px",
            backgroundColor: "primary.main",
            height: "40%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <h3>Quantigo Workforce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, iusto nostrum voluptates saepe optio
              voluptatibus, consequuntur maiores cupiditate pariatur inventore porro animi accusamus, suscipit a dolore
              laborum. Ea, modi odit.
            </p>
          </Box>
          <Box>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, iusto nostrum voluptates saepe optio
              voluptatibus, consequuntur maiores cupiditate pariatur inventore porro animi accusamus, suscipit a dolore
              laborum. Ea, modi odit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, iusto nostrum voluptates saepe optio
              voluptatibus, consequuntur maiores cupiditate pariatur inventore porro animi accusamus, suscipit a dolore
              laborum. Ea, modi odit.
            </p>
          </Box>
        </Stack>
        <br />
        <StepperGuide />
      </Paper>
    </Box>
  );
};

export default Home;
