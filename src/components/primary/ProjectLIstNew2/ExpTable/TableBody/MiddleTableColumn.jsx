/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableBody/MiddleTableCoumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:52:13 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Link, TableCell, Typography } from "@mui/material";
import React from "react";
import { calculateTimeDifference, formatDate, formatTime } from "../../../../../helper/dateConverter";
import ChipGroup from "../../../../shared/CustomTable/ChipGroup";
import ProjectDrawerStatusChip from "../../../../shared/FilterField/ProjectDrawerStatusChip";

const MiddleTableColumn = ({ row, column }) => {
  const value = row[column.id];
  return (() => {
    if (column.field === "project_skills") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <ChipGroup value={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "createdBy") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {row[column?.field] || "Admin"}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "benchmark") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {row[column?.field] || "10 sec"}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "estimated_end_date") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {formatDate(row[column?.field]) || "20 july 2023"}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "relevantDocuments") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          {row?.[column.field]?.length > 0 ? (
            <Typography sx={{ color: "#253E5C" }} variant="wf_p4_regular">
              <Link
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                href={row?.[column.field]?.[0].documentUrl}
              >
                click here
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </Typography>
          ) : (
            ""
          )}
        </TableCell>
      );
    } else if (column.field === "project_status") {
      return (
        <TableCell key={column.id} component="th" scope="row">
          <ProjectDrawerStatusChip value={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "workingTimeInMs") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {calculateTimeDifference(row[column?.field])}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "checkedInDate" || column.field === "checkedOutDate") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {/* TODO Add working chip here */}
            {row[column?.field] ? formatDate(row[column?.field]) : "Working ⛑️"}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "checkedInTime" || column.field === "checkedOutTime") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          {/* TODO Add working chip here  */}
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {row[column?.field] ? formatTime(row[column?.field]) : "Working ⛑️"}
          </Typography>
        </TableCell>
      );
    }

    return (
      <TableCell key={column.id}>
        <Typography variant="wpf_p4_regular" color="neutral.700">
          {column.format && typeof value === "number" ? column.format(row[column?.field]) : row[column?.field]}
        </Typography>
      </TableCell>
    );
  })();
};

export default MiddleTableColumn;
