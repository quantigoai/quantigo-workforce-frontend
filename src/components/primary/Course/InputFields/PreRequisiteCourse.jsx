/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/PreRequisiteCourse.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 1:05:18 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Box, Chip, FilledInput, FormControl, Grid, InputLabel, MenuItem, Select,} from "@mui/material";
import React, {useEffect, useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {useLocation} from "react-router-dom";

const PreRequisiteCourse = ({
  course = { course },
  courses,
  handleChange_Pre_Requisite_Course,
  perRequisiteCourses,
  MenuProps,
}) => {
  const [isOpen, SetIsOpen] = useState(false);
  const location = useLocation();
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [setCourse, setSetCourse] = React.useState();
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname === "/create-course") {
      setIsUpdate(false);
    } else {
      setIsUpdate(true);
    }
    setIsLoading(false);
  }, [location.pathname]);
  useEffect(() => {
    if (location.pathname === "/create-course") {
      setSetCourse(courses);
    } else {
      setSetCourse(courses.filter((item) => item._id != course._id));
    }
  }, [location.pathname]);
  const iconStyle = {
    color: "rgba(45, 88, 255, 1)",
    marginRight: "5px",
    cursor: "pointer",
  };

  return (
    <>
      {!isLoading && (
        <Grid item xs={12}>
          <FormControl fullWidth variant={"filled"}>
            <InputLabel id="demo-multiple-chip-label">
              Pre Requisite Courses
            </InputLabel>
            <Select
              IconComponent={() =>
                isOpen ? (
                  <KeyboardArrowUpIcon style={iconStyle} />
                ) : (
                  <KeyboardArrowDownIcon style={iconStyle} />
                )
              }
              onOpen={handleOpenClose}
              onClose={handleOpenClose}
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              // value={perRequisiteCourses}
              defaultValue={
                isUpdate
                  ? course.prerequisiteCourses.map((c) => c.name)
                  : perRequisiteCourses
              }
              onChange={handleChange_Pre_Requisite_Course}
              input={
                <FilledInput
                  id="select-multiple-chip"
                  label="Chip"
                  sx={{ px: 2 }}
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}>
              {setCourse.map((item) => (
                <MenuItem key={item._id} value={item.name}>
                  {item.name}
                  {/* {course?.name === item.name ? "" : item.name} */}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
    </>
  );
};

export default PreRequisiteCourse;
