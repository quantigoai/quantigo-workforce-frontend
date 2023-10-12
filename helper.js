/*
 * File           : helper.js
 * Project        : wmpfrontv2
 * Created Date   : Sa 05 Aug 2023 12:33:16
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

const pd = [
    {
        _id: "64bac4e3a9f4d478f87a023c",
        project_id: "",
        project_drawer_name: "new test",
        project_batch: 1,
        project_description: "Test project_description",
        project_alias: "TEST1234",
        pdr: null,
        guideline: "",
        project_status: "not-Started",
        estimated_end_date: null,
        checkedInUsers: [
            "6486c5de1145bb3dac83de7a",
            "64c233372f63b1ad0db3fbd4",
            "64c233372f63b1ad0db3fbf1",
        ],
        checkedOutUsers: [],
        restrictedUsers: [],
        project_skills: [],
        working_hours: [],
        createdAt: "2023-07-21T17:48:19.689Z",
        updatedAt: "2023-08-02T17:10:52.559Z",
        __v: 10,
    },
    {
        _id: "64ca8bd0804034a8e5da6942",
        project_id: "",
        project_drawer_name: "Test Drawer",
        project_batch: 1,
        project_description: "Test project_description",
        project_alias: "TEST1234",
        pdr: null,
        guideline: "",
        project_status: "not-Started",
        estimated_end_date: null,
        checkedInUsers: ["6486c5de1145bb3dac83de7a"],
        checkedOutUsers: [],
        restrictedUsers: [],
        project_skills: [],
        working_hours: [],
        createdAt: "2023-08-02T17:01:04.204Z",
        updatedAt: "2023-08-02T17:16:59.076Z",
        __v: 1,
    },
    {
        _id: "64ca8c0c906b2ac7fc55cbdb",
        project_id: "",
        project_drawer_name: "Test Drawer",
        project_batch: 1,
        project_description: "Test project_description",
        project_alias: "TEST1234",
        pdr: null,
        guideline: "",
        project_status: "not-Started",
        estimated_end_date: null,
        checkedInUsers: [],
        checkedOutUsers: [],
        restrictedUsers: [],
        project_skills: [],
        working_hours: [],
        createdAt: "2023-08-02T17:02:04.736Z",
        updatedAt: "2023-08-02T17:02:04.736Z",
        __v: 0,
    },
    {
        _id: "64ca8c0e906b2ac7fc55cbdd",
        project_id: "",
        project_drawer_name: "Test Drawer",
        project_batch: 1,
        project_description: "Test project_description",
        project_alias: "TEST1234",
        pdr: null,
        guideline: "",
        project_status: "not-Started",
        estimated_end_date: null,
        checkedInUsers: [],
        checkedOutUsers: [],
        restrictedUsers: [],
        project_skills: [],
        working_hours: [],
        createdAt: "2023-08-02T17:02:06.033Z",
        updatedAt: "2023-08-02T17:02:06.033Z",
        __v: 0,
    },
    {
        _id: "64ca8c0f906b2ac7fc55cbdf",
        project_id: "",
        project_drawer_name: "Test Drawer",
        project_batch: 1,
        project_description: "Test project_description",
        project_alias: "TEST1234",
        pdr: null,
        guideline: "",
        project_status: "not-Started",
        estimated_end_date: null,
        checkedInUsers: [],
        checkedOutUsers: [],
        restrictedUsers: [],
        project_skills: [],
        working_hours: [],
        createdAt: "2023-08-02T17:02:07.202Z",
        updatedAt: "2023-08-02T17:02:07.202Z",
        __v: 0,
    },
    {
        _id: "64cc9831fe389cdc68af5c53",
        project_id: "",
        project_drawer_name: "Test Drawer",
        project_batch: 1,
        project_description: "Test project_description",
        project_alias: "TEST12324",
        pdr: null,
        guideline: "",
        project_status: "not-Started",
        estimated_end_date: null,
        checkedInUsers: [],
        checkedOutUsers: [],
        restrictedUsers: [],
        project_skills: [],
        working_hours: [],
        createdAt: "2023-08-04T06:18:25.423Z",
        updatedAt: "2023-08-04T06:18:25.423Z",
        __v: 0,
    },
    {
        _id: "64cc9834fe389cdc68af5c56",
        project_id: "",
        project_drawer_name: "Test Drawer",
        project_batch: 1,
        project_description: "Test project_description",
        project_alias: "TEST121324",
        pdr: null,
        guideline: "",
        project_status: "not-Started",
        estimated_end_date: null,
        checkedInUsers: [],
        checkedOutUsers: [],
        restrictedUsers: [],
        project_skills: [],
        working_hours: [],
        createdAt: "2023-08-04T06:18:28.303Z",
        updatedAt: "2023-08-04T06:18:28.303Z",
        __v: 0,
    },
];
const customHeader = (params) => {
    switch (params) {
        case "_id":
            return "ID";
        case "project_id":
            return "PROJECT ID";
        case "project_drawer_name":
            return "PROJECT DRAWER NAME";
        case "project_batch":
            return "PROJECT BATCH";
        case "project_description":
            return "PROJECT DESCRIPTION";
        case "project_alias":
            return "PROJECT ALIAS";
        case "pdr":
            return "PDR";
        case "guideline":
            return "GUIDELINE";
        case "project_status":
            return "PROJECT STATUS";
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
const pdFields = Object.keys(pd[0]);
const expectedFields = [
    {
        field: "project_description",
        width: 120,
        renderCell: (params) => {
            return "test";
        },
    },
    {
        field: "pdr",
        editable: true,
    },
    {
        field: "project_id",
        width: 160,
    },
    {
        field: "project_batch",
        width: 160,
    },
    {
        field: "guideline",
        width: 160,
    },
];

const fieldBuilder = (data, fields) => {
    const newFields = fields.map((field) => {
        const customItems = {
            field: field.field,
            width: field.width || 160,
            headerName: customHeader(field.field),
            renderCell: field.renderCell,
        };
        return customItems;
    });
    return newFields;
};

fieldBuilder(pd, expectedFields);
export default fieldBuilder;
