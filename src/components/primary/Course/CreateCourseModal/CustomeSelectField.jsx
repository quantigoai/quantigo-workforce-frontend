/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTextField/CustomTextField.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 1:26:48 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, MenuItem, Select, styled, TextField, Typography} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import {useSelector} from "react-redux";

// CustomTextField.propTypes = {
//   name: PropTypes.string,
//   helperText: PropTypes.node,
// };
export const MySelect = styled(Select)(() => ({
  borderRadius: "8px",
}));
export const MyTextField = styled(TextField)(() => ({
  borderRadius: "5px",
  padding: "0px 0px 0px 0px",
  backgroundColor: "#fff",

  "& .MuiOutlinedInput-root": {
    color: "#000",
    height: "45px",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));

export default function CustomeSelectField({ name, helperText, options, label, setValue, defaultValue, ...other }) {
  const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Box>
            {/* //!! For this special case use color like hex code, this is not standard */}
            <Typography variant="wpf_p4_medium" color="#3c4d6b">
              {label}
            </Typography>

            <MySelect
              sx={{
                mt: 0.3,
                height: "45px",
                width: "100%",
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "2px solid #E6ECF5",
                fontSize: "14px",
                borderRadius: "5px",
              }}
              size="small"
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              {...field}
              label={label}
              //   defaultValue={defaultValue}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}>
              {options.map((option) => (
                <MenuItem
                  sx={{ fontSize: "14px" }}
                  key={option.value}
                  fullWidth
                  value={(() => setValue(field.name, field.value), option.value)}>
                  {option.label}
                </MenuItem>
              ))}
            </MySelect>
          </Box>
        );
      }}
    />
  );
}
