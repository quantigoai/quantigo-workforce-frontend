import { FormControl, MenuItem, Select, styled, Typography } from "@mui/material";
import React from "react";

export const MySelect = styled(Select)(() => ({
  border: "1px solid #E6ECF5",
  borderRadius: "8px",
  // padding: "5px 0px 0px 0px",
  background: "none",
  height: "40px",
}));

const SelectFieldForBdInfo = ({
  name,
  label,
  defaultValue,
  disableItem,
  editAble,
  handleChange,
  options,
  isChecked,
}) => {
  console.log("🚀 ~ defaultValue:", defaultValue)
  return (
    <>
      {options && (
        <FormControl fullWidth>
          <Typography
            sx={{
              color: "neutral.N300",

              mb: 1,
            }}
            variant="wpf_p4_medium"
          >
            {label}
          </Typography>

          <MySelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            variant="outlined"
            placeholder="Select"
            sx={{
              height: "40px",
              backgroundColor: editAble ? "" : "neutral.N400",
              fontSize: "14px",
            }}
            disabled={disableItem ? true : isChecked ? true : !editAble}
            // defaultValue={defaultValue && defaultValue}
            value={defaultValue && defaultValue}
            // onChange={(e) => handleChange(e)}
          >
            {options &&
              options.map((option) => (
                <MenuItem
                  sx={{ fontSize: "14px" }}
                  key={option.name}
                  fullWidth
                  // value={option.id}
                  value={option.name}
                  onClick={() => handleChange(option.id, option.name)}
                  //   value={(() => setValue(field.name, field.value), option.value)}
                >
                  {option.name}
                </MenuItem>
              ))}
          </MySelect>
        </FormControl>
      )}
    </>
  );
};

export default SelectFieldForBdInfo;
