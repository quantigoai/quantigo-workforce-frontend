import {FormControl, Grid, MenuItem, Select, styled, Typography} from "@mui/material";
import React from "react";

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
const UserStatusChangeFiled = ({ label, user, handleSetStatus }) => {
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
              height: "40px",
              backgroundColor: "neutral.N000",
              fontSize: "14px",
            }}
            onChange={handleSetStatus}
            defaultValue={user?.isBlocked ? "block" : ""}
          >
            <MenuItem value={"delete"} style={menuItemStyle}>
              Delete
            </MenuItem>
            <MenuItem value={"block"} style={menuItemStyle}>
              Block
            </MenuItem>
            <MenuItem value={"unblock"} style={menuItemStyle}>
              Unblock
            </MenuItem>
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

export default UserStatusChangeFiled;
