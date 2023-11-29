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
  Project_Name: Yup.string().required("Project name is required"),
  Client_Alias: Yup.string().required("client alias is required"),
  Industry: Yup.string().required("industry type is required"),
  Platform: Yup.string().required("Platform is required"),
  Tool_Type: Yup.string().required("Tool type is required"),
  PDR: Yup.number()
    .required("Pdr is required")
    .lessThan(6, "PDR must be in range between 1 to 5")
    .transform((value) => (isNaN(value) ? undefined : value)),
  Project_Type: Yup.string().required("Project type is required"),
  Action_Items: Yup.string().required("Action items are required"),
  QA_Check_Points: Yup.string().required("qa check points required"),
  Obj_Benchmark: Yup.string().required("object benchmark required"),
  Img_Benchmark: Yup.string().required(" image benchmark is required"),
  Tagging_Benchmark: Yup.string().required(" tagging benchmark is required"),
  Deletion: Yup.string().required("Deletion is required"),
  Skip_Image: Yup.string().required("skip image is required"),
  Update: Yup.string().required("update is required"),
  Image_Loading: Yup.string().required("image loading is required"),
  Object_Saving_Time: Yup.string().required("object saving time is required"),
  Video_Watch_Time: Yup.string().required(" video watch time is required"),
  Judgement_Time: Yup.string().required(" judgement time is required"),
  QA_Benchmark: Yup.string().required("qa benchmark is required"),
  Annotation: Yup.string().required("annotation is required"),
  QA: Yup.string().required(" qa is required"),
  Remarks: Yup.string().required(" remarks is required"),
});

export { ProjectDrawerSchema, ProjectDirectorySchema };
