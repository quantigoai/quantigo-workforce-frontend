export const filterPDR = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  export const platformOptions = [
    { value: "supervisely", label: "supervisely" },
    { value: "encord", label: "Encord" },
    { value: "superb_ai", label: "Superb AI" },
  ];
  export const statusOptions = [
    { value: "not-Started", label: "Not Started" },
    { value: "in-Progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "hours-added", label: "Hours added" },
  ];
 export   const projectTypeOptions = [
    { value: "image", label: "Image" },
    { value: "video", label: "Video" },
  ];
 export const platformCreateOptions = [
    { value: "supervisely", label: "supervisely" },
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
    { field: "guideline", width: 150 },
    {
      field: "ACTIONS",
      renderCell: "button",
      width: 80,
    },
  ];
