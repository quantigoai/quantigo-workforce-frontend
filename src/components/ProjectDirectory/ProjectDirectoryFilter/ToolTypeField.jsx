import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getType,} from "../../../features/slice/ProjectDirectory";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const ToolTypeField = ({ setToolTypeFieldFilter,toolTypeFieldFilter }) => {
  const [industryAllType, setIndustryAllType] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("Tool_Type")).then((action) => {
      if (action.payload.status === 200) {
        setIndustryAllType(action.payload.data);
      }
    });
  }, []);

  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Tool_Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setToolTypeFieldFilter(e.target.value)}
          value={toolTypeFieldFilter || ""}
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

export default ToolTypeField;