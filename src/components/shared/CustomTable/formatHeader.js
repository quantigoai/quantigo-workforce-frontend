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
        case "relevantDocuments":
            return "GUIDELINE";
        case "project_platform":
            return "PLATFORM";
        case "project_status":
            return "STATUS";
        case "benchmark":
            return "BENCHMARK";
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
            return "QAI ID";
        case "title":
            return "TITLE";
        case "role":
            return "ROLE";
        case "completedJobs":
            return "COMPLETED JOBS";
        case "status":
            return "STATUS";
        case "createdBy":
            return "CREATED BY";
        case "userQaiID":
            return "QAI ID";
        case "checkedInDate":
            return "CHECK IN DATE";
        case "checkedInTime":
            return "CHECK IN TIME";
        case "checkedOutDate":
            return "CHECK OUT DATE";
        case "checkedOutTime":
            return "CHECK OUT TIME";
        case "workingTimeInMs":
            return "TOTAL TIME";
        case "name":
            return "NAME";
        case "email":
            return "EMAIL";
        case "gender":
            return "GENDER";
        case "phone":
            return "PHONE";
        case "isVerified":
            return "VERIFIED";
        case "documentsType":
            return "DOCUMENT";
        case "active":
            return "ACTIVE";
        case "isBlocked":
            return "BLOCKED";
        case "activeJobs":
            return "ACTIVE JOBS";
        case "submittedJobs":
            return "SUBMITTED JOBS";
        case "dob":
            return "DOB";
        case "jobLimit":
            return "JOB LIMIT";
        case "signImage":
            return "SIGN IMAGE";
        case "isJobBlocked":
            return " JOB BLOCKED";
        case "jobLimitLeft":
            return " JOB LIMIT LEFT";
        case "paymentRate":
            return " PAYMENT RATE";
        case "totalWorkingHours":
            return "WORKING HOURS";
        case "bloodGroup":
            return "BLOOD GROUP";
        case "hub":
            return "HUB";
        case "billingAccountNo":
            return "Nagad No";
        case "currentlyCheckedInProject":
            return "PROJECT ENROLLED";
        default:
            return params;
    }
};

export default customHeader;
