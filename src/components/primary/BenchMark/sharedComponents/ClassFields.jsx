/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/sharedComponents/ClassFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Sunday, March 26th 2023, 5:34:01 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {
    Box,
    FilledInput,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    Paper,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useOutletContext} from "react-router-dom";

const ClassFields = () => {
  const { classes } = useSelector((state) => state.benchMark.projectMetas);
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
  ] = useOutletContext();

  const [classGrid, setClassGrid] = useState(4);

  const classesLength = classes?.length;

  useEffect(() => {
    if (classesLength === 1) {
      setClassGrid(12);
    } else if (classesLength === 2) {
      setClassGrid(6);
    } else if (classesLength === 4) {
      setClassGrid(6);
    } else {
      setClassGrid(4);
    }
  }, [classesLength]);

  return (
    <>
      <Box>
        <Paper elevation={0} sx={{ mb: 2, p: 3 }}>
          <Grid container>
            <Grid
              container
              xs={12}
              sx={{ paddingLeft: "0%", paddingTop: "0%" }}>
              <Typography variant="subtitle" sx={{ color: "#090080" }}>
                Classes
              </Typography>
            </Grid>
            {/* Radio Button for flat and auto */}
            <Grid xs={12}>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}>
                <FormControlLabel
                  value="bench"
                  control={<Radio />}
                  label="Individual"
                />
                <FormControlLabel
                  value="auto"
                  control={<Radio />}
                  label="Flat bench Mark"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container>
            {classes ? (
              <Grid container>
                {value === "bench" ? (
                  <>
                    {classes.map((row) => (
                      <Grid key={row.id} xs={classGrid} pr={2} pb={2}>
                        <Grid xs={12} sx={{ pb: "1%" }}>
                          <Typography variant="body2" sx={{ color: "#090080" }}>
                            {row.title}
                          </Typography>
                        </Grid>
                        <Grid container>
                          <Grid xs={6} pr={1}>
                            <FormControl
                              variant="filled"
                              fullWidth
                              sx={{
                                backgroundColor: "#FFFFFF",
                              }}>
                              <InputLabel>Time (Seconds)</InputLabel>
                              <FilledInput
                                fullWidth
                                InputProps={{
                                  inputProps: { min: 0 },
                                }}
                                onKeyPress={(event) => {
                                  if (
                                    event?.key === "-" ||
                                    event?.key === "+"
                                  ) {
                                    event.preventDefault();
                                  }
                                }}
                                name="number"
                                type={"number"}
                                label="Second"
                                onChange={(e) =>
                                  handleCreateTest(
                                    "class",
                                    "value",
                                    row.id,
                                    row.title,
                                    e.target.value
                                  )
                                }
                              />
                            </FormControl>
                          </Grid>
                          <Grid xs={6} pl={1}>
                            <FormControl
                              variant="filled"
                              fullWidth
                              sx={{
                                backgroundColor: "#FFFFFF",
                              }}>
                              <InputLabel htmlFor="filled-adornment-password">
                                Count (Avg)
                              </InputLabel>
                              <FilledInput
                                fullWidth
                                InputProps={{
                                  inputProps: { min: 0 },
                                }}
                                onKeyPress={(event) => {
                                  if (
                                    event?.key === "-" ||
                                    event?.key === "+"
                                  ) {
                                    event.preventDefault();
                                  }
                                }}
                                name="number"
                                type={"number"}
                                label="Count"
                                onChange={(e) =>
                                  handleCreateTest(
                                    "class",
                                    "averageCount",
                                    row.id,
                                    row.title,
                                    e.target.value
                                  )
                                }
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </>
                ) : (
                  <>
                    <Grid container>
                      <Grid xs={6}>
                        <FormControl
                          variant="filled"
                          fullWidth
                          sx={{
                            backgroundColor: "#FFFFFF",
                          }}>
                          <InputLabel htmlFor="filled-adornment-password">
                            Time (Second)
                          </InputLabel>
                          <FilledInput
                            fullWidth
                            InputProps={{
                              inputProps: { min: 0 },
                            }}
                            // onKeyPress={(event) => {
                            //   if (event?.key === "-" || event?.key === "+") {
                            //     event.preventDefault();
                            //   }
                            // }}
                            name="number"
                            min="0"
                            type={"number"}
                            label="Count"
                            onChange={(e) =>
                              handleClassflatvalue(
                                classes,
                                e.target.value,
                                "timeValue"
                              )
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid xs={6} sx={{ pl: "1%" }}>
                        <FormControl
                          variant="filled"
                          fullWidth
                          sx={{
                            backgroundColor: "#FFFFFF",
                          }}>
                          <InputLabel htmlFor="filled-adornment-password">
                            Count (Avg)
                          </InputLabel>
                          <FilledInput
                            fullWidth
                            InputProps={{
                              inputProps: { min: 0 },
                            }}
                            onKeyPress={(event) => {
                              if (event?.key === "-" || event?.key === "+") {
                                event.preventDefault();
                              }
                            }}
                            name="number"
                            min="0"
                            type={"number"}
                            label="Count"
                            onChange={(e) =>
                              handleClassflatvalue(
                                classes,
                                e.target.value,
                                "avgCount"
                              )
                            }
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default ClassFields;
