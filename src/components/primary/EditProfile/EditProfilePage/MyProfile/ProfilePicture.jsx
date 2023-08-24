import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const ProfilePicture = () => {
  return (
    <>
      <Box sx={{ width: "100hw", backgroundColor: "#F2F6FC" }}>
        <Grid container>
          <Grid item xs={8}>
            <Grid>
              <Avatar
                alt="Profile Picture"
                // src={image}
                sx={{
                  bgcolor: "#D3ECFA",
                  // border: "1px solid #8394EA",
                }}
              />
            </Grid>
            <Grid>
              <Typography>name</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfilePicture;
