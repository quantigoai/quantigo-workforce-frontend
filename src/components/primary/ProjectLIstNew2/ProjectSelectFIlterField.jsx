import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem, Select, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";
ProjectSelectFIlterField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
export const MySelect = styled(Select)(() => ({
  border: "1px solid #E0E0E0",
  padding: "5px 0px 0px 0px",
  background: "#FFF",
}));

export default function ProjectSelectFIlterField({ options, label, handleChange, name, filterValue }) {
  return (
    // <MyFormControl sx={{ p: 0.7, minWidth: "25%" }} size="small">
    <MyFormControl sx={{ px: 0.7, minWidth: "25%" }} size="small">
      <MySelect
        displayEmpty
        // defaultValue={""}
        sx={{
          height: "36px",
          padding: "10px 14px",
          borderRadius: "8px",
          // color: "neutral.750",
          "& svg": {
            fill: "#667085",
          },
        }}
        IconComponent={KeyboardArrowDownIcon}
        value={filterValue?.[name] ?? ""}
        label={label}
        onChange={(e) => handleChange(e)}
        name={name}
      >
        <MenuItem disabled value="">
          <Typography variant="h7" color="neutral.600">
            {label}
          </Typography>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} fullWidth value={option.value}>
            <Typography variant="h7" color="neutral.850">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </MySelect>
    </MyFormControl>
  );
}
