/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Notification/SingleNotification.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, May 2nd 2023, 12:59:23 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Grid, Typography} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import {iconHandler} from "./AllNotification";

const convertDate = (date) => {
  return dayjs(date).format("DD MMM hh:mm A");
};

const SingleNotification = ({ notification }) => {
  const formattedDate = convertDate(notification.createdAt);

  return (
    <Grid container sx={{ py: 1, display: "flex", alignItems: "start" }}>
      <Grid item xs={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <NotificationsNoneIcon sx={{ color: "#2D58FF" }} /> */}
          {iconHandler(notification.type, true)}
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Box sx={{ pr: 1, display: "flex", flexDirection: "column" }}>
            <Typography variant="wpf_p4_medium" color="neutral.700">
              {notification.message}
            </Typography>
            <Typography variant="wpf_p4_medium" color="neutral.550">
              {formattedDate}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SingleNotification;
