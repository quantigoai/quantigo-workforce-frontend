import {FormControl, MenuItem, Select, styled} from "@mui/material";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
const PriorityField = ({ project, priority, handleChangePriority }) => {
  const [projectPriority, setProjectPriority] = React.useState(
    project.priorityLevel
  );

  const handleChange = (event) => {
    handleChangePriority(event);
    setProjectPriority(event.target.value);
  };

  return (
    <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Priority</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        IconComponent={() => <CustomDownArrow />}
        // label="priority"
        // defaultValue={project.priorityLevel}
        value={projectPriority}
        // onChange={(e) => handleChangePriority(e)}
        onChange={(e) => handleChange(e)}>
        <MenuItem value={"Normal"}>Normal</MenuItem>
        <MenuItem value={"High"}>High</MenuItem>
        <MenuItem value={"Urgent"}>Urgent</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PriorityField;
