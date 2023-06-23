/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/UpdateBenchMark
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:45:16 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
// TODO Changes need to be done immediately.

// save server agent field in backend
// disable team and others in update benchmark
// fix the images value for update benchmark
// bug in flat bm update benchmark
// Flat create benchmark should be fixed
// Default value is not set in text field for flat bm update benchmark

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
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import SelectMenuNew from "./sharedComponentsNew/SelectMenuNew";
import NameDescFIeld from "../primary/BenchMark/sharedComponents/NameDescFIeld";
import CommonMetaFields from "../primary/BenchMark/sharedComponents/CommonMeta/CommonMetaFields";
import {
  getProjectMeta,
  getProjectMetaAg,
} from "../../features/slice/benchMarkSlice";
import ImageFields from "../primary/BenchMark/sharedComponents/ImageFields";

const UpdateBenchMarkNew = () => {
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
  ] = useOutletContext();
  const { benchMark } = useSelector((state) => state.benchMark);

  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useEffect(() => {
    if (benchMark.server_agent) {
      if (benchMark.server_agent === "ag") {
        dispatch(getProjectMetaAg(benchMark.projectId));
      } else {
        dispatch(getProjectMeta(benchMark.projectId));
      }
    }
  }, []);

  // const [classGrid, setClassGrid] = useState(4);
  // const [tagGrid, setTagGrid] = useState(4);
  // const classesLength = benchMark?.classesBenchMark.length;
  // const tagLength = benchMark?.tagsBenchMark.length;
  // useEffect(() => {
  //   if (classesLength === 1) {
  //     setClassGrid(12);
  //   } else if (classesLength === 2) {
  //     setClassGrid(6);
  //   } else if (classesLength === 4) {
  //     setClassGrid(6);
  //   } else {
  //     setClassGrid(4);
  //   }
  // }, [classesLength]);

  // useEffect(() => {
  //   if (tagLength === 1) {
  //     setTagGrid(12);
  //   } else if (tagLength === 2) {
  //     setTagGrid(6);
  //   } else if (tagLength === 4) {
  //     setTagGrid(6);
  //   } else {
  //     setTagGrid(4);
  //   }
  // }, [tagLength]);

  return (
    <>
      {benchMark && Object.keys(benchMark).length > 0 && (
        <>
          <NameDescFIeld isUpdate={true} />

          <CommonMetaFields
            isUpdate={true}
            bm={benchMark}
            renderItems={"classes"}
          />

          <CommonMetaFields
            isUpdate={true}
            bm={benchMark}
            renderItems={"tags"}
          />

          <ImageFields isUpdate={true} bm={benchMark} />

          <Grid
            container
            xs={12}
            sx={{
              justifyContent: "right",
              paddingTop: "3%",
              paddingBottom: "5%",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "282px",
                height: "45px",
                backgroundColor: "#2D58FF",
                color: "#FFFFFF",
                borderRadius: "2px",
              }}
            >
              Update BenchMark{" "}
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default UpdateBenchMarkNew;
