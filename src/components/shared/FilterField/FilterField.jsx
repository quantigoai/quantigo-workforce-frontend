/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/FilterField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 16th 2023, 11:10:39 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {
  Box,
  InputAdornment,
  Popover,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MiniModal from "./MiniModal";
const FilterField = ({ handleClick }) => {
  const CustomFilterIcon = styled(FilterAltIcon)({
    color: "rgba(45, 88, 255, 1)",
    marginRight: "10px",
  });

  return (
    <>
      <InputAdornment position="end">
        <CustomFilterIcon
          onClick={handleClick}
          IconComponent={() => <CustomFilterIcon />}
          aria-label="toggle password visibility"
          edge="end"
          sx={{ cursor: "pointer" }}
        ></CustomFilterIcon>
      </InputAdornment>
    </>
  );
};

export default FilterField;
