import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getType} from "../../../features/slice/ProjectDirectory";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SampleExampleField = ({ setIndustryType, industryType, item }) => {
  
  const [industryAllType, setIndustryAllType] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType(item)).then((action) => {
      if (action.payload.status === 200) {
        setIndustryAllType(action.payload.data);
      }
    });
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">{item}</InputLabel>
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
        </Grid>
        <Grid item xs={1}>
          <CloseIcon
            sx={{ color: "#2D58FF", cursor: "pointer", fontweight: "400 " }}
            // onClick={handleCloseFilter}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SampleExampleField;
