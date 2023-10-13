/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/InputFields/EmailField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Friday, March 31st 2023, 12:47:11 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {InputAdornment, TextField} from "@mui/material";
import React from "react";
import emailIcon from "../../../../assets/images/IconEmail.png";

const EmailField = ({ email, setEmail, handleEmail, isSignup }) => {
  return (
    <>
      <TextField
        id="input-with-icon-textfield"
        fullWidth
        label="Email"
        variant="filled"
        type="email"
        required={true}
        value={email}
        autoComplete="off"
        onChange={(e) =>
          isSignup ? handleEmail(e.target.value) : setEmail(e.target.value)
        }
        sx={{ backgroundColor: "#FFFFFF" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={emailIcon} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default EmailField;
