/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Notification/AllNotification.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, May 18th 2023, 11:46:02 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotifications, getAllUnreadNotifications, getLatestNotifications, readAllNotification } from "../../../features/slice/notificationSlice";

const convertDate = (date) => {
  return dayjs(date).format("DD MMM hh:mm A");
};
const boxUnReadStyle = {
  borderTop: "1px solid #fff",
  borderRadius: "5px",
  padding: "10px",
  backgroundColor: "#e4e4e4",
};

const boxReadStyle = {
  borderTop: "1px solid #E5E5E5",
  borderRadius: "5px",
  padding: "10px",
};
const formattedDate = (rawTime) => convertDate(rawTime);

const AllNotification = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const markAllRead = () => {
    dispatch(readAllNotification()).then(() => {
      dispatch(getAllNotifications());
      dispatch(getLatestNotifications());
      dispatch(getAllUnreadNotifications());
      return alert.show(`Marked all notifications as read`, {
        type: "success",
      });
    });
  };
  const { notifications } = useSelector((state) => state.notification);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "#090080" }} variant="h4">
          All Notification
        </Typography>
        <Button variant="outlined" onClick={markAllRead} sx={{ color: "#090080" }}>
          Mark All as Read
        </Button>
      </Box>
      <Box my={2}>
        {notifications.map((notification) => (
          <Box key={notification._id} style={notification.isRead ? boxReadStyle : boxUnReadStyle}>
            <Typography variant="body1" color="#090080">
              {notification.message}
            </Typography>
            <Typography variant="body2" color="#5a4fc4">
              {formattedDate(notification.createdAt)}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AllNotification;
