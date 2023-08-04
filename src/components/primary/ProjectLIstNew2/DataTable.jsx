/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/DataTable.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Thursday, August 3rd 2023, 11:29:04 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "projectName", headerName: "PROJECT NAME", width: 170 },
  { field: "aLias", headerName: "Alias", width: 130 },
  {
    field: "platform",
    headerName: "PLATFORM",
    width: 120,
  },
  {
    field: "batch",
    headerName: "BATCH",

    width: 80,
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 140,
    headerAlign: "center",
  },
  {
    field: "skill",
    headerName: "SKILL",
    width: 200,
    headerAlign: "center",
  },
  {
    field: "pdr",
    headerName: "PDR",
    width: 80,
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 120,
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    projectName: "Car Annotation",
    aLias: "Sushi",
    platform: "Supervisely",
    batch: 1,
    status: "In Progress",
    skill: "Bounding Box ,polygon",
    pdr: 3,
  },
  {
    id: 2,
    projectName: "Human Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 55,
    status: "Completed",
    skill: "Bit map , tagging,PCD",
    pdr: 5,
  },
  {
    id: 3,
    projectName: "Car Annotation",
    aLias: "Sushi",
    platform: "Supervisely",
    batch: 55,
    status: "Hours Added",
    skill: "Bit map , tagging,PCD",
    pdr: 5,
  },
  {
    id: 4,
    projectName: "Human Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 1,
    status: "Completed",
    skill: "Bit map , tagging,PCD",
    pdr: 5,
  },
  {
    id: 5,
    projectName: "Human Annotation",
    aLias: "Sushi",
    platform: "Supervisely",
    batch: 55,
    status: "Completed",
    skill: "Bit map , tagging,PCD",
    pdr: 5,
  },
  {
    id: 6,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 1,
    status: "Completed",
    skill: "Bit map , tagging,PCD",
    pdr: 3,
  },
  {
    id: 7,
    projectName: "Human Annotation",
    aLias: "Sushi",
    platform: "Supervisely",
    batch: 55,
    status: "Completed",
    skill: "Bit map , tagging,PCD",
    pdr: 5,
  },
  {
    id: 8,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 1,
    status: "In progress",
    skill: "Bit map , tagging,PCD",
    pdr: 3,
  },
  {
    id: 9,
    projectName: "Human Annotation",
    aLias: "Sushi",
    platform: "Supervisely",
    batch: 55,
    status: "Completed",
    skill: "Bit map , tagging,PCD",
    pdr: 5,
  },
  {
    id: 10,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 1,
    status: "Hours Added",
    skill: "Bit map , tagging,PCD",
    pdr: 3,
  },
  {
    id: 11,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 55,
    status: "Completed",
    skill: "Bit map ,video, tagging,PCD",
    pdr: 1,
  },
  {
    id: 12,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 1,
    status: "Completed",
    skill: "Bit map , tagging,PCD",
    pdr: 3,
  },
  {
    id: 13,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 55,
    status: "In progress",
    skill: "Bit map , tagging,PCD",
    pdr: 1,
  },
  {
    id: 14,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 1,
    status: "Completed",
    skill: "Bit map , tagging,PCD,Video",
    pdr: 3,
  },
  {
    id: 15,
    projectName: "Car Annotation",
    aLias: "QAI_Encord",
    platform: "Supervisely",
    batch: 55,
    status: "Hourly Added",
    skill: "Bit map , tagging,PCD",
    pdr: 3,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        sx={{ textAlign: "center" }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
      />
    </div>
  );
}
