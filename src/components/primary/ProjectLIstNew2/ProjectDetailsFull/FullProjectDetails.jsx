import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const FullProjectDetails = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const { projectDrawer, projectDrawers } = useSelector((state) => state.projectDrawer);
  const { id } = useParams();
  const [selectedProjects, setSelectedProjects] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const projectDetails = projectDrawers.find((p) => p._id === id);
    setSelectedProjects(projectDetails);
    setIsloading(false);
  }, []);
  return (
    <Box>
      <Box sx={{ backgroundColor: "#F2F6FC", width: "100%" }}>{!isLoading && <ProjectDetailsHeader value={value} setValue={setValue} handleChange={handleChange} selectedProjects={selectedProjects} />}</Box>
    </Box>
  );
};

export default FullProjectDetails;
