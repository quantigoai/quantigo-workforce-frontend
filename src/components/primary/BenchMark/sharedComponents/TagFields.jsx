/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/sharedComponents/TagFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Sunday, March 26th 2023, 7:05:08 pm
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
import React from "react";

const TagFields = () => {
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
                Tags
              </Typography>
            </Grid>
            <Grid xs={12}>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value1}
                onChange={handleChangeTag}>
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
            {tags ? (
              <Grid container>
                {value1 === "bench" ? (
                  <>
                    {tags.map((row) => (
                      <>
                        <Grid xs={tagGrid}>
                          <Grid xs={12} sx={{ paddingBottom: "3%" }}>
                            <Typography
                              variant="body2"
                              sx={{ color: "#090080" }}>
                              {row.name}
                            </Typography>
                          </Grid>
                          <Grid
                            container
                            xs={12}
                            sx={{ paddingBottom: "3%", paddingRight: "6%" }}>
                            <Grid item xs={6}>
                              <FormControl
                                variant="filled"
                                fullWidth
                                sx={{
                                  backgroundColor: "#FFFFFF",
                                }}>
                                <InputLabel>Time (Seconds)</InputLabel>
                                <FilledInput
                                  fullWidth
                                  name="number"
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
                                  type={"number"}
                                  label="Second"
                                  onChange={(e) =>
                                    handleCreateTest(
                                      "tag",
                                      "value",
                                      row.id,
                                      row.name,
                                      e.target.value
                                    )
                                  }
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={6} sx={{ pl: "1%" }}>
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
                                  min="0"
                                  type={"number"}
                                  label="Count"
                                  onChange={(e) =>
                                    handleCreateTest(
                                      "tag",
                                      "averageCount",
                                      row.id,
                                      row.name,
                                      e.target.value
                                    )
                                  }
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    <Grid container>
                      <Grid item xs={6}>
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
                            onKeyPress={(event) => {
                              if (event?.key === "-" || event?.key === "+") {
                                event.preventDefault();
                              }
                            }}
                            name="number"
                            min="0"
                            type={"number"}
                            label="Count"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6} sx={{ paddingLeft: "1%" }}>
                        <FormControl
                          variant="filled"
                          fullWidth
                          sx={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #DADCDF",
                            borderRadius: "4px",
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

export default TagFields;
