import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";
import PropTypes from "prop-types";
export const MySelect = styled(Select)(() => ({
  border: "1px solid #E0E0E0",
  padding: "5px 0px 0px 0px",
  background: "white",
}));

ProjectSelectFIlterField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function ProjectSelectFIlterField({
  options,
  label,
  handleChange,
  name,
}) {
  return (
    <MyFormControl sx={{ m: 1, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <MySelect
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue=""
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
