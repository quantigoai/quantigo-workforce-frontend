import { FormControl, TextField } from "@mui/material";
import moment from "moment/moment";
import React from "react";

const DobField = ({ user }) => {
  let newDate2 = moment.utc(user.dob).format("MMM Do, YYYY");
  return (
    <>
      <TextField
        fullWidth
        disabled
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        label="DOB"
        variant="filled"
        defaultValue={newDate2}
      />
    </>
  );
};

export default DobField;
