import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getType } from "../../../features/slice/ProjectDirectorySlice";

const QABenchmarkField = ({ setQABenchmarkFieldFilter, qABenchmarkFieldFilter, isLightTheme }) => {
  const [industryAllType, setIndustryAllType] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("QA_Benchmark")).then((action) => {
      if (action.payload.status === 200) {
        setIndustryAllType(action.payload.data.types);
      }
    });
  }, []);

  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">QA_Benchmark</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setQABenchmarkFieldFilter(e.target.value)}
          value={qABenchmarkFieldFilter || ""}
          sx={{
            backgroundColor: isLightTheme ? "#F8F8F8" : "",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
        >
          {industryAllType.map((Industry) => (
            <MenuItem key={Industry} value={Industry}>
              {Industry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default QABenchmarkField;
