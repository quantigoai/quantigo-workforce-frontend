import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getType } from "../../../features/slice/ProjectDirectory";
import { useDispatch } from "react-redux";

const AnnotationType = ({ annotationFilter, setAnnotationFilter }) => {
  const [annotationTypes, setAnnotationTypes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("Annotation")).then((action) => {
      if (action.payload.status === 200) {
        setAnnotationTypes(action.payload.data);
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
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}>
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
