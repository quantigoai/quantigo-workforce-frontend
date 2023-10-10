/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableBody/LastTableCoumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:52:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { TableCell } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "../../../../shared/CustomTable/CustomButton";

const LastTableColumn = ({
  role,
  handleProjectDetailsOpen,
  row,
  handleClick,
  handleDelete,
  handleReject,
  handleOpenNDA,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      <TableCell className="tablerowlast" >
        <CustomButton
          role={role}
          pathname={pathname}
          handleProjectDetailsOpen={handleProjectDetailsOpen}
          params={row}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleReject={handleReject}
          handleOpenNDA={handleOpenNDA}
        />
      </TableCell>
    </>
  );
};

export default LastTableColumn;
