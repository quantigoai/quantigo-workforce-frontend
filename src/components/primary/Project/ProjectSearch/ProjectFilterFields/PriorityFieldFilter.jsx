import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";

const PriorityFieldFilter = ({ setPriorityFilter, priorityFilter }) => {
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setPriorityFilter(e.target.value)}
          value={priorityFilter || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}>
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
          <MenuItem value={"Urgent"}>Urgent</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default PriorityFieldFilter;
