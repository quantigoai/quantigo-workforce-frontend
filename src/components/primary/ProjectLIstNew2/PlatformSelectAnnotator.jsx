import { Box, FormControl, MenuItem, Select, styled } from "@mui/material";
import React from "react";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MySelect = styled(Select)(() => ({ width: "100%" }));

const PlatformSelectAnnotator = ({ handleChangeAnnotatorFilter, name, label, options }) => {
  return (
    <MyFormControl sx={{ m: 0.5, minWidth: "23%" }} size="medium">
      <MySelect
        displayEmpty
        defaultValue={""}
        sx={{
          height: "30px",
          borderRadius: "8px",
          "& svg": {
            fill: "#667085",
          },
          backgroundColor: "none",
          width: "140px",
          border: "none",
          color: "#2E58FF",
        }}
        IconComponent={KeyboardArrowDownIcon}
        label={label}
        onChange={handleChangeAnnotatorFilter}
        name={name}
      >
        <MenuItem disabled value="">
          <span style={{ color: "grey" }}>{label}</span>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} fullWidth value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MySelect>
    </MyFormControl>
  );
};

export default PlatformSelectAnnotator;
