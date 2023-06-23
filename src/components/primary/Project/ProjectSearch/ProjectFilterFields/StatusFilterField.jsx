import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";

const StatusFilterField = ({ setStatusFilter, statusFilter }) => {
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}>
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
    </>
  );
};

export default StatusFilterField;
