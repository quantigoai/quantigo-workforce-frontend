import { FormControl, TextField, Typography, styled } from "@mui/material";
import React from "react";
const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "40px", fontSize: "14px", color: "#3C4D6B" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));
const PasswordFieldForProfile = ({ label, handleChange, disableItem, defaultValue, editAble,phone }) => {
function yourPhoneNumberValidationFunction(phoneNumber) {
  const regex = /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/;
  return regex.test(phoneNumber);
}
  return (
    <>
      <FormControl fullWidth>
        <Typography
          sx={{
            color: "neutral.N300",

            mb: 1,
          }}
          variant="wpf_p4_medium">
          {label}
        </Typography>
        <MyTextField
          sx={{
            backgroundColor: editAble ? "" : "neutral.N400",
            fontSize: "14px",
            borderRadius: "8px",
            height: "40px",
          }}
        //   type={label === "Phone No." || label === "Nagad No." ? "number" : "text"}
          disabled={disableItem ? true : !editAble}
          defaultValue={defaultValue}
          variant="outlined"
          onChange={(e) => handleChange(e)}
          error={yourPhoneNumberValidationFunction(phone) ? false : true}
          helperText={
            yourPhoneNumberValidationFunction(phone)
              ? ""
              : "Contact Number must be a valid Bangladeshi phone number"
          }
        />
      </FormControl>
    </>
  );
};

export default PasswordFieldForProfile;
