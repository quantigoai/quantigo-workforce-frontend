import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const HubField = ({ handleChange, setHubFilter, hubFilter }) => {

  
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Hub</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setHubFilter(e.target.value)}
          value={hubFilter || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}>
          <MenuItem value={"Dhaka"}>Dhaka</MenuItem>
          <MenuItem value={"Chuadanga"}>Chuadanga</MenuItem>
          <MenuItem value={"Sirajganj"}>Sirajganj</MenuItem>
          <MenuItem value={"Khulna"}>Khulna</MenuItem>
          <MenuItem value={"Mymensingh"}>Mymensingh</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default HubField;
