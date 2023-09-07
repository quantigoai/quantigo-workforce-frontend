import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const RoleField = ({ handleChange, setRoleFilter, roleFilter }) => {
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setRoleFilter(e.target.value)}
          value={roleFilter || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
        >
          <MenuItem value={"level_0_annotator"}>Level 0 Annotator</MenuItem>
          <MenuItem value={"level_1_annotator"}>Level 1 Annotator</MenuItem>
          <MenuItem value={"level_2_annotator"}>Level 2 Annotator</MenuItem>
          <MenuItem value={"level_3_annotator"}>Level 3 Annotator</MenuItem>
          <MenuItem value={"reviewer"}>Reviewer</MenuItem>
          <MenuItem value={"trainer"}>Trainer</MenuItem>
          <MenuItem value={"project_lead"}>Project Lead</MenuItem>
          <MenuItem value={"project_coordinator"}>Project Coordinator</MenuItem>

          <MenuItem value={"delivery_manager"}>Delivery Manager</MenuItem>

          <MenuItem value={"project_manager"}>Project Manager</MenuItem>

          <MenuItem value={"recruitment_manager"}>Recruitment Manager</MenuItem>

          <MenuItem value={"engineering_lead"}>Engineering Lead</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default RoleField;
