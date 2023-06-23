import { TroubleshootTwoTone } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

const NameFiled = ({ editAble, user ,register}) => {
  return (
    <>
      <TextField
        fullWidth
        disabled={editAble === "edit" ? false : true}
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        label="Name"
        variant="filled"
        defaultValue={user.name}
        {...register("name")}

      />
    </>
  );
};

export default NameFiled;
