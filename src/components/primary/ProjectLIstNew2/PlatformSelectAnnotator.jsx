import { MenuItem, Select, Typography, styled } from "@mui/material";
import React from "react";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MySelect = styled(Select)(() => ({ width: "100%" }));

const PlatformSelectAnnotator = ({ handleChangeAnnotatorFilter, name, label, options, annotatorPlatform }) => {
  return (
    <MyFormControl
      sx={{
        px: 0,
        py: 0,
        // minWidth: "35%",
        minHeight: "36px",
        height: "36px",
      }}
      // size="medium"
    >
      <MySelect
        displayEmpty
        value={annotatorPlatform}
        sx={{
          color: "blue",
          height: "36px",
          fontSize: { lg: "10px", xl: "12px", xxl: "14px" } ,
          // height: "36px",
          // padding: "3px",
          margin: "0px",
          fontWeight: "500",
          border: "none",
          // fontSize: "14px",
          // color: "red",
          "& svg": {
            fill: "#5A6B89",
          },
          "& .MuiOutlinedInput-input": {
            padding: "4px",
          },
        }}
        IconComponent={ArrowDropDownIcon}
        label={label}
        onChange={handleChangeAnnotatorFilter}
        name={name}
      >
        <MenuItem disabled value="" sx={{fontSize: { lg: "10px", xl: "12px", xxl: "14px" }}}>
          <span style={{ color: "grey", }}>{label}</span>
        </MenuItem>
        {options.map((option) => (
          <MenuItem sx={{ fontSize: { lg: "10px", xl: "12px", xxl: "14px" } }} key={option.value} fullWidth value={option.value}>
            <Typography variant="h7" color="primary.B200">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </MySelect>
    </MyFormControl>
  );
};

export default PlatformSelectAnnotator;
