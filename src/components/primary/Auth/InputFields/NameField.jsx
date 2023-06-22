/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/InputFields/NameField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Friday, March 31st 2023, 12:45:21 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { TextField } from "@mui/material";
import React from "react";

const NameField = ({ name, handleName }) => {
  return (
    <>
      <TextField
        fullWidth
        value={name}
        required={true}
        // autocapitalize="word"
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        label="Name"
        variant="filled"
        autoComplete="off"
        onChange={(e) => handleName(e.target.value)}
      />
    </>
  );
};

export default NameField;
