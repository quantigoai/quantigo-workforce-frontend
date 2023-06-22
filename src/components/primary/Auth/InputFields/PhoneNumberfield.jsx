import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import phoneicon from "../../../../assets/images/IconPhone.png";

const PhoneNumberfield = ({ phone, handlePhoneNumber }) => {
  return (
    <>
      <TextField
        fullWidth
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        required={true}
        label="Nagad Account Number"
        variant="filled"
        autoComplete="off"
        value={phone}
        onChange={(e) => handlePhoneNumber(e.target.value)}
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

export default PhoneNumberfield;
