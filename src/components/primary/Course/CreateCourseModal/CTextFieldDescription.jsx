import {FormControl, styled, TextField, Typography} from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";
import {useSelector} from "react-redux";

export const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { fontSize: "14px" },
}));

export default function CTextFieldDescription({ course = {}, register }) {
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
          Course Description
        </Typography>
        <MyTextField
          type={"text"}
          multiline
          rows={3}
          //   id="outlined-basic"
          variant="outlined"
          fullWidth
          required
          InputProps={{ disableUnderline: true }}
          defaultValue={course && course.description}
          {...register("description", { required: true })}
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
