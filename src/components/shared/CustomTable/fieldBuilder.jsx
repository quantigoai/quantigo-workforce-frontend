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
import DeleteModal from "./DeleteModal.jsx";

const fieldBuilder = (fields, handleClick, handleDelete) => {
  const MyButton = ({ params }) => {
    return (
      <>
        <Button sx={{ color: "#2E58FF" }} onClick={() => handleClick(params)}>
          <i className="ri-edit-line"></i>
        </Button>
        <Button sx={{ color: "#F04438" }}>
          <DeleteModal handleDelete={handleDelete} params={params} />
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
        width: field.width || 200,
        headerName: customHeader(field.field),
        renderCell: (params) => <MyButton params={params} />,
        editable: field.editable || false,
        cellClassName: field.cellClassName || "",
      };
    } else if (field.renderCell === "chip") {
      customItems = {
        id: index,
        field: field.field,
        width: field.width || 250,
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
