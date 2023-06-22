import {TextField} from "@mui/material";
import React from "react";

const AddressField = ({ editAble, user,register }) => {
  return (
    <>
      <TextField
        fullWidth
        disabled={editAble === "edit" ? false : true}
        sx={{ backgroundColor: "#FFFFFF" }}
        label="Present Address"
        variant="filled"
        defaultValue={user.presentAddress}
        {...register("presentAddress")}
      />
    </>
  );
};

export default AddressField;
