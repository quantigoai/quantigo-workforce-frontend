/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableBody/LastTableCoumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:52:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Badge, TableCell, styled } from "@mui/material";
import React from "react";
import CustomButton from "../../../../shared/CustomTable/CustomButton";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 10,
    padding: "0 2px",
  },
}));

const LastTableColumn = ({ role, handleProjectDetailsOpen, row, handleClick, handleDelete }) => {
  return (
    <>
      <TableCell className="tablerowlast">
        <CustomButton
          role={role}
          handleProjectDetailsOpen={handleProjectDetailsOpen}
          params={row}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      </TableCell>
    </>
  );
};

export default LastTableColumn;
