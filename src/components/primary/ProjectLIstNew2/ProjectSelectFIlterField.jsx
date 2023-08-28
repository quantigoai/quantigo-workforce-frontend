import { InputLabel, MenuItem, Select, styled } from "@mui/material";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";
import PropTypes from "prop-types";
ProjectSelectFIlterField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
export const MySelect = styled(Select)(() => ({
  border: "1px solid #E0E0E0",
  padding: "5px 0px 0px 0px",
  background: "white",
}));

export default function ProjectSelectFIlterField({
  options,
  label,
  handleChange,
  name,
  filterValue,
}) {
  return (
    <MyFormControl sx={{ m: 0.5, minWidth: "23%" }} size="medium">
      <InputLabel>{label}</InputLabel>
      <MySelect
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        defaultValue={""}
        placeholder="Select"
        value={filterValue?.[name] ?? ""}
        label={label}
        onChange={handleChange}
        name={name}
      >
        {options.map((option) => (
          <MenuItem key={option.value} fullWidth value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MySelect>
    </MyFormControl>
  );
}
