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
        align="center"
        sx={{
          minWidth: column?.width || "140px",
        }}
      >
        <Typography variant="wpf_p4_semiBold_2" color="neutral.550">
          DOCUMENTS
        </Typography>
      </TableCell>
    </>
  );
};

export default StickyDocViewTableHead;
