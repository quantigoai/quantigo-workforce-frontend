import { TextField } from "@mui/material";
import React from "react";

const EmailField = ({user}) => {
  return (
    <TextField
      fullWidth
      disabled
      sx={{ backgroundColor: "#FFFFFF" }}
      label="Email"
      variant="filled"
      defaultValue={user.email}
      
    />
  );
};

export default EmailField;
