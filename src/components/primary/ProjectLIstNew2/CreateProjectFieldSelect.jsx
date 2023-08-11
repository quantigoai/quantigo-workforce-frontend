import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const CreateProjectFieldSelect = ({
  field,
  register,
  registerName,
  defaultValue,
  value_1,
  value_2,
  value_3,
  value_4,
  CustomDownArrow,
  onChange,
  MenuItemValue_1,
  MenuItemValue_2,
  MenuItemValue_3,
  MenuItemValue_4,
}) => {
  return (
    <Grid item xs={6} sx={{ paddingRight: "1%" }}>
      <Typography
        sx={{ fontWeight: "500", mb: "10px", fontSize: "14px", mt: "10px" }}
        variant="h6"
      >
        {field}
      </Typography>
      <FormControl
        variant="filled"
        size="small"
        sx={{
          borderBottom: "none",

          height: "0px",

          fontSize: "14px",
          width: "97%",
        }}
      >
        <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
        <Select
          {...register(registerName)}
          required
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue={defaultValue}
          IconComponent={() => <CustomDownArrow />}
          onChange={onChange}
        >
          <MenuItem value={value_1}>{MenuItemValue_1}</MenuItem>
          <MenuItem value={value_2}>{MenuItemValue_2}</MenuItem>
          <MenuItem value={value_3}>{MenuItemValue_3}</MenuItem>
          <MenuItem value={value_4}>{MenuItemValue_4}</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default CreateProjectFieldSelect;
