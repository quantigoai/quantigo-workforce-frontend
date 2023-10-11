/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableBody/MiddleTableCoumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 12:52:13 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { TableCell, Typography } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
import { calculateTimeDifference, formatDate, formatDateDob, formatTime } from "../../../../../helper/dateConverter";
import ChipGroup from "../../../../shared/CustomTable/ChipGroup";
import ProjectDrawerStatusChip from "../../../../shared/FilterField/ProjectDrawerStatusChip";
import ActiveJobsCell from "../CustomTableCell/ActiveJobsCell";
import BloodGroupCell from "../CustomTableCell/BloodGroupCell";
import LinkCell from "../CustomTableCell/LinkCell";
import MobileNoCell from "../CustomTableCell/MobileNoCell";
import PaymentRateCell from "../CustomTableCell/PaymentRateCell";
import ProjectEnroll from "../CustomTableCell/ProjectEnroll";
import TotalWorkingHoursCell from "../CustomTableCell/TotalWorkingHoursCell";
import UserBasicInfoCell from "../CustomTableCell/UserBasicInfoCell";
import UserRoleCell from "../CustomTableCell/UserRoleCell";

const MiddleTableColumn = ({ row, column }) => {
  const value = row[column.id];
  return (() => {
    if (column.field === "project_skills") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <ChipGroup value={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "role") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            <UserRoleCell role={row[column?.field]} />
          </Typography>
        </TableCell>
      );
    } else if (column.field === "name") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            <UserBasicInfoCell name={row[column?.field]} email={row?.email} image={row?.image} />
          </Typography>
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
          <LinkCell data={row[column?.field]} />
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
    } else if (column.field === "totalWorkingHours") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <TotalWorkingHoursCell data={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "activeJobs") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <ActiveJobsCell data={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "billingAccountNo") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <MobileNoCell data={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "checkedInDate" || column.field === "checkedOutDate") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {row[column?.field] ? formatDate(row[column?.field]) : "Working ⛑️"}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "dob") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {row[column?.field] && formatDateDob(row[column?.field])}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "gender") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {row[column?.field] ? capitalizeFirstLetter(row[column?.field]) : ""}
          </Typography>
        </TableCell>
      );
    } else if (column.field === "bloodGroup") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <BloodGroupCell data={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "paymentRate") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <PaymentRateCell data={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "currentlyCheckedInProject") {
      return (
        <TableCell align={column.columnDataAlign} key={column.id} component="th" scope="row">
          <ProjectEnroll data={row[column?.field]} />
        </TableCell>
      );
    } else if (column.field === "checkedInTime" || column.field === "checkedOutTime") {
      return (
        <TableCell sx={{ textAlign: "left" }} key={column.id} component="th" scope="row">
          <Typography variant="wpf_p4_regular" color="neutral.700">
            {row[column?.field] ? formatTime(row[column?.field]) : "Working ⛑️"}
          </Typography>
        </TableCell>
      );
    }

    return (
      <TableCell align={column.columnDataAlign} key={column.id}>
        <Typography variant="wpf_p4_regular" color="neutral.700">
          {column.format && typeof value === "number" ? column.format(row[column?.field]) : row[column?.field]}
        </Typography>
      </TableCell>
    );
  })();
};

export default MiddleTableColumn;
