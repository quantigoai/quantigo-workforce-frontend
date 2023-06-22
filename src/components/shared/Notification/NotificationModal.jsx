/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Notification/NotificationModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, May 2nd 2023, 11:20:24 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Button, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SingleNotification from "./SingleNotification";
import {
    getAllNotifications,
    getAllUnreadNotifications,
    getLatestNotifications,
    readLatestNotification,
} from "../../../features/slice/notificationSlice";
import {useAlert} from "react-alert";

const style = {
  position: "absolute",
  top: "15%",
  left: "69%",
  transform: "translate(-50%, -15%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const boxStyle = {
  borderTop: "1px solid #E5E5E5",
  borderRadius: "5px",
  padding: "10px",
};

const NotificationModal = ({
  handleSeeAll,
  notificationOpen,
  handleNotificationClose,
}) => {
  const { notifications, latestUnreadNotifications, allUnreadNotifications } =
    useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const alert = useAlert();

  const markReadLatest = () => {
    const notificationsId = latestUnreadNotifications.map(
      (unreadNotification) => unreadNotification._id
    );
    if (notificationsId.length > 0) {
      dispatch(readLatestNotification(notificationsId)).then(() => {
        dispatch(getAllNotifications());
        dispatch(getLatestNotifications());
        dispatch(getAllUnreadNotifications());
        alert.show(
          `Marked last ${notificationsId.length} notifications as read`,
          {
            type: "success",
          }
        );
        handleNotificationClose();
      });
    } else {
      alert.show(`No Unread notifications found`, {
        type: "error",
      });
    }
  };

  return (
    <>
      <Modal
        open={notificationOpen}
        onClose={handleNotificationClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ py: 2, px: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    color="#090080"
                  >
                    Notifications ({allUnreadNotifications.length} New)
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      cursor: "pointer",
                      color: "#2D58FF",
                      borderRadius: "5px",
                      textTransform: "none",
                    }}
                    onClick={markReadLatest}
                  >
                    MARK READ LATEST
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={boxStyle}>
            {latestUnreadNotifications.slice(0, 10).map((notification) => (
              <SingleNotification
                key={notification._id}
                notification={notification}
              />
            ))}
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={handleSeeAll}
            >
              <Typography mx={2} variant="body2" color="#5a4fc4">
                Click here to sell all...
              </Typography>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Modal>
    </>
  );
};

export default NotificationModal;
