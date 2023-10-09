/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableBody/StickyDocViewTableColumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Monday, October 9th 2023, 11:28:14 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import AttachFileIcon from "@mui/icons-material/AttachFile";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, TableCell } from "@mui/material";
import React from "react";

const StickyDocViewTableColumn = ({ column }) => {
//   console.log("🚀 ~ file: StickyDocViewTableColumn.jsx:16 ~ StickyDocViewTableColumn ~ column:", column);
  return (
    <>
      <TableCell className="docrow">
        <Box sx={{ display: "flex", gap: 1 }}>
          <DescriptionIcon sx={{ fontSize: "16px", cursor: "pointer" }} />

          <AttachFileIcon sx={{ fontSize: "16px", cursor: "pointer" }} />
        </Box>
      </TableCell>
    </>
  );
};

export default StickyDocViewTableColumn;
