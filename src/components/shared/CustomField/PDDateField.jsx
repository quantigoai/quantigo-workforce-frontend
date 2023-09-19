import { FormControl, TextField, Typography, styled } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import calenderIcon from "../../../assets/images/dashboardIcon/calendar-line.svg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { convertDate } from "../../../helper/customData";
import dayjs from "dayjs";

PDDateField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
const MyDatePicker = styled(DatePicker)(() => ({
  border: "2px solid #E6ECF5 !important",
  borderRadius: "10px",
  height: "50%",
  fontSize: "14px",
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
          <FormControl fullWidth>
            <Typography sx={{ fontSize: "14px", fontWeight: "500", mb: 1 }}>{label}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MyDatePicker
                inputFormat="DD-MM-YYYY"
                defaultValue={defaultValue ? dayjs(defaultValue) : field.value}
                onChange={handleChange}>
                <TextField sx={{}} error={!!error} helperText={error && error?.message} id="date-picker" />
              </MyDatePicker>
            </LocalizationProvider>
          </FormControl>
        );
      }}
    />
  );
}
