import {FormControl, InputLabel, MenuItem, Select,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getType} from "../../../features/slice/ProjectDirectory";

const PdrField = ({ setPDRFilter, pDRFilter }) => {
  const [pDR, setPDR] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("PDR")).then((action) => {
      if (action.payload.status === 200) {
        setPDR(action.payload.data);
      }
    });
  }, []);
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">PDR</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setPDRFilter(e.target.value)}
          value={pDRFilter || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}>
          {pDR.map((Industry) => (
            <MenuItem key={Industry} value={Industry}>
              {Industry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default PdrField;
