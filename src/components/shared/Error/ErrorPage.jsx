/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/Error/ErrorPage.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, December 26th 2022, 11:12:57 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import {Box, Typography} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import error from "../../../assets/images/error.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          height: "70%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img width={"70%"} height={"85%"} src={error} alt="404 Error" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" style={{ color: "#728FCE" }}>
          We are sorry, Page Not found !
        </Typography>
        <br />
        <Typography
          sx={{ cursor: "pointer" }}
          variant="h5"
          style={{ color: "#728FCE" }}
          onClick={() => navigate("/")}
        >
          Go to the homepage
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
