/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Header/Header.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:41:09 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Avatar, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../assets/images/dashboardIcon/GoBackIcon.svg";
import logOutIcon from "../../../assets/images/logoutIcon.svg";
import menuIcon from "../../../assets/images/menuIcon.svg";
import ProfileIcon from "../../../assets/images/profileIcon.svg";
import useReset from "../../../customHooks/useReset";
import { logout } from "../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import NotificationModal from "../Notification/NotificationModal";

const Header = () => {
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
      <Box
        sx={{
          background: "#FFFFFF",
          color: isLightTheme ? "#000c1f" : "#F5F5F5",
        }}
      >
        <Box
          sx={{
            mx: 0,
            py: 1,
            px: 0,
            paddingLeft: "2%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Go Back button  */}
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  // backgroundColor: "red",
                  width: {
                    xl: "100px",
                    lg: "100px",
                  },
                  height: {
                    xl: "100%",
                    lg: "100%",
                  },
                  textTransform: "none",
                }}
                onClick={() => handleGoBack()}
              >
                <img src={backIcon} />

                <Typography variant="wpf_p3_semiBold" sx={{ color: "#3C4D6B", paddingLeft: "12%" }}>
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <Avatar
                  alt="Profile Picture"
                  src={image}
                  sx={{
                    bgcolor: "#D3ECFA",
                    height: { xl: 40, lg: 34 },
                    width: { xl: 40, lg: 34 },
                  }}
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex", px: 2 }}>
                  <Stack>
                    <Typography
                      sx={{
                        color: "#0E243D",
                      }}
                      variant="wpf_p3_semiBold"
                    >
                      <b>
                        {user.user.firstName} {user.user.lastName}
                      </b>
                    </Typography>

                    <Typography sx={{ color: "#969CAF" }} variant="wpf_p4_regular">
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
                  </Stack>

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
                      onClose={handleClose}
                    >
                      <MenuItem
                        sx={{
                          backgroundColor: "#FFFFF",
                          borderBottom: "1px solid #F0F5FA",
                          width: "182px",
                        }}
                        onClick={handleEditProfile}
                      >
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
      </Box>
    </>
  );
};

export default Header;
