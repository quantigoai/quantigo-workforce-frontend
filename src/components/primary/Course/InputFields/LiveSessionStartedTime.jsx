import {FormControl, Grid, TextField} from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {MobileDateTimePicker} from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";

const LiveSessionStartedTime = ({ course, setLiveSessionTime, register }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setLiveSessionTime(course.liveSessionStartedAt);
  }, []);
  const handleDate = (newValue) => {
    setValue(newValue);
    const dateString = newValue.toISOString();
    setLiveSessionTime(dateString);
  };

  return (
    <>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              label={"Live Session Time"}
              defaultValue={
                course.liveSessionStartedAt
                  ? dayjs(course.liveSessionStartedAt)
                  : value
              }
              onChange={(newValue) => {
                handleDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
      </Grid>
    </>
  );
};

export default LiveSessionStartedTime;
