/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Header/Header.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:41:09 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {
  Avatar,
  FormControlLabel,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import logOutIcon from "../../../assets/images/logoutIcon.svg";
import useReset from '../../../customHooks/useReset';
import { setTheme } from '../../../features/slice/themeSlice';
import { logout } from '../../../features/slice/userSlice';
import { persistor } from '../../../features/store/store';
import { capitalizeFirstLetter } from '../../../helper/capitalizeFirstWord';
import NotificationModal from '../Notification/NotificationModal';
import GoBackButton from './GoBackButton';
import ThemeSwitch from './ThemeSwitch';
import useAllUsersFunc from '../../../customHooks/useAllUsersFunc';
const Header = () => {
  const { isLightTheme } = useSelector((state) => state.theme);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { role, name, image, firstName, lastName } = useSelector((state) => state.user.user);
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { goBackHandle } = useAllUsersFunc({});
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
      persistor.pause();
      persistor.flush().then(() => {
        return persistor.purge();
      });
      navigate('/');
      setAnchorEl(null);
      reset(dispatch, role);
    });
  };

  const handleSeeAll = () => {
    setNotificationOpen(false);
    navigate('/show-all-notification');
  };
  const handleDashboard = () => {
    navigate('/dashboard');
  };
  const handleEditProfile = () => {
    navigate('/edit-profile');
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const location = useLocation();

  const handleGoBack = () => {
    if (location.pathname !== '/' && location.pathname !== '/dashboard') {
      navigate(-1);
            // goBackHandle();
    }
  };
  const openPopover = Boolean(notificationOpen);
  const id = openPopover ? 'simple-popover' : undefined;

  const MyFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    '& .MuiFormControlLabel': {
      marginRight: '0px',
    },
  }));

  const lottieOptions = {
    // loop: true,
    loop: allUnreadNotifications.length ? true : false,
    style: {
      height: 30,
    },
  };

  return (
    <>
      <Box
        sx={{
          color: 'neutral.970',
          height: '100%',
          mx: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <GoBackButton handleGoBack={handleGoBack} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <MyFormControlLabel
                onClick={() => dispatch(setTheme(!isLightTheme))}
                control={
                  <ThemeSwitch
                    sx={{ m: 0 }}
                    checked={isLightTheme ? false : true}
                  />
                }
              />

              {/* <Box
                sx={{
                  display: 'flex',
                  cursor: 'pointer',
                  alignItems: 'center',
                  mr: 3,
                  transition: 'all 0.3s ease-in-out',
                  p: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'neutral.N400',
                  },
                }}
                aria-describedby={id}
                onClick={handleNotificationOpen}
              >
                {allUnreadNotifications.length === 0 ? (
                  <>
                    <Lottie animationData={bell} {...lottieOptions} />
                  </>
                ) : (
                  <>
                    <Badge
                      sx={{}}
                      badgeContent={allUnreadNotifications.length}
                      color="primary"
                    >
                      <Lottie animationData={bell} {...lottieOptions} />
                    </Badge>
                  </>
                )}
              </Box> */}
            </Box>

            <>
              <Box>
                <Box sx={{ display: 'flex', px: 2 }}>
                  <Stack>
                    <Typography
                      sx={{
                        color: 'neutral.800',
                      }}
                      variant="wpf_p3_medium"
                    >
                      {firstName} {lastName}
                    </Typography>

                    <Typography
                      sx={{ color: 'neutral.N650' }}
                      variant="wpf_p4_regular"
                    >
                      {role === 'level_1_annotator'
                        ? 'Level 1 Annotator'
                        : role === 'level_2_annotator'
                        ? 'Level 2 Annotator'
                        : role === 'level_0_annotator'
                        ? 'Level 0 Annotator'
                        : role === 'level_3_annotator'
                        ? 'Level 3 Annotator'
                        : role === 'delivery_manager'
                        ? 'Project Delivery Lead'
                        : role === 'delivery_lead'
                        ? 'Delivery Lead'
                        : role === 'project_coordinator'
                        ? 'Project Coordinator'
                        : role === 'project_manager'
                        ? 'Project Manager'
                        : role === 'recruitment_manager'
                        ? 'Recruitment Manager'
                        : role === 'account_manager'
                        ? 'Account Manager'
                        : capitalizeFirstLetter(role)}
                    </Typography>
                  </Stack>

                  <Box>
                    <Menu
                      sx={{
                        '& .MuiPaper-root': {
                          borderRadius: '6px',
                          // width: "182px",
                          width: { xl: '182px', xxl: '182px', lg: '155px' },
                          mt: 1.3,
                          ml: -2,
                          boxShadow:
                            '0px 8px 24px 0px #253E5C14, 0px 0px 4px 0px #253E5C0A',
                        },
                        '& .MuiMenu-list': {
                          padding: '0px',
                        },
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      autoFocus={false}
                      onClose={handleClose}
                    >
                      <MenuItem
                        sx={{
                          borderBottom: '1px solid #F0F5FA',
                          // width: "182px",
                          width: { xl: '182px', xxl: '182px', lg: '155px' },
                          py: 1.5,
                          mt: 0,
                          // height: "50px",
                          height: { xl: '50px', xxl: '50px', lg: '37px' },
                        }}
                        onClick={handleEditProfile}
                      >
                        <ListItemIcon>
                          <PersonOutlineIcon
                            sx={{
                              height: { xl: '25px', xxl: '25px', lg: '18px' },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            fontSize: { xl: '16px', xxl: '16px', lg: '12px' },
                          }}
                          sx={{ color: 'neutral.N300' }}
                        >
                          Edit Profile
                        </ListItemText>
                      </MenuItem>

                      <MenuItem
                        disabled={isLoading}
                        onClick={handleLogOut}
                        sx={{
                          // width: "182px",
                          py: 1.5,
                          height: { xl: '50px', xxl: '50px', lg: '37px' },
                          width: { xl: '182px', xxl: '182px', lg: '155px' },
                        }}
                      >
                        <ListItemIcon>
                          <LogoutIcon
                            sx={{
                              height: { xl: '25px', xxl: '25px', lg: '18px' },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            fontSize: { xl: '16px', xxl: '16px', lg: '12px' },
                          }}
                          sx={{ color: 'neutral.N300' }}
                        >
                          Logout
                        </ListItemText>
                      </MenuItem>
                    </Menu>

                    <Box
                      onClick={handleClick}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: '0px 8px 0px 14px',
                      }}
                    >
                      <Avatar
                        alt="Profile Picture"
                        src={image}
                        sx={{
                          bgcolor: '#D3ECFA',
                          height: { xl: 37, lg: 34 },
                          width: { xl: 37, lg: 34 },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          </Box>
        </Box>
      </Box>

      <NotificationModal
        openPopover={openPopover}
        id={id}
        handleSeeAll={handleSeeAll}
        notificationOpen={notificationOpen}
        handleNotificationClose={handleNotificationClose}
      />
    </>
  );
};

export default Header;
