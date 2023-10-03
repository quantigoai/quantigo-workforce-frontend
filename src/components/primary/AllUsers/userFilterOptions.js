/*
 * File           : userFilterOptions.js
 * Project        : wmpfrontv2
 * Created Date   : Tu 03 Oct 2023 01:52:36
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Oct 03 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

export const roleOptions = [
  { value: "level_0_annotator", label: "level_0_annotator" },
  { value: "level_1_annotator", label: "level_1_annotator" },
  { value: "level_2_annotator", label: "level_2_annotator" },
  { value: "level_3_annotator", label: "level_3_annotator" },
  { value: "reviewer", label: "reviewer" },
  { value: "trainer", label: "trainer" },
  { value: "project_lead", label: "project_lead" },
  { value: "project_coordinator", label: "project_coordinator" },
  { value: "delivery_manager", label: "delivery_manager" },
  { value: "project_manager", label: "project_manager" },
  { value: "recruitment_manager", label: "recruitment_manager" },
  { value: "engineering_lead", label: "engineering_lead" },
  { value: "admin", label: "admin" },
];

export const hubOptions = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Khulna", label: "Khulna" },
  { value: "Sirajganj", label: "Sirajganj" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Chuadanga", label: "Chuadanga" },
];
export const userStatusOptions = [
  { value: new Date(), label: "Active" },
  { value: "empty", label: "Not Active" },
];

export const employeeType = [
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
];
export const platformCreateOptions = [
  { value: "supervisely", label: "Supervisely" },
  { value: "encord", label: "Encord" },
  { value: "superb_ai", label: "Superb AI" },
];
export const projectTypeCreateOptions = [
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
];
export const statusCreateOptions = [
  { value: "not-Started", label: "Not Started" },
  { value: "in-Progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "hours-added", label: "Hours added" },
];
export const fields = [
  { field: "project_drawer_name", width: 200 },
  { field: "project_alias", width: 200 },
  { field: "project_platform" },
  { field: "project_batch", width: 150 },
  { field: "project_status", renderCell: "chip" },
  { field: "project_skills", width: 300, renderCell: "skills-chip" },
  { field: "pdr", width: 100 },
  { field: "createdBy", width: 150 },
  { field: "benchmark", width: 150 },
  { field: "estimated_end_date", width: 200 },
  { field: "relevantDocuments", width: 150 },
  {
    field: "ACTIONS",
    renderCell: "button",
    width: 80,
  },
];
export const singleDetailsFields = [
  { field: "userQaiID", width: 300 },
  { field: "checkedInDate", width: 200 },
  { field: "checkedInTime", width: 200 },
  { field: "checkedOutDate", width: 200 },
  { field: "checkedOutTime", width: 200 },
  { field: "workingTimeInMs", width: 400 },
];
