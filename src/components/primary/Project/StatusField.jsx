/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Project/StatusField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 13th 2023, 10:17:03 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {FormControl, MenuItem, Select, styled,} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
const StatusField = ({ project, handleStatusProject }) => {
  return (
    <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Edit Status</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        IconComponent={() => <CustomDownArrow />}
        onChange={(e) => handleStatusProject(e, project.id)}
        defaultValue={project.status || "pending"}
        // label="Pause/Resume"
        // defaultValue={job.status === "inProgress" ? " " : "paused"}
      >
        <MenuItem value="pending">TBA</MenuItem>
        <MenuItem value="demoInProgress">Demo In Progress</MenuItem>
        <MenuItem value="feedback">Feedback</MenuItem>
        {/* <MenuItem value="pending">Pending</MenuItem> */}
        <MenuItem value="upcomingProject">Upcoming Project</MenuItem>
        <MenuItem value="ongoingProject">Ongoing Project</MenuItem>
        <MenuItem value="completedProject">Completed Project</MenuItem>
        <MenuItem value="archivedProject">Archived Project</MenuItem>
        <MenuItem value="inCommunication">InCommunication</MenuItem>
        <MenuItem value="inNegotiation">InNegotiation</MenuItem>
        <MenuItem value="projectInProgress">Project In Progress</MenuItem>
        <MenuItem value="projectCompleted">Project Completed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusField;
