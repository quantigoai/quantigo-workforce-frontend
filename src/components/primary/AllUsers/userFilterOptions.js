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
export const roleOptionsAdmin = [
  { value: 'level_0_annotator', label: 'Level 0 annotator' },
  { value: 'level_1_annotator', label: 'Level 1 annotator' },
  { value: 'level_2_annotator', label: 'Level 2 annotator' },
  { value: 'level_3_annotator', label: 'Level 3 annotator' },
  { value: 'reviewer', label: 'Reviewer' },
  { value: 'trainer', label: 'Trainer' },
  { value: 'delivery_lead', label: 'Delivery lead' },
  { value: 'project_coordinator', label: 'Project coordinator' },
  { value: 'project_delivery_lead', label: 'Project Delivery Lead ' },
  { value: 'project_manager', label: 'Project manager' },
  { value: 'account_manager', label: 'Account manager' },
  { value: 'recruitment_manager', label: 'Recruitment manager' },
  { value: 'engineering_lead', label: 'Engineering lead' },
  { value: 'admin', label: 'Admin' },
];

export const roleOptionsRecruitment_manager = [
  { value: 'level_0_annotator', label: 'Level 0 annotator' },
  { value: 'level_1_annotator', label: 'Level 1 annotator' },
  { value: 'level_2_annotator', label: 'Level 2 annotator' },
  { value: 'level_3_annotator', label: 'Level 3 annotator' },
  { value: 'reviewer', label: 'Reviewer' },
  { value: 'trainer', label: 'Trainer' },
  { value: 'delivery_lead', label: 'Delivery lead' },
  { value: 'project_coordinator', label: 'Project coordinator' },
  { value: 'project_delivery_lead', label: 'Project Delivery Lead ' },
  { value: 'project_manager', label: 'Project manager' },
  { value: 'account_manager', label: 'Account manager' },
  { value: 'recruitment_manager', label: 'Recruitment manager' },
  { value: 'engineering_lead', label: 'Engineering lead' },
];

export const hubOptions = [
  { value: 'Dhaka', label: 'Dhaka' },
  { value: 'Khulna', label: 'Khulna' },
  { value: 'Sirajganj', label: 'Sirajganj' },
  { value: 'Mymensingh', label: 'Mymensingh' },
  { value: 'Chuadanga', label: 'Chuadanga' },
];
export const userStatusOptions = [
  { value: new Date().toISOString(), label: 'Active' },
  { value: 'empty', label: 'Not Active' },
];

export const employeeType = [
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
];
export const platformCreateOptions = [
  { value: 'supervisely', label: 'Supervisely' },
  { value: 'encord', label: 'Encord' },
  { value: 'superb_ai', label: 'Superb AI' },
];
export const projectTypeCreateOptions = [
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
];
export const statusCreateOptions = [
  { value: 'not-Started', label: 'Not Started' },
  { value: 'in-Progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
  { value: 'hours-added', label: 'Hours added' },
];
export const fields = [
  { field: 'project_drawer_name', width: 200 },
  { field: 'project_alias', width: 200 },
  { field: 'project_platform' },
  { field: 'project_batch', width: 150 },
  { field: 'project_status', renderCell: 'chip' },
  { field: 'project_skills', width: 300, renderCell: 'skills-chip' },
  { field: 'pdr', width: 100 },
  { field: 'createdBy', width: 150 },
  { field: 'benchmark', width: 150 },
  { field: 'estimated_end_date', width: 220 },
  { field: 'relevantDocuments', width: 150 },
  {
    field: 'ACTIONS',
    renderCell: 'button',
    width: 80,
  },
];
export const singleDetailsFields = [
  { field: 'userQaiID', width: 300 },
  { field: 'checkedInDate', width: 200 },
  { field: 'checkedInTime', width: 200 },
  { field: 'checkedOutDate', width: 200 },
  { field: 'checkedOutTime', width: 200 },
  { field: 'workingTimeInMs', width: 400 },
];

export const courseLevelFields = [
  { value: 'basic', label: 'Basic' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];
export const courseCategoryFields = [
  { value: 'intro', label: 'Intro' },
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
  { value: 'LiDAR', label: 'LiDAR' },
];

export const courseLanguageFields = [
  { value: 'english', label: 'English' },
  { value: 'bengali', label: 'Bengali' },
];
