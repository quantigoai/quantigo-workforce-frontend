/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/TableBody/StickyDocViewTableColumn.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Monday, October 9th 2023, 11:28:14 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import AttachFileIcon from "@mui/icons-material/AttachFile";
import DescriptionIcon from "@mui/icons-material/Description";
import {Box, TableCell} from "@mui/material";
import axios from "axios";
import React, {useState} from "react";
import {realToken} from "../../../../../helper/lib";
import NidDetails from "../../../Users/NidDetals/NidDetails";

const StickyDocViewTableColumn = ({ column }) => {
    const [openModal, setOpenModal] = React.useState(false);
  const [documentsImage, setDocumentsImage] = useState([]);
  const [documentsType, setDocumentsType] = useState("");
  const [documentsNo, setDocumentsNo] = useState();
  const [userName, setUserName] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_APP_SERVER_URL;
  const handleClick = (signNda) => {
    window.open(signNda);
  };
  const handleDetailNid = (documentImage, documentNo, documentType, name) => {
    setOpenModal(true);

    setDocumentsNo(documentNo);
    setDocumentsType(documentType);
    setUserName(name);
    const id = column._id;
    axios
      .get(`${BACKEND_URL}/users/get-user-documents/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      })
      .then((res) => {
        setDocumentsImage(res.data.documentsImage);
      });
  };
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <TableCell className="docrow">
        {/* {column.isNDASigned && column.isDocumentsSubmitted !== "pending" && ( */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {column.isDocumentsSubmitted !== "pending" && (
            <DescriptionIcon
              onClick={() =>
                handleDetailNid(column.documentsImage, column.documentNo, column.documentsType, column.name)
              }
              sx={{ fontSize: "16px", cursor: "pointer" }}
            />
          )}
          {column.isNDASigned && (
            <AttachFileIcon
              onClick={() => handleClick(column.signImage)}
              sx={{ fontSize: "16px", cursor: "pointer" }}
            />
          )}
        </Box>
        {/* )} */}
      </TableCell>
      <NidDetails
        userId={column._id}
        openModal={openModal}
        handleClose={handleClose}
        documentImage={documentsImage}
        documentsNo={documentsNo}
        documentsType={documentsType}
        userName={userName}
      />
    </>
  );
};

export default StickyDocViewTableColumn;
