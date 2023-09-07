import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
export const MySelect = styled(Select)(() => ({
  border: "1px solid #E6ECF5",
  borderRadius: "8px",
  padding: "5px 0px 0px 0px",
  //   background: "none",
  height: "42px",
}));
const options = [
  { value: "(A+)", label: "A+" },
  { value: "(A-)", label: "A-" },
  { value: "(B+)", label: "B+" },
  { value: "(B-)", label: "B-" },
  { value: "(O+)", label: "O+" },
  { value: "(O-)", label: "O-" },
  { value: "(AB+)", label: "AB+" },
  { value: "(AB-)", label: "AB-" },
];
const SelectFieldCommon = ({ label }) => {
  return (
    <>
      <Grid item xs={12} sx={{ mb: 1 }}>
        <FormControl fullWidth>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#3C4D6B",
              fontWeight: "500",
              mb: 1,
            }}>
            {label}
          </Typography>

          <MySelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // {...field}
            variant="outlined"
            placeholder="Select"
            sx={{
              height: "36px",
              backgroundColor: "#FFFFFF",
            }}
            // disabled={disableItem ? true : !editAble}
            // defaultValue={defaultValue}
            //   error={!!error}
            //   helperText={error ? error?.message : helperText}
            //   {...other}
          >
            {options.map((option) => (
              <MenuItem key={option.value} fullWidth>
                {option.label}
              </MenuItem>
            ))}
          </MySelect>
        </FormControl>
      </Grid>
    </>
  );
};

export default SelectFieldCommon;
