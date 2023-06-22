/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/CategoryField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:21:23 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import React, {useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select,} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CategoryField = ({ course, register }) => {
  const Category = [
    { value: "intro", label: "Intro" },
    { value: "image", label: "Image" },
    { value: "video", label: "Video" },
    { value: "LiDAR", label: "LiDAR" },
  ];

  const [isOpen, SetIsOpen] = useState(false);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Grid item xs={3}>
        <FormControl fullWidth variant="filled">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            IconComponent={() =>
              isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            onOpen={handleOpenClose}
            onClose={handleOpenClose}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Image"
            defaultValue={(course && course.category) || "intro"}
            {...register("category", { required: true })}
          >
            <MenuItem value={"intro"}>Intro</MenuItem>
            <MenuItem value={"image"}>Image</MenuItem>
            <MenuItem value={"video"}>Video </MenuItem>
            <MenuItem value={"LiDAR"}>LiDAR</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default CategoryField;
