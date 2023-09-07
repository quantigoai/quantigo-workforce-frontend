/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/UserBlocked/UserBlocked.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, June 8th 2023, 2:00:12 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const UserBlocked = () => {
  return (
    <>
      <Alert severity="error">
        <AlertTitle>Account Blocked</AlertTitle>
        Your account has been blocked — <strong>contact in discord for more details!</strong>
      </Alert>
    </>
  );
};

export default UserBlocked;
