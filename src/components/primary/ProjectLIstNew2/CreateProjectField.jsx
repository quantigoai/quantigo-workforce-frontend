import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const CreateProjectField = ({
  field,
  registerName,
  register,
  type,
  inputProps,
  defaultValue,
}) => {
  //   const { register, handleSubmit, reset } = useForm();
  console.log(field)
  return (
    <Grid item xs={6}>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          mt: "10px",
          mb: "10px",
        }}
        variant="h6"
      >
        {field}
      </Typography>

      <TextField
        {...register(registerName)}
        required
        sx={{
          borderRadius: "10px",
          //   width: field === "Alias" || field === "Document" ? "90%" : "",
          width: "95%",
          //   paddingLeft: field === "Alias" ? "20px" : "",
        }}
        id="outlined-basic"
        label=""
        variant="outlined"
        type={type}
        defaultValue={defaultValue}
        inputProps={inputProps}
      />
    </Grid>
  );
};

export default CreateProjectField;
