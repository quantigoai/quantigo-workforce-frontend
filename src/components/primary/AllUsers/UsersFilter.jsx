/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/UsersFilter.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 2:19:38 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Typography } from "@mui/material";
import React from "react";

const UsersFilter = ({ isFilter, isLightTheme }) => {
  return (
    <>
      <Box
        sx={{
          background: isLightTheme ? "#FFFFFF" : "#1E1E1E",
          width: "100%",
          height: isFilter ? "45%" : "0%",
          paddingY: "5px",
          display: isFilter ? "block" : "none",
          borderTop: "1px solid #E6ECF5",
          transition: isFilter && "all 0.2s ease-in-out",
        }}
      >
        {/* Implement users filter  */}
        <Typography variant="wpf_h4_regular">Implement users filter</Typography>
      </Box>
    </>
  );
};

export default UsersFilter;
