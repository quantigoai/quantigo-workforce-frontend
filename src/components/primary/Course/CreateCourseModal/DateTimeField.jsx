import { Box, Typography, styled } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const MyDateTimePicker = styled(DateTimePicker)(() => ({
  height: '35px',

  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #E6ECF5 !important',

    borderRadius: '8px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 8px',
  },
  '& .MuiInputBase-root': {
    height: '35px',
    fontSize: '14px',
    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
}));

const DateTimeField = ({ label, dateTime, handleDateTime, defaultValue }) => {
  return (
    <Box>
      <Typography
        variant="wpf_h7_medium"
        sx={{
          mb: 0,
          color: 'neutral.N300',
        }}
      >
        {label}
      </Typography>
      <Box sx={{ width: '100%' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MyDateTimePicker
            sx={{
              width: '100%',
              backgroundColor: 'neutral.N000',
              borderRadius: '5px',
            }}
            defaultValue={defaultValue ? dayjs(defaultValue) : dateTime}
            onChange={(newValue) => handleDateTime(newValue)}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default DateTimeField;
