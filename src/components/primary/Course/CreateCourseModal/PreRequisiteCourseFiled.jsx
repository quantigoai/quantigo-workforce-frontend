import {
  Box,
  Chip,
  InputAdornment,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MyFormControl } from "../../../shared/CustomField/CustomDatePicker";
import SearchIcon from "@mui/icons-material/Search";
export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  // background: "white",
  height: "45px",
  borderRadius: "8px",
}));
const containsText = (text, searchText) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const PreRequisiteCourseFiled = ({ perRequisiteCourses }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const location = useLocation();
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [setCourse, setSetCourse] = React.useState();
  const { courses, course } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);

  const [myOptions, setMyOptions] = useState([]);
  useEffect(() => {
    setMyOptions(courses.map((option) => option.name));
  }, [courses]);

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () => myOptions.filter((option) => containsText(option, searchText)),
    [myOptions, searchText]
  );
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };
  useEffect(() => {
    if (location.pathname === "/course") {
      setSetCourse(courses);
    } else {
      setSetCourse(courses.filter((item) => item._id != course._id));
    }
  }, [location.pathname]);
  return (
    <>
      <MyFormControl fullWidth>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            mb: 1,
            color: isLightTheme ? "#091E42" : "#FFFFFF",
          }}>
          Pre Requisite Courses
        </Typography>

        <MySelect
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          // value={perRequisiteCourses}
          defaultValue={isUpdate ? course.prerequisiteCourses.map((c) => c.name) : perRequisiteCourses}
          //   onChange={handleChange_Pre_Requisite_Course}
          // value={courses.map((c) => c.name)}
          // input={<FilledInput id="select-multiple-chip" label="Chip" sx={{ px: 2 }} />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 0.5,
                fontSize: "12px",
                height: "20px",
              }}>
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
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((item, i) => (
            <MenuItem sx={{fontSize:"12px"}} key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </MySelect>
      </MyFormControl>
    </>
  );
};

export default PreRequisiteCourseFiled;
