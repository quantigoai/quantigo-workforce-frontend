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

import { Button } from "@mui/material";
import "remixicon/fonts/remixicon.css";
import ProjectDrawerStatusChip from "../FilterField/ProjectDrawerStatusChip.jsx";
import customHeader from "./formatHeader.js";

const fieldBuilder = (fields, handleClick, handleDelete) => {
  const MyButton = ({ params }) => {
    return (
      <>
        <Button onClick={() => handleClick(params)} variant="outlined">
          <i className="ri-edit-line"></i>
        </Button>
        <Button onClick={() => handleDelete(params)} variant="outlined">
          <i className="ri-delete-bin-6-line"></i>
        </Button>
      </>
    );
  };

  const newFields = fields.map((field, index) => {
    let customItems;
    if (field.renderCell === "button") {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 160,
        headerName: customHeader(field.field),
        renderCell: (params) => <MyButton params={params} />,
        editable: field.editable || false,
        cellClassName: field.cellClassName || "",
      };
    } else if (field.renderCell === "chip") {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 160,
        headerName: customHeader(field.field),
        renderCell: (params) => {
          return <ProjectDrawerStatusChip value={params.value} />;
        },
        editable: field.editable || false,
        cellClassName: field.cellClassName || "",
      };
    } else {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 160,
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
