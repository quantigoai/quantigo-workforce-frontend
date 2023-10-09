import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProjectDrawerById } from "../../../../../features/slice/projectDrawerSlice";

const ProjectEnroll = ({ data }) => {
  const dispatch = useDispatch();
  const [projectDrawerName, setProjectDrawerName] = useState("");
  useEffect(() => {
    data &&
      dispatch(getProjectDrawerById(data)).then((action) =>
        setProjectDrawerName(action.payload.data.projectDrawer.project_drawer_name)
      );
  }, []);

  return (
    <Typography variant="wpf_p4_regular" color="neutral.700">
      {projectDrawerName}
    </Typography>
  );
};

export default ProjectEnroll;
