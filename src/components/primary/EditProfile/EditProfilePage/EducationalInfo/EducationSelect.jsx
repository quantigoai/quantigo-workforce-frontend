import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, FormControl, FormHelperText, MenuItem, Select, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { CustomFormControl } from "../../../../shared/CustomField/CustomSelectField";
EducationSelect.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MySelect = styled(Select)(() => ({
  height: "40px",
  borderRadius: "8px",
  marginTop: "10px",
  fontsize: "10px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": {
    height: "40px",
    fontSize: "14px",
    color: "neutral.N300",
    padding: "0px 5px",
    "&:disabled": {
      padding: "0px 5px",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));

export default function EducationSelect({ handleChangeDegree, higherDegree, options, label, editAble, defaultValue }) {
  return (
    <Box>
      <Typography
        sx={{
          color: "neutral.N300",
          marginBottom: "10px",
        }}
        variant="wpf_p4_medium"
      >
        {label}
      </Typography>
      <FormControl fullWidth>
        <MySelect
          displayEmpty
          defaultValue={defaultValue}
          sx={{ backgroundColor: editAble ? "" : "neutral.N400" }}
          disabled={!editAble}
          value={higherDegree}
          onChange={handleChangeDegree}
        >
          <MenuItem disabled value="">
            <span>select your highest degree</span>
          </MenuItem>

          {options.map((option) => (
            <MenuItem
              sx={{
                fontSize: "14px",
              }}
              key={option.value}
              fullWidth
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </MySelect>
      </FormControl>
    </Box>
  );
}
