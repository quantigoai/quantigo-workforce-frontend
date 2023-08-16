import { FormatColorFill } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

PDTextFIeld.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
const MyTextField = styled(TextField)(() => ({
  //   backgroundColor: "red",
  borderRadius: "5px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
  },
  "& .MuiInputBase-root": { height: "100%" },
}));
export default function PDTextFIeld({
  name,
  helperText,
  isNumber,
  isNumberPdr,
  InputProps,
  label,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          //   <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          //     <OutlinedInput
          //       id="outlined-adornment-weight"
          //       endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          //       aria-describedby="outlined-weight-helper-text"
          //       inputProps={{
          //         "aria-label": "weight",
          //       }}
          //     />
          //     <FormHelperText id="outlined-weight-helper-text">
          //       Weight
          //     </FormHelperText>
          //   </FormControl>
          <FormControl fullWidth>
            <Typography sx={{ fontSize: "14px" }}>{label}</Typography>
            <MyTextField
              type={isNumber || isNumberPdr ? "number" : "text"}
              //   id="outlined-basic"
              variant="outlined"
              {...field}
              fullWidth
              InputProps={{ disableUnderline: true }}
              inputProps={InputProps}
              sx={{
                borderRadius: "10px",
                fontSize: "14px",
              }}
              value={
                typeof field.value === "number" && field.value === 0
                  ? ""
                  : field.value
              }
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
