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
          gap={4}
          sx={{
            alignItems: "center",
          }}
        >
          <CheckCircleIcon sx={{ color: "#fff" }} />

          <Box>
            <Typography variant="wpf_p2_semiBold" color="#fff">
              Success
            </Typography>
            <br />
            <Typography variant="wpf_p3_semiBold" color="#fff">
              {message}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SuccessToaster;
