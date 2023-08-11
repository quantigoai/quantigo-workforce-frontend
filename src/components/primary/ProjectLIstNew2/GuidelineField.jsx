import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import CreateProjectField from "./CreateProjectField";

const GuidelineField = ({ register, handleAddDoc, defaultValue }) => {
  return (
    <Grid
      container
      sx={{
        border: "2px solid #E6ECF5",
        padding: "16px",
        borderRadius: "8px",
        background: "#FAFCFF",
      }}
      item
      xs={12}
    >
      <CreateProjectField
        field={"Document"}
        registerName={"guideline"}
        register={register}
        defaultValue={defaultValue}
        type={"text"}
      />

      <Grid item xs={6}>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            mb: "10px",
            mt: "10px",
          }}
          variant="h6"
        >
          Link
        </Typography>

        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label=""
          variant="outlined"
        />
      </Grid>
      <Typography
        sx={{
          fontWeight: "600",
          mt: "15px",
          fontSize: "14px",
          mb: "10px",
          color: "#2E58FF",
          cursor: "pointer",
        }}
        variant="h6"
        onClick={handleAddDoc}
      >
        <i className="ri-add-line"></i> Add another document
      </Typography>
    </Grid>
  );
};

export default GuidelineField;
