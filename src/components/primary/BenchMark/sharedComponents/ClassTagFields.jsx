/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/sharedComponents/ClassTagFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 15th 2022, 10:35:17 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const ClassTagFields = ({ register, handleSubmit, classes, tags }) => {
  // const { register, handleSubmit } = useForm();

  const [
    handleTest,
    imageData,
    setImageData,
    handleChangeName,
    handleChangeDescription,
    handelEdit,
    handleInputChange,
    handleChange,
    handleCreateTest,
    value,
    setValue1,
    handleChangeTag,
    value1,
    imageBenchMark,
    handleClassflatAvg,
    handleClassflatvalue,
  ] = useOutletContext();

  const paperstylelList = {
    width: "80vw",
  };
  const navigate = useNavigate();
  const [classGrid, setClassGrid] = useState(4);
  const [tagGrid, setTagGrid] = useState(4);
  const classesLength = classes?.length;
  const tagLength = tags?.length;
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

  useEffect(() => {
    if (tagLength === 1) {
      setTagGrid(12);
    } else if (tagLength === 2) {
      setTagGrid(6);
    } else if (tagLength === 4) {
      setTagGrid(6);
    } else {
      setTagGrid(4);
    }
  }, [tagLength]);

  return (
    classes &&
    tags && (
      <>
        {/* Name and Description */}
        <Box>
          <Paper elevation={0} style={paperstylelList}>
            <Grid container>
              <Grid container>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#090080",
                    paddingLeft: "3%",
                    paddingTop: "1%",
                  }}>
                  General Info
                </Typography>
              </Grid>
              <Grid container sx={{ paddingRight: "3%" }}>
                <Grid
                  xs={6}
                  style={{
                    paddingLeft: "3%",
                    paddingBottom: "1%",
                    paddingTop: "1%",
                  }}>
                  <FormControl
                    variant="filled"
                    fullWidth
                    sx={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #DADCDF",
                      borderRadius: "4px",
                    }}>
                    <InputLabel>Name</InputLabel>
                    <FilledInput
                      onChange={handleChangeName}
                      // {...register("name", { required: true })}
                    />
                  </FormControl>
                </Grid>

                <Grid
                  xs={6}
                  style={{
                    paddingLeft: "3%",
                    paddingBottom: "1%",
                    paddingTop: "1%",
                  }}>
                  <FormControl
                    variant="filled"
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}>
                    <InputLabel htmlFor="filled-adornment-password">
                      Description
                    </InputLabel>
                    <FilledInput
                      // {...register("description", { required: true })}
                      onChange={handleChangeDescription}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        {/* <Grid  container  style={{ padding: "3%" }}>
            <TextField
              fullWidth
              name="Name"
              label="Name"
              {...register("name", { required: true })}
            ></TextField>
          </Grid>
          {/* Description */}
        {/* <Grid  container  style={{ padding: "3%" }}>
          <TextField
            fullWidth
            name="description"
            label="Description"
            {...register("description", { required: true })}></TextField>
        </Grid>{" "} */}

        {/* Classes */}
        <Box sx={{ paddingTop: "2%" }}>
          <Paper elevation={0} style={paperstylelList}>
            <Grid container sx={{ paddingLeft: "3%", paddingTop: "2%" }}>
              <Grid
                container
                xs={12}
                sx={{ paddingLeft: "0%", paddingTop: "0%" }}>
                <Typography variant="subtitle" sx={{ color: "#090080" }}>
                  Classes
                </Typography>
              </Grid>
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
            <Grid
              container
              xs={12}
              sx={{ paddingLeft: "3%", paddingTop: "1%", paddingRight: "1%" }}>
              {classes ? (
                <Grid container style={{ padding: "1%" }}>
                  {value === "bench" ? (
                    <>
                      {" "}
                      {classes.map((row) => (
                        <>
                          <Grid key={row.id} xs={classGrid}>
                            <Grid xs={12} sx={{ paddingBottom: "3%" }}>
                              <Typography
                                variant="body2"
                                sx={{ color: "#090080" }}>
                                {row.title}
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              xs={12}
                              sx={{ paddingBottom: "3%", paddingRight: "6%" }}>
                              <Grid xs={6} sx={{ paddingRight: "2%" }}>
                                <FormControl
                                  variant="filled"
                                  fullWidth
                                  sx={{
                                    backgroundColor: "#FFFFFF",
                                    border: "1px solid #DADCDF",
                                    borderRadius: "4px",
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
                              <Grid xs={6} sx={{ paddingRight: "2%" }}>
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
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      <Grid container>
                        <Grid xs={6} sx={{ paddingRight: "2%" }}>
                          <FormControl
                            variant="filled"
                            fullWidth
                            sx={{
                              backgroundColor: "#FFFFFF",
                              border: "1px solid #DADCDF",
                              borderRadius: "4px",
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
                        <Grid xs={6} sx={{ paddingLeft: "2%" }}>
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

        {/* tags */}
        <Box sx={{ paddingTop: "2%" }}>
          <Paper elevation={0} style={paperstylelList}>
            <Grid container sx={{ paddingLeft: "3%", paddingTop: "2%" }}>
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
            <Grid
              container
              xs={12}
              sx={{ paddingLeft: "3%", paddingTop: "1%", paddingRight: "1%" }}>
              {tags ? (
                <Grid container style={{ padding: "1%" }}>
                  {value1 === "bench" ? (
                    <>
                      {tags.map((row) => (
                        <>
                          <Grid key={row.id} xs={tagGrid}>
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
                              <Grid xs={6} sx={{ paddingRight: "2%" }}>
                                <FormControl
                                  variant="filled"
                                  fullWidth
                                  sx={{
                                    backgroundColor: "#FFFFFF",
                                    border: "1px solid #DADCDF",
                                    borderRadius: "4px",
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
                              <Grid xs={6} sx={{ paddingRight: "2%" }}>
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
                        <Grid xs={6} sx={{ paddingRight: "2%" }}>
                          <FormControl
                            variant="filled"
                            fullWidth
                            sx={{
                              backgroundColor: "#FFFFFF",
                              border: "1px solid #DADCDF",
                              borderRadius: "4px",
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
                        <Grid xs={6} sx={{ paddingLeft: "2%" }}>
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

        {/* Images */}
        <Box sx={{ paddingTop: "2%" }}>
          <Paper elevation={0} style={paperstylelList}>
            <Grid container sx={{ paddingLeft: "4%", paddingTop: "0%" }}>
              <Grid container sx={{ paddingTop: "2%" }}>
                <Typography variant="subtitle" sx={{ color: "#090080" }}>
                  Image
                </Typography>
              </Grid>
              <Grid xs={12}></Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sx={{
                paddingLeft: "2%",
                paddingTop: "0%",
                paddingRight: "2%",
                paddingBottom: "4%",
              }}>
              <Grid container style={{ padding: "2%" }}>
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
                    // value={imageBenchMark.value}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>

              {/* <Grid container xs={4} style={{ padding: "2%" }}>
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
                    value={imageBenchMark.averageCount}
                    onChange={handleInputChange}
                  />
                </FormControl>
                
              </Grid> */}

              {/* <Grid container xs={4} style={{ padding: "2%" }}>
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
                    onChange={handleInputChange}
                    value={imageBenchMark.observationTimePerImage}
                  />
                </FormControl>
              
              </Grid> */}
            </Grid>
          </Paper>
        </Box>

        <Box>
          <Grid
            container
            sx={{
              justifyContent: "right",
            }}>
            <Grid xs={6}></Grid>
            <Grid
              container
              xs={3}
              sx={{
                justifyContent: "right",
                paddingTop: "3%",
                paddingBottom: "5%",
              }}>
              <Button
                variant="outlined"
                onClick={() => navigate("/benchmark")}
                sx={{
                  width: "282px",
                  height: "45px",

                  color: "#1D1D1D",
                  borderRadius: "2px",
                }}>
                {" "}
                Cancel{" "}
              </Button>
            </Grid>
            <Grid
              container
              xs={3}
              sx={{
                justifyContent: "right",
                paddingTop: "3%",
                paddingBottom: "5%",
              }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "282px",
                  height: "45px",
                  backgroundColor: "#2D58FF",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#FF9A45",
                    color: "#1D1D1D",
                  },
                  borderRadius: "2px",
                }}>
                {" "}
                Create BenchMark{" "}
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* <Grid
          container
          xs={3}
          style={{ padding: "3%", justifyContent: "center" }}>
          <Typography variant="h4">Image</Typography>
        </Grid>
        <Grid container xs={3} style={{ padding: "3%" }}>
          <TextField
            fullWidth
            value={imageBenchMark.value}
            onChange={handleInputChange}
            inputMode="numeric"
            name="value"
            label="Second"></TextField>
        </Grid>
        <Grid container xs={3} style={{ padding: "3%" }}>
          <TextField
            value={imageBenchMark.averageCount}
            onChange={handleInputChange}
            name="averageCount"
            label="Count (Avg)"></TextField>
        </Grid>
        <Grid container xs={3} style={{ padding: "3%" }}>
          <TextField
            value={imageBenchMark.observationTimePerImage}
            onChange={handleInputChange}
            name="observationTimePerImage"
            label="Observation Time"></TextField>
        </Grid> */}

        {/* 
        <Grid
          container
          xs={12}
          style={{ padding: "3%", justifyContent: "center" }}>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Grid> */}
      </>
    )
  );
};

export default ClassTagFields;
