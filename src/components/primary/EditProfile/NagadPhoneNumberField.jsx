import {TextField} from "@mui/material";
import React from "react";

const NagadPhoneNumberField = ({ editAble, user, register }) => {
  return (
    <>
      <TextField
        fullWidth
        disabled
        sx={{ backgroundColor: "#FFFFFF" }}
        id="Nagad Phone Number"
        type="number"
        defaultValue={user.billingAccountNo}
        label="Nagad Phone Number"
        variant="filled"
        // {...register("phone", { required: true })}
      />
    </>
  );
};

export default NagadPhoneNumberField;
