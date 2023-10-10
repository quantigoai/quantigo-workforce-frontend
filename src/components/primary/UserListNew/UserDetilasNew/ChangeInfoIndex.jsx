import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CommonSelectField from "../../EditProfile/EditProfilePage/CommonSelectField";
import SelectFieldCommon from "./SelectFieldCommon";
import UserStatusChangeFiled from "./UserStatusChangeFiled";

const ChangeInfoIndex = ({ user, handleSetRole, handleSetStatus, role }) => {
  console.log("🚀 ~ file: ChangeInfoIndex.jsx:8 ~ ChangeInfoIndex ~ role:", role);
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
            <Grid
              item
              xs={role === "recruitment_manager" ? 12 : 6}
              sx={{ paddingRight: role === "recruitment_manager" ? "" : "2%" }}>
              {" "}
              <SelectFieldCommon label={"Role Change"} user={user} handleSetRole={handleSetRole} />
            </Grid>
            {role === "recruitment_manager" ? (
              <></>
            ) : (
              <Grid item xs={6}>
                <UserStatusChangeFiled label={"Status"} handleSetStatus={handleSetStatus} />
              </Grid>
            )}
          </Grid>
          {/* <Grid container>
            <Grid item xs={12}></Grid>
          </Grid> */}
        </Stack>
      </Box>
    </>
  );
};

export default ChangeInfoIndex;
