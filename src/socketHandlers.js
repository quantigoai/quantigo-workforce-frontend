/*
 * File           : socketHandlers.js
 * Project        : wmpv2
 * Created Date   : Fr 23 Jun 2023 11:12:17
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Jun 23 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { updateProjectDrawerManually } from "./features/slice/projectDrawerSlice";

const socketHandlers = ({
  socket,
  dispatch,
  storedUser,
  setNewNotification,
  updateLoggedInUserManually,
  updateSingleUserManually,
  getAllJobs,
  getMyJobs,
  availableJobsForReviewer,
  getAllAssignedJob,
}) => {
  const { _id, role } = storedUser.user;
  // const { _id, role } = storedUser;

  const handleNotification = (notification) => {
    if (
      notification.notificationFor.includes(storedUser.user.role) ||
      notification.notificationForUserIds.includes(storedUser.user._id)
    ) {
      dispatch(setNewNotification(notification));
    }
  };

  const handleUserNotification = (notification, user) => {
    storedUser.user._id === user._id && dispatch(updateLoggedInUserManually(user));
    if (
      notification.notificationFor.includes(storedUser.user.role) ||
      notification.notificationForUserIds.includes(storedUser.user._id)
    ) {
      if (storedUser.user.role === "reviewer") {
        dispatch(availableJobsForReviewer());
      }
      dispatch(setNewNotification(notification));
    }
  };

  const handleJobBlockNotification = (notification, user) => {
    storedUser.user._id === user._id && dispatch(updateLoggedInUserManually(user));
    if (
      notification.notificationFor.includes(storedUser.user.role) ||
      notification.notificationForUserIds.includes(storedUser.user._id)
    ) {
      dispatch(getAllJobs());
      notification.notificationFor.includes(storedUser.user._id) && dispatch(setNewNotification(notification));
    }
  };

  const handleNewJobNotification = (notification, user) => {
    if (
      notification.notificationFor.includes(storedUser.user.role) ||
      notification.notificationForUserIds.includes(storedUser.user._id)
    ) {
      dispatch(getAllJobs());
      dispatch(setNewNotification(notification));
    }
  };

  const handleAntNotification = (notification, project) => {
    if (
      project.activeHub.includes(storedUser.user.hub) &&
      notification.notificationFor.includes(storedUser.user.role)
    ) {
      dispatch(setNewNotification(notification));
      dispatch(getAllJobs());
    }
  };

  const handleRMNotification = (notification, user) => {
    dispatch(updateSingleUserManually({ user }));
    if (
      notification.notificationFor.includes(storedUser.user.role) ||
      notification.notificationForUserIds.includes(storedUser.user._id)
    ) {
      dispatch(setNewNotification(notification));
    }
  };
  const handleReviewerNotification = (notification, job) => {
    if (role === "reviewer") {
      dispatch(availableJobsForReviewer());
    }
    if (notification.notificationForUserIds.includes(storedUser.user._id)) {
      dispatch(setNewNotification(notification));
      dispatch(getMyJobs());
    }
    if (role === "admin") {
      dispatch(getAllAssignedJob());
    }
  };

  const handleAnnotatorNotification = (notification, job) => {
    if (
      notification.notificationFor.includes(storedUser.user.role) ||
      notification.notificationForUserIds.includes(storedUser.user._id)
    ) {
      dispatch(setNewNotification(notification));
      dispatch(getMyJobs());
    }
  };

  const handleJobTakersNotification = (notification, { job, targetUser }) => {
    const storedUserRole = storedUser.user.role;
    const storedUserId = storedUser.user._id;

    if (targetUser._id === storedUserId) {
      dispatch(updateLoggedInUserManually(targetUser));
    }
    if (notification.notificationFor.includes(storedUserRole)) {
      dispatch(getAllJobs());
      dispatch(getAllAssignedJob());
    }
    if (storedUserRole === "admin") {
      dispatch(updateSingleUserManually({ user: targetUser }));
    }
  };

  const handleProjectDrawerNotification = (notification, projectDrawer) => {
    if (notification.notificationFor.includes(storedUser.user.role)) {
      dispatch(setNewNotification(notification));
    }
    dispatch(updateProjectDrawerManually(projectDrawer));
  };

  const customUserData = { _id, role };
  socket.emit("customUserData", customUserData);
  socket.on("notification", handleNotification);
  socket.on("approvedUser", handleUserNotification);
  socket.on("rejectUser", handleUserNotification);
  socket.on("uploadNDAOrDocuments", handleRMNotification);
  socket.on("updateUserRole", handleUserNotification);
  socket.on("addUserSkills", handleUserNotification);
  socket.on("removeUserSkills", handleUserNotification);
  socket.on("blockUser", handleUserNotification);
  socket.on("unBlockUser", handleUserNotification);
  socket.on("updateProjectPriority", handleAntNotification);
  socket.on("updateProjectHub", handleAntNotification);
  socket.on("updateProjectStatus", handleAntNotification);
  socket.on("newJobAvailable", handleNewJobNotification);
  socket.on("reviewerAvailableJob", handleReviewerNotification);
  socket.on("takeJobReviewer", handleReviewerNotification);
  socket.on("takeJobAnnotator", handleJobTakersNotification);
  socket.on("reviewOnJobAccept", handleAnnotatorNotification);
  socket.on("reviewOnJobReject", handleAnnotatorNotification);
  socket.on("reviewOnJobRejectFinal", handleAnnotatorNotification);
  socket.on("submitJob", handleReviewerNotification);
  socket.on("jobTimeOutAnnotator", handleAnnotatorNotification);
  socket.on("jobTimeOutReviewer", handleReviewerNotification);
  socket.on("enrollCourseStudent", handleNotification);
  socket.on("courseCompleteUser", handleNotification);
  socket.on("benchmarkCreate", handleNotification);
  socket.on("benchMarkUpdate", handleNotification);
  socket.on("jobBlockAnnotator", handleJobBlockNotification);
  socket.on("jobUnblockAnnotator", handleJobBlockNotification);
  socket.on("updateProjectDrawer", handleProjectDrawerNotification);

  return () => {
    socket.off("notification", handleNotification);
    socket.off("approvedUser", handleUserNotification);
    socket.off("rejectUser", handleUserNotification);
    socket.off("uploadNDAOrDocuments", handleRMNotification);
    socket.off("updateUserRole", handleUserNotification);
    socket.off("addUserSkills", handleUserNotification);
    socket.off("removeUserSkills", handleUserNotification);

    socket.off("blockUser", handleUserNotification);
    socket.off("unBlockUser", handleUserNotification);

    socket.off("updateProjectPriority", handleAntNotification);
    socket.off("updateProjectHub", handleAntNotification);
    socket.off("updateProjectStatus", handleAntNotification);

    socket.off("newJobAvailable", handleNewJobNotification);
    socket.off("reviewerAvailableJob", handleReviewerNotification);

    socket.off("takeJobReviewer", handleReviewerNotification);
    socket.off("reviewOnJobAccept", handleAnnotatorNotification);
    socket.off("reviewOnJobReject", handleAnnotatorNotification);
    socket.off("reviewOnJobRejectFinal", handleAnnotatorNotification);
    socket.off("submitJob", handleReviewerNotification);
    socket.off("jobTimeOutAnnotator", handleAnnotatorNotification);
    socket.off("jobTimeOutReviewer", handleReviewerNotification);
    socket.off("enrollCourseStudent", handleNotification);
    socket.off("courseCompleteUser", handleNotification);
    socket.off("benchmarkCreate", handleNotification);
    socket.off("benchMarkUpdate", handleNotification);
    socket.off("jobBlockAnnotator", handleJobBlockNotification);
    socket.off("jobUnblockAnnotator", handleJobBlockNotification);
    socket.off("updateProjectDrawer", handleProjectDrawerNotification);
  };
};

export default socketHandlers;
