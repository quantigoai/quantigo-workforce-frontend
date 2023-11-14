import {FormControl, MenuItem, Select, styled, Typography} from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";
import {useSelector} from "react-redux";

export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  borderRadius: "8px",
  background: "none",
  // backgroundColor:"red",
  fontSize: "14px",
}));

export default function CSelectField({ name, options, level, register }) {
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
          {level}
        </Typography>
        <MySelect
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          variant="outlined"
          placeholder="Select"
          sx={{ height: "45px" }}
          //   defaultValue={defaultValue}
          //   error={!!error}
          //   helperText={error ? error?.message : helperText}
          //   IconComponent={KeyboardArrowDownIcon}
          {...register(name , { required: false })}>
          {options.map((option) => (
            <MenuItem sx={{ fontSize: "14px" }} key={option.value} fullWidth value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MySelect>
      </FormControl>
    </>
  );
}
