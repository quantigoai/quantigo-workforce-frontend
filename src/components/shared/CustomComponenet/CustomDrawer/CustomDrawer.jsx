/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomComponenet/CustomDrawer/CustomDrawer.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, February 15th 2023, 11:55:51 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box} from "@mui/material";
import React from "react";

const CustomDrawer = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", position: "absolute" }}
    >
      <Box>box1</Box>
      <Box>{children}</Box>
      <Box>box3</Box>
    </Box>
  );
};

export default CustomDrawer;
