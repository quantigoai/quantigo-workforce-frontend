/*
 * File           : fieldBuilder.js
 * Project        : wmpfrontv2
 * Created Date   : Sa 05 Aug 2023 12:23:42
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

import { AvatarGroup } from "@mui/material";
import "remixicon/fonts/remixicon.css";
import ProjectDrawerStatusChip from "../FilterField/ProjectDrawerStatusChip.jsx";
import CustomButton from "./CustomButton.jsx";
import customHeader from "./formatHeader.js";

const fieldBuilder = (fields, handleClick, handleDelete) => {
  const newFields = fields.map((field, index) => {
    let customItems;
    if (field.renderCell === "button") {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 200,
        headerName: customHeader(field.field),
        renderCell: (params) => (
          <CustomButton
            params={params}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ),
        editable: field.editable || false,
        cellClassName: field.cellClassName || "",
      };
    } else if (field.renderCell === "chip") {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 180,
        headerName: customHeader(field.field),
        renderCell: (params) => {
          return <ProjectDrawerStatusChip value={params.value} />;
        },
        editable: field.editable || false,
        cellClassName: field.cellClassName || "",
      };
    } else if (field.renderCell === "status-chip") {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 180,
        headerName: customHeader(field.field),
        renderCell: (params) => {
          return (
            <AvatarGroup max={3}>
              {params.value.map((p) => (
                <ProjectDrawerStatusChip key={p._id} value={p.name} />
              ))}
            </AvatarGroup>
          );
        },
        editable: field.editable || false,
        cellClassName: field.cellClassName || "",
      };
    } else {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 180,
        headerName: customHeader(field.field),
        editable: field.editable || false,
        cellClassName: field.cellClassName || "",
      };
    }
    return customItems;
  });

  return newFields;
};
export default fieldBuilder;
