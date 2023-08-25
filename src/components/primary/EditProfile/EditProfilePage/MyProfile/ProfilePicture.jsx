import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../../../../assets/images/EditIcon.svg";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
const ProfilePicture = ({ user, editAble, handleEditProfile }) => {
  const image = user.image;
  return (
    <>
      <Grid>
        <Stack
          sx={{
            // border: "1px solid #E6ECF5",
            // padding: "16px",
            borderRadius: "12px",
            background: "#F2F6FC",
            // height: "12vh",
            width: "100%",
          }}>
          <Grid container sx={{ padding: "1%" }}>
            <Grid item xs={5}>
              <Grid container>
                <Grid xs={2}>
                  <div
                    style={{ position: "relative", display: "inline-block" }}>
                    <Avatar
                      alt="User"
                      src={image}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "4px",
                        cursor: "pointer",
                      }}>
                      {editAble && <EditIcon />}
                    </div>
                  </div>
                </Grid>
                <Grid xs={3} sx={{ paddingTop: "2%" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "18px", color: "#091E42" }}>
                    <b>Zayed Islam</b>
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#253E5C" }}>
                    Level 0 Annotator
                  </Typography>
                </Grid>
                <Grid xs={3}>{/* <Typography>Name</Typography> */}</Grid>
              </Grid>
            </Grid>

            <Grid item xs={7}>
              <Grid
                container
                sx={{ justifyContent: "right", paddingTop: "2%" }}>
                {!editAble && (
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "32px",
                      textTransform: "none",
                      height: "34px",
                      width: "121px",
                    }}
                    onClick={() => handleEditProfile()}
                    disableRipple>
                    <Box sx={{ paddingRight: "10%" }}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {" "}
                        Edit Profile
                      </Typography>
                    </Box>{" "}
                    <img src={editIcon} />{" "}
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default ProfilePicture;
