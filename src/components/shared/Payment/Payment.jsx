/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Payment/Payment.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 6th 2023, 10:20:59 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import CommonHeader from "../CustomComponenet/CommonHeader/CommonHeader";
import PaymentInfo from "./PaymentInfo";

const Payment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePath("Payment"));
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          pb: "2%",
        }}
      >
        <Grid
          container
          sx={{
            paddingBottom: "0%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <CommonHeader title="Payment" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " customButton="Send Request" />
        </Grid>
      </Box>

      <Box>
        <Paper elevation={0}>
          <Box>
            {/* <PaymentForm /> */}
            <PaymentInfo />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Payment;
