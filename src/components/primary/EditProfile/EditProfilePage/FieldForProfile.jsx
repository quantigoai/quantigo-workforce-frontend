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
const FieldForProfile = ({ label, handleChange, disableItem, defaultValue, editAble }) => {
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
        />
      </FormControl>
    </>
  );
};

export default FieldForProfile;
