/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/CategoryChip.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, February 16th 2023, 2:21:33 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Chip} from "@mui/material";
import React from "react";
import {capitalizeFirstLetter} from "../../../helper/capitalizeFirstWord";

const introStyle = {
  width: "100%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "10px",
  border: "1px solid rgba(54, 179, 126, 0.26)",
  color: "#36B37E",
};
const imageStyle = {
  width: "100%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "10px",
  border: "1px solid rgba(54, 179, 126, 0.26)",
  color: "#36B37E",
};
const videoStyle = {
  width: "100%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "10px",
  border: "1px solid rgba(54, 179, 126, 0.26)",
  color: "#36B37E",
};
const LiDARStyle = {
  width: "100%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "10px",
  border: "1px solid rgba(54, 179, 126, 0.26)",
  color: "#36B37E",
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
      <Chip sx={{ ...style }} label={capitalizeFirstLetter(category)} />
    </>
  );
};

export default CategoryChip;
