import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getType } from "../../../features/slice/ProjectDirectorySlice";

const AnnotationType = ({ annotationFilter, setAnnotationFilter, isLightTheme }) => {
  const [annotationTypes, setAnnotationTypes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("annotation")).then((action) => {
      if (action.payload.status === 200) {
        setAnnotationTypes(action.payload.data.types);
      }
    });
  }, []);
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Annotation Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setAnnotationFilter(e.target.value)}
          value={annotationFilter || ""}
          sx={{
            backgroundColor: isLightTheme ? "#F8F8F8" : "",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
        >
          {annotationTypes.map((Industry) => (
            <MenuItem key={Industry} value={Industry}>
              {Industry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default AnnotationType;
