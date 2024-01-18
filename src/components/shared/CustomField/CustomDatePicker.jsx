/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomField/CustomDatePicker.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Monday, August 14th 2023, 12:46:39 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {FormControl, InputLabel, styled, Typography} from '@mui/material';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';
import {convertDate} from '../../../helper/customData';

CustomDatePicker.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MyDatePicker = styled(DatePicker)(() => ({
  '& .MuiInputBase-root': {
    borderBottom: '2px solid #E6ECF5',
  },
  '& .MuiOutlinedInput-input': {
    padding: '9px',
    height: '17px',
    color: '#000',
  },
  '& .MuiIconButton-root': {
    color: '#7D89A3',
  },
}));

export const MyInputLabel = styled(InputLabel)(() => ({
  // padding: "20px 0px 0px 0px",
}));

export const MyFormControl = styled(FormControl)(() => ({
  borderRadius: '5px',
  padding: '0px 0px 0px 0px',
  '& MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
    {
      border: '0px',
      borderColor: '#2D58FF',
      color: '#3c4d6b',
    },
  '& MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
      border: '0px',
      borderColor: '#2D58FF',
    },
}));
export default function CustomDatePicker({
  name,
  setValue,
  setError,
  helperText,
  options,
  label,
  isRequired,
  defaultValue,
  clearErrors,
  ...other
}) {
  const { control } = useFormContext();

  const maxDob = dayjs().subtract(13, 'year');
  const minDob = dayjs().subtract(70, 'year');
  const handleDate = (newValue) => {
    const convertedValue = convertDate(newValue);
    
    if (dayjs(convertedValue).isAfter(maxDob)) {
      setError('dob', {
        type: 'custom',
        message: 'User must be at least 13 years old',
      });
    } else if (dayjs(convertedValue).isBefore(minDob)) {
      setError('dob', {
        type: 'custom',
        message: 'User age must be in range between 13 to 70 years.',
      });
    } else {
      setValue('dob', convertedValue);
      clearErrors('dob');
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <>
          <Typography variant="wpf_p4_medium" color="#3c4d6b">
            Date of Birth{' '}
            <span style={{ color: '#F04438' }}>{isRequired && '*'}</span>
          </Typography>
          <MyFormControl
            fullWidth
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#3c4d6b',
              border: '2px solid #E6ECF5',
              // border: '2px solid red',
              borderRadius: '5px',
              fontSize: '12px',
              mt: 0.3,
              height: '45px',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MyDatePicker
                size="small"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#3c4d6b',
                }}
                inputFormat="DD-MM-YYYY"
                minDate={minDob}
                maxDate={maxDob}
                onChange={(newValue) => {
                  handleDate(newValue);
                }}
                slotProps={{
                  textField: {
                    error: !!error,
                    helperText: error && error?.message,
                    id: 'date-picker',
                    sx: {
                      color: '#3c4d6b',
                      mt: '6px',
                    },
                  },
                }}
              >
                {/* <TextField
                  size="small"
                  sx={{
                    color: '#3c4d6b',
                    // border: '2px solid green.800',
                  }}
                  error={!!error}
                  helperText={error && error?.message}
                  id="date-picker"
                /> */}
              </MyDatePicker>
            </LocalizationProvider>
          </MyFormControl>
        </>
      )}
    />
  );
}
