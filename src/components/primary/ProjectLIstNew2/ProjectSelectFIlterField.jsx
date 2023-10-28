import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem, Select, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { MyFormControl } from "../../shared/CustomField/CustomDatePicker";

ProjectSelectFIlterField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
export const MySelect = styled(Select)(() => ({
  // border: "1px solid #E0E0E0",
  backgroundColor: "neutral.N000",
  padding: "0px",
  height: "36px",
  margin: "0px",
}));

export default function ProjectSelectFIlterField({ options, label, handleChange, name, filterValue }) {
  return (
    // <></>

    <MyFormControl
      fullWidth
      sx={{
        px: 0,
        py: 0,
        minWidth: { lg: "20%", xl: "25%", xxl: "25%" },
        minHeight: "36px",
        height: "36px",
      }}
      // size="small"
    >
      <MySelect
        displayEmpty
        sx={{
          height: "36px",
          fontSize: { lg: "14px", xl: "14px", xxl: "14px" },
          fontFamily: "Inter",
          padding: "0px",
          margin: "0px",
          width: "100%",
          borderRadius: "8px",
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
          <Typography variant="h7" color="neutral.N300">
            {label}
          </Typography>
        </MenuItem>
        {options.map((option) => (
          <MenuItem sx={{ fontSize: "14px" }} key={option.value} fullWidth value={option.value}>
            <Typography variant="h7" color="neutral.700">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </MySelect>
    </MyFormControl>
  );
}
