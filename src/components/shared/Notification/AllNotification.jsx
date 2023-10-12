/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Notification/AllNotification.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, May 18th 2023, 11:46:02 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import {Box, Button, Typography} from "@mui/material";
import dayjs from "dayjs";
import Lottie from "lottie-react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import {
    getAllNotifications,
    getAllUnreadNotifications,
    getLatestNotifications,
    readAllNotification,
} from "../../../features/slice/notificationSlice";
import clock from "../../shared/CustomSvgIcons/wired-lineal-45-clock-time.json";
import success from "../CustomSvgIcons/wired-lineal-37-approve-checked-simple.json";
// import ChangeRoleIcons
const convertDate = (date) => {
  return dayjs(date).format("DD MMM hh:mm A");
};
const boxUnReadStyle = {
  borderTop: "1px solid #fff",
  padding: "25px",
};

const boxReadStyle = {
  borderRadius: "5px",
  padding: "10px",
};
const formattedDate = (rawTime) => convertDate(rawTime);

const style = {
  height: "100%",
  padding: "7px",
  borderRadius: "50%",
};

const lottieOptions = {
  // loop: true,
  loop: false,
  style: {
    height: 40,
  },
};

const iconHandler = (notificationType) => {
  switch (true) {
    case notificationType === "updateUserRole":
      // return <AddchartIcon sx={{ ...style, backgroundColor: "primary.B300", color: "primary.B008" }} />;
      return <Lottie animationData={clock} {...lottieOptions} />;

    case notificationType === "customUserData":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "notification":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "approvedUser":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "rejectUser":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "uploadNDAOrDocuments":
      // return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
      return <Lottie animationData={success} {...lottieOptions} />;
    case notificationType === "addUserSkills":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "yellow", color: "green" }} />;
    case notificationType === "removeUserSkills":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "blockUser":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "unBlockUser":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "updateProjectPriority":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "updateProjectHub":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "updateProjectStatus":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "newJobAvailable":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "reviewerAvailableJob":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "takeJobReviewer":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "takeJobAnnotator":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "reviewOnJobAccept":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "reviewOnJobReject":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "reviewOnJobRejectFinal":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "submitJob":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "jobTimeOutAnnotator":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "jobTimeOutReviewer":
      return <Lottie animationData={clock} {...lottieOptions} />;
    case notificationType === "enrollCourseStudent":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "courseCompleteUser":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "benchmarkCreate":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "benchMarkUpdate":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "jobBlockAnnotator":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;
    case notificationType === "jobUnblockAnnotator":
      return <AccessTimeIcon sx={{ ...style, backgroundColor: "", color: "" }} />;

    default:
      break;
  }
};

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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {iconHandler(notification.type)}
              <Typography variant="wpf_p3_medium" color="neutral.700">
                {notification.message}
              </Typography>
            </Box>
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
