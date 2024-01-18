/*
 * File           : ProjectDrawerHelper.js
 * Project        : wmpfrontv2
 * Created Date   : Su 05 Nov 2023 01:35:10
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sun Nov 05 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import * as Yup from "yup";

const ProjectDrawerSchema = Yup.object().shape({
  project_platform: Yup.string().required("Project platform is required"),
  project_drawer_name: Yup.string().required("Project name is required"),
  project_type: Yup.string().required("Project type is required"),
  project_batch: Yup.number()
    .required("Project Batch is required")
    .positive()
    .integer()
    .transform((value) => (isNaN(value) ? undefined : value)),
  project_alias: Yup.string().required("Alias is required"),
  pdr: Yup.number()
    .required("Pdr is required")
    .lessThan(6, "PDR must be in range between 1 to 5")
    .transform((value) => (isNaN(value) ? undefined : value)),
  project_status: Yup.string().required("Status is required"),
});

const ProjectDirectorySchema = Yup.object().shape({
  project_Name: Yup.string().required("Project name is required"),
  client_Alias: Yup.string().required("client alias is required"),
  PDR: Yup.number()
    .lessThan(6, "PDR must be in range between 1 to 5")
    .transform((value) => (isNaN(value) ? undefined : value)),
});

export { ProjectDrawerSchema, ProjectDirectorySchema };
