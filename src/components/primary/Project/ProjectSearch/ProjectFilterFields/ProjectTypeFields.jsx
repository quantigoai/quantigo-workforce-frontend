import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";

const ProjectTypeFilter = ({ setStatusFilter, statusFilter }) => {
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
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
          <MenuItem value={"images"}>Image</MenuItem>
          <MenuItem value={"videos"}>Video</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ProjectTypeFilter;
