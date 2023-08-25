import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const CommonField = ({
  field,
  registerName,
  register,
  type,
  // inputProps,
  defaultValue,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            mt: "10px",
            mb: "10px",
          }}
          variant="h6">
          {field}
        </Typography>

        <TextField
          //   {...register(registerName)}
          required
          sx={{
            borderRadius: "10px",
            border: "1px solid #E6ECF5",
            // background: "#F2F6FC",
            //   width: field === "Alias" || field === "Document" ? "90%" : "",
            width: "95%",
            height: "40px",
            //   paddingLeft: field === "Alias" ? "20px" : "",
          }}
          id="outlined-basic"
          variant="outlined"
          //   type={type}
          defaultValue={defaultValue}
          //   inputProps={inputProps}
        />
      </Grid>
    </>
  );
};

export default CommonField;
