/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/SkillField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:21:46 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Chip, FilledInput, FormControl, Grid, InputLabel, MenuItem, Select, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const iconStyle = {
  color: "rgba(45, 88, 255, 1)",
  marginRight: "5px",
  cursor: "pointer",
};

const SkillField = ({
  course,
  skills,
  skillSet,
  register,
  handleChangeSkills,
  MenuProps,
  user,
}) => {
  const location = useLocation();
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (
      location.pathname === "/create-course" ||
      location.pathname === "/jobs/create-job"
    ) {
      setIsUpdate(false);
    } else {
      setIsUpdate(true);
    }
    setIsLoading(false);
  }, [location.pathname]);

  const [isOpen, SetIsOpen] = useState(false);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      {!isLoading && (
        <Grid>
          <FormControl fullWidth variant="filled">
            <InputLabel id="demo-simple-select-label">Skills</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              IconComponent={() =>
                isOpen ? (
                  <KeyboardArrowUpIcon style={iconStyle} />
                ) : (
                  <KeyboardArrowDownIcon style={iconStyle} />
                )
              }
              onOpen={handleOpenClose}
              onClose={handleOpenClose}
              defaultValue={
                isUpdate &&
                (location.pathname === "/allusers" ||
                  location.pathname === "/users" ||
                  location.pathname === "/annotators" ||
                  location.pathname === "/reviewers")
                  ? user.skills.map((s) => s.name)
                  : isUpdate
                  ? course.skills.map((s) => s.name)
                  : skillSet
              }
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
                <MenuItem key={skill._id} value={skill.name}>
                  {skill.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
    </>
  );
};

export default SkillField;
