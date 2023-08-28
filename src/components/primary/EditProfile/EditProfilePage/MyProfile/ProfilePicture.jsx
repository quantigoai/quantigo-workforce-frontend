import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
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
            height: "112px",
            width: "100%",
          }}>
          <Grid container sx={{ padding: "1%" }}>
            <Grid item xs={8}>
              <Grid container>
                <Grid xs={1.5} sx={{ paddingLeft: "1%" }}>
                  <Avatar
                    alt="User"
                    src={image}
                    sx={{ width: "72px", height: "72px" }}
                  />
                </Grid>
                <Grid xs={5} sx={{ paddingTop: "2%" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "18px", color: "#091E42" }}>
                    <b>Zayed Islam</b>
                    <Chip
                      sx={{
                        color: "#FFFFFF",
                        background: "#2E58FF",
                        height: "20px",
                      }}
                      label="QAI_DH34354"
                      // label={capitalizeFirstLetter(user.qaiUserName || "")}
                    />
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#253E5C" }}>
                    Level 0 Annotator
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
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
