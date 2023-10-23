/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/CustomTableCell/UserRoleCell.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, September 29th 2023, 2:14:57 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";

const UserRoleCell = ({ role }) => {
  const RoleFormatter = (role) => {
    switch (role) {
      case "level_1_annotator":
        return "Level 1 Annotator";
      case "level_2_annotator":
        return "Level 2 Annotator";
      case "level_0_annotator":
        return "Level 0 Annotator";
      case "level_3_annotator":
        return "Level 3 Annotator";
      case "delivery_manager":
        return "Project Delivery Lead";
      case "project_lead":
        return "Delivery Lead";
      case "project_coordinator":
        return "Project Coordinator";
      case "project_manager":
        return "Project Manager";
      case "account_manager":
        return "Account Manager";
      case "recruitment_manager":
        return "Recruitment Manager";
      default:
        return capitalizeFirstLetter(role);
    }
  };

  return RoleFormatter(role);
};

export default UserRoleCell;
