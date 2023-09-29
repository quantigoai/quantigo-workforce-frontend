/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/StickyFirstTableHead.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:40:53 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Stack, TableCell, Typography } from "@mui/material";
import React from "react";
import SortingButton from "../../Project2Details/SortingButton";

const StickyFirstTableHead = ({ column, handleId, filteredCol }) => {
  return (
    <>
      <TableCell className="first-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
        <Stack
          flexDirection={"row"}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography variant="wpf_h7_semiBold" color="neutral.550">
            {column.headerName}
          </Typography>
          <Box onClick={() => handleId(column.field)}>
            <SortingButton column={column.field} filteredCol={filteredCol} />
          </Box>
        </Stack>
      </TableCell>
    </>
  );
};

export default StickyFirstTableHead;
