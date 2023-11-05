/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/Toaster/ErrorToaster.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, October 11th 2023, 10:00:00 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ErrorToaster = ({ message }) => {
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
          <ErrorIcon sx={{ color: "#F04438" }} />
          <Box>
            <Typography variant="wpf_p2_semiBold" color="error.800">
              Error
            </Typography>
            <br />
            <Typography variant="wpf_h8_regular">{message}</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ErrorToaster;
