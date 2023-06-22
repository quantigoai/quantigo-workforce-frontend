import {FormControl, Grid, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {MobileDateTimePicker} from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";
import {convertDate} from "../../../../helper/customData";

const LiveSessionStartedTime = ({ course, setLiveSessionTime, register }) => {
  const [value, setValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setLiveSessionTime(course.liveSessionStartedAt);
  }, []);
  const handleDate = (newValue) => {
    setValue(newValue);
    const x = convertDate(newValue);
    const dateString = newValue.toISOString();
    setLiveSessionTime(dateString);
  };
  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleFocusedOut = () => {
    setIsFocused(false);
  };

  return (
    <>
      <Grid item xs={12}>
        <FormControl
          onClick={handleFocused}
          onBlur={handleFocusedOut}
          fullWidth
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
            // height: "56px",
          }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              label={"Live Session Time"}
              // defaultValue={
              //   course.liveSessionStartedAt
              //     ? dayjs(course.liveSessionStartedAt)
              //     : value
              // }
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
