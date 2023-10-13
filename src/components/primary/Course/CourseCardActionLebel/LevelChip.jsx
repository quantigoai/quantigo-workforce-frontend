import {Chip} from "@mui/material";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const basicStyle = {
  width: "100%",
  height: "23px",
  background: "#A93439",
  borderRadius: "100px",
};
const advanceStyle = {
  width: "100%",
  height: "23px",
  background: "#4A2D8B ",
  borderRadius: "100px",
};
const beginnerStyle = {
  width: "100%",
  height: "23px",
  background: "#82BD40",
  borderRadius: "100px",
};
const intermediateStyle = {
  width: "100%",
  height: "23px",
  background: "#EB6651",
  borderRadius: "100px",
};
const LevelChip = ({ level }) => {
  let style = {};

  switch (level) {
    case "basic":
      style = basicStyle;
      break;
    case "beginner":
      style = beginnerStyle;
      break;
    case "intermediate":
      style = intermediateStyle;
      break;
    case "advance":
      style = advanceStyle;
      break;
    default:
      style = beginnerStyle;
      break;
  }

  return (
    <>
      <Chip
        sx={{ ...style, color: "#ffffff", width: "100%" }}
        label={capitalizeFirstLetter(level)}
      />
    </>
  );
};

export default LevelChip;
