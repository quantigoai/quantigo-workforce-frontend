/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Notification/SingleNotification.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, May 2nd 2023, 12:59:23 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import dayjs from "dayjs";

const convertDate = (date) => {
  return dayjs(date).format("DD MMM hh:mm A");
};
const SingleNotification = ({ notification }) => {
  const formattedDate = convertDate(notification.createdAt);
  
  return (
    <Grid container sx={{ py: 1, display: "flex", alignItems: "center" }}>
      <Grid item xs={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NotificationsNoneIcon sx={{ color: "#2D58FF" }} />
        </Box>
      </Grid>
      <Grid item xs={11}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="body1" color="#090080">
              {notification.message}
            </Typography>
            <Typography variant="body2" color="#5a4fc4">
              {formattedDate}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SingleNotification;
