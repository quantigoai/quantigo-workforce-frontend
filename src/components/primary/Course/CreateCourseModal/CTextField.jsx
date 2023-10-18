import { FormControl, styled, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
// import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

export const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "45px", fontSize: "14px" },
}));

export default function CTextField({ course = {}, register, nameValidation }) {
  //   const { control } = useFormContext();
  const { isLightTheme } = useSelector((state) => state.theme);

  return (
    <>
      <FormControl fullWidth>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            mb: 1,
            color: isLightTheme ? "#091E42" : "#FFFFFF",
            paddingBottom: "0%",
          }}>
          Course Name
        </Typography>
        <MyTextField
          type={"text"}
          //   id="outlined-basic"
          variant="outlined"
          fullWidth
          required
          InputProps={{ disableUnderline: true }}
          defaultValue={course && course.name}
          onChange={nameValidation}
          //   inputProps={InputProps}
          //   defaultValue={defaultValue}
          //   value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
          //   error={!!error}
          //   helperText={error ? error?.message : helperText}
          //   {...other}
        />
      </FormControl>
    </>
  );
}
