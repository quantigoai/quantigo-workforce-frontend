import { TextField } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
const GenderField = ({ user }) => {
  return (
    <>
      <TextField
        fullWidth
        disabled
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        label="Gender"
        variant="filled"
        defaultValue={capitalizeFirstLetter(user.gender)}
      />
    </>
  );
};

export default GenderField;
