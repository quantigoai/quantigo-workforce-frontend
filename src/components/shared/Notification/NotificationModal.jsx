/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Notification/NotificationModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, May 2nd 2023, 11:20:24 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Button, Grid, Popover } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNotifications,
  getAllUnreadNotifications,
  getLatestNotifications,
  readLatestNotification,
} from "../../../features/slice/notificationSlice";
import SingleNotification from "./SingleNotification";
import useToaster from "../../../customHooks/useToaster";

const style = {
  position: "absolute",
  top: "9%",
  left: "71%",
  transform: "translate(-50%, -15%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 0,
  overlayStyle: "white",
  border: "1px solid gray",
  // opacity: "0.9",
  // zIndex: -2,
};
const PopoverStyle = {
  position: "absolute",
  top: "9%",
  left: "71%",
  transform: "translate(-50%, -15%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 0,
  border: "1px solid gray",
  // opacity: "0.9",
  // zIndex: -2,
};
const boxStyle = {
  borderTop: "1px solid #E5E5E5",
  borderRadius: "5px",
  padding: "2px",
};

const NotificationModal = ({ handleSeeAll, notificationOpen, handleNotificationClose, id, openPopover }) => {
  const { notifications, latestUnreadNotifications, allUnreadNotifications } = useSelector(
    (state) => state.notification
  );
  const dispatch = useDispatch();
  const alert = useAlert();

  const toast = useToaster();

  const markReadLatest = () => {
    const notificationsId = latestUnreadNotifications.map((unreadNotification) => unreadNotification._id);
    if (notificationsId.length > 0) {
      dispatch(readLatestNotification(notificationsId)).then(() => {
        dispatch(getAllNotifications());
        dispatch(getLatestNotifications());
        dispatch(getAllUnreadNotifications());
        toast.trigger(`Marked last ${notificationsId.length} notifications as read`, {
          type: "success",
        });
        handleNotificationClose();
      });
    } else {
      toast.trigger(`No Unread notifications found`, {
        type: "error",
      });
    }
  };

  return (
    <>
      <Popover
        sx={{ width: "100%" }}
        id={id}
        open={openPopover}
        anchorEl={notificationOpen}
        onClose={handleNotificationClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ width: "450px" }}>
          <Box sx={{ py: 1.5, px: 2 }}>
            <Grid container spacing={2} gap={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="wpf_p3_semiBold" color="neutral.700">
                    Notifications ({allUnreadNotifications.length} New)
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      cursor: "pointer",
                      color: "#2D58FF",
                      fontSize: "12px",
                      borderRadius: "5px",
                      textTransform: "none",
                    }}
                    onClick={markReadLatest}
                  >
                    Mark Read Latest
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={boxStyle}>
            {latestUnreadNotifications.slice(0, 10).map((notification) => (
              <SingleNotification key={notification._id} notification={notification} />
            ))}
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={handleSeeAll}
            >
              {/* <Typography mx={2} variant="wpf_p2_semiBold" color="neutral.700">
                Click here to sell all...
              </Typography> */}
              <Typography sx={{ ml: 2 }} variant="wpf_p4_medium" color="neutral.700">
                Click here to sell all...
              </Typography>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default NotificationModal;
