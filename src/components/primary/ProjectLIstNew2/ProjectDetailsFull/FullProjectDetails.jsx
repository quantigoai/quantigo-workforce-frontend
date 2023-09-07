import { Box } from "@mui/material";
import React from "react";
import ProjectDetailsHeader from "./ProjectDetailsHeader";

const FullProjectDetails = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#F2F6FC", width: "100%" }}>
        <ProjectDetailsHeader />
      </Box>
    </Box>
  );
};

export default FullProjectDetails;
