import {Box, styled, TextField, Typography} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import {Controller, useFormContext} from "react-hook-form";
import {convertDate} from "../../../helper/customData";
import {CustomFormControl} from "./CustomSelectField";

PDDateField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
const MyDatePicker = styled(DatePicker)(() => ({
  height: "35px",

  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",

    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiInputBase-root": {
    height: "35px",
    fontSize: "14px",
    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
}));

export default function PDDateField({
  name,
  helperText,
  isNumber,
  isNumberPdr,
  InputProps,
  label,
  defaultValue,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (date) => {
          const formattedDate = convertDate(date);
          field.onChange(formattedDate);
        };
        return (
          <CustomFormControl fullWidth>
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
                  <MyDatePicker
                    sx={{
                      width: '100%',
                      backgroundColor: 'neutral.N000',
                      borderRadius: '5px',
                    }}
                    format="DD MMM YYYY"
                    defaultValue={
                      defaultValue ? dayjs(defaultValue) : field.value
                    }
                    onChange={handleChange}
                  >
                    <TextField
                      variant="caption"
                      error={!!error}
                      helperText={error && error?.message}
                      id="date-picker"
                    />
                  </MyDatePicker>
                </LocalizationProvider>
              </Box>
            </Box>
          </CustomFormControl>
        );
      }}
    />
  );
}
