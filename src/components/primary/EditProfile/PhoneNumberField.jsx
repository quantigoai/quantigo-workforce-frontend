import { TextField } from "@mui/material";
import React from "react";

const PhoneNumberField = ({editAble, user ,register}) => {
  return (
    <>
      <TextField
        fullWidth
        disabled
        sx={{ backgroundColor: "#FFFFFF" }}
        id="Phone Number"
        type="number"
        defaultValue={user.phone}
        label="Phone Number"
        variant="filled"
        // {...register("phone", { required: true })}

      />
    </>
  );
};

export default PhoneNumberField;
