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
  // padding: "5px 0px 0px 0px",
  backgroundColor: "neutral.N000",
}));

export default function ProjectSelectFIlterField({ options, label, handleChange, name, filterValue }) {
  return (
    // <></>

    <MyFormControl fullWidth sx={{ px: 0, minWidth: "25%" }}
      // size="small"
    >
      <MySelect
        displayEmpty
        sx={{
          height: "30px",
          fontSize: "14px",
          // height: "36px",
          padding: "0px 0px",
          margin: "0",
          width: "100%",
          borderRadius: "8px",
          // fontSize: "14px",
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
