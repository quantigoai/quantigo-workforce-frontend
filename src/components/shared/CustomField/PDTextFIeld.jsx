import { Box, FormControl, styled, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

PDTextFIeld.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
// export const MyTextField = styled(TextField)(() => ({
//   "& .MuiOutlinedInput-notchedOutline": {
//     border: "2px solid #E6ECF5 !important",
//     borderRadius: "8px",
//   },
//   "& .MuiInputBase-root": { height: "45px", fontSize: "14px" },
// }));
export const PdTextField = styled(TextField)(() => ({
  borderRadius: "5px",
  padding: "0px 0px 0px 0px",
  backgroundColor: "#fff",

  "& .MuiOutlinedInput-root": {
    // color: "#000",
    height: "45px",
    borderRadius: "8px",
    fontSize: "14px",
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
          // <FormControl fullWidth>
          <Box
            sx={{
              height: "100px",
            }}
          >
            <Typography
              variant="wpf_h7_medium"
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                mb: 0,
                color: "neutral.N300",
              }}
            >
              {label}
            </Typography>
            <Box sx={{ width: "100%" }}>
              <PdTextField
                size="small"
                type={isNumber || isNumberPdr ? "number" : "text"}
                id="outlined-basic"
                {...field}
                fullWidth
                // InputProps={{ disableUnderline: true }}
                variant="outlined"
                required
                sx={{
                  mt: 0.3,
                  fontSize: "14px",
                  backgroundColor: "neutral.N000",
                }}
                // inputProps={InputProps}
                defaultValue={defaultValue}
                value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
                error={!!error}
                helperText={error ? error?.message : helperText}
                {...other}
                InputProps={{
                  inputProps: isNumberPdr
                    ? { disableUnderline: true, min: 1, max: 5 }
                    : { disableUnderline: true, min: 1 },
                }}
              />
            </Box>
          </Box>
          // </FormControl>
        );
      }}
    />
  );
}
