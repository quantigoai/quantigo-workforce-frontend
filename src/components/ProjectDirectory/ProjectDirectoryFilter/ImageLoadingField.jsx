import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getType } from "../../../features/slice/ProjectDirectorySlice";

const ImageLoadingField = ({ setImageLoadingFieldFilter, imageLoadingFieldFilter, isLightTheme }) => {
  const [industryAllType, setIndustryAllType] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("image_Loading")).then((action) => {
      if (action.payload.status === 200) {
        setIndustryAllType(action.payload.data.types);
      }
    });
  }, []);

  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Image_Loading</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setImageLoadingFieldFilter(e.target.value)}
          value={imageLoadingFieldFilter || ""}
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

export default ImageLoadingField;
