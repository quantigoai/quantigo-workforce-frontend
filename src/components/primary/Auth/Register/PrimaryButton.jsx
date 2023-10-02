/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Register/PrimaryButton.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Thursday, August 17th 2023, 2:34:20 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Typography } from "@mui/material";
import { LoadingButtonStyle } from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";

export default function PrimaryButton(props) {
  console.log("🚀 ~ file: PrimaryButton.jsx:15 ~ PrimaryButton ~ props:", props);
  // const navigate = useNavigate();
  return (
    <Box>
      <LoadingButtonStyle
        fullWidth
        disabled={props.disableFirstButton}
        color="inherit"
        size="large"
        variant="contained"
        loading={props.isLoading}
        onClick={() => props.setShowOtherField(true)}
      >
        Create New Account
      </LoadingButtonStyle>
    </Box>
  );
}
