import { FormControl, Grid, MenuItem, Select, styled, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const MySelect = styled(Select)(() => ({
  border: "1px solid #E6ECF5",
  borderRadius: "8px",
  padding: "0px 0px 0px 0px",
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
            variant="wpf_p4_medium"
            sx={{
              color: "neutral.750",
              mb: 1,
            }}
          >
            {label}
          </Typography>

          <MySelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            variant="outlined"
            placeholder="Select"
            sx={{
              // fontFamily: "Inter",
              backgroundColor: "neutral.N000",
              fontSize: "14px",
            }}
            onChange={handleSetRole}
            defaultValue={user.role}
          >
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
            <MenuItem value={"delivery_lead"} sx={menuItemStyle}>
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
              <MenuItem value={"account_manager"} sx={menuItemStyle}>
                Account Manager
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
