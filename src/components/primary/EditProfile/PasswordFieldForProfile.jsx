import { FormControl, styled, TextField, Typography } from "@mui/material";
import React from "react";

const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": {
    height: "40px",
    fontSize: "12px",
    fontFamily: "Inter",
    "@media(max-width:1439px)": {
      height: "30px",
      fontSize: "10px",
    },
    "@media(min-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));
const PasswordFieldForProfile = ({ label, handleChange, disableItem, defaultValue, editAble, phone }) => {
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
          variant="wpf_p4_medium"
        >
          {label}
        </Typography>
        <MyTextField
          sx={{
            backgroundColor: editAble ? "" : "neutral.N400",
            fontSize: "14px",
            borderRadius: "8px",
            height: "40px",
            "@media(max-width:1439px)": {
              height: "30px",
              fontSize: "10px",
            },
            "@media(min-width: 1920px)": {
              fontSize: "14px",
            },
          }}
          //   type={label === "Phone No." || label === "Nagad No." ? "number" : "text"}
          disabled={disableItem ? true : !editAble}
          value={defaultValue}
          placeholder="01XXXXXXXXX"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          error={yourPhoneNumberValidationFunction(phone) ? false : true}
          helperText={
            <Typography
              variant="caption"
              sx={{
                fontSize: { xl: "11px", xxl: "11px", lg: "9px" },
              }}
              color={yourPhoneNumberValidationFunction(phone) ? "text.primary" : "error"}
            >
              {yourPhoneNumberValidationFunction(phone)
                ? ""
                : "Contact Number must be a valid Bangladeshi phone number"}
            </Typography>
          }
        />
      </FormControl>
    </>
  );
};

export default PasswordFieldForProfile;
