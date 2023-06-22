import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getIndustryType,
  getType,
} from "../../../features/slice/ProjectDirectory";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const IndustryTypeField = ({ setIndustryType, industryType }) => {
  const [industryAllType, setIndustryAllType] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("Industry_Type")).then((action) => {
      if (action.payload.status === 200) {
        setIndustryAllType(action.payload.data);
      }
    });
  }, []);

  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Industry Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setIndustryType(e.target.value)}
          value={industryType || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}>
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

export default IndustryTypeField;
