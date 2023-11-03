/*
 * File           : tableFiels.js
 * Project        : wmpfrontv2
 * Created Date   : Th 28 Sep 2023 03:08:50
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Sep 28 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

export const fields = [
  { field: "qaiUserName", width: 150 },
  { field: "name", width: 300, textAlign: "left", columnDataAlign: "left" },
  { field: "gender", width: 100, textAlign: "left", columnDataAlign: "left" },
  { field: "dob", width: 150, textAlign: "left", columnDataAlign: "left" },
  { field: "billingAccountNo", width: 150, textAlign: "left", columnDataAlign: "left" },
  { field: "role", width: 180, textAlign: "left", columnDataAlign: "left" },
  { field: "isVerified", width: 100, textAlign: "left", columnDataAlign: "left" },
  { field: "status", width: 120, renderCell: "chip", textAlign: "left", columnDataAlign: "center" },
  { field: "skills", width: 300, renderCell: "skills-chip", textAlign: "left", columnDataAlign: "center" },
  { field: "jobLimit", width: 120, textAlign: "center", columnDataAlign: "center" },
  { field: "activeJobs", width: 150, textAlign: "center", columnDataAlign: "center" },
  { field: "jobLimitLeft", width: 160, textAlign: "left", columnDataAlign: "center" },
  { field: "totalWorkingHours", width: 180, textAlign: "center", columnDataAlign: "center" },
  { field: "totalPaidAmount", width: 170, textAlign: "center", columnDataAlign: "center" },
  { field: "totalDueAmount", width: 170, textAlign: "center", columnDataAlign: "center" },
  { field: "paymentRate", width: 160, textAlign: "left", columnDataAlign: "center" },
  { field: "bloodGroup", width: 170, textAlign: "center", columnDataAlign: "center" },
  // { field: "currentlyCheckedInProject", width: 270, textAlign: "left", columnDataAlign: "left" },

  { field: "hub", width: 100, textAlign: "left", columnDataAlign: "left" },
  { field: "ACTIONS", renderCell: "button", width: 140, textAlign: "center" },
];
