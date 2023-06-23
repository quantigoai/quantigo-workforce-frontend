import { TextField } from "@mui/material";
import React from "react";

const CityField = ({ editAble, user, register }) => {
  return (
    <>
      <TextField
        fullWidth
        disabled={editAble === "edit" ? false : true}
        sx={{ backgroundColor: "#FFFFFF" }}
        label="Permanent Address"
        variant="filled"
        defaultValue={user.permanentAddress}
        {...register("permanentAddress")}
      />
    </>
  );
};

export default CityField;
