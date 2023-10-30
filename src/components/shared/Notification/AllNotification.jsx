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
import Lottie from "lottie-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import {
  getAllNotifications,
  getAllUnreadNotifications,
  getLatestNotifications,
  readAllNotification,
} from "../../../features/slice/notificationSlice";
import success from "../CustomSvgIcons/wired-lineal-37-approve-checked-simple.json";

import change from "../../shared/CustomSvgIcons/change-icon.json";
import ok from "../../shared/CustomSvgIcons/ok-icon.json";
import cloud from "../../shared/CustomSvgIcons/wired-lineal-1-cloud.json";
import error from "../../shared/CustomSvgIcons/wired-lineal-1140-error.json";
import elipse from "../../shared/CustomSvgIcons/wired-lineal-1415-elipse.json";
import polyline from "../../shared/CustomSvgIcons/wired-lineal-1419-polyline.json";
import noEntry from "../../shared/CustomSvgIcons/wired-lineal-1738-no-entry.json";
import envelope from "../../shared/CustomSvgIcons/wired-lineal-177-envelope-mail-send.json";
import suitcase from "../../shared/CustomSvgIcons/wired-lineal-187-suitcase.json";
import avatar from "../../shared/CustomSvgIcons/wired-lineal-21-avatar.json";
import edit from "../../shared/CustomSvgIcons/wired-lineal-245-edit-document.json";
import approve from "../../shared/CustomSvgIcons/wired-lineal-37-approve-checked-simple.json";
import clock from "../../shared/CustomSvgIcons/wired-lineal-45-clock-time.json";
import plus from "../../shared/CustomSvgIcons/wired-lineal-49-plus-circle.json";
import polygon from "../../shared/CustomSvgIcons/wired-lineal-1422-polygon.json";

// import ChangeRoleIcons
const convertDate = (date) => {
  return dayjs(date).format("DD MMM hh:mm A");
};

const formattedDate = (rawTime) => convertDate(rawTime);

const mediumOptions = {
  // loop: true,
  loop: false,
  style: {
    height: 40,
  },
};
const miniOptions = {
  // loop: true,
  loop: false,
  style: {
    height: 25,
  },
};

export const iconHandler = (notificationType, miniPopup) => {
  const lottieOptions = miniPopup ? miniOptions : mediumOptions;

  switch (true) {
    case notificationType === "updateUserRole":
      return <Lottie animationData={change} {...lottieOptions} />;

    case notificationType === "uploadNDAOrDocuments":
      return <Lottie animationData={cloud} {...lottieOptions} />;

    case notificationType === "customUserData":
      return <Lottie animationData={success} {...lottieOptions} />;

    case notificationType === "notification":
      return <Lottie animationData={success} {...lottieOptions} />;

    case notificationType === "approvedUser":
      return <Lottie animationData={approve} {...lottieOptions} />;

    case notificationType === "rejectUser":
      return <Lottie animationData={error} {...lottieOptions} />;

    case notificationType === "addUserSkills":
      return <Lottie animationData={plus} {...lottieOptions} />;

    case notificationType === "removeUserSkills":
      return <Lottie animationData={error} {...lottieOptions} />;

    case notificationType === "blockUser":
      return <Lottie animationData={noEntry} {...lottieOptions} />;

    case notificationType === "unBlockUser":
      return <Lottie animationData={ok} {...lottieOptions} />;

    case notificationType === "updateProjectPriority":
      return <Lottie animationData={edit} {...lottieOptions} />;

    case notificationType === "updateProjectHub":
      return <Lottie animationData={edit} {...lottieOptions} />;

    case notificationType === "updateProjectStatus":
      return <Lottie animationData={edit} {...lottieOptions} />;

    case notificationType === "newJobAvailable":
      return <Lottie animationData={polyline} {...lottieOptions} />;

    case notificationType === "reviewerAvailableJob":
      return <Lottie animationData={polygon} {...lottieOptions} />;

    case notificationType === "takeJobReviewer":
      return <Lottie animationData={suitcase} {...lottieOptions} />;

    case notificationType === "takeJobAnnotator":
      return <Lottie animationData={suitcase} {...lottieOptions} />;

    case notificationType === "reviewOnJobAccept":
      return <Lottie animationData={success} {...lottieOptions} />;

    case notificationType === "reviewOnJobReject":
      return <Lottie animationData={error} {...lottieOptions} />;

    case notificationType === "reviewOnJobRejectFinal":
      return <Lottie animationData={error} {...lottieOptions} />;

    case notificationType === "submitJob":
      return <Lottie animationData={envelope} {...lottieOptions} />;

    case notificationType === "jobTimeOutAnnotator":
      return <Lottie animationData={clock} {...lottieOptions} />;

    case notificationType === "jobTimeOutReviewer":
      return <Lottie animationData={clock} {...lottieOptions} />;

    case notificationType === "enrollCourseStudent":
      return <Lottie animationData={avatar} {...lottieOptions} />;

    case notificationType === "courseCompleteUser":
      return <Lottie animationData={success} {...lottieOptions} />;

    case notificationType === "benchmarkCreate":
      return <Lottie animationData={elipse} {...lottieOptions} />;

    case notificationType === "benchMarkUpdate":
      return <Lottie animationData={success} {...lottieOptions} />;

    case notificationType === "jobBlockAnnotator":
      return <Lottie animationData={error} {...lottieOptions} />;

    case notificationType === "jobUnblockAnnotator":
      return <Lottie animationData={success} {...lottieOptions} />;

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
          height: "80%",
          overflow: "auto",
          textAlign: "left",
          px: "16px",
        }}
      >
        {notifications.map((notification) => (
          <Box
            sx={{
              // backgroundColor: "neutral.N000",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E6ECF5",
              py: 5,
              fontSize: "12px",
              padding: "10px",
              borderTop: "1px solid #fff",
              backgroundColor: notification.isRead ? "neutral.N100" : "neutral.990",
            }}
            key={notification._id}
            // style={notification.isRead ? boxReadStyle : boxUnReadStyle}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {iconHandler(notification.type, false)}
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
