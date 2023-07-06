import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getType } from "../../../features/slice/ProjectDirectory";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ImageLoadingField = ({   setImageLoadingFieldFilter,
    imageLoadingFieldFilter }) => {
  const [industryAllType, setIndustryAllType] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("Image_Loading")).then((action) => {
      if (action.payload.status === 200) {
        setIndustryAllType(action.payload.data);
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

export default ImageLoadingField;
