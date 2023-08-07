/*
 * File           : formatHeader.js
 * Project        : wmpfrontv2
 * Created Date   : Sa 05 Aug 2023 11:47:00
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sat Aug 05 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

const customHeader = (params) => {
  switch (params) {
    case "_id":
      return "ID";
    case "project_id":
      return "PROJECT ID";
    case "project_drawer_name":
      return "PROJECT NAME";
    case "project_batch":
      return "BATCH";
    case "project_description":
      return "PROJECT DESCRIPTION";
    case "project_alias":
      return "ALIAS";
    case "pdr":
      return "PDR";
    case "guideline":
      return "GUIDELINE";
    case "project_platform":
      return "PLATFORM";
    case "project_status":
      return "STATUS";
    case "estimated_end_date":
      return "ESTIMATED END DATE";
    case "checkedInUsers":
      return "CHECKED-IN USERS";
    case "checkedOutUsers":
      return "CHECKED-OUT USERS";
    case "restrictedUsers":
      return "RESTRICTED USERS";
    case "project_skills":
      return "PROJECT SKILLS";
    case "working_hours":
      return "WORKING HOURS";
    case "createdAt":
      return "CREATED AT";
    case "updatedAt":
      return "UPDATED AT";
    case "qaiUserName":
      return "QAI USER NAME";
    case "title":
      return "TITLE";
    case "role":
      return "ROLE";
    case "completedJobs":
      return "COMPLETED JOBS";
    case "status":
      return "STATUS";
    case "email":
      return "EMAIL";
    default:
      return params;
  }
};

export default customHeader;
