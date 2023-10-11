/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Header/Header.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:41:09 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, Badge, FormControlLabel, Stack, Switch, Typography, styled } from "@mui/material";
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
import { setTheme } from "../../../features/slice/themeSlice";
import { logout } from "../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import NotificationModal from "../Notification/NotificationModal";

const Header = () => {
  const { isLightTheme } = useSelector((state) => state.theme);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { role, name, image, firstName, lastName } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [notificationOpen, setNotificationOpen] = React.useState(null);
  const handleNotificationOpen = (e) => {
    setNotificationOpen(e.currentTarget);
  };
  const handleNotificationClose = () => setNotificationOpen(null);
  const { allUnreadNotifications } = useSelector((state) => state.notification);
  const reset = useReset;

  const handleLogOut = () => {
    // const role = user.user.role;
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
  const openPopover = Boolean(notificationOpen);
  const id = openPopover ? "simple-popover" : undefined;

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <>
      <Box
        sx={{
          background: isLightTheme ? "#FFFFFF" : "#0E243D",
          color: isLightTheme ? "#000c1f" : "#F5F5F5",
        }}
      >
        <Box
          sx={{
            mx: 0,
            py: 1,
            px: 0,
            // paddingLeft: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Go Back button  */}
            {/* TODO Move in a separate component */}
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  color: isLightTheme ? "#0E243D" : "#FFFFFF",
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

                <Typography variant="wpf_p3_semiBold" sx={{ paddingLeft: "12%" }}>
                  Go Back
                </Typography>
              </Button>
            </Box>

            {/* <Box xs={2} sx={{ px: 2 }}>
              <img src={line} height="100%" />
            </Box> */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <FormControlLabel
                onClick={() => dispatch(setTheme(!isLightTheme))}
                control={<MaterialUISwitch sx={{ m: 1 }} checked={isLightTheme ? false : true} />}
              />
              <Box
                sx={{
                  display: "flex",
                  cursor: "pointer",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mr: 3,
                  transition: "all 0.3s ease-in-out",
                  p: 1,
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#F4F7FE",
                  },
                }}
                aria-describedby={id}
                onClick={handleNotificationOpen}
              >
                {allUnreadNotifications.length === 0 ? (
                  <NotificationsNoneIcon sx={{ color: "#1976d2" }} />
                ) : (
                  <>
                    <Badge badgeContent={allUnreadNotifications.length} color="primary">
                      <NotificationsActiveIcon sx={{ color: "#1976d2" }} />
                    </Badge>
                  </>
                )}
              </Box>
              <NotificationModal
                openPopover={openPopover}
                id={id}
                handleSeeAll={handleSeeAll}
                notificationOpen={notificationOpen}
                handleNotificationClose={handleNotificationClose}
              />

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
                        color: isLightTheme ? "#0E243D" : "#FFFFFF",
                      }}
                      variant="wpf_p3_semiBold"
                    >
                      <b>
                        {firstName} {lastName}
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
                        <ListItemText sx={{ color: "#3C4D6B" }}>Logout</ListItemText>
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
