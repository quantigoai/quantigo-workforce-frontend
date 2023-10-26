import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

const style = (value) => {
  switch (value) {
    case "not-Started":
      return {
        backgroundColor: "rgba(242, 246, 252, 1)",
        color: "rgba(60, 77, 107, 1)",

        border: "1px solid rgba(60, 77, 107, 1)",
        width: "114px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        "& svg": {
          fill: "#3C4D6B",
        },
      };
    case "in-Progress":
      return {
        backgroundColor: "rgba(244, 247, 254, 1)",
        color: "rgba(46, 88, 255, 1)",

        border: "1px solid rgba(46, 88, 255, 1)",
        width: "114px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        "& svg": {
          fill: "#2E58FF",
        },
      };
    case "hours-added":
      return {
        backgroundColor: "rgba(250, 228, 195, 1)",
        color: "rgba(247, 144, 9, 1)",

        border: "1px solid rgba(247, 144, 9, 1)",
        width: "114px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        "& svg": {
          fill: "#F2A200",
        },
      };
    case "completed":
      return {
        backgroundColor: "#C4F5DF",
        color: "#12B76A",
        width: "114px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        border: "1px solid #12B76A",
        // height: "35px",

        "& svg": {
          fill: "#36B37E",
        },
      };
    case "hours-approved":
      return {
        backgroundColor: "rgba(250, 228, 195, 1)",
        color: "rgba(247, 144, 9, 1)",

        border: "1px solid rgba(247, 144, 9, 1)",
        width: "132px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        "& svg": {
          fill: "#F2A200",
        },
      };
    case "payment-done":
      return {
        backgroundColor: "rgba(250, 228, 195, 1)",
        color: "rgba(247, 144, 9, 1)",

        border: "1px solid rgba(247, 144, 9, 1)",
        width: "124px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        "& svg": {
          fill: "#F2A200",
        },
      };
    default:
      return {
        textAlign: "center",
        backgroundColor: "rgba(242, 246, 252, 1)",
        color: "rgba(60, 77, 107, 1)",
        width: "145px",
        padding: "0px",
        border: "2px solid rgba(230, 236, 245, 1)",
        height: "35px",
        borderRadius: "8px",
        "& svg": {
          fill: "#3C4D6B ",
        },
      };
  }
};
const ProjectDetailSelect = ({ options, handleChange, value, setValue, defaultVal }) => {
  return (
    <Box>
      <FormControl
        sx={{
          m: 1,
          minWidth: 140,
          // height:"22px",
          borderRadius: "4px",
        }}>
        <Select
          sx={style(value || defaultVal)}
          defaultValue={defaultVal}
          onChange={handleChange}
          IconComponent={ArrowDropDownIcon}>
          {options.map((option) => (
            <MenuItem
              sx={{ fontSize: "12px" }}
              key={option.value}
              fullWidth
              value={(() => setValue(option.name, option.value), option.value)}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProjectDetailSelect;
