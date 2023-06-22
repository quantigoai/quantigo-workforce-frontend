import {TextField} from "@mui/material";
import React from "react";

const OccupationField = ({ editAble, user ,register}) => {
  return (
    <>
      <TextField
        fullWidth
        disabled={editAble === "edit" ? false : true}
        sx={{ backgroundColor: "#FFFFFF" }}
        id="filled-basic"
        label="Occupation"
        variant="filled"
        defaultValue={user.occupation}
        {...register("occupation")}

      />
    </>
  );
};

export default OccupationField;
