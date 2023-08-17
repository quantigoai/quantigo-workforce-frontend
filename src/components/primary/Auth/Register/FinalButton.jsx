/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Register/FinalButton.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Thursday, August 17th 2023, 2:34:00 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Stack } from "@mui/material";
import { LoadingButtonStyle } from "../Login/Login";

export default function FinalButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButtonStyle
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        loading={props.isLoading}
        onClick={() => props.setShowOtherField(false)}
      >
        Back
      </LoadingButtonStyle>
      <LoadingButtonStyle
        type="submit"
        fullWidth
        disabled={
          !props.isFieldsNotEmptyFinalPage || props.disableFinishButtonCheck
        }
        color="inherit"
        size="large"
        variant="contained"
        loading={props.isLoading}
      >
        Finish
      </LoadingButtonStyle>
    </Stack>
  );
}
