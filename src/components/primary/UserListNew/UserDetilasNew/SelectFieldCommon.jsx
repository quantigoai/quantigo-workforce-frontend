import { FormControl, Grid, MenuItem, Select, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
export const MySelect = styled(Select)(() => ({
  border: "1px solid #E6ECF5",
  borderRadius: "8px",
  padding: "0px 0px 0px 0px",
  //   background: "none",
  height: "42px",
}));
const options = [
  { value: "(A+)", label: "A+" },
  { value: "(A-)", label: "A-" },
  { value: "(B+)", label: "B+" },
  { value: "(B-)", label: "B-" },
  { value: "(O+)", label: "O+" },
  { value: "(O-)", label: "O-" },
  { value: "(AB+)", label: "AB+" },
  { value: "(AB-)", label: "AB-" },
];
const SelectFieldCommon = ({ label, user, handleSetRole }) => {
  const { role } = useSelector((state) => state.user.user);
  const menuItemStyle = {
    fontSize: "14px", // You can adjust the font size as needed
  };
  return (
    <>
      <Grid item xs={12} sx={{ mb: 1 }}>
        <FormControl fullWidth>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#3C4D6B",
              fontWeight: "500",
              mb: 1,
            }}>
            {label}
          </Typography>

          <MySelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // {...field}
            variant="outlined"
            placeholder="Select"
            sx={{
              // height: "36px",
              backgroundColor: "#FFFFFF",
              fontSize: "14px",
            }}
            onChange={handleSetRole}
            defaultValue={user.role}>
            <MenuItem value={"level_0_annotator"} sx={menuItemStyle}>
              {" "}
              Level 0 Annotator
            </MenuItem>
            <MenuItem value={"level_1_annotator"} sx={menuItemStyle}>
              Level 1 Annotator
            </MenuItem>
            <MenuItem value={"level_2_annotator"} sx={menuItemStyle}>
              Level 2 Annotator
            </MenuItem>
            <MenuItem value={"level_3_annotator"} sx={menuItemStyle}>
              Level 3 Annotator
            </MenuItem>
            <MenuItem value={"reviewer"} sx={menuItemStyle}>
              Reviewer
            </MenuItem>
            <MenuItem value={"trainer"} sx={menuItemStyle}>
              Trainer
            </MenuItem>
            <MenuItem value={"project_lead"} sx={menuItemStyle}>
              Delivery Lead
            </MenuItem>
            {/* <MenuItem value={"project_coordinator"} sx={menuItemStyle}></MenuItem> */}
            <MenuItem value={"project_coordinator"} sx={menuItemStyle}>
              Project Coordinator
            </MenuItem>
            {(role === "admin" || role === "recruitment_manager") && (
              <MenuItem value={"delivery_manager"} sx={menuItemStyle}>
                Project Delivery Lead
              </MenuItem>
            )}
            {(role === "admin" || role === "recruitment_manager") && (
              <MenuItem value={"project_manager"} sx={menuItemStyle}>
                Project Manager
              </MenuItem>
            )}
            {role === "admin" && (
              <MenuItem value={"recruitment_manager"} sx={menuItemStyle}>
                Recruitment Manager
              </MenuItem>
            )}
            {role === "admin" && (
              <MenuItem value={"engineering_lead"} sx={menuItemStyle}>
                Engineering Lead
              </MenuItem>
            )}
            {role === "admin" && (
              <MenuItem value={"admin"} sx={menuItemStyle}>
                Admin
              </MenuItem>
            )}
            {/* {options.map((option) => (
              <MenuItem key={option.value} fullWidth>
                {option.label}
              </MenuItem>
            ))} */}
          </MySelect>
        </FormControl>
      </Grid>
    </>
  );
};

export default SelectFieldCommon;
