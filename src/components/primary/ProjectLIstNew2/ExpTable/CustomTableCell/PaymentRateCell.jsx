/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/CustomTableCell/PaymentRateCell.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 6th 2023, 1:12:43 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Chip, Typography } from "@mui/material";
import React from "react";

const category1Style = {
  width: "100%",
  height: "23px",
  backgroundColor: "chip.900",
  borderRadius: "100px",
  color: "neutral.700",
};
const category2Style = {
  width: "100%",
  height: "23px",
  backgroundColor: "chip.600",
  borderRadius: "100px",
  color: "neutral.N300",
};
const category3Style = {
  width: "100%",
  height: "23px",
  background: "chip.700",
  borderRadius: "100px",
};
const category4Style = {
  width: "100%",
  height: "23px",
  backgroundColor: "chip.800",
  borderRadius: "100px",
  color: "neutral.N300",
};
const defaultStyle = {
  width: "100%",
  height: "23px",
  backgroundColor: "chip.500",
  borderRadius: "100px",
  color: "neutral.N300",
};

const PaymentRateCell = ({ data }) => {
  let style = {};

  switch (true) {
    case data >= 80 && data <= 100:
      style = category1Style;
      break;
    case data >= 70 && data <= 80:
      style = category2Style;
      break;
    case data >= 60 && data <= 70:
      style = category3Style;
      break;
    case data >= 50 && data <= 60:
      style = category4Style;
      break;
    default:
      style = defaultStyle;
      break;
  }

  return (
    <Chip
      sx={{ ...style, width: "45%" }}
      label={
        <Typography variant="wpf_p4_regular" color="neutral.700">
          {data}
        </Typography>
      }
    />
  );
};

export default PaymentRateCell;
