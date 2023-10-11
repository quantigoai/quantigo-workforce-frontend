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
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import {
  getAllNotifications,
  getAllUnreadNotifications,
  getLatestNotifications,
  readAllNotification,
} from "../../../features/slice/notificationSlice";

const convertDate = (date) => {
  return dayjs(date).format("DD MMM hh:mm A");
};
const boxUnReadStyle = {
  borderTop: "1px solid #fff",
  borderRadius: "5px",
  padding: "30px",
  // backgroundColor: "#e4e4e4",
};

const boxReadStyle = {
  // borderTop: "1px solid #E5E5E5",
  borderRadius: "5px",
  padding: "10px",
};
const formattedDate = (rawTime) => convertDate(rawTime);

const AllNotification = () => {
  const dispatch = useDispatch();

  const toast = useToaster();

  const markAllRead = () => {
    dispatch(readAllNotification()).then(() => {
      dispatch(getAllNotifications());
      dispatch(getLatestNotifications());
      dispatch(getAllUnreadNotifications());
      return toast.trigger(`Marked all notifications as read`, "success");
    });
  };
  const { notifications } = useSelector((state) => state.notification);
  return (
    <Box className="content">
      <Box
        className="notificationContentHeader"
        sx={{
          borderTop: "1px solid #E6ECF5",
          backgroundColor: "neutral.N000",
        }}
      >
        <Typography variant="wpf_p1_semiBold" color="neutral.N300">
          All Notification
        </Typography>

        <Button
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            backgroundColor: "#2E58FF",
            color: "white",
            "&:hover": {
              background: "#244EF5",
            },
          }}
          variant="contained"
          onClick={markAllRead}
        >
          Mark All as Read
        </Button>
      </Box>
      <br />
      <Box
        sx={{
          width: "100%",
          height: "85%",
          overflow: "auto",
          textAlign: "left",
          px: "16px",
        }}
      >
        {notifications.map((notification) => (
          <Box
            sx={{
              backgroundColor: "neutral.N000",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E6ECF5",
              py: 5,
            }}
            key={notification._id}
            style={notification.isRead ? boxReadStyle : boxUnReadStyle}
          >
            <Typography variant="wpf_p3_medium" color="neutral.700">
              {notification.message}
            </Typography>
            <Typography variant="wpf_p4_regular" color="neutral.550">
              {formattedDate(notification.createdAt)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AllNotification;
