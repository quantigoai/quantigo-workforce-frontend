import { FormControl, styled, TextField, Typography } from '@mui/material';
import React from 'react';

const MyTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #E6ECF5 !important',
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    height: '40px',
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
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: `1px solid #2E58FF !important`,
  },
  '& .MuiInputBase-input.Mui-focused': {
    color: 'blue',
  },
}));
const FieldForProfile = ({ label, handleChange, disableItem, defaultValue, editAble, isChecked }) => {
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
          {label}{' '}
          {
            <span style={{ color: '#F04438' }}>
              {label === 'First Name' ||
              label === 'Last Name' ||
              label === "Father's Name" ||
              label === "Mother's Name" ||
              label === 'Occupation'
                ? ''
                : '*'}
            </span>
          }
        </Typography>
        <MyTextField
          sx={{
            backgroundColor: editAble ? '' : 'neutral.N400',
            borderRadius: '8px',
            height: '40px',
            '@media(max-width:1439px)': {
              height: '30px',
              fontSize: '10px',
            },
            '@media(min-width: 1920px)': {
              fontSize: '14px',
            },
          }}
          disabled={disableItem ? true : isChecked ? true : !editAble}
          value={defaultValue && defaultValue}
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
    </>
  );
};

export default FieldForProfile;
