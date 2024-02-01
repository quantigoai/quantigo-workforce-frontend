import { FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import React from 'react';

// border: "1px solid #E6ECF5",
export const MySelect = styled(Select)(() => ({
  height: '40px',
  borderRadius: '8px',
  border: '1px solid #E6ECF5',
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

const SelectFieldForBdInfo = ({
  name,
  label,
  defaultValue,
  disableItem,
  editAble,
  handleChange,
  options,
  isChecked,
}) => {
  return (
    <>
      {options && (
        <FormControl fullWidth>
          <Typography
            sx={{
              color: 'neutral.N300',

              mb: 1,
            }}
            variant="wpf_p4_medium"
          >
            <span>
              {label} <span style={{ color: 'red' }}>*</span>
            </span>
          </Typography>

          <MySelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            variant="outlined"
            placeholder="Select"
            sx={{
              height: '40px',
              backgroundColor: editAble ? '' : 'neutral.N400',
              fontSize: '14px',
            }}
            disabled={disableItem ? true : isChecked ? true : !editAble}
            // defaultValue={defaultValue && defaultValue}
            value={defaultValue && defaultValue}
            // onChange={(e) => handleChange(e)}
          >
            {options &&
              options.map((option) => (
                <MenuItem
                  sx={{ fontSize: '14px' }}
                  key={option.name}
                  fullWidth
                  // value={option.id}
                  value={option.name}
                  onClick={() => handleChange(option.id, option.name)}
                  //   value={(() => setValue(field.name, field.value), option.value)}
                >
                  <Typography variant="wpf_p4_medium"> {option.name}</Typography>
                </MenuItem>
              ))}
          </MySelect>
        </FormControl>
      )}
    </>
  );
};

export default SelectFieldForBdInfo;
