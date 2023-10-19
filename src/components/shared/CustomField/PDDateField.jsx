import { Box, FormControl, styled, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { convertDate } from "../../../helper/customData";
import { CustomFormControl } from "./CustomSelectField";

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
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "45px", fontSize: "14px" },
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
          <CustomFormControl fullWidth>
            <Box
              sx={{
                height: "100px",
              }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  mb: 0,
                  color: "neutral.N300",
                }}>
                {label}
              </Typography>
              <Box sx={{ width: "100%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MyDatePicker
                     sx={{
                      mt: 0.3,
                      // height: "45px",
                      width: "100%",
                      backgroundColor: "neutral.N000",
                      // color: "#000",
                      // border: "2px solid #E6ECF5",
                      fontSize: "14px",
                      borderRadius: "5px",
                    }}
                    // inputFormat="DD-MM-YYYY"
                    format="DD MMM YYYY"
                    defaultValue={defaultValue ? dayjs(defaultValue) : field.value}
                    onChange={handleChange}>
                    <TextField sx={{}} error={!!error} helperText={error && error?.message} id="date-picker" />
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
