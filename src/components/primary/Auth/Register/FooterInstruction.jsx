/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/Auth/Register/FooterInstruction.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Tuesday, August 15th 2023, 8:44:01 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const FooterInstruction = (props) => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography
          sx={{
            color: "#FFFFFF",
          }}
        >
          * Required Field{" "}
        </Typography>{" "}
      </Grid>
      <Grid item xs={4}>
        <Link
          onClick={() => props.navigate("/login")}
          underline="hover"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          Already User? Login
        </Link>
      </Grid>
    </Grid>
  );
};

export default FooterInstruction;
