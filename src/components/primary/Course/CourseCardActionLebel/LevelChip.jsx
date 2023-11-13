import {Chip} from "@mui/material";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const basicStyle = {
  width: "70%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "8px",
  border: "1px solid rgba(255, 71, 87, 0.24)",
  color: "#FF4757",
};
const advanceStyle = {
  width: "70%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "8px",
  border: "1px solid rgba(255, 71, 87, 0.24)",
  color: "#FF4757",
};
const beginnerStyle = {
  width: "70%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "8px",
  border: "1px solid rgba(255, 71, 87, 0.24)",
  color: "#FF4757",
};
const intermediateStyle = {
  width: "70%",
  height: "33px",
  backgroundColor: "#FFF8EB",
  borderRadius: "8px",
  border: "1px solid rgba(255, 71, 87, 0.24)",
  color: "#FF4757",
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
      <Chip sx={{ ...style, width: "100%" }} label={capitalizeFirstLetter(level)} />
    </>
  );
};

export default LevelChip;
