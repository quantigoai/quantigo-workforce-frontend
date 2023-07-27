import {TextField} from "@mui/material";
import React from "react";

const LastNameField = ({ lastName, handleLastName }) => {
  return (
    <>
      <TextField
        fullWidth
        value={lastName}
        required={true}
        // autocapitalize="word"
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        label="Last Name"
        variant="filled"
        autoComplete="off"
        onChange={(e) => handleLastName(e.target.value)}
      />
    </>
  );
};

export default LastNameField;
