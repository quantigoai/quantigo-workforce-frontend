/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/StickyMiddleHead.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:45:59 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Stack, TableCell, Typography} from "@mui/material";
import React from "react";
import SortingButton from "../../Project2Details/SortingButton";

const StickyMiddleHead = ({ column, handleId, filteredCol }) => {
  return (
    <>
      <TableCell className="common-head" key={column.id} style={{ minWidth: column.width || "140px" }}>
        <Stack
          flexDirection={"row"}
          sx={{
            justifyContent: column.textAlign ? column.textAlign : "center",
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

export default StickyMiddleHead;
