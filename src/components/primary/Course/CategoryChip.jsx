/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/CategoryChip.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, February 16th 2023, 2:21:33 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Chip } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";

const introStyle = {
  width: "100%",
  height: "23px",
  background: "#2d3b87",
  borderRadius: "100px",
};
const imageStyle = {
  width: "100%",
  height: "23px",
  background: "#057583 ",
  borderRadius: "100px",
};
const videoStyle = {
  width: "100%",
  height: "23px",
  background: "#ABA4D1 ",
  borderRadius: "100px",
};
const LiDARStyle = {
  width: "100%",
  height: "23px",
  background: "#7f3860",
  borderRadius: "100px",
};

const CategoryChip = ({ category }) => {
  let style = {};

  switch (category) {
    case "intro":
      style = introStyle;
      break;
    case "image":
      style = imageStyle;
      break;
    case "video":
      style = videoStyle;
      break;
    case "LiDAR":
      style = LiDARStyle;
      break;
    default:
      style = introStyle;
      break;
  }

  return (
    <>
      <Chip sx={{...style, color: "#ffffff"}} label={capitalizeFirstLetter(category)} />
    </>
  );
};

export default CategoryChip;
