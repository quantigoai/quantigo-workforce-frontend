import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Chip, FilledInput, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const iconStyle = {
  color: "rgba(45, 88, 255, 1)",
  marginRight: "5px",
  cursor: "pointer",
};

const SkillField = ({ skills, skillSet, handleChangeSkills, MenuProps, user }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Grid>
        <FormControl fullWidth variant="filled">
          <InputLabel id="demo-simple-select-label" >
            Skills
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            IconComponent={() =>
              isOpen ? <KeyboardArrowUpIcon style={iconStyle} /> : <KeyboardArrowDownIcon style={iconStyle} />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            onOpen={handleOpenClose}
            onClose={handleOpenClose}
            defaultValue={user.skills.map((s) => s.name)}
            variant="outlined"
            onChange={handleChangeSkills}
            input={<FilledInput id="select-multiple-chip" label="Chip" />}
            MenuProps={MenuProps}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}>
            {skills.map((skill) => (
              <MenuItem sx={{ fontSize: "14px" }} key={skill._id} value={skill.name}>
                {skill.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default SkillField;
