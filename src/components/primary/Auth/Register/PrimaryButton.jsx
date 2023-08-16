/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Register/PrimaryButton.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Thursday, August 17th 2023, 2:34:20 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { LoadingButtonStyle } from "../Login/Login";

export default function PrimaryButton(props) {
  return (
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
  );
}
