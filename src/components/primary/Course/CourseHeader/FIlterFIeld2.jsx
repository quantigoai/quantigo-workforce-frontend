import { FormControl, MenuItem, Select, Typography, styled } from '@mui/material';
import React from 'react';
const MySelect = styled(Select)(() => ({
  height: '40px',
  borderRadius: '8px',
  border: '1px solid #E6ECF5 !important',
  fontsize: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    height: '10px',
    // fontSize: "12px",
    color: 'neutral.N300',
    padding: '0px 5px',
    '&:disabled': {
      padding: '0px 5px',
    },
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: `1px solid #2E58FF !important`,
  },
  '& .MuiInputBase-input.Mui-focused': {
    color: 'blue',
  },
  '@media(max-width:1024px)': {
    // height: "30px",
    fontSize: '10px',
  },
  '@media(min-width:1025px) and (max-width:1440px)': {
    // height: "30px",
    fontSize: '12px',
  },
  '@media(min-width:1441px) and (max-width: 1920px)': {
    fontSize: '14px',
  },
}));

const FIlterFIeld2 = ({ handleChange, filter, levelOptions, label, filterValue }) => {
  return (
    <FormControl fullWidth>
      <MySelect
        displayEmpty
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        placeholder="Select"
        value={Object.keys(filter).length !== 0 ? (filter?.category ? filter?.category : '') : ''}
        onChange={(e) => handleChange(e, filterValue)}
      >
        <MenuItem disabled value="" sx={{ fontSize: { xl: '14px', xxl: '16px', lg: '12px' } }}>
          <Typography
            color="neutral.N300"
            sx={{ fontFamily: 'Inter', fontSize: { xl: '14px', xxl: '14px', lg: '12px' } }}
          >
            {label}
          </Typography>
        </MenuItem>
        {levelOptions.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            sx={{
              fontSize: '14px',
              '& .MuiInputBase-root': {
                height: '42px',
                fontSize: '12px',
                fontFamily: 'Inter',
                '@media(max-width:1439px)': {
                  height: '30px',
                  fontSize: '10px',
                },
                '@media(min-width: 1920px)': {
                  fontSize: '14px',
                },
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MySelect>
    </FormControl>
  );
};

export default FIlterFIeld2;
