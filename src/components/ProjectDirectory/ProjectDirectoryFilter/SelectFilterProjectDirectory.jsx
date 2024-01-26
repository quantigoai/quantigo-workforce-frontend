import { Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";

const selectTypeFilter = [
  { item: "Client Alias", value: "Client_Alias" },
  { item: "Industry", value: "Industry" },
  { item: "Platform", value: "Platform" },
  { item: "Type Type", value: "Tool_Type" },
  { item: "PDR", value: "PDR" },
  { item: "Project Type", value: "Project_Type" },
  { item: "Action Item", value: "Action_Items" },
  { item: "QA Check Points", value: "QA_Check_Points" },
  { item: "Object Benchmark", value: "Obj_Benchmark" },
  { item: "Image Benchmark", value: "Img_Benchmark" },
  { item: "Tagging Benchmark", value: "Tagging_Benchmark" },
  { item: "Deletion", value: "Deletion" },
  { item: "Skip Image", value: "Skip_Image" },
  { item: "Image Loading", value: "Image_Loading" },
  { item: "Object Saving Time", value: "Object_Saving_Time" },
  { item: "Video Watch Time", value: "Video_Watch_Time" },
  { item: "Judgement Time", value: "Judgement_Time" },
  { item: "QA Benchmark", value: "QA_Benchmark" },
  { item: "Annotation", value: "Annotation" },
  { item: "QA", value: "QA" },
];

const SelectFilterProjectDirectory = ({ handleMenuItemClick, setAnchorEl, anchorEl }) => {
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
              backgroundColor: "#244EF5",
              color: "#fff",
            },
          }}
          onClick={handleButtonClick}
        >
          Add Filter Type
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {selectTypeFilter.map((filter, index) => (
            <MenuItem key={index} value={filter.value} onClick={() => handleMenuItemClick(filter.value)}>
              {filter.item}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default SelectFilterProjectDirectory;
