/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Header/Header.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:41:09 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Avatar, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled as mstyled } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logOutIcon from "../../../assets/images/logoutIcon.svg";
import menuIcon from "../../../assets/images/menuIcon.svg";
import ProfileIcon from "../../../assets/images/profileIcon.svg";
import useReset from "../../../customHooks/useReset";
import { logout } from "../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import NotificationModal from "../Notification/NotificationModal";
import backIcon from "../../../assets/images/dashboardIcon/GoBackIcon.svg";
const NavBarFull = mstyled(AppBar)({
  height: "auto",
  width: "100%",
  display: "flex",
  margin: "0rem",
  color: "black",
  borderBottom: "1px solid #E6ECF5",
  boxShadow: "0px 0px 0px rgba(31, 30, 120, 0.37)",
});

const Header = ({ openDrawer }) => {
  const { isLightTheme } = useSelector((state) => state.theme);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { role } = user.user;
  const { name } = user.user;

  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const handleNotificationOpen = () => setNotificationOpen(true);
  const handleNotificationClose = () => setNotificationOpen(false);
  const { allUnreadNotifications } = useSelector((state) => state.notification);
  const reset = useReset;

  const handleLogOut = () => {
    const role = user.user.role;
    dispatch(logout()).then(() => {
      navigate("/");
      setAnchorEl(null);
      reset(dispatch, role);
    });
  };

  const handleSeeAll = () => {
    setNotificationOpen(false);
    navigate("/show-all-notification");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const handleEditProfile = () => {
    navigate("/edit-profile");
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  const image = user.user.image;

  return (
    <>
      <NavBarFull
        sx={{
          background: "#FFFFFF",
          color: isLightTheme ? "#000c1f" : "#F5F5F5",
        }}>
        <Box
          sx={{
            mx: 0,
            py: 2,
            px: 0,
            paddingLeft: openDrawer ? "16%" : "5%",
            // backgroundColor: "green",
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // backgroundColor: "blue",
            }}>
            {/* Go Back button  */}
            <Box
              sx={{
                display: "flex",
                // backgroundColor: "blue",
                // paddingLeft:"10%"
              }}>
              <Button sx={{ width: "88px", textTransform: "none" }} onClick={() => handleGoBack()}>
                <img src={backIcon} />

                <Typography variant="wf_h5_bold" sx={{ color: "#3C4D6B", paddingLeft: "12%" }}>
                  {" "}
                  Go Back
                </Typography>
              </Button>
            </Box>
            {/* <Button>
              {isLightTheme ? (
                <DarkModeIcon onClick={() => dispatch(setTheme(false))} />
              ) : (
                <LightModeIcon onClick={() => dispatch(setTheme(true))} />
              )}
            </Button>
            <Button
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              onClick={handleNotificationOpen}>
              {allUnreadNotifications.length === 0 ? (
                <NotificationsNoneIcon sx={{ color: "#1976d2" }} />
              ) : (
                <>
                  <Badge
                    badgeContent={allUnreadNotifications.length}
                    color="primary">
                    <NotificationsActiveIcon sx={{ color: "#1976d2" }} />
                  </Badge>
                </>
              )}
            </Button> */}
            <NotificationModal
              handleSeeAll={handleSeeAll}
              notificationOpen={notificationOpen}
              handleNotificationClose={handleNotificationClose}
            />

            {/* <Box xs={2} sx={{ px: 2 }}>
              <img src={line} height="100%" />
            </Box> */}
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Avatar
                  alt="Profile Picture"
                  src={image}
                  sx={{
                    bgcolor: "#D3ECFA",
                    // border: "1px solid #8394EA",
                  }}
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex", px: 2, justifyContent: "flex-end" }}>
                  <Box>
                    <Typography
                      sx={{
                        color: "#0E243D",
                      }}
                      variant="body2">
                      <b>
                        {user.user.firstName} {user.user.lastName}
                      </b>
                    </Typography>
                    <Typography sx={{ color: "#969CAF" }} variant="caption">
                      {role === "level_1_annotator"
                        ? "Level 1 Annotator"
                        : role === "level_2_annotator"
                        ? "Level 2 Annotator"
                        : role === "level_0_annotator"
                        ? "Level 0 Annotator"
                        : role === "level_3_annotator"
                        ? "Level 3 Annotator"
                        : role === "delivery_manager"
                        ? "Project Delivery Lead"
                        : role === "project_lead"
                        ? "Delivery Lead"
                        : role === "project_coordinator"
                        ? "Project Coordinator"
                        : role === "project_manager"
                        ? "Project Manager"
                        : role === "recruitment_manager"
                        ? "Recruitment Manager"
                        : capitalizeFirstLetter(role)}
                    </Typography>
                  </Box>
                  <Box>
                    <Menu
                      sx={{
                        "& .MuiPaper-root": {
                          backgroundColor: "#FFFFFF",
                          // color: isLightTheme ? "#000c1f" : "#F5F5F5",
                          borderRadius: "5px",
                        },
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}>
                      <MenuItem
                        sx={{
                          backgroundColor: "#FFFFF",
                          borderBottom: "1px solid #F0F5FA",
                          width: "182px",
                        }}
                        onClick={handleEditProfile}>
                        <ListItemIcon>
                          <img src={ProfileIcon} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#3C4D6B" }}>Edit Profile</ListItemText>
                      </MenuItem>
                      <MenuItem onClick={handleLogOut} sx={{ width: "182px" }}>
                        <ListItemIcon>
                          <img src={logOutIcon} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#3C4D6B" }}>LogOut</ListItemText>
                      </MenuItem>
                    </Menu>
                    <Button id="fade-button" onClick={handleClick} sx={{ paddingTop: "20%" }}>
                      <img src={menuIcon} />
                      {/* <KeyboardArrowDownIcon /> */}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </NavBarFull>
    </>
  );
};

export default Header;
