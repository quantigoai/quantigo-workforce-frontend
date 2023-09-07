import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CommonSelectField from "../../EditProfile/EditProfilePage/CommonSelectField";
import SelectFieldCommon from "./SelectFieldCommon";

const ChangeInfoIndex = () => {
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
              <SelectFieldCommon label={"Role Change"} />
            </Grid>
            <Grid item xs={6}>
              {" "}
              <Typography>skill</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
           
              <SelectFieldCommon label={"Status"}/>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default ChangeInfoIndex;
