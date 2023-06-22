/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/sharedComponents/CommonMetaFields.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Sunday, March 26th 2023, 7:07:41 pm
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
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

const CommonMetaFields = ({ isUpdate = false, renderItems, bm }) => {
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
  ] = useOutletContext();

  const [classGrid, setClassGrid] = useState(4);
  const { classes, tags } = useSelector(
    (state) => state.benchMark.projectMetas
  );

  let classesLength = 0;
  if (renderItems === "classes") {
    classesLength = classes?.length;
  }
  if (renderItems === "tags") {
    classesLength = tags?.length;
  }

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

  //  change radio group

  return (
    <>
      <Box>
        <Paper elevation={0} sx={{ mb: 2, p: 3 }}>
          <Grid container>
            <Grid
              container
              xs={12}
              sx={{ paddingLeft: "0%", paddingTop: "0%" }}
            >
              <Typography variant="subtitle" sx={{ color: "#090080" }}>
                {renderItems === "classes" ? "Classes" : "Tags"}
              </Typography>
            </Grid>
            {/* Radio Button for flat and auto */}
            <Grid xs={12}>
              {(!isUpdate &&
                (renderItems === "classes" ? classes?.length : tags?.length)) ||
              (isUpdate &&
                (renderItems === "classes"
                  ? bm.classesBenchMark.length
                  : bm.tagsBenchMark.length)) ? (
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  defaultValue="bench"
                  value={renderItems === "classes" ? value : value1}
                  onChange={
                    renderItems === "classes" ? handleChange : handleChangeTag
                  }
                >
                  <FormControlLabel
                    value="bench"
                    control={<Radio />}
                    label="Individual"
                  />
                  <FormControlLabel
                    value="auto"
                    control={<Radio />}
                    label="Flat benchmark"
                  />
                </RadioGroup>
              ) : (
                <Typography variant="subtitle" sx={{ color: "red" }}>
                  No {renderItems === "classes" ? "classes" : "tags"} Found for
                  this project
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container>
            {(renderItems === "classes" ? classes : tags) ? (
              <Grid container>
                {(renderItems === "classes" && value === "bench") ||
                (renderItems === "tags" && value1 === "bench") ? (
                  <>
                    {(
                      (!isUpdate &&
                        (renderItems === "classes" ? classes : tags)) ||
                      (isUpdate &&
                        (renderItems === "classes"
                          ? bm.classesBenchMark
                          : bm.tagsBenchMark))
                    ).map((row) => (
                      <>
                        <Grid key={row.title} xs={classGrid} pr={2} pb={2}>
                          <Grid xs={12} sx={{ pb: "1%" }}>
                            <Typography
                              variant="body2"
                              sx={{ color: "#090080" }}
                            >
                              {renderItems === "classes" ? row.title : row.name}
                            </Typography>
                          </Grid>
                          <Grid container>
                            <Grid xs={6} pr={1}>
                              <FormControl
                                variant="filled"
                                fullWidth
                                sx={{
                                  backgroundColor: "#FFFFFF",
                                }}
                              >
                                <InputLabel>Time (Seconds)</InputLabel>
                                <FilledInput
                                  fullWidth
                                  InputProps={{
                                    inputProps: { min: 0 },
                                  }}
                                  name="number"
                                  type={"number"}
                                  label="Second"
                                  onChange={(e) =>
                                    renderItems === "classes"
                                      ? isUpdate
                                        ? handleTest(
                                            "class",
                                            "value",
                                            row,
                                            e.target.value
                                          )
                                        : handleCreateTest(
                                            "class",
                                            "value",
                                            row.id,
                                            row.title,
                                            e.target.value
                                          )
                                      : isUpdate
                                      ? handleTest(
                                          "tag",
                                          "value",
                                          row,
                                          e.target.value
                                        )
                                      : handleCreateTest(
                                          "tag",
                                          "value",
                                          row.id,
                                          row.name,
                                          e.target.value
                                        )
                                  }
                                  defaultValue={isUpdate ? row.value : ""}
                                  required
                                />
                              </FormControl>
                            </Grid>
                            <Grid xs={6} pl={1}>
                              <FormControl
                                variant="filled"
                                fullWidth
                                sx={{
                                  backgroundColor: "#FFFFFF",
                                }}
                              >
                                <InputLabel htmlFor="filled-adornment-password">
                                  Count (Avg)
                                </InputLabel>
                                <FilledInput
                                  fullWidth
                                  InputProps={{
                                    inputProps: { min: 0 },
                                  }}
                                  name="number"
                                  type={"number"}
                                  label="Count"
                                  defaultValue={
                                    isUpdate ? row.averageCount : ""
                                  }
                                  // TODO for class function need to be updated
                                  onChange={(e) =>
                                    renderItems === "classes"
                                      ? isUpdate
                                        ? handleTest(
                                            "class",
                                            "averageCount",
                                            row,
                                            e.target.value
                                          )
                                        : handleCreateTest(
                                            "class",
                                            "averageCount",
                                            row.id,
                                            row.title,
                                            e.target.value
                                          )
                                      : isUpdate
                                      ? handleTest(
                                          "tag",
                                          "averageCount",
                                          row,
                                          e.target.value
                                        )
                                      : handleCreateTest(
                                          "tag",
                                          "averageCount",
                                          row.id,
                                          row.name,
                                          e.target.value
                                        )
                                  }
                                  required
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                      </>
                    ))}
                  </>
                ) : (
                  // For flat data
                  <>
                    <Grid container>
                      <Grid xs={6}>
                        <FormControl
                          variant="filled"
                          fullWidth
                          sx={{
                            backgroundColor: "#FFFFFF",
                          }}
                        >
                          <InputLabel htmlFor="filled-adornment-password">
                            Time (Second)
                          </InputLabel>
                          <FilledInput
                            fullWidth
                            InputProps={{
                              inputProps: { min: 0 },
                            }}
                            name="number"
                            min="0"
                            type={"number"}
                            label="Count"
                            onChange={(e) =>
                              renderItems === "classes"
                                ? handleClassflatvalue(
                                    e.target.value,
                                    "timeValue"
                                  )
                                : handleTagflatvalue(
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
                          }}
                        >
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
                              renderItems === "classes"
                                ? handleClassflatvalue(
                                    e.target.value,
                                    "avgCount"
                                  )
                                : handleTagflatvalue(e.target.value, "avgCount")
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

export default CommonMetaFields;
