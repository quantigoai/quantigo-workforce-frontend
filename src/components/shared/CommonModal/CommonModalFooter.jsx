/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/CommonModal/CommonModalFooter.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, October 4th 2023, 11:52:53 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Button, Grid } from "@mui/material";
import React from "react";

const CommonModalFooter = ({
  isLoading,
  leftButtonTitle,
  rightButtonTitle,
  disabledButton,
  handleClose,
  handleChange,
}) => {
  return (
    <>
      <Box
        sx={{
          flex: "0 0 64px",
          borderTop: "2px solid #F2F6FC",
          backgroundColor: "neutral.N000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2%",
          bottom: "0px",
          borderRadius: "8px",
        }}
      >
        <Grid container sx={{ padding: "2%" }}>
          <Grid item xs={6}>
            <Button
              sx={{
                width: "120px",
                textTransform: "none",
                backgroundColor: "primary.B008",
                color: "neutral.N650",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "neutral.N600",
                  color: "neutral.N650",
                },
              }}
              onClick={() => handleClose()}
            >
              {leftButtonTitle}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{ justifyContent: "right" }}>
              <Button
                disabled={isLoading || !disabledButton}
                sx={{
                  width: "128px",
                  textTransform: "none",
                  backgroundColor: "primary.B200",
                  color: "neutral.N000",
                  borderRadius: "8px",
                  "&.Mui-disabled": {
                    color: "neutral.N000",
                  },
                  "&:hover": {
                    backgroundColor: "primary.B100",
                    color: "neutral.N000",
                  },
                }}
                onClick={() => handleChange()}
              >
                {rightButtonTitle}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CommonModalFooter;
