import { FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getType } from "../../../features/slice/ProjectDirectorySlice";

const QAField = ({ setQAFieldFilter, qAFieldFilter, isLightTheme }) => {
  const [industryAllType, setIndustryAllType] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("QA")).then((action) => {
      if (action.payload.status === 200) {
        setIndustryAllType(action.payload.data.types);
      }
    });
  }, []);

  return (
    <>
      <FormControl
        sx={{
          fontSize: { xxl: "12px", xl: "12px", lg: "10px" },
          height: { xxl: "50px", xl: "50px", lg: "40px" },
          mb: 2,
        }}
        variant="filled"
        fullWidth
      >
        <InputLabel
          sx={{
            fontSize: { xxl: "14px", xl: "12px", lg: "12px" },
            height: { xxl: "50px", xl: "50px", lg: "40px" },
          }}
          id="demo-simple-select-label"
        >
          QA
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setQAFieldFilter(e.target.value)}
          value={qAFieldFilter || ""}
          sx={{
            height: { xxl: "50px", xl: "50px", lg: "50px" },
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

export default QAField;
