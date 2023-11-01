import { Grid, TextField } from "@mui/material";
import React from "react";

export const UserNameField = ({ register, qaiID }) => {
  return (
    <>
      <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
        <TextField
          fullWidth
          required={true}
          // disabled
          sx={{ backgroundColor: "#FFFFFF" }}
          id="filled-basic"
          label="Quantigo Username"
          variant="filled"
          value={qaiID}
          // {...register("qaiUserName")}
        />
      </Grid>
    </>
  );
};
