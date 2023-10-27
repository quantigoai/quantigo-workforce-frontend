/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectDetailsFull/ProjectDetailSelect.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 2:55:34 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Chip, FormControl } from "@mui/material";
import { useSelector } from "react-redux";
let drawerStatus = (status) => {
  switch (status) {
    case "not-Started":
      return "Not Started";
    case "in-Progress":
      return "In Progress";
    case "hours-added":
      return "Hours Added";
    case "completed":
      return "Completed";
    case "hours-approved":
      return "Hours Approved";
    case "payment-done":
      return "Payment Done";
    default:
      return status;
  }
};
const style = (value) => {
  switch (value) {
    case "not-Started":
      return {
        backgroundColor: "rgba(242, 246, 252, 1)",
        color: "rgba(60, 77, 107, 1)",
        fontFamily: "Inter",
        border: "1px solid rgba(60, 77, 107, 1)",
        width: "114px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        lineHeight: "18px",
        "& svg": {
          fill: "#3C4D6B",
        },
      };
    case "in-Progress":
      return {
        backgroundColor: "rgba(244, 247, 254, 1)",
        color: "rgba(46, 88, 255, 1)",
        fontFamily: "Inter",
        border: "1px solid rgba(46, 88, 255, 1)",
        width: "114px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        lineHeight: "18px",
        "& svg": {
          fill: "#2E58FF",
        },
      };
    case "hours-added":
      return {
        backgroundColor: "rgba(250, 228, 195, 1)",
        color: "rgba(247, 144, 9, 1)",
        fontFamily: "Inter",
        border: "1px solid rgba(247, 144, 9, 1)",
        width: "114px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        lineHeight: "18px",
        "& svg": {
          fill: "#F2A200",
        },
      };
    case "completed":
      return {
        backgroundColor: "#C4F5DF",
        color: "#12B76A",
        width: "114px",
        fontFamily: "Inter",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        border: "1px solid #12B76A",
        lineHeight: "18px",
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
        fontFamily: "Inter",
        width: "132px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        fontSize: "10px",
        lineHeight: "18px",
        "& svg": {
          fill: "#F2A200",
        },
      };
    case "payment-done":
      return {
        backgroundColor: "rgba(250, 228, 195, 1)",
        color: "rgba(247, 144, 9, 1)",
        fontFamily: "Inter",
        border: "1px solid rgba(247, 144, 9, 1)",
        width: "124px",
        height: "22px",
        borderRadius: "4px",
        fontWeight: "600",
        lineHeight: "18px",
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
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  return (
    <Box>
      <FormControl
        sx={{
          m: 1,
          minWidth: 140,
          // height:"22px",
          borderRadius: "4px",
        }}
      >
        {/* <Select
          sx={style(value || defaultVal)}
          // defaultValue={defaultVal}
          defaultValue={projectDrawer.project_status}
          value={projectDrawer.project_status}
          onChange={handleChange}
          // disabled={true}
          open={false}
          IconComponent={ArrowDropDownIcon}
        >
          {options.map((option) => (
            <MenuItem
              sx={{ fontSize: "14px" }}
              key={option.value}
              fullWidth
              // value={(() => setValue(option.name, option.value), option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select> */}
        <Chip sx={style(value || defaultVal)} label={drawerStatus(projectDrawer.project_status)} />
      </FormControl>
    </Box>
  );
};

export default ProjectDetailSelect;
