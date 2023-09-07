/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Payment/PaymentForm.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 6th 2023, 10:31:52 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Typography } from "@mui/material";
import React from "react";

const PaymentForm = () => {
  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <Box>
          <Typography variant="body1" sx={{ fontSize: "18px" }}>
            Payment Request Form
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PaymentForm;
