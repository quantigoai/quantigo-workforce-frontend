/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/sharedComponentsNew/ClassTagFieldsNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:52:52 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import React from "react";
import {useSelector} from "react-redux";
import CommonMetaFields from "../../primary/BenchMark/sharedComponents/CommonMeta/CommonMetaFields";
import ImageFields from "../../primary/BenchMark/sharedComponents/ImageFields";
import NameDescFIeld from "../../primary/BenchMark/sharedComponents/NameDescFIeld";

const ClassTagFieldsNew = ({ register, handleSubmit }) => {
  const { classes } = useSelector((state) => state.benchMark.projectMetas);
  const { tags } = useSelector((state) => state.benchMark.projectMetas);

  return (
    classes &&
    tags && (
      <>
        {/* Name and Description */}
        <NameDescFIeld />

        {/* Classes */}
        <CommonMetaFields renderItems={"classes"} />

        {/* tags */}
        <CommonMetaFields renderItems={"tags"} />

        {/* Images */}
        <ImageFields />
      </>
    )
  );
};

export default ClassTagFieldsNew;
