export const filterPDR = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export const platformOptions = [
  { value: "supervisely", label: "Supervisely" },
  { value: "encord", label: "Encord" },
  { value: "superb_ai", label: "Superb AI" },
];
export const statusOptions = [
  { value: "not-Started", label: "Not Started" },
  { value: "in-Progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "hours-added", label: "Hours added" },
  { value: "hours-approved", label: "Hours Approved" },
  { value: "payment-done", label: "Payment Done" },
];
export const projectTypeOptions = [
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
  { value: "hours-approved", label: "Hours Approved" },
  { value: "payment-done", label: "Payment Done" },
];
export const fields = [
  { field: "project_drawer_name", width: 250, textAlign: "left", columnDataAlign: "left" },
  { field: "project_alias", width: 250, textAlign: "left", columnDataAlign: "left" },
  { field: "project_platform", textAlign: "center", columnDataAlign: "center" },
  { field: "project_batch", width: 150, textAlign: "center", columnDataAlign: "center" },
  { field: "project_status", renderCell: "chip", textAlign: "center", columnDataAlign: "left" },
  { field: "project_skills", width: 300, renderCell: "skills-chip", textAlign: "center", columnDataAlign: "center" },
  { field: "pdr", width: 100, textAlign: "center", columnDataAlign: "center" },
  // { field: "createdBy", width: 150, textAlign: "center", columnDataAlign: "center" },
  { field: "benchmark", width: 150, textAlign: "left", columnDataAlign: "left" },
  { field: "estimated_end_date", width: 220, textAlign: "center", columnDataAlign: "center" },
  { field: "relevantDocuments", width: 150, textAlign: "left", columnDataAlign: "left" },
  {
    field: "ACTIONS",
    renderCell: "button",
    width: 80,
  },
];
export const singleDetailsFields = [
  { field: "userQaiID", width: 140, textAlign: "left", columnDataAlign: "left" },
  { field: "checkedInDate", width: 180, textAlign: "left", columnDataAlign: "left" },
  { field: "checkedInTime", width: 180, textAlign: "left", columnDataAlign: "left" },
  { field: "checkedOutDate", width: 180, textAlign: "left", columnDataAlign: "left" },
  { field: "checkedOutTime", width: 180, textAlign: "left", columnDataAlign: "left" },
  { field: "workingTimeInMs", width: 180, textAlign: "left", columnDataAlign: "left" },
  {
    field: "ACTIONS",
    renderCell: "button",
    width: 80,
  },
];
