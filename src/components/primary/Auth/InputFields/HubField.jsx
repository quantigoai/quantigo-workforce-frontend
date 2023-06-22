import React from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";

export const HubField = ({ setQaiID, setHub, setQaiUserName }) => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_SERVER_URL;

  const test = (e) => {
    const hub = e.target.value;
    setHub(e.target.value);
    e.preventDefault();
    axios.get(`${url}/qaiusers/hubs/${hub}`).then((res) => {
      setQaiID(res.data);
      setQaiUserName(res.data);
    });
    // dispatch(generateQuiId(e.target.value)).then((action) => {
    //   setUserId(action.payload.data);
    // });
  };
  return (
    <>
      <Grid item xs={6}>
        <FormControl
          variant="filled"
          fullWidth
          required={true}
          sx={{ backgroundColor: "#FFFFFF" }}
        >
          <InputLabel id="demo-simple-select-filled-label"> HUB</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            label="HUB"
            defaultValue={""}
            onChange={(e) => test(e)}
          >
            <MenuItem value={"DK"}>Dhaka</MenuItem>
            <MenuItem value={"CD"}>Chuadanga</MenuItem>
            <MenuItem value={"SG"}>Sirajganj</MenuItem>
            <MenuItem value={"KH"}>Khulna</MenuItem>
            <MenuItem value={"MS"}>Mymensingh</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};
