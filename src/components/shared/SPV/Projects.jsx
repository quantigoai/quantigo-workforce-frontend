/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/SPV/Projects.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 10:43:13 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import React from "react";
import {FormControl, InputLabel, MenuItem, Select, styled,} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
const Projects = ({
    projects,
    handleChangeProject,
}) => {
  return (
    <>
      <FormControl
        variant="filled"
        fullWidth
        sx={{
          backgroundColor: "#F8F8F8",
          border: "1px solid #DADCDF",
          borderRadius: "4px",
          height: "56px",
        }}
      >
        <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
        {projects.length > 0 && (
          <Select
            onChange={(e) => handleChangeProject(e)}
            label="project"
            sx={{
              backgroundColor: "#F8F8F8",
              border: "0px solid #DADCDF",
              borderRadius: "4px",
            }}
            IconComponent={() => <CustomDownArrow />}
            //  {...register("projectId", { required: true })}
          >
            {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </>
  );
};

export default Projects;
