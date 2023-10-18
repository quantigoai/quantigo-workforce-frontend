import { Box, Chip, FilledInput, FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  borderRadius: "8px",
  background: "none",
  // backgroundColor:"red",
  fontSize: "14px",
}));

const PreRequisiteCourseFiled = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const location = useLocation();
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [setCourse, setSetCourse] = React.useState();
  const { courses, course } = useSelector((state) => state.course);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname === "/course") {
      setIsUpdate(false);
    } else {
      setIsUpdate(true);
    }
    setIsLoading(false);
  }, [location.pathname]);
  useEffect(() => {
    if (location.pathname === "/course") {
      setSetCourse(courses);
    } else {
      setSetCourse(courses.filter((item) => item._id != course._id));
    }
  }, [location.pathname]);
  return (
    <>
      <FormControl fullWidth variant={"filled"}>
        <InputLabel id="demo-multiple-chip-label">Pre Requisite Courses</InputLabel>
        <MySelect
          //   IconComponent={() =>
          //     isOpen ? (
          //       <KeyboardArrowUpIcon style={iconStyle} />
          //     ) : (
          //       <KeyboardArrowDownIcon style={iconStyle} />
          //     )
          //   }
          //   onOpen={handleOpenClose}
          //   onClose={handleOpenClose}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          // value={perRequisiteCourses}
          //   defaultValue={
          //     isUpdate
          //       ? course.prerequisiteCourses.map((c) => c.name)
          //       : perRequisiteCourses
          //   }
          //   onChange={handleChange_Pre_Requisite_Course}
          value={courses.map((c) => c.name)}
          input={<FilledInput id="select-multiple-chip" label="Chip" sx={{ px: 2 }} />}
          //   renderValue={(selected) => (
          //     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          //       {selected.map((value) => (
          //         <Chip key={value} label={value} />
          //       ))}
          //     </Box>
          //   )}
          //   MenuProps={MenuProps}
        >
          {courses.map((item) => (
            <MenuItem key={item._id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </MySelect>
      </FormControl>
    </>
  );
};

export default PreRequisiteCourseFiled;
