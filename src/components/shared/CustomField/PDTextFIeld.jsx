import { FormControl, TextField, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

PDTextFIeld.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
export const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "84%", fontSize: "14px" },
}));

export default function PDTextFIeld({
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
        return (
          <FormControl fullWidth>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                mb: 1,
                color: isLightTheme ? "#091E42" : "#FFFFFF",
              }}
            >
              {label}
            </Typography>
            <MyTextField
              type={isNumber || isNumberPdr ? "number" : "text"}
              //   id="outlined-basic"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={{ disableUnderline: true }}
              inputProps={InputProps}
              defaultValue={defaultValue}
              value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
              error={!!error}
              helperText={error ? error?.message : helperText}
              //   {...other}
            />
          </FormControl>
        );
      }}
    />
  );
}
