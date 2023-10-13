 import {InputAdornment, TextField} from "@mui/material";
import React from "react";
import phoneicon from "../../../../assets/images/IconPhone.png";

const UserPhoneNumberField = ({ handleUserPhoneNumber,
    userPhoneNumber}) => {
  return (
    <>
      <TextField
        fullWidth
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        required={true}
        label="Phone Number"
        variant="filled"
        autoComplete="off"
        value={userPhoneNumber}
        onChange={(e) => handleUserPhoneNumber(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={phoneicon} />
            </InputAdornment>
          ),
          maxLength: 11,
        }}
      />
    </>
  );
};

export default UserPhoneNumberField;
