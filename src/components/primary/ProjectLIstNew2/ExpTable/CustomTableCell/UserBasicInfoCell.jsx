/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/CustomTableCell/UserBasicInfoCell.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 2:30:35 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Avatar, Box, Stack } from "@mui/material";
import React from "react";

const UserBasicInfoCell = ({ name, email, image }) => {
  return (
    <Stack direction="row" gap={1}>
      <Avatar
        sx={{
          width: 35,
          height: 35,
          position: "static",
        }}
        alt={name}
        src={image}
      />
      <Box>
        <div>{name}</div>
        <div>{email}</div>
      </Box>
    </Stack>
  );
};

export default UserBasicInfoCell;
