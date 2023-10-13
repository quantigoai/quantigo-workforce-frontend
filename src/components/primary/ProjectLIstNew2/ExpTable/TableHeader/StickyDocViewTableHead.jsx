/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableHeader/StickyDocViewColumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Monday, October 9th 2023, 10:49:38 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {TableCell, Typography} from "@mui/material";
import React from "react";

const StickyDocViewTableHead = ({ column }) => {
  return (
    <>
      <TableCell
        className="doccolhead"
        sx={{
          minWidth: column?.width || "140px",
        }}
      >
        <Typography variant="wpf_h7_semiBold" color="neutral.550">
          Documents
        </Typography>
      </TableCell>
    </>
  );
};

export default StickyDocViewTableHead;
