import { Box, FormControl, MenuItem, Select } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const ProjectDetailSelect = ({ options, handleChange, value, setValue }) => {
  const style = (value) => {
    switch (value) {
      case "not-Started":
        return {
          backgroundColor: "rgba(242, 246, 252, 1)",
          color: "rgba(60, 77, 107, 1)",
          width: "160px",
          border: "2px solid rgba(230, 236, 245, 1)",
          height: "40px",
          borderRadius: "8px",
          fontWeight: "bold",
          "& svg": {
            fill: "#3C4D6B",
          },
        };
      case "in-Progress":
        return {
          backgroundColor: "rgba(244, 247, 254, 1)",
          color: "rgba(46, 88, 255, 1)",
          width: "150px",
          border: "2px solid #F4F7FE",
          height: "40px",
          borderRadius: "8px",
          fontWeight: "bold",
          "& svg": {
            fill: "#2E58FF",
          },
        };
      case "hours-added":
        return {
          backgroundColor: "rgba(250, 228, 195, 1)",
          color: "rgba(247, 144, 9, 1)",
          width: "160px",
          border: "2px solid rgba(250, 228, 195, 1)",
          height: "40px",
          borderRadius: "8px",
          fontWeight: "bold",
          "& svg": {
            fill: "#F2A200",
          },
        };
      case "completed":
        return {
          backgroundColor: "#C4F5DF",
          color: "#12B76A",
          width: "160px",
          border: "2px solid #C4F5DF",
          height: "40px",
          borderRadius: "8px",
          fontWeight: "bold",
          "& svg": {
            fill: "#36B37E",
          },
        };
      default:
        return {
          textAlign: "center",
          backgroundColor: "rgba(242, 246, 252, 1)",
          color: "rgba(60, 77, 107, 1)",
          width: "160px",
          padding: "0px",
          border: "2px solid rgba(230, 236, 245, 1)",
          height: "40px",
          borderRadius: "8px",
          "& svg": {
            fill: "#3C4D6B ",
          },
        };
    }
  };
  return (
    <Box>
      <FormControl
        sx={{
          m: 1,
          minWidth: 170,
          borderRadius: "6px",
        }}
      >
        <Select
          sx={style(value)}
          displayEmpty
          value={value}
          onChange={handleChange}
          defaultValue={"select"}
          IconComponent={ArrowDropDownIcon}
        >
          <MenuItem disabled value="">
            <em>Select</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              fullWidth
              value={(() => setValue(option.name, option.value), option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProjectDetailSelect;