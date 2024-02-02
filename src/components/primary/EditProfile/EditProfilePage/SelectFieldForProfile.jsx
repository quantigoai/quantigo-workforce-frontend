import { FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import React from 'react';

export const MySelect = styled(Select)(() => ({
  height: '40px',
  borderRadius: '8px',
  border: '1px solid #E6ECF5 !important',
  fontsize: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    height: '10px',
    fontSize: '12px',
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
  '@media(max-width:1439px)': {
    height: '30px',
    fontSize: '12px',
  },
  '@media(min-width: 1920px)': {
    fontSize: '14px',
  },
}));
// const options = [
//   { value: "(A+)", label: "A+" },
//   { value: "(A-)", label: "A-" },
//   { value: "(B+)", label: "B+" },
//   { value: "(B-)", label: "B-" },
//   { value: "(O+)", label: "O+" },
//   { value: "(O-)", label: "O-" },
//   { value: "(AB+)", label: "AB+" },
//   { value: "(AB-)", label: "AB-" },
// ];
const SelectFieldForProfile = ({ name, label, defaultValue, disableItem, editAble, handleChange, options }) => {
  return (
    <>
      <FormControl fullWidth>
        <Typography
          sx={{
            color: 'neutral.N300',

            mb: 1,
          }}
          variant="wpf_p4_medium"
        >
          {label} {<span style={{ color: '#F04438' }}>{label === 'Document Type' ? '*' : ''}</span>}
        </Typography>

        <MySelect
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          variant="outlined"
          placeholder="Select"
          sx={{
            height: '40px',
            backgroundColor: editAble ? '' : 'neutral.N400',
            // fontSize: "14px",
          }}
          disabled={disableItem ? true : !editAble}
          value={defaultValue}
          onChange={(e) => handleChange(e)}
        >
          {options.map((option) => (
            <MenuItem
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
              key={option.value}
              fullWidth
              value={option.value}
              //   value={(() => setValue(field.name, field.value), option.value)}
            >
              <Typography variant="wpf_p4_medium">{option.label}</Typography>
            </MenuItem>
          ))}
        </MySelect>
      </FormControl>
    </>
  );
};

export default SelectFieldForProfile;
