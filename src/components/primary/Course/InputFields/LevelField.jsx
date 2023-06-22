/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/LevelField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:20:58 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {FormControl, Grid, InputLabel, MenuItem, Select,} from "@mui/material";
import React, {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const LevelField = ({ course, register }) => {
  
  const [isOpen, SetIsOpen] = useState(false);
  const handleToggleControl = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Grid item xs={3}>
        <FormControl fullWidth variant="filled">
          <InputLabel id="demo-simple-select-label">Level</InputLabel>
          <Select
            IconComponent={() =>
              isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            onOpen={handleToggleControl}
            onClose={handleToggleControl}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={(course && course.level) || "basic"}
            {...register("level", { required: false })}
          >
            <MenuItem value={"basic"}>Basic</MenuItem>
            <MenuItem value={"beginner"}>Beginner</MenuItem>
            <MenuItem value={"intermediate"}>Intermediate</MenuItem>
            <MenuItem value={"advanced"}>Advanced</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default LevelField;
