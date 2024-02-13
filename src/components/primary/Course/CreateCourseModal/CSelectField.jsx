import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, FormHelperText, MenuItem, Select, styled, Typography } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const MySelect = styled(Select)(() => ({
  height: '35px',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    color: '#000',
    border: '1px solid #E6ECF5 !important',
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 8px',
    fontSize: '14px',
    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
  '& .MuiOutlinedInput-notchedOutline ': {
    border: '1px solid #E6ECF5 !important',
  },
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#56627a',
  },
  '& .MuiFormHelperText-root': {
    color: '#12B76A',
    '&.Mui-error': {
      color: '#F04438',
    },
  },
}));

export default function CSelectField({
  name,
  helperText,
  options,
  label,
  setValue,
  defaultValue,
  isRequired,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {/* <CustomFormControl fullWidth> */}
          <Box>
            <Typography
              variant={'wpf_h7_medium'}
              sx={{
                mb: 0,
                color: 'neutral.N300',
              }}
            >
              {label}
              <span style={{ color: '#F04438' }}>{isRequired && '*'}</span>
            </Typography>
            <Box sx={{ width: '100%' }}>
              <MySelect
                sx={{
                  width: '100%',
                  backgroundColor: 'neutral.N000',
                }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                {...field}
                variant="outlined"
                placeholder="Select"
                defaultValue={defaultValue}
                // error={!!error}
                // helperText={error ? error?.message : helperText}
                IconComponent={KeyboardArrowDownIcon}
                {...other}
              >
                {options.map((option) => (
                  <MenuItem
                    sx={{
                      fontSize: {
                        lg: '12px',
                        xl: '14px',
                        xxl: '14px',
                      },
                    }}
                    key={option.value}
                    fullWidth
                    value={(() => setValue(field.name, field.value), option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </MySelect>
              <FormHelperText sx={{ color: '#F04438' }}>{error ? error?.message : helperText}</FormHelperText>
            </Box>
          </Box>
          {/* </CustomFormControl> */}
        </>
      )}
    />
  );
}
