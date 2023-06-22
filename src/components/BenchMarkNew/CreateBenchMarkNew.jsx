/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/CreateBenchMarkNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:46:57 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import { Grid, Paper } from "@mui/material";
import ClassTagFieldsNew from "./sharedComponentsNew/ClassTagFieldsNew";
import CommonHeader from "../shared/CustomComponenet/CommonHeader/CommonHeader";
import SelectMenuNew from "./sharedComponentsNew/SelectMenuNew";
import { resetProjectMetas } from "../../features/slice/benchMarkSlice";

const CreateBenchMarkNew = () => {
  const { benchMark, benchMarks, isLoading } = useSelector(
    (state) => state.benchMark
  );

  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);

  const { classes } = useSelector((state) => state.benchMark.projectMetas);
  const { tags } = useSelector((state) => state.benchMark.projectMetas);
  const { handleSubmit } = useForm();

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
  ] = useOutletContext();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetProjectMetas());
  }, []);

  return (
    <>
      <Grid container sx={{ paddingBottom: "2%" }}>
        <CommonHeader
          title="Create a Benchmark"
          description="Create a new benchmark"
          isLoading={isLoading}
        />
      </Grid>
      <Paper
        elevation={0}
        sx={{ mb: 2, paddingLeft: "2%", paddingRight: "2%" }}>
        <SelectMenuNew
          teams={teams}
          workspaces={workspaces}
          projects={projects}
          handleChangeTeam={handleChangeTeam}
          handleChangeWorkspace={handleChangeWorkspace}
          handleChangeProject={handleChangeProject}
          handleChangeCategory={handleChangeCategory}
          register={register}
          handleChangeServer={handleChangeServer}
          category={category}
          server={server}
        />
      </Paper>
      <ClassTagFieldsNew
        register={register}
        handleSubmit={handleSubmit}
        classes={classes}
        tags={tags}
      />
    </>
  );
};

export default CreateBenchMarkNew;
