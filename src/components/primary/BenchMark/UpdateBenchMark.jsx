/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/UpdateBenchMark.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 15th 2022, 11:16:30 am
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
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

const UpdateBenchMark = () => {
  const [
    handleTest,
    imageData,
    setImageData,
    handleChangeName,
    handleChangeDescription,
  ] = useOutletContext();
  const { benchMark } = useSelector((state) => state.benchMark);
  const { register, handleSubmit } = useForm();
  const [newData, setNewData] = useState({});
  const [value, setValue] = React.useState("bench");
  const [value1, setValue1] = React.useState("bench");

  const handleChangeTag = (event) => {
    setValue1(event.target.value);
  };

  const handleChangeclasses = (event) => {
    setValue(event.target.value);
  };
  const handleInputChange = (x, e, a) => {
    if (x === "value") {
      const data = {
        ...imageData,
      };
      data.value = e;
      setImageData(data);
    } else if (x === "averageCount") {
      const data = {
        ...imageData,
      };
      data.averageCount = e;
      setImageData(data);
    } else {
      const data = {
        ...imageData,
      };
      data.observationTimePerImage = e;
      setImageData(data);
    }
  };

  const paperstylelList = {
    width: "80vw",
  };
  const [classGrid, setClassGrid] = useState(4);
  const [tagGrid, setTagGrid] = useState(4);
  const classesLength = benchMark?.classesBenchMark.length;
  const tagLength = benchMark?.tagsBenchMark.length;
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

  // if (classesLength == 1) {
  //   setClassGrid(12);
  // } else if (classesLength === 2) {
  //   setClassGrid(6);
  // } else if (classesLength == 4) {
  //   setClassGrid(6);
  // } else {
  //   setClassGrid(4);
  // }
  const handleInputChangeTest = (e) => {
    const data = {
      ...imageData,
    };
    data.value = e.target.value;
    setImageData(data);
  };
  return (
    <>
      {benchMark && Object.keys(benchMark).length > 0 && (
        <>
          <Box>
            <Paper elevation={0} style={paperstylelList}>
              <Grid container>
                <Grid container>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#090080",
                      paddingLeft: "3%",
                      paddingTop: "2%",
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
                      sx={{ backgroundColor: "#FFFFFF" }}>
                      <InputLabel htmlFor="filled-adornment-password">
                        Name
                      </InputLabel>
                      <FilledInput
                        // {...register("name")}
                        defaultValue={benchMark.name}
                        onChange={handleChangeName}
                      />
                    </FormControl>
                    {/* <TextField
                  fullWidth
                  name="Name"
                  label="Name"
                  defaultValue={benchMark.name}
                  {...register("name")}></TextField> */}
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
                        // {...register("description")}
                        defaultValue={benchMark.description}
                        onChange={handleChangeDescription}
                      />
                    </FormControl>
                    {/* <TextField
                  fullWidth
                  name="description"
                  label="Description"
                  defaultValue={benchMark.description}
                  {...register("description")}></TextField> */}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>

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
                    onChange={handleChangeclasses}>
                    <FormControlLabel
                      value="bench"
                      control={<Radio />}
                      label="Indivitual"
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
                sx={{
                  paddingLeft: "1%",
                  paddingTop: "1%",
                  paddingRight: "1%",
                }}>
                {value === "bench" ? (
                  <>
                    {benchMark?.classesBenchMark.map((row) => (
                      <Grid
                        xs={classGrid}
                        sx={{
                          paddingLeft: "2%",
                          paddingRight: "2%",
                          paddingBottom: "2%",
                        }}>
                        <Grid xs={12} sx={{ paddingBottom: "3%" }}>
                          <Typography variant="body2" sx={{ color: "#090080" }}>
                            {row.title}
                          </Typography>
                        </Grid>
                        <Grid container>
                          <Grid container xs={6} sx={{ padding: "1%" }}>
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
                                  handleTest(
                                    "class",
                                    "value",
                                    row,
                                    e.target.value
                                  )
                                }
                                defaultValue={row.value}
                              />
                            </FormControl>
                            {/* <TextField
                      InputProps={{
                        inputProps: { min: 0 },
                      }}
                      onKeyPress={(event) => {
                        if (event?.key === "-" || event?.key === "+") {
                          event.preventDefault();
                        }
                      }}
                      name="number"
                      type={"number"}
                      label="Second"
                      onChange={(e) =>
                        handleTest("class", "value", row, e.target.value)
                      }
                      defaultValue={row.value}></TextField> */}
                          </Grid>
                          <Grid container xs={6} sx={{ padding: "1%" }}>
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
                                  handleTest(
                                    "class",
                                    "averageCount",
                                    row,
                                    e.target.value
                                  )
                                }
                                defaultValue={row.averageCount}
                              />
                            </FormControl>
                            {/* <TextField
                      InputProps={{
                        inputProps: { min: 0 },
                      }}
                      onKeyPress={(event) => {
                        if (event?.key === "-" || event?.key === "+") {
                          event.preventDefault();
                        }
                      }}
                      name="number"
                      type={"number"}
                      label="Count"
                      onChange={(e) =>
                        handleTest("class", "averageCount", row, e.target.value)
                      }
                      defaultValue={row.averageCount}></TextField> */}
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </>
                ) : (
                  <>
                    <Grid container>
                      <Grid
                        xs={6}
                        sx={{ paddingRight: "2%", paddingBottom: "2%" }}>
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
                      <Grid
                        xs={6}
                        sx={{ paddingLeft: "2%", paddingBottom: "2%" }}>
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
            </Paper>
          </Box>

          <Box sx={{ paddingTop: "2%" }}>
            <Paper elevation={0} style={paperstylelList}>
              <Grid container sx={{ paddingLeft: "4%", paddingTop: "0%" }}>
                <Grid container sx={{ paddingTop: "2%" }}>
                  <Typography variant="subtitle" sx={{ color: "#090080" }}>
                    Tag
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
                      label="Indivitual"
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
                sx={{ paddingLeft: "4%", paddingTop: "1%" }}>
                {value1 === "bench" ? (
                  <>
                    {benchMark?.tagsBenchMark.map((row) => (
                      <Grid xs={tagGrid}>
                        <Grid xs={12} sx={{ paddingBottom: "2%" }}>
                          <Typography variant="body2" sx={{ color: "#090080" }}>
                            {row.name}
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          xs={12}
                          sx={{ paddingBottom: "3%", paddingRight: "5%" }}>
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
                                Time (Seconds)
                              </InputLabel>
                              <FilledInput
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
                                  handleTest(
                                    "tag",
                                    "value",
                                    row,
                                    e.target.value
                                  )
                                }
                                defaultValue={row.value}
                              />
                            </FormControl>
                            {/* <TextField
                      InputProps={{
                        inputProps: { min: 0 },
                      }}
                      onKeyPress={(event) => {
                        if (event?.key === "-" || event?.key === "+") {
                          event.preventDefault();
                        }
                      }}
                      name="number"
                      type={"number"}
                      label="Second"
                      onChange={(e) =>
                        handleTest("class", "value", row, e.target.value)
                      }
                      defaultValue={row.value}></TextField> */}
                          </Grid>
                          <Grid xs={6}>
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
                                  handleTest(
                                    "tag",
                                    "averageCount",
                                    row,
                                    e.target.value
                                  )
                                }
                                defaultValue={row.averageCount}
                              />
                            </FormControl>
                            {/* <TextField
                      InputProps={{
                        inputProps: { min: 0 },
                      }}
                      onKeyPress={(event) => {
                        if (event?.key === "-" || event?.key === "+") {
                          event.preventDefault();
                        }
                      }}
                      name="number"
                      type={"number"}
                      label="Count"
                      onChange={(e) =>
                        handleTest("class", "averageCount", row, e.target.value)
                      }
                      defaultValue={row.averageCount}></TextField> */}
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </>
                ) : (
                  <>
                    <Grid container>
                      <Grid
                        xs={6}
                        sx={{ paddingRight: "2%", paddingBottom: "2%" }}>
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
                      <Grid
                        xs={6}
                        sx={{ paddingRight: "4%", paddingBottom: "2%" }}>
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
            </Paper>
          </Box>

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
                  paddingLeft: "4%",
                  paddingTop: "1%",
                  paddingRight: "5%",
                  paddingBottom: "4%",
                }}>
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
                    InputProps={{
                      inputProps: { min: 0 },
                    }}
                    onKeyPress={(event) => {
                      if (event?.key === "-" || event?.key === "+") {
                        event.preventDefault();
                      }
                    }}
                    name="number"
                    type={"number"}
                    // onChange={handleInputChange()}
                    onChange={handleInputChangeTest}
                    defaultValue={benchMark.imageBenchMark.value}
                  />
                </FormControl>
              </Grid>
            </Paper>
          </Box>

          <Grid
            container
            xs={12}
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
                borderRadius: "2px",
              }}>
              Update BenchMark
            </Button>
          </Grid>
        </>
      )}
    </>

    // <>
    //   {benchMark && Object.keys(benchMark).length > 0 && (
    //     <>
    //       <Grid
    //         container
    //         xs={12}
    //         style={{ paddingLeft: "1%", paddingBottom: "5%" }}
    //       >
    //         <TextField
    //           fullWidth
    //           name="Name"
    //           label="Name"
    //           defaultValue={benchMark.name}
    //           {...register("name")}
    //         ></TextField>
    //       </Grid>

    //       <Grid
    //         container
    //         xs={12}
    //         style={{ paddingLeft: "1%", paddingBottom: "5%" }}
    //       >
    //         <TextField
    //           fullWidth
    //           name="description"
    //           label="Description"
    //           defaultValue={benchMark.description}
    //           {...register("description")}
    //         ></TextField>
    //       </Grid>

    //       <Grid xs={6}>
    //         <Typography variant="h4">Class</Typography>
    //         <TableContainer component={Paper}>
    //           <Table sx={{ Width: "20%" }} aria-label="simple table">
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Title</TableCell>
    //                 <TableCell align="left">Time (Second)</TableCell>
    //                 <TableCell align="left">Count (Avg)</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {benchMark.classesBenchMark.map((row) => (
    //                 <TableRow
    //                   key={row.title}
    //                   sx={{
    //                     "&:last-child td, &:last-child th": {
    //                       border: 0,
    //                     },
    //                   }}
    //                 >
    //                   <TableCell align="left">{row.title}</TableCell>
    //                   <TableCell align="left">
    //                     <TextField
    //                       InputProps={{
    //                         inputProps: { min: 0 },
    //                       }}
    //                       onKeyPress={(event) => {
    //                         if (event?.key === "-" || event?.key === "+") {
    //                           event.preventDefault();
    //                         }
    //                       }}
    //                       name="number"
    //                       type={"number"}
    //                       label="Second"
    //                       onChange={(e) =>
    //                         handleTest("class", "value", row, e.target.value)
    //                       }
    //                       defaultValue={row.value}
    //                     ></TextField>
    //                   </TableCell>

    //                   <TableCell align="left">
    //                     <TextField
    //                       InputProps={{
    //                         inputProps: { min: 0 },
    //                       }}
    //                       onKeyPress={(event) => {
    //                         if (event?.key === "-" || event?.key === "+") {
    //                           event.preventDefault();
    //                         }
    //                       }}
    //                       name="number"
    //                       type={"number"}
    //                       label="Count"
    //                       onChange={(e) =>
    //                         handleTest(
    //                           "class",
    //                           "averageCount",
    //                           row,
    //                           e.target.value
    //                         )
    //                       }
    //                       defaultValue={row.averageCount}
    //                     ></TextField>
    //                   </TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Grid>
    //       <Grid xs={6}>
    //         <Typography variant="h4">Tag</Typography>
    //         <TableContainer component={Paper}>
    //           <Table sx={{ Width: "20%" }} aria-label="simple table">
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Title</TableCell>
    //                 <TableCell align="left">Time (Second)</TableCell>
    //                 <TableCell align="left">Counnt (Avg)</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {benchMark.tagsBenchMark.map((row) => (
    //                 <TableRow
    //                   key={row.title}
    //                   sx={{
    //                     "&:last-child td, &:last-child th": {
    //                       border: 0,
    //                     },
    //                   }}
    //                 >
    //                   <TableCell align="left">{row.name}</TableCell>
    //                   <TableCell align="left">
    //                     <TextField
    //                       name="number"
    //                       InputProps={{
    //                         inputProps: { min: 0 },
    //                       }}
    //                       onKeyPress={(event) => {
    //                         if (event?.key === "-" || event?.key === "+") {
    //                           event.preventDefault();
    //                         }
    //                       }}
    //                       type={"number"}
    //                       defaultValue={row.value}
    //                       onChange={(e) =>
    //                         handleTest("tag", "value", row, e.target.value)
    //                       }
    //                     ></TextField>
    //                   </TableCell>

    //                   <TableCell align="left">
    //                     <TextField
    //                       name="number"
    //                       InputProps={{
    //                         inputProps: { min: 0 },
    //                       }}
    //                       onKeyPress={(event) => {
    //                         if (event?.key === "-" || event?.key === "+") {
    //                           event.preventDefault();
    //                         }
    //                       }}
    //                       type={"number"}
    //                       defaultValue={row.averageCount}
    //                       onChange={(e) =>
    //                         handleTest(
    //                           "tag",
    //                           "averageCount",
    //                           row,
    //                           e.target.value
    //                         )
    //                       }
    //                     ></TextField>
    //                   </TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Grid>
    //       <Grid container>
    //         <Grid
    //           container
    //           xs={3}
    //           style={{ padding: "3%", justifyContent: "center" }}
    //         >
    //           <Typography variant="h4">Image</Typography>
    //         </Grid>
    //         <Grid container xs={3} style={{ padding: "3%" }}>
    //           <TextField
    //             onChange={(e) =>
    //               handleInputChange(
    //                 "value",
    //                 e.target.value,
    //                 benchMark.imageBenchMark.value
    //               )
    //             }
    //             defaultValue={benchMark.imageBenchMark.value}
    //             label="Second"
    //           ></TextField>
    //         </Grid>
    //         <Grid container xs={3} style={{ padding: "3%" }}>
    //           <TextField
    //             onChange={(e) =>
    //               handleInputChange(
    //                 "averageCount",
    //                 e.target.value,
    //                 benchMark.imageBenchMark.averageCount
    //               )
    //             }
    //             defaultValue={benchMark.imageBenchMark.averageCount}
    //             label="Count (Avg)"
    //           ></TextField>
    //         </Grid>
    //         <Grid container xs={3} style={{ padding: "3%" }}>
    //           <TextField
    //             onChange={(e) =>
    //               handleInputChange(
    //                 "observationTimePerImage",
    //                 e.target.value,
    //                 benchMark.imageBenchMark.observationTimePerImage
    //               )
    //             }
    //             defaultValue={benchMark.imageBenchMark.observationTimePerImage}
    //             label="Observation Time"
    //           ></TextField>
    //         </Grid>
    //       </Grid>
    //       <Grid xs={12}>
    //         <Button variant="contained" type="submit">
    //           {" "}
    //           Modify BenchMark{" "}
    //         </Button>
    //       </Grid>
    //     </>
    //   )}
    // </>
  );
};

export default UpdateBenchMark;
