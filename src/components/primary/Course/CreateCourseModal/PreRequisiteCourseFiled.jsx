import {
  Box,
  Chip,
  InputAdornment,
  ListSubheader,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MyFormControl } from "../../../shared/CustomField/CustomDatePicker";
import SearchIcon from "@mui/icons-material/Search";
import { CustomFormControl } from "../../../shared/CustomField/CustomSelectField";
export const MySelect = styled(Select)(() => ({
  height: "35px",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    color: "#000",
    border: "1px solid #E6ECF5 !important",
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {
    border: "1px solid #E6ECF5 !important",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const containsText = (text, searchText) => text?.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const PreRequisiteCourseFiled = ({ perRequisiteCourses, handleChange_Pre_Requisite_Course, isUpdate }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const location = useLocation();
  const { courses, course } = useSelector((state) => state.course);

  const [myOptions, setMyOptions] = useState([]);

  const getPrerequisiteCourseNames = (courseArray, targetId) => {
    const prerequisiteCourseNames = [];

    for (const course of courseArray) {
      if (course?.prerequisiteCourses && course.prerequisiteCourses?.length > 0) {
        const matchingPrerequisites = course.prerequisiteCourses.filter(
          (prerequisite) => prerequisite._id === targetId
        );

        matchingPrerequisites.forEach((prerequisite) => {
          prerequisiteCourseNames.push(course.name);
        });
      }
    }

    return prerequisiteCourseNames;
  };
  const prerequisiteCourseNames = getPrerequisiteCourseNames(courses, course._id);

  useEffect(() => {
    if (!isUpdate) {
      setMyOptions(courses.map((option) => option.name));
    } else {
      setMyOptions(
        courses?.map((option) => {
          if (option?._id != course?._id) {
            const newOption = option.prerequisiteCourses.find((c) => c._id === course?._id);
            if (!newOption) {
              return option.name;
            }
          }
        })
      );
    }
    // setMyOptions(courses.map((option) => option.name));
  }, [course._id]);

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () => myOptions.filter((option) => containsText(option, searchText)),
    [myOptions, searchText]
  );

  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
    setSearchText("");
  };
  // useEffect(() => {
  //   if (!isUpdate) {
  //     setSetCourse(courses);
  //   } else {
  //     setSetCourse(courses.filter((item) => item._id != course._id));
  //   }
  // }, [isUpdate]);
  return (
    <>
      <CustomFormControl fullWidth>
        <Typography
          variant={"wpf_h7_medium"}
          sx={{
            mb: 0,
            color: "neutral.N300",
          }}
        >
          Pre Requisite Courses
        </Typography>
        <MySelect
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          // value={perRequisiteCourses}
          defaultValue={isUpdate ? course.prerequisiteCourses?.map((c) => c.name) : perRequisiteCourses}
          onChange={handleChange_Pre_Requisite_Course}
          onOpen={handleOpenClose}
          // value={courses.map((c) => c.name)}
          // input={<FilledInput id="select-multiple-chip" label="Chip" sx={{ px: 2 }} />}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 0.5,
                fontSize: "12px",
                height: "20px",
              }}
            >
              {selected?.map(
                (value, i) =>
                  [0].includes(i) && <Chip sx={{ fontSize: "12px", height: "95%" }} key={value} label={value} />
              )}
              {selected.length > 1 && (
                <Typography variant="p" sx={{ ml: 2, mt: 0 }}>
                  {" "}
                  + {selected.length} more
                </Typography>
              )}
            </Box>
          )}
          //   MenuProps={MenuProps}
        >
          <ListSubheader>
            <TextField
              size="small"
              autoFocus
              placeholder="Type to search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>

          {prerequisiteCourseNames.map((pre, idx) => (
            <MenuItem Item sx={{ fontSize: "12px", py: 0.5 }} disabled key={idx}>
              {pre}
            </MenuItem>
          ))}
          {displayedOptions.map((item, i) => (
            <MenuItem sx={{ fontSize: "12px" }} key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </MySelect>
      </CustomFormControl>
    </>
  );
};

export default PreRequisiteCourseFiled;
