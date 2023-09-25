import { FormControl, TextField, Typography, styled } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { convertDate } from "../../../helper/customData";

PDDateField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
const MyDatePicker = styled(DatePicker)(() => ({
  // border: "2px solid #E6ECF5 !important",
  // borderRadius: "10px",
  // height: "47%",
  // fontSize: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "10px",
  },
  "& .MuiInputBase-root": { height: "78%", fontSize: "14px" },
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
  const { isLightTheme } = useSelector((state) => state.theme);

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
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                mb: 1,
                color: isLightTheme ? "#091E42" : "#FFFFFF",
                paddingBottom:"1%"
              }}
            >
              {label}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MyDatePicker
                // inputFormat="DD-MM-YYYY"
                format="DD MMM YYYY"
                defaultValue={defaultValue ? dayjs(defaultValue) : field.value}
                onChange={handleChange}
              >
                <TextField sx={{}} error={!!error} helperText={error && error?.message} id="date-picker" />
              </MyDatePicker>
            </LocalizationProvider>
          </FormControl>
        );
      }}
    />
  );
}
