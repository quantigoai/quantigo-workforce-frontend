/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/sharedComponents/Na
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Sunday, March 26th 2023, 5:05:11 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, FilledInput, FormControl, Grid, InputLabel, Paper, Typography,} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {useOutletContext} from "react-router-dom";

const NameDescFIeld = ({ isUpdate = false }) => {
  const [
    handleDetails,
    handleChangeServer,
    handleChangeCategory,
    handleChangeTeam,
    handleChangeWorkspace,
    handleChangeProject,
    handleChangeName,
    handleChangeDescription,
  ] = useOutletContext();

  const { benchMark } = useSelector((state) => state.benchMark);

  return (
    <>
      <Box>
        <Paper elevation={0} sx={{ mb: 2 }}>
          <Grid container sx={{ p: 3 }}>
            <Grid container sx={{ py: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#090080",
                }}
              >
                General Info
              </Typography>
            </Grid>

            <Grid container>
              <Grid item xs={6} sx={{ pl: 0 }}>
                <FormControl
                  variant="filled"
                  fullWidth
                  sx={{
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <InputLabel>Name</InputLabel>
                  <FilledInput
                    defaultValue={(isUpdate && benchMark.name) || ""}
                    onChange={handleChangeName}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6} sx={{ pl: 2 }}>
                <FormControl
                  variant="filled"
                  fullWidth
                  sx={{ backgroundColor: "#FFFFFF" }}
                >
                  <InputLabel htmlFor="filled-adornment-password">
                    Description
                  </InputLabel>
                  <FilledInput
                    defaultValue={(isUpdate && benchMark.description) || ""}
                    onChange={handleChangeDescription}
                    required
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default NameDescFIeld;
