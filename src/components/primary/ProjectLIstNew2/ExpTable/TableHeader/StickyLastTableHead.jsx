/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/StickyLastTableHead.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:44:06 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { TableCell, Typography } from "@mui/material";
import React from "react";

const StickyLastTableHead = ({ column }) => {
  return (
    <>
      <TableCell className="last-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
        <Typography variant="wpf_h7_semiBold" color="neutral.550">
          {column.headerName}
        </Typography>
      </TableCell>
    </>
  );
};

export default StickyLastTableHead;
