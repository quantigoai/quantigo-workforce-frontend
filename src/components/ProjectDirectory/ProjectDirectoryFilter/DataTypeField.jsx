import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getType} from "../../../features/slice/ProjectDirectorySlice";

const DataTypeField = ({ setDataTypeFilter, dataTypeFilter }) => {
  const [dataTypes, setDataTypes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("Data_Type")).then((action) => {
      if (action.payload.status === 200) {
        setDataTypes(action.payload.data);
      }
    });
  }, []);
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Data Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setDataTypeFilter(e.target.value)}
          value={dataTypeFilter || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
        >
          {dataTypes.map((Industry) => (
            <MenuItem key={Industry} value={Industry}>
              {Industry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DataTypeField;
