import { Box, Button, Menu, MenuItem } from '@mui/material';
import React from 'react';

const selectTypeFilter = [
  { item: 'Client Alias', value: 'Client_Alias' },
  { item: 'Industry', value: 'Industry' },
  { item: 'Platform', value: 'Platform' },
  { item: 'Tool Type', value: 'Tool_Type' },
  { item: 'PDR', value: 'PDR' },
  { item: 'Project Type', value: 'Project_Type' },
  { item: 'Action Item', value: 'Action_Items' },
  { item: 'QA Check Points', value: 'QA_Check_Points' },
  { item: 'Object Benchmark', value: 'Obj_Benchmark' },
  { item: 'Image Benchmark', value: 'Img_Benchmark' },
  { item: 'Tagging Benchmark', value: 'Tagging_Benchmark' },
  { item: 'Deletion', value: 'Deletion' },
  { item: 'Skip Image', value: 'Skip_Image' },
  { item: 'Image Loading', value: 'Image_Loading' },
  { item: 'Object Saving Time', value: 'Object_Saving_Time' },
  { item: 'Video Watch Time', value: 'Video_Watch_Time' },
  { item: 'Judgement Time', value: 'Judgement_Time' },
  { item: 'QA Benchmark', value: 'QA_Benchmark' },
  { item: 'Annotation', value: 'Annotation' },
  { item: 'QA', value: 'QA' },
];

const SelectFilterProjectDirectory = ({ handleMenuItemClick, setAnchorEl, anchorEl, menuFilter }) => {
  console.log('🚀 ~ SelectFilterProjectDirectory ~ menuFilter:', menuFilter);
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
          // variant="outlined"
          sx={{
            textTransform: 'none',
            border: '1px solid #244EF5',
            width: { xxl: '150px', xl: '150px', lg: '130px' },
            fontSize: { xxl: '14px', xl: '12px', lg: '12px' },
            height: '30px',
            '&:hover': {
              backgroundColor: '#244EF5',
              color: '#fff',
            },
          }}
          onClick={handleButtonClick}
        >
          Add Filter Type
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {menuFilter.map((filter, index) => (
            <MenuItem
              sx={{
                fontSize: '14px',
                '& .MuiInputBase-root': {
                  // height: "42px",
                  fontSize: '12px',
                  fontFamily: 'Inter',
                  '@media(max-width:1439px)': {
                    // height: "30px",
                    fontSize: '10px',
                  },
                  '@media(min-width: 1920px)': {
                    fontSize: '14px',
                  },
                },
              }}
              key={index}
              value={filter.value}
              onClick={() => handleMenuItemClick(filter.value, filter.isFieldShow)}
            >
              {filter.item}
            </MenuItem>
          ))}
          {/* {selectTypeFilter.map((filter, index) => (
            <MenuItem
              sx={{
                fontSize: '14px',
                '& .MuiInputBase-root': {
                  // height: "42px",
                  fontSize: '12px',
                  fontFamily: 'Inter',
                  '@media(max-width:1439px)': {
                    // height: "30px",
                    fontSize: '10px',
                  },
                  '@media(min-width: 1920px)': {
                    fontSize: '14px',
                  },
                },
              }}
              key={index}
              value={filter.value}
              onClick={() => handleMenuItemClick(filter.value)}
            >
              {filter.item}
            </MenuItem>
          ))} */}
        </Menu>
      </Box>
    </>
  );
};

export default SelectFilterProjectDirectory;
