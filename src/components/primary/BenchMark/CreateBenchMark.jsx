/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/CreateBenchMark.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 15th 2022, 1:50:17 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import React from "react";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useOutletContext} from "react-router-dom";

import ClassTagFields from "./sharedComponents/ClassTagFields";

const CreateBenchMark = () => {
  const { classes } = useSelector((state) => state.benchMark.projectMetas);
  const { tags } = useSelector((state) => state.benchMark.projectMetas);
  const { register, handleSubmit } = useForm();

  const [
    handleTest,
    imageData,
    setImageData,
    handelEdit,
    handleInputChange,
    handleChange,
    handleCreateTest,
    value,
    setValue1,
    handleChangeTag,
    value1,
    imageBenchMark,
  ] = useOutletContext();

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}

      <ClassTagFields
        register={register}
        handleSubmit={handleSubmit}
        classes={classes}
        tags={tags}
      />
      {/* </form> */}
    </>
  );
};

export default CreateBenchMark;
