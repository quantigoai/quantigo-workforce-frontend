/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/Toaster/SuccessToaster.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, October 11th 2023, 10:00:30 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Box, Stack, Typography} from "@mui/material";
import React from "react";

const SuccessToaster = ({ message }) => {
  return (
    <>
      <Box>
        <Stack
          direction={"row"}
          width="90%"
          gap={1.5}
          sx={{
            alignItems: "start",
          }}
        >
          <CheckCircleIcon sx={{ color: "#12B76A" }} />

          <Box>
            {/* <Typography variant="wpf_p2_semiBold" color="#fff"> */}
            <Typography variant="wpf_p2_semiBold" color={"green.800"}>
              Success
            </Typography>
            <br />
            <Typography variant="wpf_h8_regular">{message}</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SuccessToaster;
