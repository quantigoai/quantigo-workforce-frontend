import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const selectTypeFilter = [
  "Client_Alias",
  "Industry",
  // "Project_Name",
  "Platform",
  "Tool_Type",
  "PDR",
  "Project_Type",
  "Action_Items",
  "QA_Check_Points",
  "Obj_Benchmark",
  "Img_Benchmark",
  "Tagging_Benchmark",
  "Deletion",
  "Skip_Image",
  // "Update",
  "Image_Loading",
  "Object_Saving_Time",
  "Video_Watch_Time",
  "Judgement_Time",
  "QA_Benchmark",
  "Annotation",
  "QA",
  // "Remarks"
];
const SelectFilterProjectDirectory = ({
  handleMenuItemClick,
  setAnchorEl,
  anchorEl,
}) => {
  // const [anchorEl, setAnchorEl] = useState(null);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <Button
          variant="outlined"
          sx={{
            "&:hover": {
              backgroundColor: "#FF9A45",
              color: "#1D1D1D",
            },
          }}
          onMouseOver={handleButtonClick}>
          Add Filter Type
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}>
          {selectTypeFilter.map((filter, index) => (
            <MenuItem
              key={index}
              value={filter}
              onClick={() => handleMenuItemClick(filter)}>
              {filter}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default SelectFilterProjectDirectory;
