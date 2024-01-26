import { Box, FormControl, MenuItem, Select, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";

EducationSelect.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export const MySelect = styled(Select)(() => ({
  height: "40px",
  borderRadius: "8px",
  marginTop: "7px",
  border: "1px solid #E6ECF5 ",
  fontsize: "10px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": {
    height: "10px",
    fontSize: "12px",
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
  "@media(max-width:1439px)": {
    height: "30px",
    fontSize: "12px",
  },
  "@media(min-width: 1920px)": {
    fontSize: "14px",
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
            <Typography variant="wpf_p4_medium">
              <span>Select your highest degree</span>
            </Typography>
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
              <Typography variant="wpf_p4_medium">{option.label}</Typography>
            </MenuItem>
          ))}
        </MySelect>
      </FormControl>
    </Box>
  );
}
