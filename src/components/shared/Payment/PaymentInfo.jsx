/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Payment/PaymentInfo.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 6th 2023, 10:53:33 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import PendingIcon from "@mui/icons-material/Pending";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useAlert } from "react-alert";

const boxStyle = {
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  width: "100%",
  pb: "2%",
  backgroundColor: "#fff",
};

const pendingStyle = {
  fontSize: "100px",
  color: "#47CB84",
  marginBottom: "10px",
};

const PaymentInfo = () => {
  const [isRequested, setIsRequested] = React.useState(false);
  const alert = useAlert();
  const handleRequest = () => {
    setIsRequested(true);
    alert.show("Request sent successfully", { type: "success" });
  };

  return (
    <>
      <Paper elevation={0} style={boxStyle}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <PendingIcon style={pendingStyle} />
            <Typography variant="body1" sx={{ fontSize: "18px" }}>
              Your accumulated payment is: 5000.00 BDT
            </Typography>
            <Button
              variant="contained"
              disabled={isRequested}
              sx={{
                mt: "10px",
                "&:hover": {
                  backgroundColor: "#FF9A45",
                  color: "#1D1D1D",
                },
              }}
              onClick={handleRequest}
            >
              Send Request
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default PaymentInfo;
