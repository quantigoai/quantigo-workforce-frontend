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
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
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
            background: user.active ? "#F2F6FC" : "#F5E1E3",
            height: "112px",
            width: "100%",
          }}>
          <Grid container sx={{ padding: "1%" }}>
            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={1.5} sx={{ paddingLeft: "1%" }}>
                  <Avatar
                    alt="User"
                    src={image}
                    sx={{ width: "72px", height: "72px" }}
                  />
                </Grid>
                <Grid item xs={7} sx={{ paddingTop: "2%" }}>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "18px", color: "#091E42" }}>
                        <b>
                          {user.firstName} {user.lastName}
                        </b>
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#253E5C" }}>
                        {capitalizeFirstLetter(user.role)}
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Grid container>
                        <Box sx={{ paddingRight: "1%" }}>
                          <Chip
                            sx={{
                              color: "#FFFFFF",
                              background: "#2E58FF",
                              height: "20px",
                              borderRadius: "32px",
                              fontSize: "10px",
                            }}
                            // label="QAI_DK3454"
                            label={capitalizeFirstLetter(
                              user.qaiUserName || ""
                            )}
                          />
                        </Box>
                        {!user.active && (
                          <Box>
                            <Chip
                              sx={{
                                color: "#FFFFFF",
                                background: "#FF4757",
                                height: "20px",
                                fontSize: "10px",
                              }}
                              label="Account Deactivated"
                              // label={capitalizeFirstLetter(user.qaiUserName || "")}
                            />
                          </Box>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
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
