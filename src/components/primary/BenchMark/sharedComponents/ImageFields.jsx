/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/sharedComponents/ImageFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Sunday, March 26th 2023, 10:57:02 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, FilledInput, FormControl, Grid, InputLabel, Paper, Typography,} from "@mui/material";
import React from "react";
import {useOutletContext} from "react-router-dom";

const ImageFields = ({ isUpdate = false, bm }) => {
  const [
    handleDetails,
    handleChangeServer,
    handleChangeCategory,
    handleChangeTeam,
    handleChangeWorkspace,
    handleChangeProject,
    handleChangeName,
    handleChangeDescription,
    handleChange,
    handleCreateTest,
    handleClassflatvalue,
    value,
    value1,
    handleChangeTag,
    handleInputChange,
    server,
    setServer,
    category,
    setCategory,
    handleChangeclasses,
    handleTest,
    register,
    customData,
    setCustomData,
    imageData,
    setImageData,
    handleTagflatvalue,
    handleInputChangeTest,
  ] = useOutletContext();
  return (
    <>
      <Box>
        <Paper elevation={0} sx={{ mb: 2, p: 3 }}>
          <Grid container>
            <Grid container sx={{ pb: 2 }}>
              <Typography variant="subtitle" sx={{ color: "#090080" }}>
                Image
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <FormControl
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
              }}>
              <InputLabel htmlFor="filled-adornment-password">
                Observation Time
              </InputLabel>
              <FilledInput
                fullWidth
                onKeyPress={(event) => {
                  if (event?.key === "-" || event?.key === "+") {
                    event.preventDefault();
                  }
                }}
                name="number"
                min="0"
                pattern="[0-9]*"
                type={"number"}
                label="Count"
                defaultValue={isUpdate ? bm.imageBenchMark.value : ""}
                // value={imageBenchMark.value}
                onChange={isUpdate ? handleInputChangeTest : handleInputChange}
              />
            </FormControl>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default ImageFields;
