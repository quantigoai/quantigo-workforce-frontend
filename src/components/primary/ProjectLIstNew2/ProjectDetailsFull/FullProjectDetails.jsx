import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Project2DetailsModal from "../Project2Details/Project2DetailsModal";
import ProjectTable2 from "../ProjectTable2";

const FullProjectDetails = () => {
  const [selectedProjects, setSelectedProjects] = useState({});
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const { projectDrawer, projectDrawers } = useSelector((state) => state.projectDrawer);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  // const { detailsProjectOpen, handleProjectDetailsOpen, handleDetailsProjectClose } = useAllFunc();

  const [detailsProjectOpen, setDetailsProjectOpen] = React.useState(false);
  const handleProjectDetailsOpen = () => setDetailsProjectOpen(true);
  const handleDetailsProjectClose = () => {
    setDetailsProjectOpen(false);
  };

  useEffect(() => {
    const projectDetails = projectDrawers.find((p) => p._id === id);
    setSelectedProjects(projectDetails);
    setIsLoading(false);
  }, []);
  return (
    <Box>
      <Box sx={{ backgroundColor: "#F2F6FC", width: "100%" }}>{!isLoading && <ProjectDetailsHeader handleProjectDetailsOpen={handleProjectDetailsOpen} value={value} setValue={setValue} handleChange={handleChange} selectedProjects={selectedProjects} />}</Box>

      {detailsProjectOpen && (
        <Box>
          <Project2DetailsModal detailsProjectOpen={detailsProjectOpen} handleProjectDetailsOpen={handleProjectDetailsOpen} handleDetailsProjectClose={handleDetailsProjectClose} />
        </Box>
      )}
      <Box>
        <ProjectTable2 />
      </Box>
    </Box>
  );
};

export default FullProjectDetails;
