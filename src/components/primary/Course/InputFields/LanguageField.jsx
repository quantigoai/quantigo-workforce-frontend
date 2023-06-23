/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/LanguageField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:34:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const LanguageField = ({ course, register }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const handleTest = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Grid item xs={3}>
        <FormControl fullWidth variant="filled">
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            IconComponent={() =>
              isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            onOpen={handleTest}
            onClose={handleTest}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Image"
            defaultValue={(course && course.language) || "english"}
            {...register("language", { required: true })}
          >
            <MenuItem value={"english"}>English </MenuItem>
            <MenuItem value={"bengali"}>Bangla</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default LanguageField;
