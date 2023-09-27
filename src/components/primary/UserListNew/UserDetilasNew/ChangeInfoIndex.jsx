import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CommonSelectField from "../../EditProfile/EditProfilePage/CommonSelectField";
import SelectFieldCommon from "./SelectFieldCommon";
import UserStatusChangeFiled from "./UserStatusChangeFiled";

const ChangeInfoIndex = ({ user, handleSetRole, handleSetStatus }) => {
  return (
    <>
      <Box sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
        <Typography sx={{ fontSize: "14px" }}>
          <b>Change Info.</b>
        </Typography>
      </Box>
      <Box>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            padding: "2%",
            borderRadius: "8px",
            background: "#F2F6FC",
          }}>
          <Grid container>
            <Grid item xs={6}>
              {" "}
              <SelectFieldCommon label={"Role Change"} user={user} handleSetRole={handleSetRole} />
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <UserStatusChangeFiled label={"Status"} handleSetStatus={handleSetStatus} />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default ChangeInfoIndex;
